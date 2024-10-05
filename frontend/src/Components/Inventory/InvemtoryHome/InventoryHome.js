import { Link } from "react-router-dom";
import InventoyHeader from "../InventoryHeader/InventoyHeader.js";
import InventoryGraph from "../InventoryGraph/InventoryGraph"; // import the new component
import OrderChart from "../../Order/OrderGraph/OrderChart.js";

function InventoryHome() {
  return (
    <div className="relative min-h-screen">
      <InventoyHeader />
      <div className="bg-gray-100">
        <div className="flex flex-rowp-4 ">
          <div className="flex flex-col gap-5 p-5 w-2/7 bg-white rounded-e-xl shadow-lg fixed left-0 mt-20">
            <h1 className="text-center font-semibold text-3xl">
              Inventory Home
            </h1>
            <Link to="/inventoryDeatails">
              <button
                type="submit"
                className="bg-green-600 text-white p-3 rounded-lg uppercase w-72  over:opacity-95 font-semibold hover:bg-green-500 mb-2  hover:scale-110 transition duration-300 ml-2"
              >
                Inventory Details
              </button>
            </Link>
            <Link to="/orderDetails">
              <button
                type="submit"
                className="bg-green-600 text-white p-3 rounded-lg uppercase w-72  over:opacity-95 font-semibold hover:bg-green-500 mb-2 hover:scale-110 transition duration-300 ml-2"
              >
                Order Details
              </button>
            </Link>
            <Link to="/inventoryReport">
              <button
                type="submit"
                className="bg-green-600 text-white p-3 rounded-lg uppercase w-72  over:opacity-95 font-semibold hover:bg-green-500 mb-2 hover:scale-110 transition duration-300 ml-2"
              >
                Report Details
              </button>
            </Link>
            <Link to="/sendReport">
              <button
                type="submit"
                className="bg-green-600 text-white p-3 rounded-lg uppercase w-72  over:opacity-95 font-semibold hover:bg-green-500 mb-2 hover:scale-110 transition duration-300 ml-2"
              >
                Upload Report
              </button>
            </Link>
          </div>

          {/* Add the InventoryGraph component here */}
          <div className="flex-grow p-5 ">
            <InventoryGraph />
            <OrderChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryHome;
