import React from 'react'
import { GiMeditation, GiPrayer, GiMountainCave, GiBookAura } from "react-icons/gi";
import { MdFestival } from "react-icons/md";
import { BsSunrise } from "react-icons/bs";

const Experience = () => {

      const experiences = [
      { icon: <GiMeditation />, title: "Meditation Sessions", desc: "Join monks in daily meditation practices" },
      { icon: <MdFestival />, title: "Festival Participation", desc: "Experience colorful Cham dance festivals" },
      { icon: <GiPrayer />, title: "Prayer Rituals", desc: "Participate in ancient Buddhist ceremonies" },
      { icon: <GiMountainCave />, title: "Mountain Views", desc: "Witness stunning Himalayan panoramas" },
      { icon: <GiBookAura />, title: "Buddhist Learning", desc: "Study ancient texts and philosophy" },
      { icon: <BsSunrise />, title: "Sunrise Prayers", desc: "Experience dawn meditation sessions" }
    ];
     
    
  return (
    <section id="experiences"
           className="relative py-28 px-6 md:px-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800">
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
          style={{  animationDelay:` ${i * 0.15}s `}}
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
  )
}

export default Experience