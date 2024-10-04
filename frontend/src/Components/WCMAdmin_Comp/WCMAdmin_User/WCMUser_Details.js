import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminHomeHeader from '../WCMAdmin_Header';

// URL for fetching user data from the server
const URL = "http://localhost:5001/users";

// Function to handle fetching data from the API
const fetchHandler = async () => {
  // Perform an axios GET request and return the response data
  return await axios.get(URL).then((res) => res.data);
};

function WCMUser_Details() {
  // useState hook to manage the state for 'users', initially an empty array
  const [users, setUsers] = useState([]);

  // useEffect hook to fetch the data from the API when the component mounts
  useEffect(() => {
    // Call the fetchHandler function and update the state with the user data
    fetchHandler().then((data) => setUsers(data.users));
    // The empty array [] ensures the effect runs only once when the component loads
  }, []);

  return (
    <div>
      <AdminHomeHeader />
    
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page title */}
      <h1 className="text-2xl font-bold text-center mb-6">User Details Page</h1>

      {/* Table to display user details */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">ID</th>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">NID</th>
              <th className="py-2 px-4 border-b text-left">Address</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through the users array and render each user as a row in the table */}
            {users && users.map((user, i) => (
              <tr key={i} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{user._id}</td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.NID}</td>
                <td className="py-2 px-4 border-b">{user.address}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default WCMUser_Details;
