import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"
import { GiMeditation, GiPrayer, GiMountainCave, GiBookAura } from "react-icons/gi";
import { MdFestival } from "react-icons/md";
import { BsSunrise } from "react-icons/bs";
import { Star, Mountain, BookOpen, Theater, User } from "lucide-react";

export default function SikkimMonasteryExperience() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedMonastery, setSelectedMonastery] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
   const testimonials = [
    {
      name: "Sarah Chen",
      location: "Singapore",
      image: "https://picsum.photos/100/100?random=10",
      testimonial:
        "The meditation sessions at Rumtek changed my perspective on life. The monks' wisdom and the mountain serenity created an unforgettable spiritual experience.",
      rating: 5,
      experience: "5-Day Retreat",
    },
    {
      name: "Raj Patel",
      location: "Mumbai, India",
      image: "https://picsum.photos/100/100?random=11",
      testimonial:
        "Witnessing the Cham dance at Enchey was mesmerizing. The ancient traditions come alive in ways that photos and videos cannot capture.",
      rating: 5,
      experience: "Festival Tour",
    },
    {
      name: "Emma Johnson",
      location: "London, UK",
      image: "https://picsum.photos/100/100?random=12",
      testimonial:
        "Tashiding's sacred energy is palpable. Standing there at sunrise, surrounded by prayer flags and mountain peaks, I felt truly connected to something greater.",
      rating: 5,
      experience: "Spiritual Journey",
    },
  ];
  const itinerary = [
  {
    day: "Day 1",
    title: "Arrival & Purification",
    desc: "Begin with traditional blessing ceremonies and acclimatization to mountain energy",
    time: "Morning",
    icon: Star,
  },
  {
    day: "Day 2",
    title: "Ancient Wisdom",
    desc: "Visit Pemayangtse and learn from senior monks about Tibetan Buddhist philosophy",
    time: "Full Day",
    icon: BookOpen,
  },
  {
    day: "Day 3",
    title: "Mountain Meditation",
    desc: "Dawn meditation at Tashiding followed by sacred kora (circumambulation)",
    time: "Early Morning",
    icon: Mountain,
  },
  {
    day: "Day 4",
    title: "Festival Immersion",
    desc: "Participate in traditional Cham dance at Enchey Monastery",
    time: "Evening",
    icon: Theater,
  },
  {
    day: "Day 5",
    title: "Inner Reflection",
    desc: "Silent retreat and personal meditation at Rumtek with guidance from lamas",
    time: "All Day",
    icon: User,
  },
];
  const monasteries = [
    {
      title: "Rumtek Monastery",
      subtitle: "The Golden Dharmachakra",
      img: "https://i.pinimg.com/736x/78/01/56/780156f050379440976c36844f4bf831.jpg",
      desc: "The largest monastery in Sikkim and the seat of the 17th Karmapa. Experience the mesmerizing chants of monks and witness ancient Tibetan Buddhist rituals in this architectural marvel.",
      founded: "1966",
      altitude: "5,800 ft",
      highlight: "Home to sacred Buddhist relics",
      coordinates: { lat: 27.3389, lng: 88.5593 }
    },
    {
      title: "Pemayangtse Monastery",
      subtitle: "The Perfect Sublime Lotus",
      img: "https://i.pinimg.com/736x/0d/1b/57/0d1b57388ff1d565caaa7d262e42b068.jpg",
      desc: "One of the oldest and most important monasteries of Sikkim, offering breathtaking views of the Kangchenjunga range. Marvel at the intricate wood carvings and ancient murals.",
      founded: "1705",
      altitude: "6,840 ft",
      highlight: "Spectacular Himalayan views",
      coordinates: { lat: 27.2120, lng: 88.2090 }
    },
    {
      title: "Enchey Monastery",
      subtitle: "The Solitary Temple",
      img: "https://i.pinimg.com/1200x/81/4b/24/814b2475bf6d6a3c3729d8d1ed194e4f.jpg",
      desc: "Perched majestically above Gangtok, famous for its vibrant Cham dances. The monastery comes alive during festivals with masked monks performing ancient spiritual dances.",
      founded: "1909",
      altitude: "6,200 ft",
      highlight: "Famous for Cham dance festivals",
      coordinates: { lat: 27.3314, lng: 88.6138 }
    },
    {
      title: "Tashiding Monastery",
      subtitle: "The Devoted Central Glory",
      img: "https://i.pinimg.com/1200x/45/ce/93/45ce93691aafd5ae247111e7827cba75.jpg",
      desc: "Considered the most sacred monastery in Sikkim, built on a heart-shaped hill. Pilgrims believe that a glimpse of this monastery cleanses all sins.",
      founded: "1641",
      altitude: "4,600 ft",
      highlight: "Most sacred site in Sikkim",
      coordinates: { lat: 27.1833, lng: 88.2833 }
    },
    {
      title: "Ralong Monastery",
      subtitle: "The Sacred Valley Temple",
      img: "https://i.pinimg.com/1200x/6b/fe/ad/6bfeada15983e4f29c0d024af912716f.jpg",
      desc: "Known for its rich collection of thangkas and ancient manuscripts. The monastery's architecture reflects perfect harmony with the surrounding landscape.",
      founded: "1768",
      altitude: "5,500 ft",
      highlight: "Ancient manuscript collection",
      coordinates: { lat: 27.2442, lng: 88.3167 }
    },
    {
      title: "Phodong Monastery",
      subtitle: "The Hilltop Sanctuary",
      img: "https://i.pinimg.com/736x/03/9c/48/039c48aa47d613ba826b2ec98bd889b6.jpg",
      desc: "Famous for its annual Chaam festival where monks perform elaborate masked dances depicting Buddhist legends and teachings.",
      founded: "1740",
      altitude: "4,500 ft",
      highlight: "Annual Chaam festival",
      coordinates: { lat: 27.4167, lng: 88.6167 }
    }
  ];

  const experiences = [
  { icon: <GiMeditation />, title: "Meditation Sessions", desc: "Join monks in daily meditation practices" },
  { icon: <MdFestival />, title: "Festival Participation", desc: "Experience colorful Cham dance festivals" },
  { icon: <GiPrayer />, title: "Prayer Rituals", desc: "Participate in ancient Buddhist ceremonies" },
  { icon: <GiMountainCave />, title: "Mountain Views", desc: "Witness stunning Himalayan panoramas" },
  { icon: <GiBookAura />, title: "Buddhist Learning", desc: "Study ancient texts and philosophy" },
  { icon: <BsSunrise />, title: "Sunrise Prayers", desc: "Experience dawn meditation sessions" }
];


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

      {/* Floating Navigation */}

      {/* Hero Video Section */}
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
        // Fallback to image if video fails
        e.target.style.display = "none";
        e.target.nextElementSibling.style.display = "block";
      }}
    >
      <source src="/images/monastery_f_f.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Fallback image */}
    <img
      src="https://picsum.photos/1920/1080?random=7"
      alt="Monastery landscape"
      className="w-full h-full object-cover"
      style={{ display: "none" }}
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70"></div>

    {/* Video Controls Overlay */}
    <div className="absolute bottom-20 right-8 z-20">
      <button
        onClick={(e) => {
          const video = e.target.closest("section").querySelector("video");
          if (video.paused) {
            video.play();
            e.target.innerHTML = "⏸️";
          } else {
            video.pause();
            e.target.innerHTML = "▶️";
          }
        }}
        className="bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-colors"
        title="Play/Pause video"
      >
        ⏸️
      </button>
    </div>
  </div>

  <div className="relative z-10 text-center max-w-5xl px-6">
  {/* Title */}
  <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="text-5xl md:text-8xl font-bold mb-6 
    bg-gradient-to-r from-white/60 via-green-200/50 to-sky-200/60 
    bg-clip-text text-transparent backdrop-blur-[1px] drop-shadow-md"
