import React, { useState, useRef, useEffect } from "react";
import { Send, Mountain, Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom"; 

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "🙏 Tashi Delek! Welcome to the Sikkim Monasteries Heritage Portal. Ask me anything about the sacred monasteries of Sikkim.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentMonastery, setCurrentMonastery] = useState(null);
  const chatEndRef = useRef(null);

  //Auto scroll to bottom when messages update
  // useEffect(() => {
  //   chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  // Handle sending message
  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setIsTyping(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: input }] }],
          }),
        }
      );

      const data = await res.json();
      const botReply =
        data.candidates?.[0]?.content.parts?.[0]?.text ||
        "🙏 Sorry, I couldn't fetch an answer right now.";

      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
        setIsTyping(false);
      }, 800);

      setCurrentMonastery(null);
    } catch (err) {
      console.error("Error:", err);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "🙏 Something went wrong connecting to Gemini. Please try again.",
          },
        ]);
        setIsTyping(false);
      }, 800);
      setCurrentMonastery(null);
    }

    setInput("");
  };

  return (
    <div className="min-h-screen h-[700px] bg-gradient-to-b from-gray-900 via-slate-800 to-slate-900 relative overflow-hidden">

      <div className="relative z-10 border-b border-amber-800/30 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-amber-300 hover:text-amber-200 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>

          {/* title line */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-amber-100 tracking-wide">
              LamaBot AI
            </h1>
            <div className="flex items-center justify-center mt-2 space-x-2">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        <span className="text-green-400 text-sm font-light">Online</span>
      </div>
            {/* <p className="text-amber-300/80 text-sm font-light tracking-widest">
              SIKKIM MONASTERIES HERITAGE PORTAL
            </p> */}
          </div>

          <Mountain className="w-8 h-8 text-amber-400" />
        </div>
      </div>

      <div className="relative z-10 mx-auto h-[calc(100vh-120px)] flex gap-6 p-8">
        <div className="flex-1 flex flex-col bg-gray-900 rounded-xl backdrop-blur-sm border border-amber-800/20">
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs md:max-w-md lg:max-w-lg px-6 py-4 rounded-2xl shadow-lg ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-amber-600 to-amber-700 text-amber-50 rounded-br-md"
                      : "bg-gradient-to-r from-slate-700 to-slate-600 text-slate-100 rounded-bl-md border border-amber-800/20"
                  }`}
                >
                  <p className="text-sm md:text-base leading-relaxed font-light">
                    {msg.text}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-100 px-6 py-4 rounded-2xl rounded-bl-md border border-amber-800/20 shadow-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          <div className="px-6 pb-6">
            <div className="bg-slate-800/80 backdrop-blur-sm border border-amber-800/30 rounded-2xl p-4 shadow-2xl">
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Ask about monasteries, history, or Buddhist heritage..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1 bg-transparent text-amber-100 placeholder-amber-300/50 outline-none text-base font-light"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:shadow-none"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>

            <p className="text-center text-amber-300/40 text-xs mt-3 font-light tracking-wide">
              Preserving the Sacred Heritage of Sikkim's Monasteries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
