import React from 'react'
import { Star, Mountain, BookOpen, Theater, User } from "lucide-react";
import { motion } from "framer-motion"

const Itinerary = () => {

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

  return (
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
  )
}

export default Itinerary