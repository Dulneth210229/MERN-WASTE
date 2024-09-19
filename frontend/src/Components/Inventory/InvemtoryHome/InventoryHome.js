import { Link } from "react-router-dom";
import InventoyHeader from "../InventoryHeader/InventoyHeader.js";

function InventoryHome() {
  return (
    <div>
      <InventoyHeader />
      <div className="flex flex-row ">
        <div className="flex flex-col gap-5 p-5 mt-10 w-2/7 bg-slate-200 rounded-xl ml-10">
          <h1 className="text-center font-semibold">Dashboard</h1>
          <Link to="/inventoryDeatails">
            <button
              type="submit"
              className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72 ml-4 over:opacity-95 font-semibold hover:bg-lime-500 mb-2"
            >
              Inventory Details
            </button>
          </Link>
          <Link to="">
            <button
              type="submit"
              className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72 ml-4 over:opacity-95 font-semibold hover:bg-lime-500 mb-2"
            >
              Order Details
            </button>
          </Link>
          <Link to="/inventoryReport">
            <button
              type="submit"
              className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72 ml-4 over:opacity-95 font-semibold hover:bg-lime-500 mb-2"
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
