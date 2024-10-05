import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function WCMDriver_Register() {
  const navigate = useNavigate();
  const [driver, setDriver] = useState({
    name: "",
    email: "",
    password: "",
    NID: "",         // NID field
    Dlicense: ""     // Driver's license field
  });

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDriver((prevDriver) => ({
      ...prevDriver,
      [name]: value
    }));
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequest().then(() => {
      alert("Register Success");
      navigate("/WCMDriver_Home"); // Navigate to the driver home page on success
    }).catch((err) => {
      alert(err.message);
    });
  };

  // Send request to server for registration
  const sendRequest = async () => {
    await axios.post("http://localhost:5001/drivers", {
      name: String(driver.name),
      email: String(driver.email),
      password: String(driver.password),
      NID: String(driver.NID),             // Include NID in request
      Dlicense: String(driver.Dlicense),   // Include Dlicense in request
    })
    .then((res) => res.data);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Driver Registration</h1>
      <form onSubmit={handleSubmit}>
        {/* Name field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={driver.name} // Correct the state to use 'driver'
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* NID field */}
        <div className="mb-4">
          <label htmlFor="NID" className="block text-sm font-medium text-gray-700 mb-1">NID</label>
          <input
            type="text"
            name="NID"
            id="NID"
            required
            value={driver.NID} // Correct state to use 'driver'
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Driver's license field */}
        <div className="mb-4">
          <label htmlFor="Dlicense" className="block text-sm font-medium text-gray-700 mb-1">Driver's License</label>
          <input
            type="text"
            name="Dlicense"
            id="Dlicense"
            required
            value={driver.Dlicense} // Correct state to use 'driver'
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={driver.email} // Correct state to use 'driver'
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password field */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={driver.password} // Correct state to use 'driver'
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default WCMDriver_Register;