>
  Sacred Monasteries
</motion.h1>

  {/* Subtitle */}
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.4 }}
    className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed"
  >
    Discover the mystical world of Sikkim's ancient monasteries, where
    centuries of Buddhist wisdom echo through mountain valleys
  </motion.p>

  {/* Buttons */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.8 }}
    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
  >
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 
        px-8 py-4 rounded-full text-lg font-medium text-white 
        shadow-lg hover:shadow-emerald-500/40 transition"
    >
      Begin Your Journey
    </motion.button>

    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="border-2 border-white/70 px-8 py-4 rounded-full 
        text-lg font-medium text-white backdrop-blur-sm 
        hover:bg-white/10 transition shadow-md"
    >
      Watch Stories
    </motion.button>
  </motion.div>
</div>
  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce-slow">
    <div className="flex flex-col items-center">
      <span className="text-sm mb-2">Scroll to explore</span>
      <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
        <div className="w-1 h-3 bg-white/60 rounded-full mx-auto animate-scroll" />
      </div>
    </div>
  </div>
</section>


      {/* Featured Video Section */}

      {/* Monasteries Grid */}
      <section id="monasteries" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Ancient Sanctuaries
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Each monastery tells a unique story of devotion, artistry, and spiritual enlightenment, nestled in the breathtaking landscapes of the Himalayas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {monasteries.map((monastery, i) => (
            <div
              key={i}
              className="group cursor-pointer hover-scale"
              onClick={() => setSelectedMonastery(monastery)}
            >
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 hover-zoom">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={monastery.img}
                    alt={monastery.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    Est. {monastery.founded}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{monastery.title}</h3>
                    <p className="text-emerald-300 text-sm font-medium">{monastery.subtitle}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">{monastery.desc}</p>

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

      {/* Experiences Section */}
<section
  id="experiences"
  className="relative py-28 px-6 md:px-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800"
>
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-6 
        bg-gradient-to-r from-emerald-300 via-green-400 to-teal-300 
        bg-clip-text text-transparent drop-shadow-lg">
        Spiritual Experiences
      </h2>
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
        Immerse yourself in sacred traditions, meditative practices, and timeless Himalayan wisdom.
      </p>
    </div>

    {/* Experience Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {experiences.map((exp, i) => (
        <div
          key={i}
          className="group relative bg-gray-800/40 backdrop-blur-xl 
          border border-gray-700/40 rounded-3xl p-10 flex flex-col items-center 
          text-center shadow-lg transition-all duration-500 hover:scale-105 
          hover:border-emerald-400/60 hover:shadow-emerald-500/20"
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          {/* Icon Bubble */}
          <div className="w-20 h-20 flex items-center justify-center 
            rounded-full mb-6 text-4xl bg-gradient-to-br 
            from-emerald-400/30 to-green-500/20 
            group-hover:from-emerald-400 group-hover:to-green-500 
            text-white shadow-md transition-all duration-500">
            {exp.icon}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide">
            {exp.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-base leading-relaxed">
            {exp.desc}
          </p>

          {/* Hover Glow Line */}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-emerald-400 
            group-hover:w-1/2 transition-all duration-500 rounded-full" />
        </div>
      ))}
    </div>
  </div>

  {/* Background soft light effect */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_70%)] pointer-events-none"></div>
</section>


      {/* Journey Timeline */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
        >
          Your Sacred Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto"
        >
          Follow the path of enlightenment through a carefully crafted spiritual itinerary
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>

        {itinerary.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`flex items-center mb-20 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Card */}
              <div className={`w-full md:w-5/12 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                <div className="bg-gray-900/70 backdrop-blur-md p-8 rounded-3xl border border-gray-700 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                  <div className={`flex items-center ${i % 2 === 0 ? "justify-end" : "justify-start"} mb-5`}>
                    <div className="flex items-center space-x-3">
                      <Icon className="w-8 h-8 text-emerald-400" />
                      <div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        <p className="text-emerald-300">{step.day} • {step.time}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{step.desc}</p>
                </div>
              </div>

              {/* Connector Dot */}
              <div className="w-2/12 flex justify-center">
                <div className="w-7 h-7 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full border-4 border-gray-900 shadow-lg"></div>
              </div>

              <div className="w-full md:w-5/12"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  

      {/* Interactive Map Section */}
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
              <div className="aspect-square bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <path d="M50,350 Q200,50 350,350" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                    <path d="M100,300 Q200,100 300,300" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                  </svg>
                </div>

                {monasteries.slice(0, 4).map((monastery, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 bg-white rounded-full animate-ping"
                    style={{
                      left: `${20 + i * 20}%`,
                      top: `${30 + (i % 2) * 40}%`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  >
                    <div className="absolute inset-0 bg-white rounded-full"></div>
                  </div>
                ))}

                <div className="relative z-10 text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">Sikkim Monasteries</h3>
                  <p className="text-white/80">Interactive monastery locations coming soon</p>
                </div>
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
       <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Pilgrims' Stories
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Hear from fellow travelers who found peace and enlightenment in
          Sikkim's sacred spaces
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, rotate: -1 }}
            className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg p-8 rounded-3xl border border-gray-700/40 hover:border-emerald-400/60 shadow-lg transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mr-4 border-2 border-emerald-400/60"
              />
              <div>
                <h4 className="text-lg font-bold text-white">{t.name}</h4>
                <p className="text-emerald-300 text-sm">{t.location}</p>
                <p className="text-gray-400 text-sm">{t.experience}</p>
              </div>
            </div>

            <div className="flex mb-4">
              {[...Array(t.rating)].map((_, j) => (
                <Star
                  key={j}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            <blockquote className="text-gray-300 italic leading-relaxed relative">
              “{t.testimonial}”
              <span className="absolute -top-4 -left-2 text-emerald-400 text-3xl opacity-30">
                ❝
              </span>
            </blockquote>
          </motion.div>
        ))}
      </div>
    </section>
      {/* Photography Gallery */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-gray-900 to-black">
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
          className="relative overflow-hidden rounded-2xl hover-scale group cursor-pointer"
          
        >
          <img
            src={src}
            alt={`Gallery ${i + 1}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
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


      {/* Cultural Insights */}
      

      {/* CTA Section */}
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
        <button className="px-8 py-4 rounded-xl text-lg font-semibold bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:shadow-xl hover:-translate-y-1 transition-all">
          Plan Your Pilgrimage
        </button>
        <button className="px-8 py-4 rounded-xl text-lg font-semibold border border-white/30 text-white hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 transition-all">
          Download Guide
        </button>
      </div>
    </div>
  </div>
</section>






      {/* Footer */}


      {/* Monastery Detail Modal */}
      {selectedMonastery && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeInUp"
          onClick={() => setSelectedMonastery(null)}
        >
          <div
            className="bg-gray-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedMonastery.img}
                alt={selectedMonastery.title}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setSelectedMonastery(null)}
                className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-2 text-white">{selectedMonastery.title}</h3>
              <p className="text-emerald-300 mb-4 font-medium">{selectedMonastery.subtitle}</p>
              <p className="text-gray-300 mb-6 leading-relaxed">{selectedMonastery.desc}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700/50 p-4 rounded-xl">
                  <span className="text-gray-400 text-sm">Founded</span>
                  <p className="text-white font-bold">{selectedMonastery.founded}</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-xl">
                  <span className="text-gray-400 text-sm">Altitude</span>
                  <p className="text-white font-bold">{selectedMonastery.altitude}</p>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 py-4 rounded-xl font-medium text-lg hover-scale">
                Book Visit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}