import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { interactiveMapData } from "../apiCalls/interactivemap";

const InteractiveMap = () => {
  const { id } = useParams();
  const [monastery, setMonastery] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMonastery = async () => {
      try {
        const data = await interactiveMapData(id);
        setMonastery(data.data || null);
      } catch (err) {
        console.error("Error fetching monastery:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMonastery();
  }, [id]);

  if (loading) return <p className="text-center text-black">Loading monastery...</p>;
  if (!monastery) return <p className="text-center text-black">Monastery not found!</p>;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100">
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 px-5 py-2 rounded-full 
                     bg-white/70 backdrop-blur-md shadow-md 
                     hover:bg-orange-500 hover:text-white transition duration-300"
        >
          <ArrowLeft size={18} /> Back
        </button>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Panoramic Section */}
          <div className="lg:w-2/3 bg-white/80 rounded-2xl shadow-xl overflow-hidden relative">
            {monastery.panoramicImage ? (
              <iframe
                src={monastery.panoramicImage}
                width="100%"
                height="500"
                className="rounded-2xl"
                style={{ border: "none" }}
                allowFullScreen
                loading="lazy"
                title={monastery.name}
              ></iframe>
            ) : (
              <div className="flex items-center justify-center h-[500px] text-gray-500 italic">
                Panoramic view not available
              </div>
            )}
          </div>

          {/* Monastery Info */}
          <div className="lg:w-1/3 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col">
            <img
              src={monastery.image?.[0] || "./images/buddha.jpeg"}
              alt={monastery.name}
              className="w-full h-52 object-cover rounded-xl shadow-md mb-5"
            />
            <h2 className="text-3xl font-extrabold text-orange-700 mb-3">
              {monastery.name}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">{monastery.description}</p>
            <p className="text-gray-600 text-sm mb-5">
              📍 {monastery.location} <br />
              🏛 Established: {monastery.founded}
            </p>

            {monastery.tags && (
              <div className="flex flex-wrap gap-2 mt-auto">
                {monastery.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium 
                               bg-gradient-to-r from-orange-200 to-amber-300 
                               text-orange-900 shadow-sm hover:scale-105 
                               transition-transform duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default InteractiveMap;
