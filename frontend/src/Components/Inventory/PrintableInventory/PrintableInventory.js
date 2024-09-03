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
      <h1 className="text-center font-semibold m-1 ml-5 text-4xl">
        Inventory Details Display
      </h1>
      <div className="mt-10">
        <table className=" mx-auto w-auto m-1">
          <tr className="bg-green-200 p-3 ">
            <th className="border-2 p-2 w-60 text-center border-green-500">
              Product ID
            </th>
            <th className="border-2 pt-1 w-48 border-green-500">
              Product Name
            </th>
            <th className="border-2 pt-1 w-48  border-green-500">
              Product Category
            </th>
            <th className="border-2 pt-1 w-48 border-green-500">
              Material Type
            </th>
            <th className="border-2 pt-1 w-24 border-green-500">Quantity</th>
            <th className="border-2 pt-1 w-48 border-green-500">
              Product Description
            </th>
          </tr>
        </table>
      </div>
      <div className="mt-10">
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
