import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function WCMDriver_Update() {
  // State to store form inputs
  const [inputs, setInputs] = useState({});
  
  // For navigation after form submission
  const navigate = useNavigate();
  
  // Extract the user ID from the URL
  const { id } = useParams();

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5001/drivers/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.user));
    };
    fetchHandler();
  }, [id]);

  // Function to send the update request
  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5001/drivers/${id}`, {
        name: String(inputs.name),
        email: String(inputs.email),
        NID: String(inputs.NID),
        Dlicense: String(inputs.NID),
       
      })
      .then((res) => res.data);
  };

  // Handle input field changes
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendRequest();
    navigate("/WCMDriver_Details"); // Redirect to WCMDriver_Details page after update
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Update User</h1>
        
        {/* Form for updating user details */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={inputs.name || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={inputs.email || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">NID</label>
            <input
              type="text"
              name="NID"
              value={inputs.NID || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Address</label>
            <input
              type="text"
              name="Dlicense"
              value={inputs.Dlicense || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WCMDriver_Update;
