import React, { useEffect, useState } from "react";
import RequestNav from "../RequestNav/RequestNav";
import axios from "axios";
import Request from "../Request/Request";
import UserFooter from "../../UserHomePage/UserFooter";
import UserHomeHeader from "../../UserHomePage/UserHomeHeader";
import jsPDF from "jspdf";
import "jspdf-autotable";
import logo from "./img/LOGO.png";

const URL = "http://Localhost:5001/request";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
function Requests() {
  const [requests, setRequests] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setRequests(data.requests));
  }, []);

  // const formattedDate = date.slice(0, 10);

  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredRequests = data.requests.filter((request) =>
        Object.values(request).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setRequests(filteredRequests);
      setNoResults(filteredRequests.length === 0);
    });
  };

  const generateReport = () => {
    const doc = new jsPDF();

    // Add the logo
    doc.addImage(logo, "PNG", 150, 270, 50, 20);

    // Add title and subtitle
    const title = "Request Report";
    const subtitle = "Comprehensive overview of request details";

    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text(title, 14, 22);

    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text(subtitle, 14, 30);

    doc.setLineWidth(0.5);
    doc.line(14, 33, 195, 33);

    const marginTop = 40;

    // Add the table of requests
    doc.autoTable({
      startY: marginTop,
      head: [["Service", "Name", "Address", "Phone", "Date", "Time"]],
      body: requests.map((requestItem) => [
        requestItem.service,
        requestItem.name,
        requestItem.address,
        requestItem.phoneNumber,
        requestItem.date.slice(0, 10),
        requestItem.time,
      ]),
      headStyles: {
        fillColor: [41, 87, 141],
        textColor: [255, 255, 255],
        fontSize: 12,
        fontStyle: "bold",
      },
      bodyStyles: {
        fontSize: 11,
      },
      alternateRowStyles: {
        fillColor: [240, 240, 240],
      },
      margin: { left: 14, right: 14 },
      theme: "grid",
    });

    // Add current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10); // YYYY-MM-DD
    const formattedTime = currentDate.toTimeString().split(" ")[0]; // HH:MM:SS

    doc.setFontSize(12);
    doc.text(`Date: ${formattedDate}`, 14, doc.internal.pageSize.height - 30);
    doc.text(`Time: ${formattedTime}`, 14, doc.internal.pageSize.height - 25);

    // Add space for signature
    doc.text(
      "Signature: ............................................",
      14,
      doc.internal.pageSize.height - 15
    );

    // Save the PDF
    doc.save("Request_Report.pdf");
  };

  // const generateReport = () => {
  //   const doc = new jsPDF();
  //   doc.addImage(logo, 'PNG', 150, 270, 50, 20);
  //   const title = "Request Report";
  //   const subtitle = "Comprehensive overview of request details";

  //   doc.setFontSize(22);
  //   doc.setFont("helvetica", "bold");
  //   doc.text(title, 14, 22);

  //   doc.setFontSize(16);
  //   doc.setFont("helvetica", "normal");
  //   doc.text(subtitle, 14, 30);

  //   doc.setLineWidth(0.5);
  //   doc.line(14, 33, 195, 33);

  //   const marginTop = 40;

  //   doc.autoTable({
  //     startY: marginTop,
  //     head: [["Service", "Name", "Address", "Phone", "Date", "Time"]],
  //     body: requests.map((requestItem) => [
  //       requestItem.service,
  //       requestItem.name,
  //       requestItem.address,
  //       requestItem.phoneNumber,
  //       requestItem.date.slice(0, 10),
  //       requestItem.time,
  //     ]),
  //     headStyles: {
  //       fillColor: [41, 87, 141],
  //       textColor: [255, 255, 255],
  //       fontSize: 12,
  //       fontStyle: "bold",
  //     },
  //     bodyStyles: {
  //       fontSize: 11,
  //     },
  //     alternateRowStyles: {
  //       fillColor: [240, 240, 240],
  //     },
  //     margin: { left: 14, right: 14 },
  //     theme: "grid",
  //   });

  //   doc.save("Request_Report.pdf");
  // };

  return (
    <div>
      <UserHomeHeader />
      {/* <div className="bg-gray-100 p-1">
      </div> */}
      <div className="flex justify-end py-3 pl-12 bg-gray-100">
        <button
          onClick={generateReport}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Download Requests Report
        </button>
          <RequestNav />

        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          name="search"
          placeholder="Search Request Details"
          className="px-4 py-2 border border-gray-300 rounded-lg active:border-blue-500"
        ></input>
        <button
          onClick={handleSearch}
          className="bg-green-700 hover:bg-green-800 rounded-lg px-4 py-2 text-white font-semibold"
        >
          Search
        </button>
      </div>
      {noResults ? (
        <div>
          <p>No requests found</p>
        </div>
      ) : (
        <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-2">
          <div className="w-full max-w-4xl px-20">
            {requests &&
              requests.map((request, i) => <Request request={request} />)}
          </div>
        </div>
      )}

      <UserFooter />
      {/* <div className="mt-10">
        <table className="border-2 mx-auto">
          <tr className="bg-green-200 ">
            <th className="border-2 p-2 w-25 border-green-500">Service</th>
            <th className="border-2 p-2 w-46  border-green-500">Name</th>
            <th className="border-2 p-2 w-51 border-green-500">Address</th>
            <th className="border-2 p-2 w-24 border-green-500">Phone Number</th>
            <th className="border-2 p-2 w-20 border-green-500">Date</th>
            <th className="border-2 p-2 w-20 border-green-500">Time</th>
            <th className="border-2 p-2 w-55 border-green-500">Actions</th>
          </tr>
          {requests &&
            requests.map((request, i) => <Request request={request} />)}
        </table>
      </div> */}

      <div></div>
    </div>
  );
}

export default Requests;
