import React from "react";
import Nav from "../AdminNav/AdminNav";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Nav />
      <div className="bg-blue-200 w-1/5 ml-4 rounded-lg">
        <h1 className="text-4xl text-center font-bold my-7 pt-5 ">
          Admin Home
        </h1>
        <div className="flex flex-col gap-8 pb-5 w-72 mx-auto ">
          <Link to="/">
            <button className="bg-lime-700 text-white p-3 rounded-lg uppercase font-bold w-72 hover:opacity-95">
              Waste Collcetion
            </button>
          </Link>
          <Link to="CategoryHome">
            <button className="bg-lime-700 text-white p-3 rounded-lg uppercase font-bold w-72 hover:opacity-95">
              Waste Category
            </button>
          </Link>
          <Link to="/requestservicemain">
            <button className="bg-lime-700 text-white p-3 rounded-lg uppercase font-bold w-72 hover:opacity-95">
              Request Service
            </button>
          </Link>
          <Link to="inventoryHome">
            <button className="bg-lime-700 text-white p-3 rounded-lg uppercase font-bold w-72 hover:opacity-95">
              Inventory Management
            </button>
          </Link>
          <Link to="">
            <button className="bg-lime-700 text-white p-3 rounded-lg uppercase font-bold  w-72 hover:opacity-95">
              Payment Plan
            </button>
          </Link>
          <Link to="CrmHome">
            <button className="bg-lime-700 text-white p-3 rounded-lg uppercase  font-bold w-72 hover:opacity-95">
              Customer Realation Ship
            </button>
          </Link>
          <Link to="">
            <button className="bg-lime-700 text-white p-3 rounded-lg uppercase font-bold w-72 hover:opacity-95">
              Employee Management
            </button>
          </Link>
          <Link to="/AccountHome">
            <button className="bg-lime-700 text-white p-3 rounded-lg uppercase font-bold w-72 hover:opacity-95">
              Pay-Roll Management
            </button>
          </Link>
        </div>
      </div>
    </div>
    
  );
}

export default Home;
