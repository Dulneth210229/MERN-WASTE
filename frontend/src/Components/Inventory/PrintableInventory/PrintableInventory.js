import React, { useEffect, useState } from "react";
import axios from "axios";
import ReportInventoryList from "../ReportInventoryList/ReportInventoryList";

const IURL = "http://Localhost:5001/inventory";

const fetchInventory = async () => {
  return await axios.get(IURL).then((res) => res.data);
};

const PrintableInventory = React.forwardRef((props, ref) => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetchInventory().then((data) => setInventory(data.inventory));
  }, []);

  return (
    <div ref={ref}>
      <h1 className="text-center font-semibold m-5 text-4xl">
        Inventory Details Report
      </h1>
      <hr className="border-2 border-slate-200 mt-3 n mb-7" />
      <div className="mt-3">
        <table className=" mx-auto w-auto m-1 p-2">
          <tr className="bg-green-200 m-2 border-b-2 ">
            <th className="p-1 w-80 px-14 ">Product ID</th>
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
    </div>
  );
});

export default PrintableInventory;
