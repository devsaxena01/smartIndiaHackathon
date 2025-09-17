import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { signupUser } from "./../../apiCalls/auth";
// import { toast } from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { showLoader, hideLoader } from "../../redux/loaderSlice";
import { User, Mail, Lock } from "lucide-react";

const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
// +

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = null;
    try {
      dispatch(showLoader());
      response = await signupUser({ firstname, lastname, email, password });
      dispatch(hideLoader());

      if (response.success) {
        toast.success(response.message);
        navigate("/login");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      dispatch(hideLoader());
      toast.error(response.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen 
      bg-gradient-to-br from-gray-700 via-black to-gray-800 px-4 sm:px-6 lg:px-8">
      
      {/* Card with glowing border */}
      <div className="relative bg-gray-900/70 backdrop-blur-xl 
        p-6 sm:p-8 lg:p-10 rounded-2xl 
        w-full max-w-sm sm:max-w-md lg:max-w-lg 
        border border-cyan-500/30">
        
        {/* Neon Glow Effect */}
        <div className="absolute -inset-0.5 
          rounded-2xl "></div>

        {/* Content */}
        <div className="relative z-10">

          {/* Header */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2 
            text-center text-cyan-400">
            Create Account
          </h2>

          <p className="text-center text-gray-400 mb-6 text-xs sm:text-sm lg:text-base">
            Sign up to unlock lightning speed ⚡
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* First Name */}
            <div>

              <label htmlFor="firstName" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1">
                First Name
              </label>
              
              <div className="relative">
                <User className="absolute left-3 top-3 text-cyan-400" size={18} />
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter First Name"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 sm:py-2.5 bg-black/40 border border-cyan-500/40 
                    text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 
                    placeholder-gray-500 text-sm sm:text-base"
                />
              </div>

            </div>

            {/* Last Name */}
            <div>

              <label htmlFor="lastName" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1">
                Last Name
              </label>
              
              <div className="relative">
                <User className="absolute left-3 top-3 text-cyan-400" size={18} />
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter Last Name"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 sm:py-2.5 bg-black/40 border border-cyan-500/40 
                    text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 
                    placeholder-gray-500 text-sm sm:text-base"
                />
              </div>

            </div>

            {/* Email */}
            <div>

              <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1">
                Email
              </label>
              
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-cyan-400" size={18} />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 sm:py-2.5 bg-black/40 border border-cyan-500/40 
                    text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 
                    placeholder-gray-500 text-sm sm:text-base"
                />
              </div>

            </div>

            {/* Password */}
            <div>

              <label htmlFor="password" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1">
                Password
              </label>
              
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-cyan-400" size={18} />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 sm:py-2.5 bg-black/40 border border-cyan-500/40 
                    text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 
                    placeholder-gray-500 text-sm sm:text-base"
                />
              </div>
              
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-800 to-blue-800 text-white 
                font-semibold py-2.5 rounded-lg hover:from-cyan-400 hover:to-blue-500 
                active:scale-95 transition transform  
                text-sm sm:text-base"
            >
              ⚡ Sign Up
            </button>

          </form>

          {/* Footer */}
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