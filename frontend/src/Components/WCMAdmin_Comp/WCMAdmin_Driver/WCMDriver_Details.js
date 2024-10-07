import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import Link and useNavigate
import axios from 'axios';
import AdminHomeHeader from '../WCMAdmin_Header';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from '../LOGO.png'; // Correctly import the logo

const URL = "http://localhost:5001/drivers";

// Function to handle fetching data from the API
const fetchHandler = async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching drivers:", error);
    return { drivers: [] };
  }
};

function WCMDriver_Details() {
  const [drivers, setDrivers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();  // Use navigate for redirection after delete

  useEffect(() => {
    fetchHandler().then((data) => {
      if (data && Array.isArray(data.drivers)) {
        setDrivers(data.drivers);
      } else {
        setDrivers([]);
      }
    });
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter drivers based on searchTerm
  const filteredDrivers = drivers.filter(driver => 
    driver.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    driver._id.includes(searchTerm)
  );

  // Function to delete a driver
  const deleteHandler = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      setDrivers(drivers.filter(driver => driver._id !== id)); // Update the UI after delete
    } catch (error) {
      console.error("Error deleting driver:", error);
    }
  };

  // Function to download driver details as a PDF
  const downloadReport = () => {
    const doc = new jsPDF();

    // Add the logo image to the top left corner
    doc.addImage(logo, 'PNG', 10, 10, 50, 20);

    // Add a title
    doc.setFontSize(18);
    doc.text('Driver Details Report', 70, 20);

    // Add a table with driver details
    doc.autoTable({
      startY: 40,
      head: [['Name', 'Email', 'NID', 'Driver\'s License']],
      body: filteredDrivers.map(driver => [driver.name, driver.email, driver.NID, driver.Dlicense]),
    });

    // Add footer details
    const date = new Date().toLocaleDateString();
    const pageHeight = doc.internal.pageSize.height;
    doc.setFontSize(10);
    doc.text(`Date: ${date}`, 14, pageHeight - 30);
    doc.text('All rights reserved.', 14, pageHeight - 25);
    doc.text('Admin Signature: ___________________', 14, pageHeight - 20);

    // Save the PDF
    doc.save('driver_details_report.pdf');
  };

  return (
    <div>
      <AdminHomeHeader />

      <div className="min-h-screen bg-gray-100 p-6">
        {/* Page title */}
        <h1 className="text-2xl font-bold text-center mb-6">Driver Details Page</h1>

        {/* Search Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name or ID"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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

        {/* Table to display driver details */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Name</th>
                <th className="py-2 px-4 border-b text-left">Email</th>
                <th className="py-2 px-4 border-b text-left">NID</th>
                <th className="py-2 px-4 border-b text-left">Driver's license</th>
                <th className="py-2 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDrivers.length > 0 ? (
                filteredDrivers.map((driver, i) => (
                  <tr key={i} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">{driver.name}</td>
                    <td className="py-2 px-4 border-b">{driver.email}</td>
                    <td className="py-2 px-4 border-b">{driver.NID}</td>
                    <td className="py-2 px-4 border-b">{driver.Dlicense}</td>
                    <td className="py-2 px-4 border-b">
                      {/* Green button for Update */}
                      <Link to={`/WCMDriver_Update/${driver._id}`} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                        Update
                      </Link>
                      {/* Red button for Delete */}
                      <button
                        onClick={() => deleteHandler(driver._id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 ml-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-4 text-center text-gray-500">
                    No drivers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default WCMDriver_Details;
