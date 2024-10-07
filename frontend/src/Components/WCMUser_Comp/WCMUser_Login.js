import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserHomeHeader from "../FirstHome/UserHomeHeader"; // Import UserHomeHeader component

function WCMUser_Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // State for validation errors
  const [emailError, setEmailError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));

    // Real-time validation for email
    if (name === "email") {
      validateEmail(value);
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError(""); // Clear error if email is valid
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailError) {
      alert("Please fix the errors before submitting");
      return;
    }

    try {
      const response = await sendRequest();
      if (response && response.message === "Login successful") {
        alert("Login successful");
        navigate("/userHomePage");
      } else {
        alert("Login error: " + (response.message || "Unknown error"));
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const sendRequest = async () => {
    const response = await axios.post("http://localhost:5001/users/login", {
      email: user.email,
      password: user.password,
    });
    return response.data;
  };

  return (
    <div className="min-h-screen">
      <UserHomeHeader />
      <div className="bg-slate-100 p-10">
        <div className="max-w-md mx-auto bg-white p-10 shadow-xl rounded-lg mt-12 border border-gray-200 mb-14">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            User Login
          </h1>
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-600 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={user.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-2">{emailError}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-8">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-600 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                value={user.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WCMUser_Login;
