import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminHomeHeader from '../WCMAdmin_Header';

// URL for fetching driver data from the server
const URL = "http://localhost:5001/drivers";

// Function to handle fetching data from the API
const fetchHandler = async () => {
  try {
    // Perform an axios GET request and return the response data
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching drivers:", error);
    return { drivers: [] };  // Return an empty array in case of error
  }
};

function WCMDriver_Details() {
  // useState hook to manage the state for 'drivers' and 'searchTerm'
  const [drivers, setDrivers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect hook to fetch the data from the API when the component mounts
  useEffect(() => {
    fetchHandler().then((data) => {
      // Check if the data contains drivers array
      if (data && Array.isArray(data.drivers)) {
        setDrivers(data.drivers);
      } else {
        setDrivers([]);  // Set empty array if data.drivers is not valid
      }
    });
  }, []);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter drivers based on searchTerm
  const filteredDrivers = drivers.filter(driver => 
    driver.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    driver._id.includes(searchTerm) // To filter by ID
  );

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
              {/* Map through the filtered drivers array and render each driver as a row in the table */}
              {filteredDrivers.length > 0 ? (
                filteredDrivers.map((driver, i) => (
                  <tr key={i} className="hover:bg-gray-100">
                    
                    <td className="py-2 px-4 border-b">{driver.name}</td>
                    <td className="py-2 px-4 border-b">{driver.email}</td>
                    <td className="py-2 px-4 border-b">{driver.NID}</td>
                    <td className="py-2 px-4 border-b">{driver.Dlicense}</td>
                    <td className="py-2 px-4 border-b">
                      {/* Green button for Update */}
                      <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600">
                        Update
                      </button>
                      {/* Red button for Delete */}
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
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
