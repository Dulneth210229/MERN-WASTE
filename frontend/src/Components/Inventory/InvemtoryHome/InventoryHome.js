import { Link } from "react-router-dom";
import InventoyHeader from "../InventoryHeader/InventoyHeader.js";

function InventoryHome() {
  return (
    <div>
      <InventoyHeader />
      <div className="flex flex-row ">
        <div className="flex flex-col gap-5 p-5 mt-16 w-2/7 bg-sky-200 rounded-xl mx-auto">
          <h1 className="text-center font-semibold text-3xl">Inventory Home</h1>
          <Link to="/inventoryDeatails">
            <button
              type="submit"
              className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72  over:opacity-95 font-semibold hover:bg-lime-500 mb-2  hover:scale-110 transition duration-300 ml-2"
            >
              Inventory Details
            </button>
          </Link>
          <Link to="/orderDetails">
            <button
              type="submit"
              className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72  over:opacity-95 font-semibold hover:bg-lime-500 mb-2 hover:scale-110 transition duration-300 ml-2"
            >
              Order Details
            </button>
          </Link>
          <Link to="/inventoryReport">
            <button
              type="submit"
              className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72  over:opacity-95 font-semibold hover:bg-lime-500 mb-2 hover:scale-110 transition duration-300 ml-2"
            >
              Report Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default InventoryHome;
