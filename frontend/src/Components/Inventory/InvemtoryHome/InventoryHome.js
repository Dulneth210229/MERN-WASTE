import { Link } from "react-router-dom";
import InventoyHeader from "../InventoryHeader/InventoyHeader.js";
import InventoryGraph from "../InventoryGraph/InventoryGraph"; // import the new component
import OrderChart from "../../Order/OrderGraph/OrderChart.js";

function InventoryHome() {
  return (
    <div className="relative min-h-screen">
      <InventoyHeader />
      <h1 className="text-5xl font-semibold text-center mt-2 text-slate-700 pb-5 shadow-md">
        Inventory Home
      </h1>
      {/* <hr className=""/> */}

      <div className="flex flex-rowp-4 ">
        <div className="flex flex-col gap-5 p-5 w-2/7 rounded-e-xl fixed left-0 mt-8">
          <Link to="/inventoryDeatails">
            <button
              type="submit"
              className="bg-green-600 text-white p-3 rounded-md uppercase w-72  over:opacity-95 font-semibold hover:bg-green-500 mb-2  hover:scale-110 transition ml-2"
            >
              Inventory Details
            </button>
          </Link>
          <Link to="/orderDetails">
            <button
              type="submit"
              className="bg-green-600 text-white p-3 rounded-md uppercase w-72  over:opacity-95 font-semibold hover:bg-green-500 mb-2 hover:scale-110 transition ml-2"
            >
              Order Details
            </button>
          </Link>
          <Link to="/inventoryReport">
            <button
              type="submit"
              className="bg-green-600 text-white p-3 rounded-md uppercase w-72  over:opacity-95 font-semibold hover:bg-green-500 mb-2 hover:scale-110 transition  ml-2"
            >
              Report Details
            </button>
          </Link>
          <Link to="/sendReport">
            <button
              type="submit"
              className="bg-green-600 text-white p-3 rounded-md uppercase w-72  over:opacity-95 font-semibold hover:bg-green-500 mb-2 hover:scale-110 transition  ml-2"
            >
              Upload Report
            </button>
          </Link>
        </div>

        {/* Add the InventoryGraph component here */}
        <div className="flex flex-row w-3/4  absolute bottom-44 right-0">
          <div className=" p-5 w-1/2 ">
            <InventoryGraph />
          </div>
          <div className=" p-5 w-1/2 ">
            <OrderChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryHome;
