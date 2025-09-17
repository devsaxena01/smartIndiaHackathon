import React, { useState } from "react";

const DigitalArchives = () => {
  const [filters, setFilters] = useState({
    contentType: "",
    era: "",
    monastery: "",
    keyword: "",
  });

  const archives = [
    {
      title: "Dharma Chakra Manuscript",
      type: "Manuscript",
      monastery: "Rumtek Monastery",
      era: "17th Century",
      image:
        "https://www.christies.com/img/LotImages/2022/NYR/2022_NYR_21866_0014_012(a_rare_ritual_manuscript_of_chakrasamvaras_sixty-four_forms_a_double-s_d6389798041733).jpg?mode=max",
    },
    {
      title: "Mandala of Compassion (Mural)",
      type: "Mural",
      monastery: "Penayangtse Monastery",
      era: "18th-19th Century",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTMkKkvQXGocz_03IwzLD-CCrWXNinMSMGSw&s",
    },
    {
      title: "Royal Edict of Chogyal",
      type: "Document",
      monastery: "Phodong Monastery",
      era: "Early 20th Century",
      image:
        "https://images.prismic.io/fiftytwo/e5161b0d-9ac1-41e4-82f3-c0112fc8bf22_Fiftytwo-Blog-chogyal-of-sikkim-4.png?auto=compress,format&rect=0,84,200,108&w=1200&h=650",
    },
    {
      title: "Monastic Rituals (Photo Series)",
      type: "Photograph",
      monastery: "Tashiding Monastery",
      era: "Early 20th Century",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ICPyj_hhWcV9d4IU1k8oMihH1K90lXoW2Q&s",
    },
    {
      title: "Precious Sutra Scrolls",
      type: "Manuscript",
      monastery: "Rumtek Monastery",
      era: "17th Century",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQglfrMaAma982OYYoAdTr9iTyQcMh9u2CpQ&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQglfrMaAma982OYYoAdTr9iTyQcMh9u2CpQ&s",
    },
    {
      title: "Guardian Deities (Mural)",
      type: "Mural",
      monastery: "Rabdentse Ruins",
      era: "18th-19th Century",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6f0xcwkP80sxJGbU_1PynCBM4rGR8NYIfkA&s",
    },
    {
      title: "Land Grant Records",
      type: "Document",
      monastery: "Gangtok Central Archive",
      era: "Modern Era",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQE1j_3EkQPg3Sud2qabmtQwliKNVRibUtGw&s",
    },
    {
      title: "Life in the Sangha (Photo)",
      type: "Photograph",
      monastery: "Phodong Monastery",
      era: "Modern Era",
      image:
        "https://library.88guru.com/wp-content/uploads/2022/12/the-sangha-3.jpg",
    },
  ];

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredArchives = archives.filter((item) => {
    return (
      (filters.contentType === "" ||
        item.type.toLowerCase().includes(filters.contentType.toLowerCase())) &&
      (filters.era === "" ||
        item.era.toLowerCase().includes(filters.era.toLowerCase())) &&
      (filters.monastery === "" ||
        item.monastery.toLowerCase().includes(filters.monastery.toLowerCase())) &&
      (filters.keyword === "" ||
        item.title.toLowerCase().includes(filters.keyword.toLowerCase()))
    );
  });

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Main Section */}
      <div className="flex p-8 space-x-8">
        {/* Sidebar Filters */}
        <div className="w-1/4 space-y-6">
          <div>
            <h2 className="font-bold mb-2">AI Search</h2>
            <input
              type="text"
              name="keyword"
              placeholder="Search archives..."
              value={filters.keyword}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
            />
          </div>

          <div>
            <h2 className="font-bold mb-2">Content Type</h2>
            <select
              name="contentType"
              value={filters.contentType}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
            >
              <option value="">All</option>
              <option value="Manuscript">Manuscript</option>
              <option value="Mural">Mural</option>
              <option value="Document">Document</option>
              <option value="Photograph">Photograph</option>
            </select>
          </div>

          <div>
            <h2 className="font-bold mb-2">Era/Period</h2>
            <select
              name="era"
              value={filters.era}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
            >
              <option value="">All</option>
              <option value="17th Century">17th Century</option>
              <option value="18th-19th Century">18th-19th Century</option>
              <option value="Early 20th Century">Early 20th Century</option>
              <option value="Modern Era">Modern Era</option>
            </select>
          </div>

          <div>
            <h2 className="font-bold mb-2">Monastery/Origin</h2>
            <select
              name="monastery"
              value={filters.monastery}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
            >
              <option value="">All</option>
              <option value="Rumtek Monastery">Rumtek Monastery</option>
              <option value="Penayangtse Monastery">Penayangtse Monastery</option>
              <option value="Phodong Monastery">Phodong Monastery</option>
              <option value="Tashiding Monastery">Tashiding Monastery</option>
              <option value="Rabdentse Ruins">Rabdentse Ruins</option>
              <option value="Gangtok Central Archive">Gangtok Central Archive</option>
            </select>
          </div>

          <button
            onClick={() =>
              setFilters({ contentType: "", era: "", monastery: "", keyword: "" })
            }
            className="px-4 py-2 bg-orange-500 rounded text-white font-bold w-full"
          >
            Reset Filters
          </button>
        </div>

        {/* Archive Grid */}
        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredArchives.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-gray-400">Type: {item.type}</p>
                <p className="text-sm text-gray-400">Monastery: {item.monastery}</p>
                <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold bg-gray-700 text-white rounded">
                  {item.era}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalArchives;
