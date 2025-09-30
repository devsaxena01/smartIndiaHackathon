import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/users/registerUser",
        formData
      );
      console.log("Registration Successful", response.data);
      navigate("/login");
    } catch (error) {
      console.log("Error occurred", error);
      setError(error.response?.data.message || "Registration Failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen 
      bg-gradient-to-br from-gray-700 via-black to-gray-800 px-4 sm:px-6 lg:px-8">
      
      <div className="relative bg-gray-900/70 backdrop-blur-xl 
        p-6 sm:p-8 lg:p-10 rounded-2xl 
        w-full max-w-sm sm:max-w-md lg:max-w-lg 
        border border-cyan-500/30">
        
        <div className="absolute -inset-0.5 rounded-2xl "></div>

        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2 
            text-center text-cyan-400">
            Create Account
          </h2>

          <p className="text-center text-gray-400 mb-6 text-xs sm:text-sm lg:text-base">
            Sign up to unlock lightning speed ⚡
          </p>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            
            <div>
              <label htmlFor="username" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-cyan-400" size={18} />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 sm:py-2.5 bg-black/40 border border-cyan-500/40 
                    text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 
                    placeholder-gray-500 text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <label htmlFor="fullName" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-cyan-400" size={18} />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 sm:py-2.5 bg-black/40 border border-cyan-500/40 
                    text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 
                    placeholder-gray-500 text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-cyan-400" size={18} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 sm:py-2.5 bg-black/40 border border-cyan-500/40 
                    text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 
                    placeholder-gray-500 text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-cyan-400" size={18} />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 sm:py-2.5 bg-black/40 border border-cyan-500/40 
                    text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 
                    placeholder-gray-500 text-sm sm:text-base"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-800 to-blue-800 text-white 
                font-semibold py-2.5 rounded-lg hover:from-cyan-400 hover:to-blue-500 
                active:scale-95 transition transform  
                text-sm sm:text-base"
            >
               Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-gray-400 text-xs sm:text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-400 hover:underline font-medium">
              Login
            </Link>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Signup;