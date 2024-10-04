import React, { useEffect, useState } from "react";
import axios from "axios";
import ReportRequestList from "../ReportRequestList/reportRequestList";

const IURL = "http://Localhost:5001/request";

const fetchRequest = async () => {
  return await axios.get(IURL).then((res) => res.data);
};

const PrintableRequest = React.forwardRef((props, ref) => {
  const [request, setRequest] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    fetchRequest().then((data) => setRequest(data.request));
    // Get current date and time
    const date = new Date();
    const formattedDate = date.toLocaleDateString(); // Format: "MM/DD/YYYY"
    const formattedTime = date.toLocaleTimeString(); // Format: "HH:MM:SS AM/PM"
    setCurrentDateTime(`${formattedDate} ${formattedTime}`);
  }, []);

  return (
    <div ref={ref}>
      <div className="flex justify-between items-center">
        <div className="text-right">
          {/* Display current date and time */}
          <p className="text-lg font-semibold mr-2">{currentDateTime}</p>
        </div>
      </div>
      <h1 className="text-center font-semibold m-5 text-5xl">
        Request Details Report
      </h1>
      <hr className="border-2 border-slate-200 mt-3 n mb-7" />
      <div className="mt-3">
        <table className=" mx-auto w-auto m-1 p-2">
          <tr className="bg-green-200 m-2 border-b-2 ">
            <th className=" p-1 w-56 px-5 ">Service Type</th>
            <th className=" p-1 w-48 px-2 0">Name</th>
            <th className=" p-1 w-48  ">Address</th>
            <th className=" p-1 w-36 text-center ">Contact Number</th>
            <th className=" p-1 w-52 text-center">Date</th>
            <th className=" p-1 w-52 text-center">Time</th>
          </tr>
        </table>
      </div>
      <div className="mx-auto w-auto m-2">
        {/* Render Request details relevent to the report*/}
        {request &&
          request.map((item, i) => (
            <div key={i}>
              <ReportRequestList request={item} />
            </div>
          ))}
      </div>
    </div>
  );
});

export default PrintableRequest;
