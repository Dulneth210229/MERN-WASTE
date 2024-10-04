import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import AdminHomeHeader from '../WCMAdmin_Header';


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

  return (
    <div>
      <AdminHomeHeader />
    
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Bin Details Page</h1>

        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => navigate('/WCMBin_Add')}
        >
          Add New Bin
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">ID</th>
              <th className="py-2 px-4 border-b text-left">Latitude</th>
              <th className="py-2 px-4 border-b text-left">Longitude</th>
              <th className="py-2 px-4 border-b text-left">Landmark</th>
            </tr>
          </thead>
          <tbody>
            {bins && bins.map((bin, i) => (
              <tr key={i} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{bin._id}</td>
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
