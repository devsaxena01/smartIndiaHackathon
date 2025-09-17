import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ChatIcon from '@mui/icons-material/Chat';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white font-sans sticky top-0 z-50 shadow-md">
      <nav className="flex justify-between items-center px-6 py-4 shadow-md ">
        {/* Logo */}
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400
 animate-pulse">
          <Link to="/">✺ Monastery360</Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8  font-medium ">
          <li>
            <Link to="/" className="text-gray-300 hover:text-purple-400">Home</Link>
          </li>
          <li>
            <Link to="/virtual-tours" className="text-gray-300 hover:text-purple-400"> Virtual Tours </Link>
          </li>
          {/* <li>
            <Link to="/interactive-map" className="text-gray-300 hover:text-purple-400"> Interactive Map </Link>
          </li> */}
          <li>
            <Link to="/digital-archives" className="text-gray-300 hover:text-purple-400"> Digital Archives </Link>
          </li>
          <li>
            <Link to="/cultural-calender" className="text-gray-300 hover:text-purple-400"> Cultural Calender </Link>
          </li>
          <li>
            <Link to="/booking" className="text-gray-300 hover:text-purple-400"> Booking </Link>
          </li>
          <Link to="/chatbot" className="text-gray-300 hover:text-purple-400">LamaBot AI</Link>
        </ul>

        <button className="hidden md:block px-4 py-2 rounded-md bg-gray-900 text-sm text-gray-300 border border-gray-700 focus:outline-none focus:ring focus:ring-orange-500">
           <Link to="/login" className="">Login</Link>
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-orange-500 animate-slide-down"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700 px-6 py-4 space-y-4">
          <Link
            to="/"
            className="block text-sm text-gray-300 hover:text-purple-400"
            onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            to="/virtual-tours"
            className="block text-sm text-gray-300 hover:text-purple-400"
            onClick={() => setIsOpen(false)}>
            Virtual Tours
          </Link>
          {/* <Link
            to="/interactive-map"
            className="block text-sm text-gray-300 hover:text-purple-400"
            onClick={() => setIsOpen(false)} >
            Interactive Map
          </Link> */}
          <Link
            to="/digital-archives"
            className="block text-sm text-gray-300 hover:text-purple-400"
            onClick={() => setIsOpen(false)}>
            Digital Archives
          </Link>
          <Link
            to="/cultural-calender"
            className="block text-sm text-gray-300 hover:text-purple-400"
            onClick={() => setIsOpen(false)}>
            Cultural Calender
          </Link>
          <Link
            to="/booking"
            className="block text-sm text-gray-300 hover:text-purple-400"
            onClick={() => setIsOpen(false)}>
            Booking
          </Link>
          <Link to="/chatbot" className="block text-sm text-gray-300 hover:text-purple-400">Ask AI</Link>

          <button className="w-full px-3 py-2 rounded-md bg-gray-900 text-sm text-gray-300 border border-gray-700 focus:outline-none focus:ring focus:ring-orange-500">Login</button>
        </div>
      )}
    </header>
  );
};

export default Header;
