import React from 'react';
import { Link } from 'react-router-dom';

function WCMHome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Waste Collection Management</h1>
      <p className="text-lg mb-8 text-gray-700">Choose your role to proceed:</p>
      
      <div className="flex space-x-4">
        <Link to="/WCMAdmin_Home" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          Admin
        </Link>
        <Link to="/WCMUser_Home" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">
          User
        </Link>
        <Link to="/WCMDriver_Home" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 transition duration-300">
          Driver
        </Link>
      </div>
    </div>
  );
}

export default WCMHome;
