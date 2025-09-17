import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VirtualTour = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/v1/monasteries");
        const data = await res.json();
        setTours(data.data || []);
      } catch (err) {
        console.error("Error fetching monasteries:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) return <p className="text-center text-white">Loading tours...</p>;

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative">
        <img
          src="https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2016/11/Tawang-Monastery-Sikkim.jpg"
          alt="Rumtek Monastery"
          className="w-full h-[470px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-10">
          <h2 className="text-3xl font-bold mb-3">Virtual Tour</h2>
          <p className="max-w-2xl text-gray-300">
            Explore sacred monasteries of Sikkim through immersive virtual tours and panoramic views.
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <h3 className="text-2xl font-semibold text-center mb-10">Featured Virtual Tours</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {tours.map((tour) => (
            <div key={tour._id} className="bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <img
                src={tour.image?.[0] || "./images/buddha.jpeg"}
                alt={tour.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-2">{tour.name}</h4>
                <p className="text-gray-400 text-sm mb-4">
                  {tour.description?.slice(0, 100)}...
                </p>

                {tour.panoramicImage ? (
                  <button
                    onClick={() => navigate(`/interactive-map/${tour._id}`)}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded"
                  >
                    Explore 360° Tour
                  </button>
                ) : (
                  <p className="text-gray-500 text-sm">360° Tour Not Available</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VirtualTour;