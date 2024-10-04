import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaTruck, FaTasks, FaMapMarkerAlt, FaTrashAlt, FaUserShield, FaSignOutAlt } from "react-icons/fa"; 
import logo from "./LOGO.png"; 

function AdminHomeHeader() {
  return (
    <div>
      
      <div className="bg-white p-4 flex justify-start">
        <img src={logo} alt="Logo" className="h-16" />
      </div>

      
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          
          <nav className="flex space-x-8">
            <Link
              to="/WCMUser_Details"
              className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-200"
            >
              <FaUserAlt className="text-xl" />
              <span>User Details</span>
            </Link>

            <Link
              to="/WCMDriver_Details"
              className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-200"
            >
              <FaTruck className="text-xl" />
              <span>Driver Details</span>
            </Link>

            <Link
              to="/WCMAssign_Work"
              className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-200"
            >
              <FaTasks className="text-xl" />
              <span>Assign Work</span>
            </Link>

            <Link
              to="/WCMTrack_Driver"
              className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-200"
            >
              <FaMapMarkerAlt className="text-xl" />
              <span>Track Driver</span>
            </Link>

            <Link
              to="/WCMBin_Details"
              className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-200"
            >
              <FaTrashAlt className="text-xl" />
              <span>Bin Details</span>
            </Link>

            <Link
              to="/WCMAdmin_Details"
              className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-200"
            >
              <FaUserShield className="text-xl" />
              <span>Admin Details</span>
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

export default AdminHomeHeader;
