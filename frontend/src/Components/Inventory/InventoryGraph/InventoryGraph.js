// InventoryGraph.js

import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import axios from "axios";

const IURL = "http://localhost:5001/inventory";

const InventoryGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(IURL);
      const inventoryData = response.data.inventory.map((item) => ({
        productName: item.productName,
        quantity: item.quantity,
      }));
      setData(inventoryData);
    };

    fetchData();
  }, []);

  return (
    <div className="mt-10 mb-20 w-3/5 mx-auto">
      <h2 className="text-3xl font-bold text-slate-700 text-center mb-4">
        Inventory Summary Chart
      </h2>
      <ResponsiveContainer width="90%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="productName" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
            itemStyle={{ color: "#333" }}
            cursor={{ stroke: "rgba(255, 255, 255, 0.2)" }}
          />
          <Legend verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="quantity"
            stroke="#7794ed"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InventoryGraph;
