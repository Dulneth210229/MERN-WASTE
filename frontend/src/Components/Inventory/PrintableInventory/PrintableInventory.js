import React, { useEffect, useState } from "react";
import axios from "axios";
import ReportInventoryList from "../ReportInventoryList/ReportInventoryList";
import reportimg from "./img/LOGO.png";
import signature from "./img/signature.png";

const IURL = "http://Localhost:5001/inventory";

const fetchInventory = async () => {
  return await axios.get(IURL).then((res) => res.data);
};

const PrintableInventory = React.forwardRef((props, ref) => {
  const [inventory, setInventory] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    fetchInventory().then((data) => setInventory(data.inventory));
    // Get current date and time
    const date = new Date();
    const formattedDate = date.toLocaleDateString(); // Format: "MM/DD/YYYY"
    const formattedTime = date.toLocaleTimeString(); // Format: "HH:MM:SS AM/PM"
    setCurrentDateTime(`${formattedDate} ${formattedTime}`);
  }, []);

  return (
    <div ref={ref}>
      <div className="flex justify-between items-center">
        <img src={reportimg} alt="report" className="" />
        <div className="text-right">
          {/* Display current date and time */}
          <p className="text-lg font-semibold mr-2">{currentDateTime}</p>
        </div>
      </div>
      <h1 className="text-center font-semibold m-5 text-5xl">
        Inventory Details Report
      </h1>
      <hr className="border-2 border-slate-200 mt-3 n mb-7" />
      <div className="mt-3">
        <table className=" mx-auto w-auto m-1 p-2">
          <tr className="bg-green-200 m-2 border-b-2 ">
            <th className=" p-1 w-56 px-5 ">Product Name</th>
            <th className=" p-1 w-48 px-2 0">Product Category</th>
            <th className=" p-1 w-48  ">Material Type</th>
            <th className=" p-1 w-36 text-center ">Quantity</th>
            <th className=" p-1 w-52 text-center">Product Description</th>
          </tr>
        </table>
      </div>
      <div className="mx-auto w-auto m-2">
        {/* Render inventory details relevent to the report*/}
        {inventory &&
          inventory.map((item, i) => (
            <div key={i}>
              <ReportInventoryList inventory={item} />
            </div>
          ))}
      </div>
      <div className="absolute bottom-0 right-0 ... ">
        <h1 className="font-medium ml-20 text-slate-800 text-2xl">Signature</h1>
        <img src={signature} alt="signature" className="h-20 " />
      </div>
    </div>
  );
});

export default PrintableInventory;
