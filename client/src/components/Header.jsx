import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  // ✅ logout with confirmation
  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem("accessToken");
      setIsLoggedIn(false);
      navigate("/login");
    }
  };

  return (
    <header className="bg-gray-900 text-white font-sans sticky top-0 z-50 shadow-md">
      <nav className="flex justify-between items-center px-6 py-4">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 animate-pulse">
          <Link to="/">✺ Monastery360</Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-medium items-center">
          <li>
            <Link to="/" className="text-gray-300 hover:text-purple-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/virtual-tours" className="text-gray-300 hover:text-purple-400 transition">
              Virtual Tours
            </Link>
          </li>
          <li>
            <Link to="/digital-archives" className="text-gray-300 hover:text-purple-400 transition">
              Digital Archives
            </Link>
          </li>
          <li>
            <Link to="/cultural-calender" className="text-gray-300 hover:text-purple-400 transition">
              Cultural Calendar
            </Link>
          </li>
          <li>
            <Link to="/booking" className="text-gray-300 hover:text-purple-400 transition">
              Booking
            </Link>
          </li>
          <li>
            <Link to="/chatbot" className="text-gray-300 hover:text-purple-400 transition">
              LamaBot AI
            </Link>
          </li>
          <li>
            <Link to="/team" className="text-gray-300 hover:text-purple-400 transition">
              Our Team
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="hidden md:block px-4 py-2 rounded-md bg-gray-800 text-sm text-gray-300 border border-gray-700 hover:bg-gray-700 transition"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="hidden md:block px-4 py-2 rounded-md bg-gray-800 text-sm text-gray-300 border border-gray-700 hover:bg-gray-700 transition"
          >
            Login
          </Link>
        )}

        {/* Mobile menu button */}
        <button
          className="md:hidden text-purple-400 hover:text-white transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 px-6 py-4 space-y-4 animate-slide-down">
          <Link
            to="/"
            className="block text-gray-300 hover:text-purple-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/virtual-tours"
            className="block text-gray-300 hover:text-purple-400"
            onClick={() => setIsOpen(false)}
          >
            Virtual Tours
          </Link>
          <Link
            to="/digital-archives"
            className="block text-gray-300 hover:text-purple-400"
            onClick={() => setIsOpen(false)}
          >
            Digital Archives
          </Link>
          <Link
            to="/cultural-calender"
            className="block text-gray-300 hover:text-purple-400"
            onClick={() => setIsOpen(false)}
          >
            Cultural Calendar
          </Link>
          <Link
            to="/booking"
            className="block text-gray-300 hover:text-purple-400"
            onClick={() => setIsOpen(false)}
          >
            Booking
          </Link>
          <Link
            to="/chatbot"
            className="block text-gray-300 hover:text-purple-400"
            onClick={() => setIsOpen(false)}
          >
            LamaBot AI
          </Link>
          <Link
            to="/team"
            className="block text-gray-300 hover:text-purple-400"
            onClick={() => setIsOpen(false)}
          >
            Our Team
          </Link>

          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-sm text-gray-300 border border-gray-700 hover:bg-gray-700 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="block w-full px-3 py-2 rounded-md bg-gray-800 text-sm text-gray-300 border border-gray-700 text-center hover:bg-gray-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;