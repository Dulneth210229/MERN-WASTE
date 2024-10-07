import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaTasks, FaMapMarkerAlt, FaSignOutAlt, FaClipboardList } from "react-icons/fa";
import logo from "./LOGO.png";

function DriverHomeHeader() {
  return (
    <div>
      <div className="bg-white p-4 flex justify-start">
        <img src={logo} alt="Logo" className="h-16" />
      </div>

      <div className="bg-blue-600 text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <nav className="flex space-x-8">
         

            <Link
              to="/WCMView_Assigned_Tasks"
              className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-200"
            >
              <FaTasks className="text-xl" />
              <span>Assigned Tasks</span>
            </Link>

            <Link
              to="/WCMTrack_Vehicles"
              className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-200"
            >
              <FaMapMarkerAlt className="text-xl" />
              <span>Track Vehicles</span>
            </Link>

            <Link
              to="/WCMTask_Reports"
              className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-200"
            >
              <FaClipboardList className="text-xl" />
              <span>Task Reports</span>
            </Link>
          </nav>

          <div>
            <Link
              to="/"
              className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
            >
              <FaSignOutAlt className="text-xl" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverHomeHeader;
