import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/users/login",
        formData
      );
      console.log("Login Successful", response.data);

      localStorage.setItem("accessToken", response.data.data.accessToken);
      localStorage.setItem("user", JSON.stringify(response.data.data.user));

      navigate("/")
    } catch (error) {
      console.log("Error occurred", error);
      setError(error.response?.data.message || "Login Failed. Check your username and password");
    }
  };

  const { username, password } = formData;

  return (
    <div className="flex items-center justify-center min-h-screen 
      bg-gradient-to-br from-gray-700 via-black to-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="relative bg-gray-900/70 backdrop-blur-xl 
        p-6 sm:p-8 lg:p-10 rounded-2xl 
        w-full max-w-sm sm:max-w-md lg:max-w-lg 
        border border-cyan-500/30 text-white">
          
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2 
            text-center text-cyan-400">
          Login to Your Account
        </h2>
        <p className="text-center text-gray-400 mb-6 text-xs sm:text-sm lg:text-base">
            Login to unlock lightning speed ⚡
        </p>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div>
            <label htmlFor="username" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              placeholder="Enter your username"
              value={username}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 sm:py-2.5 bg-black/40 border border-cyan-500/40 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 
                    placeholder-gray-500 text-sm sm:text-base"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Enter your password"
              value={password}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 sm:py-2.5 bg-black/40 border border-cyan-500/40 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 
                    placeholder-gray-500 text-sm sm:text-base"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-800 to-blue-800 text-white 
                font-semibold py-2.5 rounded-lg hover:from-cyan-400 hover:to-blue-500 
                active:scale-95 transition transform  
                text-sm sm:text-base"
          >
            ⚡ Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400 text-xs sm:text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-cyan-400 hover:underline font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login