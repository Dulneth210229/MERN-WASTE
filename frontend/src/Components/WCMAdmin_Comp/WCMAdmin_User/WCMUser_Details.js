import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminHomeHeader from '../WCMAdmin_Header';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from '../LOGO.png'; // Correctly import the logo

// URL for fetching user data from the server
const URL = "http://localhost:5001/users";

// Function to handle fetching data from the API
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function WCMUser_Details() {
  // useState hooks for managing 'users' and 'searchTerm'
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data when the component mounts
  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle user deletion
  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/users/${id}`);
      setUsers(users.filter(user => user._id !== id)); // Remove the deleted user from state
    } catch (err) {
      console.error("Failed to delete user", err);
    }
  };

  // Filter users based on the search term
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user._id.includes(searchTerm) // To filter by ID
  );

  // Function to download user details as a PDF report
  const downloadReport = () => {
    const doc = new jsPDF();

    // Add the logo image to the top left corner
    doc.addImage(logo, 'PNG', 10, 10, 50, 20);

    // Add a title to the PDF
    doc.setFontSize(18);
    doc.text('User Details Report', 70, 20);

    // Add a table with user details
    doc.autoTable({
      startY: 40,
      head: [['Name', 'Email', 'NID', 'Address']],
      body: filteredUsers.map(user => [user.name, user.email, user.NID, user.address]),
    });

    // Add footer details
    const date = new Date().toLocaleDateString();
    const pageHeight = doc.internal.pageSize.height;
    doc.setFontSize(10);
    doc.text(`Date: ${date}`, 14, pageHeight - 30);
    doc.text('All rights reserved.', 14, pageHeight - 25);
    doc.text('Admin Signature: ___________________', 14, pageHeight - 20);

    // Save the PDF
    doc.save('user_details_report.pdf');
  };

  return (
    <div>
      <AdminHomeHeader />

      <div className="min-h-screen bg-gray-100 p-6">
        {/* Page title */}
        <h1 className="text-2xl font-bold text-center mb-6">User Details Page</h1>

        {/* Search input */}
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

        {/* Table to display user details */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Name</th>
                <th className="py-2 px-4 border-b text-left">Email</th>
                <th className="py-2 px-4 border-b text-left">NID</th>
                <th className="py-2 px-4 border-b text-left">Address</th>
                <th className="py-2 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Render each user as a row in the table */}
              {filteredUsers && filteredUsers.map((user, i) => (
                <tr key={i} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">{user.NID}</td>
                  <td className="py-2 px-4 border-b">{user.address}</td>
                  <td className="py-2 px-4 border-b flex space-x-2">
                    {/* Green button for Update */}
                    <Link to={`/WCMUser_Update/${user._id}`} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                      Update
                    </Link>
                    {/* Red button for Delete */}
                    <button
                      onClick={() => deleteHandler(user._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
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

export default WCMUser_Details;
