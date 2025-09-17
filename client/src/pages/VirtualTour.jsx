// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const VirtualTour = () => {
//   const [tours, setTours] = useState([]);       // fetched data
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);

//   // Fetch monasteries from backend
//   useEffect(() => {
//     const fetchTours = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/monasteries");
//         const data = await res.json();
//         setTours(data);
//       } catch (error) {
//         console.error("Error fetching monasteries:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTours();
//   }, []);

//   // Filter monasteries
//   const filteredTours = tours.filter((tour) =>
//     tour.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Suggested monasteries
//   const suggestedTours =
//     searchTerm && filteredTours.length > 0
//       ? tours.filter((tour) => !filteredTours.includes(tour)).slice(0, 3)
//       : [];

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <h2 className="text-2xl">Loading Monasteries...</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <section className="relative">
//         <img
//           src="https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2016/11/Tawang-Monastery-Sikkim.jpg"
//           alt="Rumtek Monastery"
//           className="w-full h-[670px] object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-10">
//           <h2 className="text-3xl font-bold mb-3">
//             Explore Sikkim’s Monasteries – Virtually
//           </h2>
//           <p className="max-w-2xl text-gray-300">
//             Embark on a spiritual journey through sacred monasteries, discover
//             their history, and experience breathtaking 360° virtual tours from
//             anywhere in the world.
//           </p>
//         </div>
//       </section>

//       {/* Search & Featured Virtual Tours */}
//       <section className="py-12 px-6">
//         <h3 className="text-2xl font-semibold text-center mb-10">
//           Featured Virtual Tours
//         </h3>

//         {/* Search Bar */}
//         <div className="max-w-xl mx-auto relative mb-10">
//           <input
//             type="text"
//             placeholder="Search monasteries, locations..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="text-black w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//           />
//           <button className="absolute right-3 top-2 text-amber-600">🔍</button>
//         </div>

//         {/* Search Results */}
//         {searchTerm && (
//           <div>
//             <h4 className="text-xl mb-4">
//               Search Results for:{" "}
//               <span className="text-amber-400">{searchTerm}</span>
//             </h4>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//               {filteredTours.length > 0 ? (
//                 filteredTours.map((tour) => (
//                   <TourCard key={tour._id} tour={tour} />
//                 ))
//               ) : (
//                 <p className="text-gray-400">
//                   No monasteries found. Try another search.
//                 </p>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Suggested Section */}
//         {suggestedTours.length > 0 && (
//           <div className="mt-12">
//             <h4 className="text-xl mb-4 text-amber-400">You may also like</h4>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//               {suggestedTours.map((tour) => (
//                 <TourCard key={tour._id} tour={tour} />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Default Grid when no search */}
//         {!searchTerm && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//             {tours.map((tour) => (
//               <TourCard key={tour._id} tour={tour} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// const TourCard = ({ tour }) => (
//   <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition">
//     <img
//       src={tour.img}
//       alt={tour.title}
//       className="h-40 w-full object-cover"
//     />
//     <div className="p-4">
//       <h4 className="text-lg font-semibold mb-2">{tour.title}</h4>
//       <p className="text-gray-400 text-sm mb-4">{tour.desc}</p>
//       <Link to={`/monastery/${tour._id}`}>
//         <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded">
//           Explore Tour
//         </button>
//       </Link>
//     </div>
//   </div>
// );

// export default VirtualTour;





import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const VirtualTour = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

 const handleSearch = async () => {
  if (!query.trim()) return;

  try {
    const res = await axios.get(
      `http://localhost:5000/api/monasteries/search?name=${query}`
    );
    const data = await res.json();

    if (res.ok) {
      setResults(data);
    } else {
      setResults([]); // no results
    }
  } catch (err) {
    console.error("Error fetching monasteries:", err);
    setResults([]);
  }
};

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2016/11/Tawang-Monastery-Sikkim.jpg"
          alt="Monastery"
          className="w-full h-[670px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-10">
          <h2 className="text-3xl font-bold mb-3">
            Explore Sikkim’s Monasteries – Virtually
          </h2>
          <p className="max-w-2xl text-gray-300">
            Embark on a spiritual journey through sacred monasteries, discover
            their history, and experience breathtaking 360° virtual tours.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-6">
        <h3 className="text-2xl font-semibold text-center mb-10">
          Search Monasteries
        </h3>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-10">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search monasteries, locations..."
            className="text-black w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button
            onClick={handleSearch}
            className="absolute right-3 top-2.5 text-amber-600"
          >
            🔍
          </button>
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {results.map((monastery) => (
              <div
                key={monastery._id}
                className="bg-gray-900 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={monastery.image?.[0]} // ✅ first image
                  alt={monastery.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">
                    {monastery.name}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    {monastery.description}
                  </p>
                  <Link to={`/monastery/${monastery._id}`}>
                    <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded">
                      Explore Tour
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">
            No monasteries found. Try searching!
          </p>
        )}
      </section>
    </div>
  );
};

export default VirtualTour;


