import React from "react";
import { Link } from "react-router-dom";

const tours = [
  {
    title: "Rumtek Monastery Panorama Monastery",
    desc: "Step into the heart of Sikkim’s largest monastery with a breathtaking 360° view of its main...",
    img: "./images/buddha.jpeg",
  },
  {
    title: "Pemayangtse Monastery Exploration",
    desc: "Discover the oldest monastery of Sikkim, exploring its exquisite murals, statues, and tranquil...",
    img: "./images/buddha.jpeg",
  },
  {
    title: "Tashiding Monastery Sacred Views",
    desc: "Experience the sacred ambience of Tashiding, revered as the Central Raised Sanctuary...",
    img: "./images/buddha.jpeg",
  },
  {
    title: "Enchey Monastery Inner Sanctum",
    desc: "A digital walkthrough of the Enchey Monastery, showcasing its unique architecture and spiritual art...",
    img: "./images/buddha.jpeg",
  },
  {
    title: "Phodong Monastery Heritage",
    desc: "Explore the historical significance and artistic detail of Phodong, one of Sikkim’s major monasteries...",
    img: "./images/buddha.jpeg",
  },
  {
    title: "Janglum Monastery Grandeur",
    desc: "Immerse yourself in the serene beauty and modern grandeur of Janglum (Kabi) Monastery...",
    img: "./images/buddha.jpeg",
  },
  {
    title: "Dubdi Monastery Ancient Roots",
    desc: "Journey to Dubdi, Sikkim’s first monastery, and experience its ancient roots and pristine natural setting...",
    img: "./images/buddha.jpeg",
  },
  {
    title: "Rinchenpong Monastery Sunset",
    desc: "Witness the tranquil beauty of Rinchenpong Monastery, known for its scenic views and historical narratives...",
    img: "./images/buddha.jpeg",
  },
];

const VirtualTour = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2016/11/Tawang-Monastery-Sikkim.jpg"
          alt="Rumtek Monastery"
          className="w-full h-[670px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-10">
          <h2 className="text-3xl font-bold mb-3">Virtual Tour: Rumtek Monastery</h2>
          <p className="max-w-2xl text-gray-300">
            Embark on a spiritual journey through the sacred halls of Rumtek Monastery, the largest monastery in Sikkim
            and a vibrant centre of the Kagyu lineage. Explore intricate murals, ancient relics, and the serene ambiance
            of this revered Buddhist site.
          </p>
        </div>
      </section>

      {/* Featured Virtual Tours */}
      <section className="py-12 px-6">
        <h3 className="text-2xl font-semibold text-center mb-10">Featured Virtual Tours</h3>
        <input type=""></input>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {tours.map((tour, index) => (
            <div key={index} className="bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <img src={tour.img} alt={tour.title} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-2">{tour.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{tour.desc}</p>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded">
                  <Link to="/interactive-map">Explore Tour</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-[#3b1d17] py-12 px-6">
        <h3 className="text-2xl font-semibold text-center mb-10">Why Choose Our Virtual Tours?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
          <div className="bg-[#4a261f] p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">🌍 Multi-language Support</h4>
            <p className="text-gray-300 text-sm">
              Enjoy narrated walkthroughs and descriptions in multiple languages, making our heritage accessible to all.
            </p>
          </div>
          <div className="bg-[#4a261f] p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">🌀 Immersive 360° Views</h4>
            <p className="text-gray-300 text-sm">
              Step inside magnificent monasteries and explore every detail with high-resolution panoramic imaging.
            </p>
          </div>
          <div className="bg-[#4a261f] p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">📖 Historical Narratives</h4>
            <p className="text-gray-300 text-sm">
              Learn about the rich history, spiritual significance, and intricate art forms of each sacred site.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualTour;
