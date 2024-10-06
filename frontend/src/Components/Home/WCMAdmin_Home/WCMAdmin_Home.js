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
    <div className="min-h-screen flex flex-col">
      <Nav />

      {/* Main Content */}
      <div className="flex-grow flex bg-white">
        <div className="bg-slate- rounded-xl w-full max-w-lg mx-auto p-4 max-h-[90vh]">
          <h1 className="text-3xl text-center font-extrabold mb-6 text-gray-900">
            Waste Collection Management
          </h1>

          {/* Buttons */}
          <div className="grid grid-cols-1 gap-4">
            <Link to="/WCMUser_Details">
              <div className="bg-green-600 hover:bg-green-500 text-white flex items-center justify-between p-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <span className="font-semibold">User Details</span>
                <FaUser className="text-xl" />
              </div>
            </Link>

            <Link to="/WCMDriver_Details">
              <div className="bg-green-600 hover:bg-green-500 text-white flex items-center justify-between p-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <span className="font-semibold">Driver Details</span>
                <FaTruck className="text-xl" />
              </div>
            </Link>

            <Link to="/AssignWork">
              <div className="bg-green-600 hover:bg-green-500 text-white flex items-center justify-between p-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <span className="font-semibold">Assign Work</span>
                <FaClipboardList className="text-xl" />
              </div>
            </Link>

            <Link to="/TrackDriver">
              <div className="bg-green-600 hover:bg-green-500 text-white flex items-center justify-between p-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <span className="font-semibold">Track Driver</span>
                <FaMapMarkerAlt className="text-xl" />
              </div>
            </Link>

            <Link to="/WCMBin_Details">
              <div className="bg-green-600 hover:bg-green-500 text-white flex items-center justify-between p-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <span className="font-semibold">Bin Details</span>
                <FaTrash className="text-xl" />
              </div>
            </Link>

            <Link to="/WCMAdmin_Details">
              <div className="bg-green-600 hover:bg-green-500 text-white flex items-center justify-between p-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <span className="font-semibold">Admin Details</span>
                <FaCog className="text-xl" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WCMAdmin_Home;

