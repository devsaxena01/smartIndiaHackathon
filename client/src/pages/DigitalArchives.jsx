import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { archivesData } from "../apiCalls/archives";
import { Filter, RotateCcw, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DigitalArchives = () => {
  const [archives, setArchives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    contentType: "",
    era: "",
    monastery: "",
    keyword: "",
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  useEffect(() => {
    const fetchArchives = async () => {
      try {
        const data = await archivesData();
        setArchives(data.data || []);
      } catch (err) {
        console.error("Error fetching archives:", err);
      } finally {
        setTimeout(() => setLoading(false), 1200); // Smooth transition
      }
    };

    fetchArchives();
  }, []);

  // 🔥 Animated Loading Screen
  if (loading) {
    const loaderVariants = {
      initial: { opacity: 0, y: 20 },
      animate: {
        opacity: [0.4, 1, 0.4],
        y: [0, -10, 0],
        transition: {
          duration: 1.8,
          ease: "easeInOut",
          repeat: Infinity,
        },
      },
    };

    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400"
        >
          Loading Digital Archives...
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              variants={loaderVariants}
              initial="initial"
              animate="animate"
              className="bg-gray-800 rounded-lg border border-gray-700/60 overflow-hidden"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="h-40 w-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] animate-[shimmer_1.8s_infinite]" />
              <div className="p-4 space-y-3">
                <div className="h-5 bg-gray-700 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-gray-700 rounded w-full animate-pulse" />
                <div className="h-4 bg-gray-700 rounded w-2/3 animate-pulse" />
                <div className="h-9 bg-gray-700 rounded mt-4 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        <style>{`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}</style>
      </div>
    );
  }

  // ✅ Regular Page Rendering
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleViewDetails = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  const filteredArchives = archives.filter((item) => {
    return (
      (filters.contentType === "" ||
        item.type?.toLowerCase().includes(filters.contentType.toLowerCase())) &&
      (filters.era === "" ||
        item.era?.toLowerCase().includes(filters.era.toLowerCase())) &&
      (filters.monastery === "" ||
        item.monastery?.toLowerCase().includes(filters.monastery.toLowerCase())) &&
      (filters.keyword === "" ||
        item.title?.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        item.description?.toLowerCase().includes(filters.keyword.toLowerCase()))
    );
  });

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans min-h-screen flex">
      {/* Sidebar Filters - Desktop */}
      <div className="w-72 bg-gray-800/40 backdrop-blur-md rounded-r-2xl border-r border-gray-700 hidden lg:block">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Filter className="w-5 h-5 text-orange-400" /> Filters
          </h2>
          <input
            type="text"
            name="keyword"
            placeholder="Search keyword..."
            value={filters.keyword}
            onChange={handleChange}
            className="w-full mb-3 p-2 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            name="contentType"
            placeholder="Content type..."
            value={filters.contentType}
            onChange={handleChange}
            className="w-full mb-3 p-2 rounded-lg bg-gray-900 border border-gray-700"
          />
          <input
            type="text"
            name="era"
            placeholder="Era..."
            value={filters.era}
            onChange={handleChange}
            className="w-full mb-3 p-2 rounded-lg bg-gray-900 border border-gray-700"
          />
          <input
            type="text"
            name="monastery"
            placeholder="Monastery..."
            value={filters.monastery}
            onChange={handleChange}
            className="w-full mb-3 p-2 rounded-lg bg-gray-900 border border-gray-700"
          />
          <button
            onClick={() =>
              setFilters({ contentType: "", era: "", monastery: "", keyword: "" })
            }
            className="mt-4 flex items-center gap-2 px-3 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg w-full justify-center"
          >
            <RotateCcw className="w-4 h-4" /> Reset
          </button>
        </div>
      </div>

      {/* Archive Cards */}
      <div className="flex-1 p-8 relative">
        {/* Mobile filter button */}
        <button
          onClick={() => setShowFilters(true)}
          className="lg:hidden mb-6 flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg"
        >
          <Filter className="w-5 h-5" /> Filters
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredArchives.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/40 border border-gray-700 rounded-xl shadow-lg overflow-hidden group hover:border-orange-500 transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-5">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
                <button
                  onClick={() => handleViewDetails(item)}
                  className="mt-4 px-4 py-3 w-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredArchives.length === 0 && (
          <div className="text-center py-12 text-gray-400">No archives found</div>
        )}
      </div>

      {/* Modal for Archive Details */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 rounded-xl p-6 max-w-3xl w-full border border-gray-700"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold mb-2 text-white">
                  {selectedItem.title}
                </h2>
                <button onClick={closeModal}>
                  <X className="w-6 h-6 text-white " />
                </button>
              </div>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="my-4 w-full max-h-[400px] object-contain rounded-lg"
              />
              <p className="text-emerald-300 mb-4 font-medium">
                {selectedItem.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-72 bg-gray-800 p-6 h-full shadow-xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-white">Filters</h2>
                <button onClick={() => setShowFilters(false)}>
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* SAME FILTER INPUTS FOR MOBILE */}
              <input
                type="text"
                name="keyword"
                placeholder="Search keyword..."
                value={filters.keyword}
                onChange={handleChange}
                className="w-full mb-3 p-2 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                name="contentType"
                placeholder="Content type..."
                value={filters.contentType}
                onChange={handleChange}
                className="w-full mb-3 p-2 rounded-lg bg-gray-900 border border-gray-700"
              />
              <input
                type="text"
                name="era"
                placeholder="Era..."
                value={filters.era}
                onChange={handleChange}
                className="w-full mb-3 p-2 rounded-lg bg-gray-900 border border-gray-700"
              />
              <input
                type="text"
                name="monastery"
                placeholder="Monastery..."
                value={filters.monastery}
                onChange={handleChange}
                className="w-full mb-3 p-2 rounded-lg bg-gray-900 border border-gray-700"
              />
              <button
                onClick={() =>
                  setFilters({ contentType: "", era: "", monastery: "", keyword: "" })
                }
                className="mt-4 flex items-center gap-2 px-3 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg w-full justify-center"
              >
                <RotateCcw className="w-4 h-4" /> Reset
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DigitalArchives;
