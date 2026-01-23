import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the Gemini AI client
// Using process.env.API_KEY as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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
If you don't know specific real-time data (like today's exact weather or specific news today), suggest checking the specific sections of the website.
Keep responses relatively short (under 150 words) unless asked for a detailed itinerary.
`;

export const sendMessageToGemini = async (message: string, history: { role: string, parts: { text: string }[] }[]): Promise<string> => {
  try {
    const chat = ai.chats.create({
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