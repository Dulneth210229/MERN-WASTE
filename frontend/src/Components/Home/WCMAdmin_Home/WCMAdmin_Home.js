import React from "react";
import {
  FaUser,
  FaTruck,
  FaClipboardList,
  FaMapMarkerAlt,
  FaTrash,
  FaCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Nav from "../../AdminNav/AdminNav";

function WCMAdmin_Home() {
  return (
    <div>
      <Nav />
      <div className="min-h-screen flex flex-col bg-gray-100">
        <nav className="w-full bg-white shadow-md p-4">
          <h1 className="text-xl font-bold text-center">
            Waste Collection Management
          </h1>
        </nav>

        <div className="flex-grow flex items-center justify-center bg-slate-200">
          <div className="grid grid-cols-2 gap-6 w-full max-w-4xl p-6">
            <Link
              to="/WCMUser_Details"
              className="flex items-center bg-lime-700 text-white p-6 rounded-lg hover:bg-lime-600"
            >
              <FaUser className="mr-4 text-4xl" />
              User Details
            </Link>

            <Link
              to="/WCMDriver_Details"
              className="flex items-center bg-lime-700 text-white p-6 rounded-lg hover:bg-lime-600"
            >
              <FaTruck className="mr-4 text-4xl" />
              Driver Details
            </Link>

            <button className="flex items-center bg-lime-700 text-white p-6 rounded-lg hover:bg-lime-600">
              <FaClipboardList className="mr-4 text-4xl" />
              Assign Work
            </button>

            <button className="flex items-center bg-lime-700 text-white p-6 rounded-lg hover:bg-lime-600">
              <FaMapMarkerAlt className="mr-4 text-4xl" />
              Track Driver
            </button>

            <Link
              to="/WCMBin_Details"
              className="flex items-center bg-lime-700 text-white p-6 rounded-lg hover:bg-lime-600"
            >
              <FaTrash className="mr-4 text-4xl" />
              Bin Details
            </Link>

            <Link
              to="/WCMAdmin_Details"
              className="flex items-center bg-lime-700 text-white p-6 rounded-lg hover:bg-lime-600"
            >
              <FaCog className="mr-4 text-4xl" />
              Admin Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WCMAdmin_Home;
