import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import abhay from "../../public/images/abhay.jpg";
import yashasvi from "../../public/images/yashasvi.jpg";
import mayank from "../../public/images/mayank.jpg";
import ruchika from "../../public/images/ruchika.jpg";
import samarth from "../../public/images/samarth.jpg";
import dev from "../../public/images/dev.jpg";

const teamMembers = [
  {
    name: "Abhay Pratap Singh",
    role: "Backend Developer & Team Lead",
    img: abhay,
    bio: "Loves building scalable Node.js APIs and solving complex problems.",
    github: "https://github.com/abhaypratapsinghmmmut",
    linkedin: "https://www.linkedin.com/in/abhay-pratap-singh-ab4938294/",
    email: "mailto:apsmmmut@gmail.com",
  },
  {
    name: "Yashasvi Sharma",
    role: "Frontend Developer",
    img: yashasvi,
    bio: "Passionate about crafting immersive user experiences with React & Tailwind.",
    github: "https://github.com/Yashasvi1612",
    linkedin: "https://www.linkedin.com/in/yashasvi-sharma-688245294/",
    email: "mailto:yashasvisharma650@gmail.com",
  },
  {
    name: "Dev Saxena",
    role: "Frontend Developer & API Tester",
    img: dev,
    bio: "Designing with empathy, Dev ensures a smooth and beautiful interface.",
    github: "https://github.com/devsaxena01",
    linkedin: "https://www.linkedin.com/in/dev-saxena-430614294/",
    email: "mailto:moneyheist6587@gmail.com",
  },
  {
    name: "Mayank Rouniyar",
    role: "Backend Developer",
    img: mayank,
    bio: "Loves building scalable Node.js APIs and solving complex problems.",
    github: "https://github.com/Mayank-Rouniyar",
    linkedin: "https://www.linkedin.com/in/mayank-rouniyar-7446a8318/",
    email: "mailto:mayankrouniyar9300@gmail.com",
  },
  {
    name: "Ruchika Singh",
    role: "Frontend Developer",
    img: ruchika,
    bio: "Ensures smooth workflow, collaboration, and timely project delivery.",
    github: "https://github.com/heyruchika-01",
    linkedin: "https://www.linkedin.com/in/ruchika-s-71338b286/",
    email: "mailto:ruchikasingh593@gmail.com",
  },
  {
    name: "Samarth Garg",
    role: "Frontend Developer",
    img: samarth,
    bio: "Brings authentic cultural and historical insights to the project content.",
    github: "https://github.com/SamDeveloper1",
    linkedin: "https://www.linkedin.com/in/samarth-garg-a9a99a294/",
    email: "mailto:samarthgarg108@gmail.com",
  },
];

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="relative min-h-screen px-6 md:px-12 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
      }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto py-12">
        {/* Page Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg"
          >
            Meet Our Team
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The passionate minds behind this spiritual and cultural experience.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-10 text-center shadow-2xl hover:-translate-y-3 hover:shadow-emerald-500/40 transition-all duration-500"
            >
              {/* Profile Image */}
              <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-emerald-400/40 shadow-lg">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="text-2xl font-semibold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-emerald-400 text-lg mb-4">{member.role}</p>
              <p className="text-gray-300 text-base mb-8 leading-relaxed">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-6 text-gray-400">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <Github size={24} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <Linkedin size={24} />
                </a>
                <a href={member.email} className="hover:text-white transition">
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;