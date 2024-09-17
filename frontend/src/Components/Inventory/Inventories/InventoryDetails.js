import React, { useEffect } from "react";
import { useState } from "react";
import InventoyHeader from "../InventoryHeader/InventoyHeader";
import axios from "axios";
import Inventory from "../InventoryList/Inventory";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import nodata from "../comonimages/noresults.svg";

const IURL = "http://Localhost:5001/inventory";

const fetchInventory = async () => {
  return await axios.get(IURL).then((res) => res.data);
};

function InventoryDetails() {
  const [inventory, setInventory] = useState();
  useEffect(() => {
    fetchInventory().then((data) => setInventory(data.inventory));
  }, []);

  //search function
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchInventory().then((data) => {
      const filterInventory = data.inventory.filter((inventory) =>
        Object.values(inventory).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setInventory(filterInventory);
      setNoResults(filterInventory.length === 0);
    });
  };

  return (
    <div>
      <InventoyHeader />
      <div className="flex flex-row mt-5 mb-2 justify-between">
        <h1 className="text-center font-semibold m-1 ml-5 text-4xl text-slate-700">
          Inventory Details Display
        </h1>
        <div className="flex flex-row gap-5">
          <Link to="/addinventory">
            <button className="h-10 p-2 mt-2 font-semibold bg-green-700 mr-28">
              Add New Inventory
            </button>
          </Link>
          <form className="bg-green-100 p-2 pt-1 rounded-lg flex items-center mt-2 h-10 mr-1 ">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Search..."
              //Responsivness od the components
              //w-24 --> make the size according to the mobile
              //sm:w-64 --> above the size of the mobile
              className="bg-transparent focus:outline-none w-24 sm:w-64 "
            />
            <FaSearch className="text-slate-600" />
          </form>
          <button
            className="h-10 p-2 mt-2 mr-2 font-bold bg-green-500 px-5"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <hr className="border-2" />
      <div className="mt-10">
        <table className="border-2 mx-auto">
          <tr className="bg-green-200 ">
            <th className="border-2 p-2 w-48 border-green-500 rounded-lg">
              Product Name
            </th>
            <th className="border-2 p-2 w-48  border-green-500">
              Product Category
            </th>
            <th className="border-2 p-2 w-48 border-green-500">
              Material Type
            </th>
            <th className="border-2 p-2 w-24 border-green-500">Quantity</th>
            <th className="border-2 p-2 w-48 border-green-500">
              Product Description
            </th>
            <th className="border-2 p-2 w-52 border-green-500">Actions</th>
          </tr>
        </table>
      </div>
      {/* Search bar results display */}
      {noResults ? (
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold text-slate-600 text-center mt-16">
            There are no matching results!......
            <img
              src={nodata}
              alt="No Data"
              className="mx-auto mt-20 w-96 h-96"
            />
          </h1>
        </div>
      ) : (
        <div>
          {/*get the inventroy details repetitively from the Inventory.js*/}
          {inventory &&
            inventory.map((inventory, i) => (
              <div key={i}>
                <Inventory inventory={inventory} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default InventoryDetails;
