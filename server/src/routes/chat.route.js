import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();

// Use your server-side Gemini API key (never expose in frontend)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // Backend env var

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ success: false, reply: "No input provided." });
    }

    // Choose the Gemini model
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // System prompt to guide responses
    const systemPrompt = `
You are LamaBot AI, a knowledgeable monk guiding visitors about the monasteries of Sikkim.
Answer in a warm, spiritual, yet informative tone. 
- Use bold for important monastery names or key facts.
- Break answers into short paragraphs or bullet points for readability.
- Keep answers clear, concise, and welcoming.
`;

    const prompt = `${systemPrompt}\nUser: ${message}`;
    console.log("Prompt sent to Gemini:", prompt);

    // Call Gemini API
    const result = await model.generateContent(prompt);
    console.log("Gemini result:", result);

    const reply = result.response?.candidates?.[0]?.content?.parts?.[0]?.text || "🙏 Sorry, I couldn’t generate an answer.";

    res.json({ success: true, reply });

  } catch (err) {
    console.error("Gemini API call failed:", err);
    res.status(500).json({
      success: false,
      reply: "🙏 Something went wrong while fetching the response.",
    });
  }
});

export default router;