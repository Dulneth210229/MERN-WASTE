import React from "react";
import Nav from "../AdminNav/AdminNav";
import { Link } from "react-router-dom";
import {
  FaTrashAlt,
  FaTags,
  FaHandsHelping,
  FaBoxes,
  FaMoneyBillAlt,
  FaUserFriends,
  FaUsers,
  FaFileInvoiceDollar,
} from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      {/* Main Content */}
      <div className="flex-grow flex  bg-white">
        <div className="bg-slate- rounded-xl w-full max-w-lg mx-auto p-4 max-h-[90vh]">
          <h1 className="text-3xl text-center font-extrabold mb-6 text-gray-900">
            Staff Dashboard
          </h1>

          {/* Buttons */}
          <div className="grid grid-cols-1 gap-4">
            <Link to="/WCMAdmin_Home">
              <div className="bg-green-600 hover:bg-green-500 text-white flex items-center justify-between p-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <span className="font-semibold">Waste Collection</span>
                <FaTrashAlt className="text-xl" />
              </div>
            </Link>

            <Link to="/CategoryDetails">
              <div className="bg-green-600 hover:bg-green-500 text-white flex items-center justify-between p-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <span className="font-semibold">Waste Category</span>
                <FaTags className="text-xl" />
              </div>
            </Link>

            <Link to="/requestStaff">
              <div className="bg-green-600 hover:bg-green-500 text-white flex items-center justify-between p-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <span className="font-semibold">Request Service</span>
                <FaHandsHelping className="text-xl" />
              </div>
            </Link>

            <Link to="/inventoryHome">
              <div className="bg-green-600 hover:bg-green-500 text-white flex items-center justify-between p-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <span className="font-semibold">Inventory Management</span>
                <FaBoxes className="text-xl" />
              </div>
            </Link>

            <Link to="/PlanManegment">
              <div className="bg-green-600 hover:bg-green-500 text-white flex items-center justify-between p-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <span className="font-semibold">Payment Plan</span>
                <FaMoneyBillAlt className="text-xl" />
              </div>
            </Link>

            <Link to="/CrmHome">
              <div className="bg-green-600 hover:bg-green-500 text-white flex items-center justify-between p-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <span className="font-semibold">Customer Relationship</span>
                <FaUserFriends className="text-xl" />
              </div>
            </Link>

            <Link to="/EmployeeHome">
              <div className="bg-green-600 hover:bg-green-500 text-white flex items-center justify-between p-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <span className="font-semibold">Employee Management</span>
                <FaUsers className="text-xl" />
              </div>
            </Link>

            <Link to="/AccountHome">
              <div className="bg-green-600 hover:bg-green-500 text-white flex items-center justify-between p-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <span className="font-semibold">Payroll Management</span>
                <FaFileInvoiceDollar className="text-xl" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
