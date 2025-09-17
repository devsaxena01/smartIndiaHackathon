import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"
import { Star} from "lucide-react";

const Testimonials = () => {

       const testimonials = [
    {
      name: "Abhay Pratap Singh",
      location: "Mumbai, India",
      image: "https://picsum.photos/100/100?random=10",
      testimonial:
        "The meditation sessions at Rumtek changed my perspective on life. The monks' wisdom and the mountain serenity created an unforgettable spiritual experience.",
      rating: 5,
      experience: "5-Day Retreat",
    },
    {
      name: "Ruchika Singh",
      location: "Mumbai, India",
      image: "https://picsum.photos/100/100?random=11",
      testimonial:
        "Witnessing the Cham dance at Enchey was mesmerizing. The ancient traditions come alive in ways that photos and videos cannot capture.",
      rating: 5,
      experience: "Festival Tour",
    },
    {
      name: "Mayank Rouniyar",
      location: "Mumbai, India",
      image: "https://picsum.photos/100/100?random=12",
      testimonial:
        "Tashiding's sacred energy is palpable. Standing there at sunrise, surrounded by prayer flags and mountain peaks, I felt truly connected to something greater.",
      rating: 5,
      experience: "Spiritual Journey",
    },
    {
      name: "Dev Saxena",
      location: "Mumbai, India",
      image: "https://picsum.photos/100/100?random=10",
      testimonial:
        "The meditation sessions at Rumtek changed my perspective on life. The monks' wisdom and the mountain serenity created an unforgettable spiritual experience.",
      rating: 5,
      experience: "5-Day Retreat",
    },
    {
      name: "Yashasvi Sharma",
      location: "Mumbai, India",
      image: "https://picsum.photos/100/100?random=10",
      testimonial:
        "The meditation sessions at Rumtek changed my perspective on life. The monks' wisdom and the mountain serenity created an unforgettable spiritual experience.",
      rating: 5,
      experience: "5-Day Retreat",
    },
    {
      name: "Samarth Garg",
      location: "Mumbai, India",
      image: "https://picsum.photos/100/100?random=10",
      testimonial:
        "The meditation sessions at Rumtek changed my perspective on life. The monks' wisdom and the mountain serenity created an unforgettable spiritual experience.",
      rating: 5,
      experience: "5-Day Retreat",
    },
  ];

  return (
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
  )
}

export default Testimonials