import React, { useState, useRef } from "react";
import { Loader2, Eye } from "lucide-react";

const SelectBudgetOptions = [
  { id: 1, title: "Low Budget", desc: "₹5,000 - ₹10,000", value: "low" },
  { id: 2, title: "Medium Budget", desc: "₹10,000 - ₹25,000", value: "medium" },
  { id: 3, title: "High Budget", desc: "₹25,000+", value: "high" },
];

const SelectTravelsList = [
  { id: 1, title: "Solo", desc: "Traveling alone", value: "solo" },
  { id: 2, title: "Couple", desc: "With a partner", value: "couple" },
  { id: 3, title: "Family", desc: "Family trip", value: "family" },
  { id: 4, title: "Friends", desc: "Group of friends", value: "friends" },
];

function Booking() {
  const [formData, setFormData] = useState({
    Name: "",
    Location: "",
    Days: "",
    Travellers: "",
    Budget: "",
  });

  const [loading, setLoading] = useState(false);
  const [generatedTrip, setGeneratedTrip] = useState("");
  const [tripReady, setTripReady] = useState(false);
  const tripRef = useRef(null);

  const OnGenerateTrip = async () => {
    const { Name, Location, Days, Travellers, Budget } = formData;

    if (!Location || !Days || Number(Days) <= 0) {
      alert("Please fill at least destination and number of days!");
      return;
    }

    setLoading(true);
    setTripReady(false);

    try {
      const res = await fetch("https://monastery.onrender.com/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Name, Location, Days, Travellers, Budget }),
      });

      const data = await res.json();
      setGeneratedTrip(data.tripPlan || "No plan generated.");
      setTripReady(true);
      tripRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (err) {
      console.error(err);
      alert("Failed to generate trip.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-500 mb-4">
            ✨ Plan Your Dream Trip
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Fill in the details and let our AI generate a perfect travel itinerary for you.
          </p>
        </div>

        {/* Form */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-10 shadow-2xl border border-gray-800/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-emerald-400 mb-2">Your Name</label>
              <input
                type="text"
                value={formData.Name}
                onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700 text-white placeholder-gray-500"
              />
            </div>

            {/* Destination */}
            <div>
              <label className="block text-sm font-semibold text-emerald-400 mb-2">Destination</label>
              <input
                type="text"
                value={formData.Location}
                onChange={(e) => setFormData({ ...formData, Location: e.target.value })}
                placeholder="Enter destination"
                className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700 text-white placeholder-gray-500"
              />
            </div>

            {/* Number of Days */}
            <div>
              <label className="block text-sm font-semibold text-emerald-400 mb-2">Number of Days</label>
              <input
                type="number"
                value={formData.Days}
                onChange={(e) => setFormData({ ...formData, Days: e.target.value })}
                placeholder="e.g., 5"
                className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700 text-white placeholder-gray-500"
              />
            </div>

            {/* Travellers */}
            <div>
              <label className="block text-sm font-semibold text-emerald-400 mb-2">Travellers</label>
              <select
                value={formData.Travellers}
                onChange={(e) => setFormData({ ...formData, Travellers: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700 text-white"
              >
                <option value="">Select</option>
                {SelectTravelsList.map((item) => (
                  <option key={item.id} value={item.value}>{item.title}</option>
                ))}
              </select>
            </div>

            {/* Budget */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-emerald-400 mb-2">Budget</label>
              <select
                value={formData.Budget}
                onChange={(e) => setFormData({ ...formData, Budget: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700 text-white"
              >
                <option value="">Select</option>
                {SelectBudgetOptions.map((item) => (
                  <option key={item.id} value={item.value}>{item.title}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex justify-center gap-6">
            <button
              onClick={OnGenerateTrip}
              disabled={loading}
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 flex items-center gap-2 shadow-lg transform hover:scale-105 transition-all"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Generate Trip"}
            </button>

            <button
              onClick={() => tripRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 flex items-center gap-2 shadow-lg transform hover:scale-105 transition-all"
            >
              <Eye className="w-5 h-5" />
              <span>Review Trip</span>
            </button>
          </div>
        </div>

        {/* Generated Trip */}
        {tripReady && generatedTrip && (
          <div ref={tripRef} className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gray-900/60 p-8 rounded-2xl border border-gray-700 shadow-lg">
              <h2 className="text-3xl font-bold text-emerald-400 mb-6">🌍 Your AI-Powered Trip</h2>
              <div className="prose prose-invert max-w-none text-gray-200 whitespace-pre-wrap leading-relaxed">
                {generatedTrip}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Booking;