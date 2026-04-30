import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Mic, Volume2, BrainCircuit, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export default function YantraChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Namaste! I am Artha AI. How can I help you invest today?", sender: "ai", timestamp: new Date() }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState("en-IN");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (text: string = inputText) => {
    if (!text.trim()) return;

    const currentMessages = messages;
    const userMsg: Message = { id: Date.now().toString(), text, sender: "user", timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: text, 
          history: currentMessages.slice(-10).map(m => ({ role: m.sender === "user" ? "user" : "assistant", content: m.text }))
        })
      });
      
      if (!response.ok) throw new Error("Server responded with error");
      
      const data = await response.json();
      
      const aiMsg: Message = { id: (Date.now() + 1).toString(), text: data.response, sender: "ai", timestamp: new Date() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMsg: Message = { id: (Date.now() + 1).toString(), text: "I'm having trouble connecting to my brain. Please check your internet or try again later.", sender: "ai", timestamp: new Date() };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const startVoiceInput = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice input not supported in your browser.");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = language;
    recognition.onresult = (e: any) => {
      const transcript = e.results[0][0].transcript;
      setInputText(transcript);
      handleSend(transcript);
    };
    recognition.start();
  };

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const suggestedQuestions = [
    "How does it work?",
    "Min investment?",
    "Is it safe?",
    "निवेश कैसे करें?"
  ];

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-18 h-18 bg-orange-600 text-white rounded-[24px] shadow-huge flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group border border-white/20"
      >
        <div className="absolute inset-0 bg-orange-400/20 rounded-[24px] animate-ping group-hover:scale-150 opacity-0 group-hover:opacity-100 duration-500"></div>
        <MessageCircle className="w-10 h-10 group-hover:rotate-12 transition-transform relative z-10" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50, rotateX: 10 }}
            className="fixed bottom-8 right-8 w-[95vw] md:w-[450px] h-[720px] bg-white rounded-[48px] z-50 flex flex-col overflow-hidden shadow-huge perspective-1000 border border-slate-200"
          >
            {/* Header */}
            <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-orange-500/30">
                  <BrainCircuit className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-display font-black text-slate-900 text-xl tracking-tight">Artha AI</h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-orange-600 font-bold uppercase tracking-[0.3em]">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                    Neural Expert
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:bg-orange-50 transition-all shadow-sm"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 bg-white/50 no-scrollbar">
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex flex-col", msg.sender === "user" ? "items-end" : "items-start")}>
                  <div className={cn(
                    "max-w-[85%] p-6 rounded-[32px] text-sm font-semibold leading-relaxed relative shadow-sm",
                    msg.sender === "user" 
                      ? "bg-orange-600 text-white rounded-tr-sm" 
                      : "bg-slate-50 text-slate-700 rounded-tl-sm border border-slate-100 shadow-premium"
                  )}>
                    {msg.text}
                    {msg.sender === "ai" && (
                      <button 
                        onClick={() => speak(msg.text)}
                        className="absolute -right-10 bottom-0 p-2 text-slate-400 hover:text-orange-600 transition-colors"
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-3 font-bold px-2 uppercase tracking-widest">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2.5 p-5 bg-slate-50 rounded-full w-fit border border-slate-100 shadow-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
            </div>

            {/* Suggested */}
            {messages.length < 3 && (
              <div className="px-8 py-3 flex flex-wrap gap-3 bg-white">
                {suggestedQuestions.map((q) => (
                  <button 
                    key={q}
                    onClick={() => handleSend(q)}
                    className="text-[10px] font-bold text-slate-500 bg-slate-50 px-4 py-2.5 rounded-full border border-slate-100 hover:border-orange-500 hover:text-orange-600 transition-all hover:shadow-premium"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-8 bg-white border-t border-slate-100">
              <div className="flex items-center gap-4">
                <div className="flex-1 relative">
                  <input 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type your message..."
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-sm font-bold text-slate-900 focus:outline-none focus:ring-4 focus:ring-orange-500/5 focus:border-orange-500 transition-all"
                  />
                  <button 
                    onClick={startVoiceInput}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-orange-600"
                  >
                    <Mic className="w-6 h-6" />
                  </button>
                </div>
                <button 
                  onClick={() => handleSend()}
                  className="w-16 h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center hover:bg-orange-700 transition-all flex-shrink-0 shadow-xl shadow-orange-500/30 active:scale-95"
                >
                  <Send className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
