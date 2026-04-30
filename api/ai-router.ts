import { Router } from "express";
import { callGroq } from "./lib/ai";

const router = Router();

router.post("/chat", async (req, res) => {
  const { message, history } = req.body;
  const systemPrompt = `You are "Artha AI", a premium, friendly, and highly professional wealth management assistant for Artha, India's leading industrial machine financing platform.

  Your Personality:
  - You are helpful, polite, and respond to common greetings (like "hello", "hi", "how are you") naturally.
  - If a user says "how are you", say you are functioning perfectly and ready to help them explore machinery investments.
  - Maintain a tone like a private bank relationship manager.

  Your Knowledge:
  - Artha turns high-cost industrial machinery into passive income for investors.
  - We are currently in a "Pilot Phase," so all verifications are thorough and manual for safety.
  - If asked for contact details, say: "You can reach our helpdesk at +91 1800-ARTHA-FIN or email support@artha.ai."
  - Explain that investors fund the machines, and businesses use them to generate revenue, which is shared back.
  
  Safety & Limits:
  - NEVER promise or guarantee a specific profit.
  - ALWAYS clarify that ROI depends on business output and involves capital risk.
  - Keep responses under 100 words.`;

  try {
    const response = await callGroq(systemPrompt, `History: ${JSON.stringify(history)}\nUser: ${message}`);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: "AI failed" });
  }
});

router.post("/analyze-roi", async (req, res) => {
  const data = req.body;
  const prompt = `Analyze this machine investment: ${JSON.stringify(data)}. 
  Provide: 1) Risk assessment 2) Realism in India 3) Key questions. Max 150 words.`;
  
  try {
    const analysis = await callGroq("You are a conservative financial analyst.", prompt);
    res.json({ analysis });
  } catch (error) {
    res.status(500).json({ error: "Analysis failed" });
  }
});

export const aiRouter = router;
