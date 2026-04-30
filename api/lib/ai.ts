import Groq from "groq-sdk";
import { GoogleGenerativeAI } from "@google/generative-ai";

let groqClient: Groq | null = null;
function getGroq() {
  if (!groqClient) {
    groqClient = new Groq({
      apiKey: process.env.GROQ_API_KEY || ""
    });
  }
  return groqClient;
}

let geminiClient: GoogleGenerativeAI | null = null;
function getGemini() {
  if (!geminiClient) {
    geminiClient = new GoogleGenerativeAI(
      process.env.GEMINI_API_KEY || ""
    );
  }
  return geminiClient;
}

export async function callGroq(
  systemPrompt: string, 
  userMessage: string,
  maxTokens: number = 500
): Promise<string> {
  try {
    const groq = getGroq();
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage }
      ],
      max_tokens: maxTokens,
      temperature: 0.7,
    });
    return completion.choices[0].message.content || "";
  } catch (error) {
    console.error("Groq failed, falling back to Gemini:", error);
    return callGemini(systemPrompt, userMessage);
  }
}

export async function callGemini(
  systemPrompt: string,
  userMessage: string
): Promise<string> {
  try {
    const gemini = getGemini();
    const model = gemini.getGenerativeModel({
      model: "gemini-1.5-flash"
    });
    const prompt = systemPrompt + "\n\nUser question: " + userMessage;
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Gemini failed:", error);
    return "AI analysis temporarily unavailable. Our team reviews all deals manually. Contact support for help.";
  }
}

export async function analyzeDealWithAI(deal: any): Promise<any> {
  const prompt = `Analyze this Indian MSME machine investment deal:
Machine: ${deal.machineId}
Location: ${deal.location}
Machine Cost: ₹${deal.machineCost}
Monthly Revenue (projected): ₹${deal.monthlyRevenue}
Monthly Expenses: ₹${deal.monthlyExpenses}
Net Profit: ₹${deal.monthlyNetProfit}

Respond in this exact JSON format:
{
  "riskScore": <number 0-100, lower is safer>,
  "recommendation": "<strong_buy|buy|hold|avoid>",
  "summary": "<2 sentences about deal quality>",
  "strengths": ["<point1>", "<point2>", "<point3>"],
  "risks": ["<risk1>", "<risk2>", "<risk3>"],
  "hindiSummary": "<1 sentence in Hindi>"
}
Only return JSON. No other text.`;

  const systemPrompt = `You are a senior financial analyst specializing in Indian SME equipment financing. Be realistic and conservative. Never overestimate returns.`;

  try {
    const response = await callGroq(systemPrompt, prompt);
    const cleaned = response.replace(/```json/g, "").replace(/```/g, "").trim();
    return JSON.parse(cleaned);
  } catch {
    return {
      riskScore: 50,
      recommendation: "hold",
      summary: "Manual review required",
      strengths: [],
      risks: [],
      hindiSummary: "मैनुअल समीक्षा की आवश्यकता है"
    };
  }
}
