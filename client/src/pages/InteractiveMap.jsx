import React, { useState } from 'react';

const InteractiveMap = () => {
  const [activeTab, setActiveTab] = useState('monasteries');
  
  // Mock data for the monastery
  const monasteryData = {
    name: "Rumtek Monastery",
    location: "East Sikkim, Gangtok",
    description: "Rumtek Monastery is one of the most significant monasteries in Sikkim, showcasing traditional Tibetan architecture and housing rare Buddhist scriptures and artifacts.",
    tags: ["Buddhist", "Heritage", "Tibetan"],
    image: "https://z-cdn-media.chatglm.cn/files/1aeb731c-aa76-4cf4-b05e-a40b33630b88_WhatsApp%20Image%202025-09-13%20at%2000.26.20_bf63c5a3.jpg?auth_key=1789239965-c429d1035dec46f9b0b84d3eea49407b-0-1063ca3ad80bc1a31ad8e0fec8ae2645"
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      {/* Navigation Bar */}
      {/* <nav className="bg-amber-900 shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center">
            <span className="text-white font-bold">M</span>
          </div>
          <span className="text-xl font-bold text-amber-50">Monastery360</span>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-amber-100 hover:text-white">Home</a>
          <a href="#" className="text-amber-100 hover:text-white">Map</a>
          <a href="#" className="text-amber-100 hover:text-white">Monasteries</a>
          <a href="#" className="text-amber-100 hover:text-white">Tours</a>
          <a href="#" className="text-amber-100 hover:text-white">About</a>
        </div>
        
        <button className="bg-amber-600 text-amber-50 px-4 py-2 rounded-lg hover:bg-amber-700 transition">
          Login
        </button>
      </nav> */}

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">
            Interactive Map: Explore Sikkim's Monastic Heritage
          </h1>
          <p className="text-amber-800 max-w-2xl mx-auto">
            Discover the spiritual and cultural treasures of Sikkim through our interactive map
          </p>
        </div>

        {/* Search and Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search monasteries, locations..."
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button className="absolute right-2 top-2 text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          
          <div className="flex space-x-2">
            <button 
              onClick={() => setActiveTab('monasteries')}
              className={`px-4 py-2 rounded-lg transition ${activeTab === 'monasteries' ? 'bg-amber-700 text-amber-50' : 'bg-amber-200 text-amber-800 hover:bg-amber-300'}`}
            >
              Monasteries
            </button>
            <button 
              onClick={() => setActiveTab('points')}
              className={`px-4 py-2 rounded-lg transition ${activeTab === 'points' ? 'bg-amber-700 text-amber-50' : 'bg-amber-200 text-amber-800 hover:bg-amber-300'}`}
            >
              Points of Interest
            </button>
          </div>
        </div>

        {/* Map and Info Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map Section */}
          <div className="lg:w-2/3 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative h-96 md:h-[500px] bg-amber-100">
              {/* Placeholder for map */}
              <img 
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Sikkim Map" 
                className="w-full h-full object-cover"
              />
              
              {/* Map markers */}
              <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 rounded-full bg-red-700 border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:bg-red-800 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 rounded-full bg-red-700 border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:bg-red-800 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2">
                <div className="w-8 h-8 rounded-full bg-red-700 border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:bg-red-800 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-amber-50">
              <div className="flex justify-between items-center">
                <p className="text-amber-800">Showing {activeTab === 'monasteries' ? 'monasteries' : 'points of interest'} in Sikkim</p>
                <button className="text-amber-700 hover:text-amber-900 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Reset View
                </button>
              </div>
            </div>
          </div>

          {/* Monastery Info Card */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
              <div className="h-48 bg-amber-200">
                <img 
                  src={monasteryData.image} 
                  alt={monasteryData.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold text-amber-900">{monasteryData.name}</h2>
                  <div className="flex items-center text-amber-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-amber-800">4.8</span>
                  </div>
                </div>
                
                <div className="flex items-center text-amber-700 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{monasteryData.location}</span>
                </div>
                
                <p className="text-amber-800 mb-4">{monasteryData.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {monasteryData.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-amber-700 text-amber-50 px-4 py-2 rounded-lg hover:bg-amber-800 transition flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    View Virtual Tour
                  </button>
                  <button className="flex-1 bg-white border border-amber-700 text-amber-700 px-4 py-2 rounded-lg hover:bg-amber-50 transition flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book a Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InteractiveMap;