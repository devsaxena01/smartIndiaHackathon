import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const InteractiveMap = () => {
  const { id } = useParams(); // get monastery ID from url
  const [monastery, setMonastery] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMonastery = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/v1/monasteries/${id}`);
        const data = await res.json();
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
    <div className="min-h-screen flex flex-col bg-amber-50">
      <main className="flex-grow container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          ← Back
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* 360 degree panoramic Section */}
          <div className="lg:w-2/3 bg-white rounded-xl shadow-md overflow-hidden h-full">
            {monastery.panoramicImage ? (
              <iframe
                src={monastery.panoramicImage}
                width="100%"
                height="500"
                style={{ border: "none" }}
                allowFullScreen
                loading="lazy"
                title={monastery.name}
              ></iframe>
            ) : (
              <p className="text-center p-20 text-gray-500">Panoramic view not available</p>
            )}
          </div>

          {/* monastry inforation */}
          <div className="lg:w-1/3 bg-white rounded-xl shadow-md overflow-hidden h-full p-6">
            <img
              src={monastery.image?.[0] || "./images/buddha.jpeg"}
              alt={monastery.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{monastery.name}</h2>
            <p className="text-gray-700 mb-2">{monastery.description}</p>
            <p className="text-gray-600 mb-2">
              📍 {monastery.location} | 🏛 Established: {monastery.founded}
            </p>
            {monastery.tags && (
              <div className="flex flex-wrap gap-2">
                {monastery.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
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