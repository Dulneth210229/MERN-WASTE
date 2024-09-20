import React from "react";
import { Link } from "react-router-dom";

function CategoryNav() {
  return (
    <header className="bg-slate-400 text-black">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        {/* Logo Section */}
        <Link to="/">
          <h1 className="text-2xl sm:text-3xl font-bold flex items-center">
            <span className="text-black">Fresh</span>
            <span className="text-emerald-500 ml-1">Colombo</span>
          </h1>
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/CatHome"
                className="hover:text-emerald-500 transition duration-300 ease-in-out text-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/CategoryAdd"
                className="hover:text-emerald-500 transition duration-300 ease-in-out text-lg"
              >
                Add Category
              </Link>
            </li>
            <li>
              <Link
                to="/CategoryDetails"
                className="hover:text-emerald-500 transition duration-300 ease-in-out text-lg"
              >
                Category Details
              </Link>
            </li>
            <li>
              <Link
                to="/Report"
                className="hover:text-emerald-500 transition duration-300 ease-in-out text-lg"
              >
                Report
              </Link>
            </li>
          </ul>
        </nav>


      </div>
    </header>
  );
}

export default CategoryNav;
