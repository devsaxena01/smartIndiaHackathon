import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import VirtualTour from "./pages/VirtualTour";
import InteractiveMap from "./pages/InteractiveMap";
import DigitalArchives from "./pages/DigitalArchives";
import CulturalCalender from "./pages/CulturalCalender";
import Booking from "./pages/Booking";
import Chatbot from "./pages/Chatbot";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all normal pages */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/virtual-tours" element={<VirtualTour />} />
          <Route path="/interactive-map/:id" element={<InteractiveMap />} />
          <Route path="/digital-archives" element={<DigitalArchives />} />
          <Route path="/cultural-calender" element={<CulturalCalender />} />
          <Route path="/booking" element={<Booking />} />
        </Route>

        {/* Chatbot page (without Header & Footer) */}
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
