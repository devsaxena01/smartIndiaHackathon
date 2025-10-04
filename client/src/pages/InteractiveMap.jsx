import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { interactiveMapData } from "../apiCalls/interactivemap";

// 🔹 Loading animation variants
const loaderVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const InteractiveMap = () => {
  const { id } = useParams();
  const [monastery, setMonastery] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  useEffect(() => {
    const fetchMonastery = async () => {
      try {
        const data = await interactiveMapData(id);
        setMonastery(data?.data || data || null);
      } catch (err) {
        console.error("Error fetching monastery:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMonastery();
  }, [id]);

  // 🔹 Loading shimmer UI
  if (loading) {
      const loaderVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
          opacity: [0.4, 1, 0.4],
          y: [0, -10, 0],
          transition: {
            duration: 1.8,
            ease: "easeInOut",
            repeat: Infinity,
          },
        },
      };
  
      return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400"
          >
            Loading Monastery...
          </motion.h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                variants={loaderVariants}
                initial="initial"
                animate="animate"
                className="bg-gray-800 rounded-lg border border-gray-700/60 overflow-hidden"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="h-40 w-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] animate-[shimmer_1.8s_infinite]" />
                <div className="p-4 space-y-3">
                  <div className="h-5 bg-gray-700 rounded w-3/4 animate-pulse" />
                  <div className="h-4 bg-gray-700 rounded w-full animate-pulse" />
                  <div className="h-4 bg-gray-700 rounded w-2/3 animate-pulse" />
                  <div className="h-9 bg-gray-700 rounded mt-4 animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>
  
          <style>{`
            @keyframes shimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
          `}</style>
        </div>
      );
    }

  // 🔹 No data found
  if (!monastery)
    return (
      <p className="text-center text-5xl text-black py-10">
        Monastery not found!
      </p>
    );

  // 🔹 Main content
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
            {monastery?.panoramicImage ? (
              <iframe
                src={monastery.panoramicImage}
                width="100%"
                height="500"
                className="rounded-2xl"
                style={{ border: "none" }}
                allowFullScreen
                loading="lazy"
                title={monastery?.name || "Panoramic View"}
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
              src={monastery?.image?.[0] || "/images/buddha.jpeg"}
              alt={monastery?.name || "Monastery"}
              className="w-full h-52 object-cover rounded-xl shadow-md mb-5"
            />
            <h2 className="text-3xl font-extrabold text-orange-700 mb-3">
              {monastery?.name}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {monastery?.description}
            </p>
            <p className="text-gray-600 text-sm mb-5">
              📍 {monastery?.location} <br />
              🏛 Established: {monastery?.founded}
            </p>

            {monastery?.tags && (
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
