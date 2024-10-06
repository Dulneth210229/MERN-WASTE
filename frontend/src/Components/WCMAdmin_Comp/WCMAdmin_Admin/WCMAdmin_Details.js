import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminHomeHeader from '../WCMAdmin_Header';

const URL = "http://localhost:5001/admins";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function WCMAdmin_Details() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setAdmins(data.admins));
  }, []);

  return (
    <div>
      <AdminHomeHeader />
      
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="flex justify-center mb-6">
          <h1 className="text-2xl font-bold text-center text-gray-800">Admin Details Page</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-800 text-white">
                
                <th className="py-3 px-4 border-b text-left">Name</th>
                <th className="py-3 px-4 border-b text-left">Email</th>
                <th className="py-3 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {admins && admins.map((admin, i) => (
                <tr key={i} className="hover:bg-gray-100">
                  
                  <td className="py-3 px-4 border-b">{admin.name}</td>
                  <td className="py-3 px-4 border-b">{admin.email}</td>
                  <td className="py-3 px-4 border-b">
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

export default WCMAdmin_Details;
