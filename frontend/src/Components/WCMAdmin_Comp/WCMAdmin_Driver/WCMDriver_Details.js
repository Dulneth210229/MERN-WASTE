import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminHomeHeader from '../WCMAdmin_Header';

const URL = "http://localhost:5001/drivers";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function WCMDriver_Details() {
  const [drivers, setDrivers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  useEffect(() => {
    fetchHandler().then((data) => setDrivers(data.drivers));
  }, []);

  // Filter drivers based on search input
  const filteredDrivers = drivers.filter(
    (driver) =>
      driver._id.toLowerCase().includes(searchTerm.toLowerCase()) || 
      driver.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <AdminHomeHeader />
    
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Driver Details Page</h1>

      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by ID or Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full"
        />
      </div>

      {/* Table to display driver details */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">ID</th>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">NID</th>
              <th className="py-2 px-4 border-b text-left">Dlicense</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through the filtered drivers array */}
            {filteredDrivers.length > 0 ? (
              filteredDrivers.map((driver, i) => (
                <tr key={i} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{driver._id}</td>
                  <td className="py-2 px-4 border-b">{driver.name}</td>
                  <td className="py-2 px-4 border-b">{driver.email}</td>
                  <td className="py-2 px-4 border-b">{driver.NID}</td>
                  <td className="py-2 px-4 border-b">{driver.Dlicense}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600">
                      Update
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
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
