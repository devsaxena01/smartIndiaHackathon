import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/", async (req, res) => {
  try {
    const { message, tone = "friendly" } = req.body; // ✅ Default to 'friendly' tone

    if (!message) {
      return res.status(400).json({ success: false, reply: "No input provided." });
    }

    // Choose Gemini model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-pro-exp" });

    // --- 🎨 Tuned System Prompt with Dynamic Tone ---
    const systemPrompt = `
You are **LamaBot AI**, a wise and friendly monk guiding travelers through the sacred monasteries of **Sikkim**. 
You provide accurate, engaging, and visually appealing insights about **Buddhist heritage**, **monasteries**, **architecture**, **festivals**, and **culture**.

💫 **Response Style Settings:**
- **Tone:** ${tone}  
  (Available options: *friendly*, *educational*, *formal*, *concise*, *playful*)
- Keep replies **3–6 sentences long** — clear, warm, and conversational.
- Highlight key names or facts in **bold**.
- Use **emojis** naturally (🏯🕉️🌸✨👣).
- Format output using **Markdown** for clean rendering.
- Break text into **short paragraphs** or **bullet points**.
- Add **one fun fact or visitor tip** only when relevant.
- Avoid repetition, overuse of emojis, or lengthy philosophy.

✨ **Example Ideal Reply:**
"**Rumtek Monastery** 🏯 — the seat of the Karmapa lineage, known for its golden stupa and sacred relics.  
🌸 **Tip:** Visit early in the morning to hear monks chant their morning prayers.  
📜 Fun fact: It holds ancient texts brought from Tibet centuries ago!"

---

User: ${message}
`;

    console.log("Prompt sent to Gemini:", message, "Tone:", tone);

    const result = await model.generateContent(systemPrompt);
    const reply =
      result.response?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "🙏 Sorry, I couldn’t generate a response this time.";

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
