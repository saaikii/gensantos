import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Lazy initialization of the Gemini AI client
// Using process.env.API_KEY as per guidelines
let ai: GoogleGenAI | null = null;

const getAI = (): GoogleGenAI | null => {
  if (ai) return ai;
  const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

const SYSTEM_INSTRUCTION = `
You are the "GenSan Virtual Assistant", a helpful AI guide for the official website of General Santos City, Philippines.
Your goal is to assist citizens, tourists, and business owners with information about the city.

Key Facts about General Santos City to use in your answers:
- Known as the "Tuna Capital of the Philippines".
- Host of the annual "Tuna Festival" in September and "Kalilangan Festival" in February.
- A highly urbanized city in the Soccsksargen region.
- Offers e-services for Business Permit Licensing, Real Property Tax, and Birth Certificates.
- Major industries: Fishing, Agriculture, Manufacturing.

Tone: Professional, warm, welcoming, and concise.
IMPORTANT: Use emojis to make the conversation lively and friendly! 🌟
If you don't know specific real-time data (like today's exact weather or specific news today), suggest checking the specific sections of the website.
Keep responses relatively short (under 150 words) unless asked for a detailed itinerary.

IMPORTANT: Do NOT use markdown formatting (no asterisks, bold, italics, or headers). Use simple text formatting with newlines and standard numbering or dashes for lists.
`;

export const sendMessageToGemini = async (message: string, history: { role: string, parts: { text: string }[] }[]): Promise<string> => {
  const aiClient = getAI();
  
  if (!aiClient) {
    return "The AI assistant is currently unavailable. Please check back later or contact the city office for assistance.";
  }
  
  try {
    const chat = aiClient.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: message
    });

    return result.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing connection issues. Please try again later.";
  }
};
