import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function WCMUser_Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
      NID: "",        // Add NID state
      address: ""     // Add address state
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      sendRequest().then(() => {
        alert("Register Success");
        navigate("/WCMUser_Home");
      }).catch((err) => {
        alert(err.message);
      });
    };
  
    const sendRequest = async () => {
      await axios.post("http://localhost:5002/users", {
        name: String(user.name),
        email: String(user.email),
        password: String(user.password),
        NID: String(user.NID),        // Include NID in request
        address: String(user.address)  // Include address in request
      })
      .then((res) => res.data);
    };
  
  return (
    <div className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg mt-10">
    <h1 className="text-2xl font-semibold text-gray-700 mb-6 text-center">User Login</h1>
    <form onSubmit={handleSubmit}>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Gmail</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={user.email}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
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
        Login
      </button>
    </form>
  </div>
  )
}

export default WCMUser_Login
