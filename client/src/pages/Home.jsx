import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-gray-300 font-sans">
      {/* Hero Section */}
       <section
      className="relative h-[500px] flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://www.esikkimtourism.in/wp-content/uploads/2018/10/climate-bnnr.jpg')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg"
        >
          Monastery360: Discover Sikkim's Sacred Heritage
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-4 text-gray-300 leading-relaxed"
        >
          Embark on an immersive digital journey through the ancient monasteries
          and vibrant culture of Sikkim. Explore panoramic virtual tours,
          interactive maps, and a rich archive of historical treasures.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-6 flex justify-center space-x-4"
        >
          <button className="bg-orange-700 hover:bg-orange-600 text-white px-6 py-3 rounded-md shadow-lg hover:shadow-orange-500/50 transition duration-300">
            Explore Virtual Tours
          </button>
          <button className="bg-gray-900 border border-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md shadow-lg hover:shadow-gray-500/40 transition duration-300">
            Discover Archives
          </button>
        </motion.div>
      </motion.div>
    </section>

      {/* Feature Cards */}
      <section className="py-20 px-8 bg-black">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
    {[
      {
        title: "Virtual Tours",
        desc: "Step inside Sikkim's most revered monasteries with immersive 360-degree virtual tours and narrated guides.",
        img: "./images/buddha.jpeg",
        btn: "Explore Virtual Tours",
        path: "/virtual-tours",
      },
      {
        title: "Interactive Map",
        desc: "Navigate Sikkim's monastic landscape with our interactive map, featuring geo-tagged locations and travel routes.",
        img: "./images/buddha.jpeg",
        btn: "View Interactive Map",
        path: "/interactive-map",
      },
      {
        title: "Digital Archives",
        desc: "Delve into a vast collection of scanned manuscripts, murals, and historical documents, preserved digitally.",
        img: "./images/buddha.jpeg",
        btn: "Access Digital Archives",
        path: "/digital-archives",
      },
      {
        title: "Cultural Calendar",
        desc: "Stay informed about upcoming monastic events, festivals, and rituals across Sikkim.",
        img: "./images/buddha.jpeg",
        btn: "See Calendar",
        path: "/cultural-calender",
      },
      {
        title: "Booking & Experiences",
        desc: "Plan your visit to Sikkim's sacred sites and book unique cultural experiences with local guides.",
        img: "./images/buddha.jpeg",
        btn: "Book Your Journey",
        path: "/booking",
      },
    ].map((card, key) => (
      <div
        key={key}
        className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex flex-col transition transform hover:scale-105 hover:shadow-2xl duration-300"
      >
        {/* Image Section */}
        <div className="relative h-52 w-full">
          <img
            src={card.img}
            alt={card.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white drop-shadow-md">
            {card.title}
          </h3>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-gray-400 flex-grow leading-relaxed">
            {card.desc}
          </p>
          <button
            className="mt-6 bg-orange-900 text-white font-medium px-5 py-2 rounded-md border border-transparent hover:bg-orange-700 hover:border-orange-600 transition duration-300"
            onClick={() => navigate(card.path)}
          >
            {card.btn}
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* About Section */}
      <section className="px-8 py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-6 rounded-lg flex flex-col justify-between h-full"
        >
          <div>
            <h2 className="text-2xl font-bold mb-4">
              About Sikkim's Rich Monastic Heritage
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Sikkim, nestled in the Himalayas, is a land deeply rooted in
              Buddhist traditions, adorned with countless monasteries that serve
              as centers of learning, worship, and cultural preservation. These
              sacred sites, from the grandeur of Rumtek to the ancient serenity
              of Pemayangtse, are not just architectural marvels but living
              testaments to a spiritual legacy passed down through generations.
              <br /> <br />
              Monastery360 aims to bring this profound heritage to a global
              audience, offering insights into the art, philosophy, and daily
              life within these spiritual havens. We are dedicated to the
              preservation of these invaluable cultural assets for future
              generations.
            </p>
          </div>
          <button className="mt-6 bg-orange-700 hover:bg-orange-600 text-white px-5 py-2 rounded-md transition"
          onClick={() => navigate("/digital-archives")}>
            Learn More
          </button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group h-full"
        >
          <img
            src="./images/buddha.jpeg"
            alt="Monastery"
            className="rounded-lg shadow-md w-full h-full object-cover"
          />
          {/* Overlay effect on hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center rounded-lg">
            <button className="text-white text-lg font-semibold"
            onClick={() => navigate("/digital-archives")}>
              Explore More →
            </button>
          </div>
        </motion.div>
      </div>
    </section>

      {/* CTA Section (from screenshot) */}
      <section className="relative bg-gradient-to-r from-orange-600 via-red-500 to-blue-600 text-white py-20 px-6 text-center overflow-hidden">
  {/* Decorative background effect */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-60 h-60 bg-black/20 rounded-full blur-3xl"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-6">
      Ready to Explore Sikkim's Monasteries?
    </h2>
    <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
      Join us on a journey of discovery. Dive into immersive virtual tours, plan
      your visit, and explore our sacred preservation efforts.
    </p>

    {/* Button */}
    <button className="bg-white text-black font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
    onClick={() => navigate("/")}>
      Start Your Journey
    </button>
  </div>
</section>

    </div>
  )
}

export default Home