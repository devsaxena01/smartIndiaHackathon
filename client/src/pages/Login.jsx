import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
//   const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = null;
    try {
      dispatch(showLoader());
      response = await loginUser({ email, password });
      dispatch(hideLoader());

      if (response.success) {
        toast.success(response.message);
        localStorage.setItem("token", response.token);
        navigate("/");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      dispatch(hideLoader());
      toast.error(response?.message || "Something went wrong");
    }
  };

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

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              autoComplete="off"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

export default Login;
