// OrderChart.js
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

const IURL = "http://localhost:5001/order";

const fetchOrder = async () => {
  return await axios.get(IURL).then((res) => res.data);
};

const OrderChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchOrder().then((data) => {
      const chartData = data.order.map((order) => ({
        productName: order.productName,
        quantity: order.quantity,
        orderTotal: order.orderTotal,
      }));
      setData(chartData);
    });
  }, []);

  return (
    <div className="mt-10 mb-20 w-3/5 mx-auto ">
      <h2 className="text-3xl font-bold text-slate-700 text-center mb-4">
        Order Summary Chart
      </h2>
      <ResponsiveContainer width="90%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="productName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="quantity" fill="#82ca9d" name="Quantity" />
          <Bar dataKey="orderTotal" fill="#8884d8" name="Order Total ($)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderChart;
