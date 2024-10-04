import React, { useEffect, useState } from "react";
import axios from "axios";
import ReportOrderList from "./ReportOrderList";
//02
import reportimg from "./img/LOGO.png";
import signature from "./img/signature.png";
const IURL = "http://Localhost:5001/order";

const fetchOrder = async () => {
  return await axios.get(IURL).then((res) => res.data);
};

const PrintableOrder = React.forwardRef((props, ref) => {
  const [order, setOrder] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    fetchOrder().then((data) => setOrder(data.order));

    // Get current date and time
    const date = new Date();
    const formattedDate = date.toLocaleDateString(); // Format: "MM/DD/YYYY"
    const formattedTime = date.toLocaleTimeString(); // Format: "HH:MM:SS AM/PM"
    setCurrentDateTime(`${formattedDate} ${formattedTime}`);
  }, []);

  return (
    <div ref={ref} className="static">
      <div className="flex justify-between items-center">
        <img src={reportimg} alt="report" className="" />
        <div className="text-right">
          {/* Display current date and time */}
          <p className="text-lg font-semibold mr-2">{currentDateTime}</p>
        </div>
      </div>
      <h1 className="text-center font-bold m-5 text-5xl">
        Order Details Report
      </h1>
      <hr className="border-2 border-slate-200 mt-3 n mb-7" />
      <div className="mt-3">
        <table className=" mx-auto w-auto m-1 p-2">
          <tr className="bg-green-300 m-2 border-b-2 ">
            {/* <th className="p-1 w-80 px-14 ">Product ID</th> */}
            <th className=" p-1 w-56 px-5 ">Product Name</th>
            <th className=" p-1 w-48 px-2 0">Product Category</th>
            <th className=" p-1 w-48  ">Seller</th>
            <th className=" p-1 w-36 text-center ">Delivery Type</th>
            <th className=" p-1 w-52 text-center">Traking ID</th>
            <th className=" p-1 w-48  ">Order Description</th>
            <th className=" p-1 w-48  ">Unit Price</th>
            <th className=" p-1 w-48  ">Quantity</th>
            <th className=" p-1 w-48  ">Order Total</th>
            <th className=" p-1 w-48  ">PaymentType</th>
          </tr>
        </table>
      </div>
      <div className="mx-auto w-auto m-2">
        {/* Render order details relevent to the report*/}
        {order &&
          order.map((item, i) => (
            <div key={i}>
              <ReportOrderList order={item} />
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

export default PrintableOrder;
