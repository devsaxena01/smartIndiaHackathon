import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* logo and website name */}
        <div>
          <h3 className="text-xl font-bold text-orange-500">✺ Monastery360</h3>
          <p className="mt-3 text-sm">
            Preserving and promoting Sikkim's rich monastic heritage through
            digital innovation.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4 text-lg">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-white font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer"><Link to="/virtual-tours"> Virtual Tours </Link></li>
            <li className="hover:text-white cursor-pointer"><Link to="/"> Interactive Map </Link></li>
            <li className="hover:text-white cursor-pointer"><Link to="/digital-archives"> Digital Archives </Link></li>
          </ul>
        </div>

        {/* engage */}
        <div>
          <h4 className="text-white font-semibold mb-3">Engage</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer"><Link to="/cultural-calender"> Cultural Calender </Link></li>
            <li className="hover:text-white cursor-pointer"><Link to="/booking"> Booking </Link></li>
            <li className="hover:text-white cursor-pointer"><Link to="/contact"> Contact Us </Link></li>
          </ul>
        </div>

        {/* about*/}
        <div>
          <h4 className="text-white font-semibold mb-3">About</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer"><Link to="/"> Our Mission </Link></li>
           <li className="hover:text-white cursor-pointer"><Link to="/"> Preservation Efforts </Link></li>
          </ul>
          <button 
          onClick={() => navigate("/contact")}
          className="mt-4 border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-800 w-full md:w-auto">
            Contact Us
          </button>
        </div>
      </div>

      {/*bottom Bar */}
      <div className="text-center text-xs sm:text-sm text-gray-500 mt-8 border-t border-gray-800 pt-6">
        © 2025 Monastery360 | Preserving Culture with Technology
      </div>
    </footer>
  )
}

export default Footer
