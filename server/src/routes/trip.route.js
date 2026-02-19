import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const router = express.Router();

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


router.post("/", async (req, res) => {
  try {
    const { Name, Location, Days, Budget, Travellers } = req.body;
    console.log(Name, Location, Days, Budget, Travellers);

    if (!Location || !Days) {
      return res.status(400).json({ success: false, message: "Location and Days are required." });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const prompt = `
      Create a detailed travel itinerary for:
      Name: ${Name || "Guest"}
      Destination: ${Location}
      Duration: ${Days} days
      Budget: ${Budget || "Flexible"}
      Travellers: ${Travellers || "some"}

      Include day-wise plan, recommended activities, food options, and travel tips.
    `;

    const result = await model.generateContent(prompt);
    
    const text = result.response?.candidates?.[0]?.content?.parts?.[0]?.text || "No plan generated."; 

    res.json({ success: true, tripPlan: text });
  } catch (error) {
    console.error("Trip Generation Failed:", error); 
    res.status(500).json({ success: false, message: "Error generating trip" });
  }
});

export default router;