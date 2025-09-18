import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { archivesData } from "../apiCalls/archives";
import {
  Search,
  Filter,
  Calendar,
  MapPin,
  RotateCcw,
  ZoomIn,
  X,
} from "lucide-react";

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
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans min-h-screen">
      <div className="flex p-6 gap-8">
        {/* sidebar filters */}
        {/* ... (your sidebar code remains unchanged, just make sure it uses filters + handleChange) */}
      </div>

      <div className="flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredArchives.map((item, index) => (
            <div key={index} className="bg-gray-800/30 rounded-xl shadow-lg">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-2">{item.description}</p>
                <button onClick={() => handleViewDetails(item)} className="mt-3 px-4 py-2 bg-orange-500 rounded-lg">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredArchives.length === 0 && (
          <div className="text-center py-12 text-gray-400">No archives found</div>
        )}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
          <div className="bg-gray-900 rounded-xl p-6 max-w-3xl w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">{selectedItem.title}</h2>
              <button onClick={closeModal}>
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <img src={selectedItem.image} alt={selectedItem.title} className="my-4 w-full max-h-96 object-contain" />
            <p>{selectedItem.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DigitalArchives;
