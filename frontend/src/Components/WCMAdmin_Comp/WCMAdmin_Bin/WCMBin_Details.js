import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { FaPlus } from 'react-icons/fa'; // Import the icon
import AdminHomeHeader from '../WCMAdmin_Header';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from '../LOGO.png'; // Correctly import the logo

const URL = "http://localhost:5001/bins";

const fetchHandler = async () => {
  // Log the response to ensure correct structure
  const response = await axios.get(URL);
  console.log(response.data); // Log response for debugging
  return response.data;
};

function WCMBin_Details() {
  const navigate = useNavigate(); 
  const [bins, setBins] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setBins(data.bins || data)); // Ensure you are accessing the correct key
  }, []);

  // Function to download bin details as a PDF report
  const downloadReport = () => {
    const doc = new jsPDF();

    // Add the logo image to the top left corner
    doc.addImage(logo, 'PNG', 10, 10, 50, 20);

    // Add a title to the PDF
    doc.setFontSize(18);
    doc.text('Bin Details Report', 70, 20);

    // Add a table with bin details
    doc.autoTable({
      startY: 40,
      head: [['Latitude', 'Longitude', 'Landmark']],
      body: bins.map(bin => [bin.latitude, bin.longitude, bin.landmark]),
    });

    // Add footer details
    const date = new Date().toLocaleDateString();
    const pageHeight = doc.internal.pageSize.height;
    doc.setFontSize(10);
    doc.text(`Date: ${date}`, 14, pageHeight - 30);
    doc.text('All rights reserved.', 14, pageHeight - 25);
    doc.text('Admin Signature: ___________________', 14, pageHeight - 20);

    // Save the PDF
    doc.save('bin_details_report.pdf');
  };

  return (
    <div>
      <AdminHomeHeader />
    
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-center w-full">Bin Details Page</h1>
          <button 
            className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 flex items-center justify-center"
            onClick={() => navigate('/WCMBin_Add')}
          >
            <FaPlus className="text-xl" />
          </button>
        </div>

        {/* Button to download report */}
        <div className="mb-4 text-right">
          <button
            onClick={downloadReport}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Download Report
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Latitude</th>
                <th className="py-2 px-4 border-b text-left">Longitude</th>
                <th className="py-2 px-4 border-b text-left">Landmark</th>
                <th className="py-2 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bins && bins.map((bin, i) => (
                <tr key={i} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{bin.latitude}</td>
                  <td className="py-2 px-4 border-b">{bin.longitude}</td>
                  <td className="py-2 px-4 border-b">{bin.landmark}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600">
                      Update
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default WCMBin_Details;
