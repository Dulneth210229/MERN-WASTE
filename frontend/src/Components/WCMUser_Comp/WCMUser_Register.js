import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserHomeHeader from "../FirstHome/UserHomeHeader";

function WCMUser_Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    NID: "",
    address: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    NID: "",
  });

  // Regex patterns
  const namePattern = /^[A-Za-z\s]+$/; // Only letters and spaces
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valid email format
  const NIDPattern = /^(\d{10,15}[A-Za-z]?|\d{10,15})$/; // 10-15 digits with an optional letter

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));

    validateField(name, value);
  };

  const validateField = (field, value) => {
    let error = "";

    if (field === "name") {
      error = namePattern.test(value)
        ? ""
        : "Name must not contain digits or special characters.";
    } else if (field === "email") {
      error = emailPattern.test(value) ? "" : "Please enter a valid email.";
    } else if (field === "NID") {
      error = NIDPattern.test(value)
        ? ""
        : "NID must be 10-15 digits, optionally followed by a letter.";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error,
    }));
  };

  //test

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!errors.name && !errors.email && !errors.NID) {
      sendRequest()
        .then(() => {
          alert("Register Success");
          navigate("/WCMUser_Login");
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      alert("Please fix the errors before submitting.");
    }
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5001/users", {
        name: String(user.name),
        email: String(user.email),
        password: String(user.password),
        NID: String(user.NID),
        address: String(user.address),
      })
      .then((res) => res.data);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <UserHomeHeader />
      <div className="bg-gray-100 p-1">
        <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg mt-2 ">
          <h1 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
            User Registration
          </h1>
          <form onSubmit={handleSubmit} className="">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={user.name}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-blue-500"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="NID"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                NID
              </label>
              <input
                type="text"
                name="NID"
                id="NID"
                required
                value={user.NID}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                  errors.NID
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-blue-500"
                }`}
              />
              {errors.NID && (
                <p className="text-red-500 text-sm">{errors.NID}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                required
                value={user.address}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
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
                className={`w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-blue-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WCMUser_Register;
