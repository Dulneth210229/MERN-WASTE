import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function WCMDriver_Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Welcome to Driver's Portal</h1>

      <div className="space-y-4 w-full max-w-sm">
        <Link
          to="/WCMDriver_Register"
          className="block w-full bg-blue-500 text-white text-center py-3 rounded-md shadow hover:bg-blue-600 transition duration-300"
        >
          New Employee? Register Here
        </Link>
        <Link
          to="/WCMUser_Login"
          className="block w-full bg-green-500 text-white text-center py-3 rounded-md shadow hover:bg-green-600 transition duration-300"
        >
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
}

export default WCMDriver_Home;
