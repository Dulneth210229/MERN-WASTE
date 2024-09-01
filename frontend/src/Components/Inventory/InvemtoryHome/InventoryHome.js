import React from "react";
import { Link } from "react-router-dom";
import InventoyHeader from "../InventoryHeader/InventoyHeader.js";

function InventoryHome() {
  return (
    <div>
      <InventoyHeader />
      <div className="flex flex-col gap-5 p-5 m-10 w-72 mx-auto">
        <Link to="/addinventory">
          <button className="bg-lime-700 text-white p-3 rounded-lg uppercase w-72 over:opacity-95">
            + Add New Inventory
          </button>
        </Link>
      </div>
    </div>
  );
}
export default InventoryHome;
