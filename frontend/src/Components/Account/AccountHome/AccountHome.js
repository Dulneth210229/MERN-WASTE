import React from 'react';
import AccountNav from '../AccountNav/AccountNav';
import { Link } from "react-router-dom";

function AccountHome() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Navigation */}
      <AccountNav />

      {/* Header Section */}
      <div className="w-full max-w-2xl mt-10 bg-white shadow-lg rounded-lg p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-700 mb-6">Manage Salary</h1>
        </div>

        {/* Button Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <Link to="/Salary">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Salary
            </button>
          </Link>

          <Link to="/ViewSalary">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              View Salary
            </button>
          </Link>

          <Link to="/GenerateSalary">
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Generate Salary
            </button>
          </Link>

          <Link to="/AddSalary">
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Add Salary
            </button>
          </Link>

          <Link to="/SalaryDetails">
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Salary Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AccountHome;
