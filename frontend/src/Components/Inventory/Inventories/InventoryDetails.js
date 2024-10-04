import React, { useEffect, useState } from "react";
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
  const [totalProducts, setTotalProducts] = useState(0);
  const [lowQuantityProducts, setLowQuantityProducts] = useState(0);
  const [highQuantityPercentage, setHighQuantityPercentage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    fetchInventory().then((data) => {
      const inventoryData = data.inventory;
      setInventory(inventoryData);

      // Calculate the total number of products
      const total = inventoryData.length;
      setTotalProducts(total);

      // Calculate the number of products with quantity less than 25
      const lowQuantity = inventoryData.filter(
        (item) => item.quantity < 25
      ).length;
      setLowQuantityProducts(lowQuantity);

      // Calculate the percentage of products with quantity more than 25
      const highQuantity = inventoryData.filter(
        (item) => item.quantity > 25
      ).length;
      const highPercentage = (highQuantity / total) * 100;
      setHighQuantityPercentage(highPercentage.toFixed(2)); // rounding to 2 decimal places
    });
  }, []);

  // Search function
  const handleSearch = () => {
    fetchInventory().then((data) => {
      const filteredInventory = data.inventory.filter((inventory) =>
        Object.values(inventory).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setInventory(filteredInventory);
      setNoResults(filteredInventory.length === 0);
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <InventoyHeader />
      <div className=" bg-gray-100">
        <div className="flex flex-row mt-5 mb-2 justify-between ">
          <h1 className="text-center font-semibold m-1 ml-5 text-4xl text-slate-700">
            Inventory Details Display
          </h1>
          <div className="flex flex-row gap-5">
            <Link to="/addinventory">
              <button className="h-10 p-2 mt-2 font-semibold bg-green-700 mr-28 rounded-lg text-white">
                Add New Inventory
              </button>
            </Link>
            <form className="bg-green-100 p-2 pt-1 rounded-lg flex items-center mt-2 h-10 mr-1 ">
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                placeholder="Search..."
                className="bg-transparent focus:outline-none w-24 sm:w-64 "
              />
              <FaSearch className="text-slate-600" />
            </form>
            <button
              className="h-10 p-2 mt-2 mr-2 font-bold bg-green-500 px-5 rounded-lg text-white"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        <hr className="border-2" />

        {/* Display calculated statistics */}
        <div className="mx-auto bg-white w-3/5 mt-2 p-3 rounded-xl shadow-lg">
          <h1 className="text-4xl text-slate-800 font-semibold text-center">
            Inventoey Summary
          </h1>
          <div className="mt-5 text-center flex flex-row gap-14 ml-24 ">
            <p className="text-xl font-semibold">
              Total Products:{" "}
              <span className="font-bold ">{totalProducts}</span>
            </p>
            <p className="text-xl font-semibold">
              Quantity Low than:{" "}
              <span className="font-bold text-red-700">
                {lowQuantityProducts}
              </span>
            </p>
            <p className="text-xl font-semibold">
              Quantity Heigh (%):
              <span className=" font-bold"> {highQuantityPercentage}%</span>
            </p>
          </div>
        </div>
        <div className="mt-10">
          <table className="border-2 mx-auto">
            <thead>
              <tr className="bg-green-200">
                <th className="border-2 p-2 w-48 border-green-500 rounded-lg">
                  Product Name
                </th>
                <th className="border-2 p-2 w-48 border-green-500">
                  Product Category
                </th>
                <th className="border-2 p-2 w-48 border-green-500">
                  Material Type
                </th>
                <th className="border-2 p-2 w-24 border-green-500">Unit</th>
                <th className="border-2 p-2 w-24 border-green-500">Quantity</th>
                <th className="border-2 p-2 w-48 border-green-500">
                  Product Description
                </th>
                <th className="border-2 p-2 w-52 border-green-500">Actions</th>
              </tr>
            </thead>
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
          <div className="mb-20">
            {inventory &&
              inventory.map((inventory, i) => (
                <div key={i}>
                  <Inventory inventory={inventory} />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default InventoryDetails;
