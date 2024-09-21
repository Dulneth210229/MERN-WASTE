import React from "react";
import Nav from "../AdminNav/AdminNav";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Nav />
      <div className="bg-blue-300 w-1/4 mx-auto rounded-lg">
        <h1 className="text-4xl text-center font-bold my-7 pt-5 ">
          Staff Home
        </h1>
        <div className="flex flex-col gap-8 pb-5 w-80 mx-auto ">
          <Link to="">
            <button className="bg-lime-700 text-white p-3 rounded-lg uppercase font-bold w-80 hover:opacity-95 hover:scale-110 hover:bg-lime-600 transition duration-300">
              Waste Collcetion
            </button>
          </Link>
          <Link to="/CategoryDetails">
            <button className="bg-lime-700 text-white p-3 rounded-lg uppercase font-bold w-80 hover:opacity-95 hover:scale-110 hover:bg-lime-600 transition duration-300">
              Waste Category
            </button>
          </Link>
          <Link to="/requestStaff">
            <button className="bg-lime-700 text-white p-3 rounded-lg uppercase font-bold w-80 hover:opacity-95 hover:scale-110 hover:bg-lime-600 transition duration-300">
              Request Service
            </button>
          </Link>
          <Link to="/inventoryHome">
            <button className="bg-lime-700 text-white p-3 rounded-lg uppercase font-bold w-80 hover:opacity-95 hover:scale-110 hover:bg-lime-600 transition duration-300">
              Inventory Management
            </button>
          </Link>
          <Link to="/PlanManegment">
            <button className="bg-lime-700 text-white p-3 rounded-lg uppercase font-bold w-80 hover:opacity-95 hover:scale-110 hover:bg-lime-600 transition duration-300">
              Payment Plan
            </button>
          </Link>
          <Link to="/CrmHome">
            <button className="bg-lime-700 text-white p-3 rounded-lg uppercase font-bold w-80 hover:opacity-95 hover:scale-110 hover:bg-lime-600 transition duration-300">
              Customer Realation Ship
            </button>
          </Link>
          <Link to="/EmployeeHome">
            <button className="bg-lime-700 text-white p-3 rounded-lg uppercase font-bold w-80 hover:opacity-95 hover:scale-110 hover:bg-lime-600 transition duration-300">
              Employee Management
            </button>
          </Link>
          <Link to="/AccountHome">
            <button className="bg-lime-700 text-white p-3 rounded-lg uppercase font-bold w-80 hover:opacity-95 hover:scale-110 hover:bg-lime-600 transition duration-300">
              Pay-Roll Management
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
