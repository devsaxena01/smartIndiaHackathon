import React, { useState } from "react";

const CulturalCalender = () => {
  const [filters, setFilters] = useState({
    eventType: "",
    monastery: "",
    keyword: "",
  });

  const events = [
    {
      title: "Pang Lhabsol Festival",
      date: "August 20, 2025",
      time: "All Day",
      monastery: "Tashiding Monastery, West Sikkim",
      description:
        "A unique festival dedicated to Mount Khangchendzonga, the guardian deity of Sikkim. Witness the spectacular 'Warrior Dance’.",
      type: "Festival",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Pang_Lhabsol.jpg/640px-Pang_Lhabsol.jpg",
    },
    {
      title: "Losar (Tibetan New Year)",
      date: "February 26, 2025",
      time: "All Day",
      monastery: "Rumtek Monastery, East Sikkim",
      description:
        "A grand celebration marking the Tibetan New Year with traditional dances, rituals, and offerings.",
      type: "Festival",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Losar_celebration.jpg/640px-Losar_celebration.jpg",
    },
    {
      title: "Cham Dance Ritual",
      date: "December 10, 2025",
      time: "Morning",
      monastery: "Phodong Monastery, North Sikkim",
      description:
        "Sacred masked dance performed by monks to dispel negative energies and invite blessings.",
      type: "Ritual",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Cham_dance.jpg/640px-Cham_dance.jpg",
    },
  ];

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredEvents = events.filter((event) => {
    return (
      (filters.eventType === "" ||
        event.type.toLowerCase().includes(filters.eventType.toLowerCase())) &&
      (filters.monastery === "" ||
        event.monastery.toLowerCase().includes(filters.monastery.toLowerCase())) &&
      (filters.keyword === "" ||
        event.title.toLowerCase().includes(filters.keyword.toLowerCase()))
    );
  });

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Navbar */}
      {/* <nav className="flex justify-between items-center px-8 py-4 bg-black shadow-md">
        <div className="text-2xl font-bold text-orange-500">✺ Monastery360</div>
        <ul className="hidden md:flex space-x-6 text-gray-300">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">Virtual Tours</li>
          <li className="hover:text-orange-500 cursor-pointer">Interactive Map</li>
          <li className="hover:text-orange-500 cursor-pointer">Digital Archives</li>
          <li className="text-orange-500 cursor-pointer">Cultural Calendar</li>
          <li className="hover:text-orange-500 cursor-pointer">Booking</li>
        </ul>
        <input
          type="text"
          placeholder="Search monasteries, events, or archives..."
          className="px-3 py-2 rounded bg-gray-800 text-white text-sm"
        />
      </nav> */}

      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Monks_Sikkim.jpg/1280px-Monks_Sikkim.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded">
          <h1 className="text-4xl font-bold">Sikkim's Cultural Calendar</h1>
          <p className="mt-3 text-gray-300 max-w-2xl">
            Discover vibrant festivals, serene rituals, and enriching workshops
            hosted across Sikkim’s historic monasteries. Plan your immersive
            journey into our unique heritage.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4 bg-gray-900 p-4 rounded mx-8 mt-6">
        <select
          name="eventType"
          value={filters.eventType}
          onChange={handleChange}
          className="px-3 py-2 rounded bg-gray-800 text-white text-sm"
        >
          <option value="">All Event Types</option>
          <option value="Festival">Festival</option>
          <option value="Ritual">Ritual</option>
          <option value="Workshop">Workshop</option>
        </select>

        <select
          name="monastery"
          value={filters.monastery}
          onChange={handleChange}
          className="px-3 py-2 rounded bg-gray-800 text-white text-sm"
        >
          <option value="">All Monasteries</option>
          <option value="Rumtek Monastery">Rumtek Monastery</option>
          <option value="Tashiding Monastery">Tashiding Monastery</option>
          <option value="Phodong Monastery">Phodong Monastery</option>
        </select>

        <input
          type="text"
          name="keyword"
          placeholder="Search for events..."
          value={filters.keyword}
          onChange={handleChange}
          className="flex-grow px-3 py-2 rounded bg-gray-800 text-white text-sm"
        />
      </div>

      {/* Featured Events */}
      <div className="px-8 mt-10">
        <h2 className="text-2xl font-bold mb-6">Featured Events</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-gray-900 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full md:w-1/2 h-60 object-cover"
              />
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-orange-400">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2">
                    📅 {event.date} <br />
                    ⏰ {event.time} <br />
                    📍 {event.monastery}
                  </p>
                  <p className="mt-4 text-gray-300">{event.description}</p>
                </div>
                <div className="mt-4 flex space-x-3">
                  <button className="px-4 py-2 bg-gray-700 text-white rounded">
                    Learn More
                  </button>
                  <button className="px-4 py-2 bg-orange-500 text-white rounded font-bold">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="bg-black text-gray-400 py-8 px-8 mt-10">
        <div className="flex justify-between">
          <div>
            <div className="text-orange-500 font-bold text-xl mb-2">
              ✺ Monastery360
            </div>
            <p className="text-sm max-w-xs">
              Preserving and promoting Sikkim’s rich monastic heritage through
              digital innovation.
            </p>
          </div>

          <div className="flex space-x-16">
            <div>
              <h3 className="font-bold text-white mb-2">Explore</h3>
              <ul className="space-y-1 text-sm">
                <li>Virtual Tours</li>
                <li>Interactive Map</li>
                <li>Digital Archives</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">Engage</h3>
              <ul className="space-y-1 text-sm">
                <li>Cultural Calendar</li>
                <li>Bookings</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">About</h3>
              <ul className="space-y-1 text-sm">
                <li>Our Mission</li>
                <li>Preservation Efforts</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-2">Get in Touch</h3>
            <button className="px-4 py-2 bg-orange-500 rounded text-white font-bold">
              Contact Us
            </button>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default CulturalCalender;