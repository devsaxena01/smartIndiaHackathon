import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { archivesData } from "../apiCalls/archives";
import {
  Search,
  Filter,
  Calendar,
  MapPin,
  RotateCcw,
  X,
} from "lucide-react";
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

  const navigate = useNavigate();

  useEffect(() => {
    const fetchArchives = async () => {
      try {
        const data = await archivesData();
        setArchives(data.data || []);
      } catch (err) {
        console.error("Error fetching archives:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArchives();
  }, []);

  if (loading)
    return <p className="text-center text-white">Loading archives...</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleViewDetails = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  const filteredArchives = archives.filter((item) => {
    return (
      (filters.contentType === "" ||
        item.type.toLowerCase().includes(filters.contentType.toLowerCase())) &&
      (filters.era === "" ||
        item.era.toLowerCase().includes(filters.era.toLowerCase())) &&
      (filters.monastery === "" ||
        item.monastery
          .toLowerCase()
          .includes(filters.monastery.toLowerCase())) &&
      (filters.keyword === "" ||
        item.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        item.description.toLowerCase().includes(filters.keyword.toLowerCase()))
    );
  });

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans min-h-screen flex">
      {/* Sidebar Filters */}
      <div className="w-72 bg-gray-800/40 backdrop-blur-md p-6 rounded-r-2xl border-r border-gray-700 hidden lg:block">
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

      {/* Archive Cards */}
      <div className="flex-1 p-8">
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
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-2">
                  {item.description}
                </p>
                <button
                  onClick={() => handleViewDetails(item)}
                  className="mt-4 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:shadow-lg hover:shadow-orange-500/40 transition"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredArchives.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No archives found
          </div>
        )}
      </div>

      {/* Modal */}
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
                <h2 className="text-xl font-bold">{selectedItem.title}</h2>
                <button onClick={closeModal}>
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="my-4 w-full max-h-[400px] object-contain rounded-lg"
              />
              <p className="text-gray-300">{selectedItem.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DigitalArchives;
