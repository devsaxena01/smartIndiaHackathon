import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"
import { GiMeditation, GiPrayer, GiMountainCave, GiBookAura } from "react-icons/gi";
import { MdFestival } from "react-icons/md";
import { BsSunrise } from "react-icons/bs";
import { Star, Mountain, BookOpen, Theater, User } from "lucide-react";
import AncientMonasteries from "../components/AncientMonasteries";
import Testimonials from "../components/Testimonials";
import { Link, useNavigate } from "react-router-dom";
import guide from "../../docs/Sikkim_pocket_guide.pdf"

const Home = () =>  {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white overflow-hidden">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        
        @keyframes scroll {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(16px); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1.2s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }
        
        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }
        
        .animate-scroll {
          animation: scroll 2s infinite;
        }
        
        .hover-scale {
          transition: transform 0.3s ease;
        }
        
        .hover-scale:hover {
          transform: translateY(-10px);
        }
        
        .hover-zoom:hover img {
          transform: scale(1.1);
        }
        
        .hover-glow:hover {
          box-shadow: 0 20px 40px rgba(16, 185, 129, 0.3);
        }
      `}</style>

     <section className="relative h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 z-0">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
      poster="https://picsum.photos/1920/1080?random=7"
      onError={(e) => {
        //image if video fails
        e.target.style.display = "none";
        e.target.nextElementSibling.style.display = "block";
      }}>
      <source src="/videos/monastery_f_f.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Fallback image */}
    <img
      src="https://picsum.photos/1920/1080?random=7"
      alt="Monastery landscape"
      className="w-full h-full object-cover"
      style={{ display: "none" }}
    />

    {/* black effect on the front page */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70"></div>
  </div>

  <div className="relative z-10 text-center max-w-5xl px-6">
  {/* Title */}
  <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="text-5xl md:text-8xl font-bold mb-6 
    bg-gradient-to-r from-white/60 via-green-200/50 to-sky-200/60 
    bg-clip-text text-transparent backdrop-blur-[1px] drop-shadow-md">
  Sacred Monasteries
</motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.4 }}
    className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed"
  >
    Discover the mystical world of Sikkim's ancient monasteries, where
    centuries of Buddhist wisdom echo through mountain valleys
  </motion.p>

  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" >
    <button
     onClick={() => navigate("/virtual-tours")}
      className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 
        px-8 py-4 rounded-full text-lg font-medium text-white 
        shadow-lg hover:shadow-emerald-500/40 transition">
      Begin Your Journey
    </button>
    <button
      className="border-2 border-white/70 px-8 py-4 rounded-full 
        text-lg font-medium text-white backdrop-blur-sm 
        hover:bg-white/10 transition shadow-md">
       <a href="#serenity">Watch Stories</a>
    </button>
  </div>
</div>

  {/* scroll indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce-slow">
    <div className="flex flex-col items-center">
      <span className="text-sm mb-2">Scroll to explore</span>
      <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
        <div className="w-1 h-3 bg-white/60 rounded-full mx-auto animate-scroll" />
      </div>
    </div>
  </div>
</section>

      {/* Monasteries Grid */}
      <AncientMonasteries />

      {/* interactive map section */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sacred Geography
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore the mystical landscape where ancient monasteries dot the Himalayan peaks
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-3xl border border-gray-700/50">
              <div className="aspect-square bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl relative overflow-hidden">
                <iframe
    title="Sikkim Monasteries Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456280.37284637256!2d88.20!3d27.50!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a598d58c21f7%3A0x4e7632a4f81e9f59!2sRumtek%20Monastery!5e0!3m2!1sen!2sin!4v1694958000000!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50">
                <h4 className="text-xl font-bold mb-3 text-white flex items-center">
                  🌄 <span className="ml-2">Altitude Range</span>
                </h4>
                <p className="text-gray-300">From 4,500ft to 6,840ft above sea level</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50">
                <h4 className="text-xl font-bold mb-3 text-white flex items-center">
                  🗓️ <span className="ml-2">Best Visiting Seasons</span>
                </h4>
                <p className="text-gray-300">March-May (Spring) and September-November (Autumn)</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50">
                <h4 className="text-xl font-bold mb-3 text-white flex items-center">
                  ⛩️ <span className="ml-2">Historical Span</span>
                </h4>
                <p className="text-gray-300">Monasteries dating from 1641 to 1966</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50">
                <h4 className="text-xl font-bold mb-3 text-white flex items-center">
                  🚗 <span className="ml-2">Access</span>
                </h4>
                <p className="text-gray-300">Most monasteries accessible by road with short walks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <Testimonials/> */}

      {/* Photography Gallery */}
      <section id="serenity" className="py-24 px-6 md:px-12 bg-gradient-to-br from-gray-900 to-black">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
        Moments of Serenity
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        Captured glimpses of divine beauty and spiritual moments from our monastery journeys
      </p>
    </div>

    {/* Gallery */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        "https://i.pinimg.com/1200x/fe/19/ff/fe19ff123bd6f1353040528acc52c855.jpg",
        "https://i.pinimg.com/736x/e1/fb/4b/e1fb4bafcd576d36b60a86faca1e1f9e.jpg",
        "https://i.pinimg.com/736x/ec/d7/7f/ecd77f194d164d92089bdd3e88b67126.jpg",
        "https://i.pinimg.com/1200x/d5/86/40/d58640df5861499b3886afd7b8c2a270.jpg",
        "https://i.pinimg.com/736x/55/7e/bf/557ebf00557809f8628e507b82551f6e.jpg",
        "https://i.pinimg.com/736x/24/e9/52/24e952efe21397d25c3d0c5e15981560.jpg",
        "https://i.pinimg.com/1200x/96/59/70/965970aef3ab4b83e0f1fbcb5a9a0890.jpg",
        "https://i.pinimg.com/1200x/c6/85/db/c685dbeb54c53b2b3f78584a6fa0f561.jpg",
        "https://i.pinimg.com/1200x/5b/5f/d3/5b5fd381a50179a1b535a3f0a2d062f8.jpg",
        "https://i.pinimg.com/736x/d7/a7/e8/d7a7e83f662ba9f42dd508a4afc56fe1.jpg",
        "https://i.pinimg.com/736x/18/38/68/183868894d341a5abb6ad96e6c290af0.jpg",
        "https://i.pinimg.com/1200x/e9/fd/22/e9fd22df63069791829a089ec4171b7e.jpg",
      ].map((src, i) => (
        <div
          key={i}
          className="relative overflow-hidden rounded-2xl hover-scale group cursor-pointer">
          <img
            src={src}
            alt={`Gallery ${i + 1}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-medium">Sacred Moment #{i + 1}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      
<section className="py-24 px-6 md:px-12 bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 backdrop-blur-lg">
  <div className="max-w-4xl mx-auto text-center">
    <div className="bg-gray-900/60 backdrop-blur-xl rounded-3xl p-10 border border-gray-700/40 shadow-2xl">
      <h2 className="text-4xl md:text-6xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100">
        Begin Your Sacred Journey
      </h2>
      <p className="text-xl text-gray-300 mb-10 leading-relaxed">
        Connect with centuries of Buddhist wisdom in the heart of the Himalayas.
        Let us guide you through a transformative spiritual experience.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
        onClick={() => navigate("/booking")}
        className="px-8 py-4 rounded-xl text-lg font-semibold bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:shadow-xl hover:-translate-y-1 transition-all">
          Plan Your Pilgrimage
        </button>
        <a href={guide}
        download="Sikkim_pocket_guide.pdf"
        className="px-8 py-4 rounded-xl text-lg font-semibold border border-white/30 text-white hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 transition-all">
          Download Guide
        </a>
      </div>
    </div>
  </div>
</section>

      
    </div>
  );
}

export default Home