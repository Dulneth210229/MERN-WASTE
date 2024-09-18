import React from 'react';
import { Link } from "react-router-dom";

function AccountNav() {
  return (
    <header className="bg-gray-800 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold text-white flex items-center space-x-2">
            <span className="text-emerald-400">Fresh</span>
            <span className="text-teal-300">Colombo</span>
          </h1>
        </Link>
        
        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link 
                to="/" 
                className="text-white hover:text-gray-300 transition duration-300">
                Home
              </Link>
            </li>
           
            <li>
              <Link 
                to="/ViewSalary" 
                className="text-white hover:text-gray-300 transition duration-300">
                View Salary
              </Link>
            </li>
            <li>
              <Link 
                to="/AddSalary" 
                className="text-white hover:text-gray-300 transition duration-300">
                Add Salary
              </Link>
            </li>
  
            <li>
              <Link 
                to="/sign-in" 
                className="text-white hover:text-gray-300 transition duration-300">
                Sign In
              </Link>
            </li>
            <li>
              <Link 
                to="/sign-up" 
                className="text-white hover:text-gray-300 transition duration-300">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default AccountNav;
