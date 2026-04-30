import { useState } from "react";
import { Filter, MapPin, TrendingUp, Users, Info, BrainCircuit, ShieldCheck, Search, ChevronRight } from "lucide-react";
import Disclaimer from "../components/Disclaimer";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const SAMPLE_DEALS = [
  {
    id: "1",
    title: "Precision CNC Lathe - Nashik Unit",
    category: "Manufacturing",
    location: "Nashik, Maharashtra",
    risk: "low",
    aiScore: 88,
    returnRange: "14-18%",
    duration: "24 Months",
    minInvestment: "₹50,000",
    fundingGoal: 1200000,
    fundedAmount: 840000,
    investors: 12,
    image: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80&w=600",
    isSample: true
  },
  {
    id: "2",
    title: "Automated Packaging — Spices Unit",
    category: "Food Processing",
    location: "Nagpur, Maharashtra",
    risk: "medium",
    aiScore: 74,
    returnRange: "16-22%",
    duration: "30 Months",
    minInvestment: "₹1,00,000",
    fundingGoal: 800000,
    fundedAmount: 320000,
    investors: 5,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    isSample: true
  },
  {
    id: "3",
    title: "Digital Textile Printer",
    category: "Textile",
    location: "Surat, Gujarat",
    risk: "high",
    aiScore: 62,
    returnRange: "18-28%",
    duration: "18 Months",
    minInvestment: "₹50,000",
    fundingGoal: 1500000,
    fundedAmount: 1450000,
    investors: 28,
    image: "https://images.unsplash.com/photo-1620618221741-f818cce21d1b?auto=format&fit=crop&q=80&w=600",
    isSample: true
  }
];

export default function Deals() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Manufacturing", "Food Processing", "Textile", "Printing", "Medical"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h1 className="text-6xl md:text-7xl font-display font-black tracking-tight mb-4 bg-clip-text text-transparent bg-linear-to-r from-indigo-900 via-fuchsia-600 to-orange-500 animate-gradient-x">
            Protocol <span className="italic">Market</span>
          </h1>
          <p className="text-slate-500 max-w-lg font-bold uppercase tracking-widest text-[10px] bg-slate-100 inline-block px-4 py-1.5 rounded-lg border border-slate-200 mt-2">
            Vetted MSME Machine Assets • High-Yield Industrial Nodes
          </p>
        </div>
        <div className="flex bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search Assets..." 
              className="bg-transparent pl-12 pr-6 py-3 text-sm font-bold placeholder:text-slate-300 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-3 pb-4 mb-12 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap",
              activeCategory === cat 
                ? "bg-orange-600 text-white shadow-xl shadow-orange-500/20" 
                : "bg-white text-slate-400 hover:text-slate-900 border border-slate-100 shadow-sm hover:shadow-premium"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {SAMPLE_DEALS.map((deal) => (
          <Link 
            key={deal.id} 
            to={`/deals/${deal.id}`}
            className="group bg-white rounded-[40px] border border-slate-100 overflow-hidden hover:shadow-huge transition-all flex flex-col shadow-premium"
          >
            <div className="relative h-64 overflow-hidden p-3">
              <img 
                src={deal.image} 
                alt={deal.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-[32px]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent rounded-[32px] m-3"></div>
              {deal.isSample && (
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-[9px] font-black uppercase tracking-[0.2em] text-slate-900 shadow-lg">
                  DEMO NODE
                </div>
              )}
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                <span className="text-[10px] font-black text-white bg-orange-600 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg uppercase tracking-widest leading-none">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  VERIFIED
                </span>
                <span className={cn(
                  "text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg",
                  deal.risk === "low" ? "bg-white text-emerald-600" : 
                  deal.risk === "medium" ? "bg-white text-orange-600" : 
                  "bg-white text-red-600"
                )}>
                  {deal.risk} RISK
                </span>
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-2 text-slate-400 text-[10px] uppercase font-black tracking-[0.2em] mb-4">
                <MapPin className="w-3.5 h-3.5 text-orange-600" />
                {deal.location}
              </div>
              <h3 className="text-2xl font-display font-black mb-6 text-slate-900 leading-tight group-hover:text-orange-600 transition-colors uppercase tracking-tight">{deal.title}</h3>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100 group-hover:bg-orange-50/50 transition-colors">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Projected ROI</p>
                  <p className="text-2xl font-display font-black text-orange-600 italic tracking-tighter">{deal.returnRange}</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-3xl border border-slate-100">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Risk Score</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-display font-black text-slate-900">{deal.aiScore}</p>
                    <span className="text-[9px] font-black text-slate-300 uppercase">/100</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">DEPLOYMENT LEVEL</span>
                  <span className="text-sm font-black text-orange-600 italic">{Math.round((deal.fundedAmount / deal.fundingGoal) * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden p-0.5">
                  <div 
                    className="h-full bg-orange-600 rounded-full shadow-lg shadow-orange-500/20" 
                    style={{ width: `${(deal.fundedAmount / deal.fundingGoal) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span>₹{(deal.fundedAmount / 100000).toFixed(1)}L Raised</span>
                  <span>Target: ₹{(deal.fundingGoal / 100000).toFixed(1)}L</span>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Users className="w-4 h-4 text-orange-600" />
                    <span className="text-xs font-black text-slate-900 tracking-tighter">{deal.investors}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <TrendingUp className="w-4 h-4 text-orange-600" />
                    <span className="text-xs font-black text-slate-900 tracking-tighter uppercase">{deal.duration}</span>
                  </div>
                </div>
                <div className="text-orange-600 p-2 group-hover:translate-x-1 transition-transform">
                  <ChevronRight className="w-7 h-7" />
                </div>
              </div>
            </div>
            
            <div className="px-8 pb-6">
              <Disclaimer type="card" className="text-[9px] opacity-60 font-bold uppercase tracking-widest text-center" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-24 machinery-gradient rounded-[48px] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 shadow-huge perspective-1000 overflow-hidden relative group">
        <div className="absolute -bottom-20 -right-20 opacity-10 group-hover:scale-110 transition-transform duration-1000">
          <BrainCircuit className="w-96 h-96 text-white" />
        </div>
        <div className="max-w-xl relative z-10">
          <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-6 tracking-tighter leading-tight">Secure Early Protocol Access</h3>
          <p className="text-white/80 font-bold uppercase tracking-[0.3em] text-[10px] leading-relaxed border-l-4 border-white/20 pl-8">Pilot nodes are deployed exclusively to the verified waitlist. Secure your priority stake today.</p>
        </div>
        <button className="bg-white text-orange-600 px-10 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-slate-50 transition-all shadow-huge whitespace-nowrap relative z-10 active:scale-95">
          Join Security Queue
        </button>
      </div>
    </div>
  );
}
