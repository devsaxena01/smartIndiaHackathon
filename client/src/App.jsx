import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import VirtualTour from './pages/VirtualTour'
import InteractiveMap from './pages/InteractiveMap'
import DigitalArchives from './pages/DigitalArchives'
import CulturalCalender from './pages/CulturalCalender'
import Booking from './pages/Booking'
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
       <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/virtual-tours" element={<VirtualTour />} />
            <Route path="/interactive-map" element={<InteractiveMap />} />
            <Route path="/digital-archives" element={<DigitalArchives />} />
            <Route path="/cultural-calender" element={<CulturalCalender />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
      </main>
      <Footer/>
      </div>
    </Router>
  );
}

export default App
