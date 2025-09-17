import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AncientMonasteries = () => {
  const [selectedMonastery, setSelectedMonastery] = useState(null);
  const navigate = useNavigate();

  const monasteries = [
    {
      title: "Rumtek Monastery",
      subtitle: "The Golden Dharmachakra",
      img: "https://i.pinimg.com/736x/78/01/56/780156f050379440976c36844f4bf831.jpg",
      desc: "The largest monastery in Sikkim and the seat of the 17th Karmapa. Experience the mesmerizing chants of monks and witness ancient Tibetan Buddhist rituals in this architectural marvel.",
      founded: "1966",
      altitude: "5,800 ft",
      highlight: "Home to sacred Buddhist relics",
      coordinates: { lat: 27.3389, lng: 88.5593 },
    },
    {
      title: "Pemayangtse Monastery",
      subtitle: "The Perfect Sublime Lotus",
      img: "https://i.pinimg.com/736x/0d/1b/57/0d1b57388ff1d565caaa7d262e42b068.jpg",
      desc: "One of the oldest and most important monasteries of Sikkim, offering breathtaking views of the Kangchenjunga range. Marvel at the intricate wood carvings and ancient murals.",
      founded: "1705",
      altitude: "6,840 ft",
      highlight: "Spectacular Himalayan views",
      coordinates: { lat: 27.212, lng: 88.209 },
    },
    {
      title: "Enchey Monastery",
      subtitle: "The Solitary Temple",
      img: "https://i.pinimg.com/1200x/81/4b/24/814b2475bf6d6a3c3729d8d1ed194e4f.jpg",
      desc: "Perched majestically above Gangtok, famous for its vibrant Cham dances. The monastery comes alive during festivals with masked monks performing ancient spiritual dances.",
      founded: "1909",
      altitude: "6,200 ft",
      highlight: "Famous for Cham dance festivals",
      coordinates: { lat: 27.3314, lng: 88.6138 },
    },
    {
      title: "Tashiding Monastery",
      subtitle: "The Devoted Central Glory",
      img: "https://i.pinimg.com/1200x/45/ce/93/45ce93691aafd5ae247111e7827cba75.jpg",
      desc: "Considered the most sacred monastery in Sikkim, built on a heart-shaped hill. Pilgrims believe that a glimpse of this monastery cleanses all sins.",
      founded: "1641",
      altitude: "4,600 ft",
      highlight: "Most sacred site in Sikkim",
      coordinates: { lat: 27.1833, lng: 88.2833 },
    },
    {
      title: "Ralong Monastery",
      subtitle: "The Sacred Valley Temple",
      img: "https://i.pinimg.com/1200x/6b/fe/ad/6bfeada15983e4f29c0d024af912716f.jpg",
      desc: "Known for its rich collection of thangkas and ancient manuscripts. The monastery's architecture reflects perfect harmony with the surrounding landscape.",
      founded: "1768",
      altitude: "5,500 ft",
      highlight: "Ancient manuscript collection",
      coordinates: { lat: 27.2442, lng: 88.3167 },
    },
    {
      title: "Phodong Monastery",
      subtitle: "The Hilltop Sanctuary",
      img: "https://i.pinimg.com/736x/03/9c/48/039c48aa47d613ba826b2ec98bd889b6.jpg",
      desc: "Famous for its annual Chaam festival where monks perform elaborate masked dances depicting Buddhist legends and teachings.",
      founded: "1740",
      altitude: "4,500 ft",
      highlight: "Annual Chaam festival",
      coordinates: { lat: 27.4167, lng: 88.6167 },
    },
  ];

  return (
    <>
      <section
        id="monasteries"
        className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Ancient Sanctuaries
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Each monastery tells a unique story of devotion, artistry, and
            spiritual enlightenment, nestled in the breathtaking landscapes of
            the Himalayas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {monasteries.map((monastery, i) => (
            <div
              key={i}
              className="group cursor-pointer "
              onClick={() => setSelectedMonastery(monastery)}>
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 hover-zoom">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={monastery.img}
                    alt={monastery.title}
                    className="w-full h-full object-cover transition-transform duration-700"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    Est. {monastery.founded}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {monastery.title}
                    </h3>
                    <p className="text-emerald-300 text-sm font-medium">
                      {monastery.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {monastery.desc}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span className="flex items-center">
                      <span className="mr-2">🏔️</span>
                      {monastery.altitude}
                    </span>
                    <span className="flex items-center">
                      <span className="mr-2">⭐</span>
                      <span className="truncate">{monastery.highlight}</span>
                    </span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover-scale">
                    Explore Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedMonastery && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 "
          onClick={() => setSelectedMonastery(null)} >
          <div
            className="bg-gray-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto "
            onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedMonastery.img}
                alt={selectedMonastery.title}
                className="w-full h-64 object-cover rounded-t-3xl"/>
              <button
                onClick={() => setSelectedMonastery(null)}
                className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors" >
                ✕
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-2 text-white">
                {selectedMonastery.title}
              </h3>
              <p className="text-emerald-300 mb-4 font-medium">
                {selectedMonastery.subtitle}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedMonastery.desc}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700/50 p-4 rounded-xl">
                  <span className="text-gray-400 text-sm">Founded</span>
                  <p className="text-white font-bold">
                    {selectedMonastery.founded}
                  </p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-xl">
                  <span className="text-gray-400 text-sm">Altitude</span>
                  <p className="text-white font-bold">
                    {selectedMonastery.altitude}
                  </p>
                </div>
              </div>

              <button 
              onClick={() => navigate("/booking")}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 py-4 rounded-xl font-medium text-lg hover-scale">
                Book Visit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AncientMonasteries;
