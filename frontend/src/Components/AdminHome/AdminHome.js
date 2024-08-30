import React from "react";
import Nav from "../AdminNav/AdminNav";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Nav />
      <h1 className="text-3xl text-center font-semibold my-7">Admin Home</h1>
      <div className="flex flex-col gap-5 p-5 m-10 w-72 mx-auto">
        <button className="bg-lime-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
          Waste Collcetion
        </button>
        <button className="bg-lime-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
          Waste Category
        </button>
        <Link to="/viewrequests">
          <button className="bg-lime-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
            Request Service
          </button>
        </Link>
        <button className="bg-lime-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
          Inventory Management
        </button>
        <button className="bg-lime-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
          Payment Plan
        </button>
        <button className="bg-lime-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
          Customer Realation Ship
        </button>
        <button className="bg-lime-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
          Employee Management
        </button>
        <button className="bg-lime-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
          Pay-Roll Management
        </button>
      </div>
    </div>
  );
}

export default Home;
