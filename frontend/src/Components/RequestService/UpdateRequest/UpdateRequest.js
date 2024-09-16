import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

function UpdateRequest() {
  const [inputs, setInputs] = useState({});
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://Localhost:5001/request/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.request));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://Localhost:5001/request/${id}`, {
        service: String(inputs.service),
        name: String(inputs.name),
        address: String(inputs.address),
        phoneNumber: String(inputs.phoneNumber),
        date: String(inputs.date),
        time: String(inputs.time),
      })
      .then((res) => res.data);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/viewrequests"));
  };

  return (
    <div>
      <h1>Update Request</h1>

      <body class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-green-200 p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 class="text-2xl font-semibold mb-6">Update Your Request</h2>

          <form onSubmit={handleSubmit}>
            <div class="mb-4">
              <label for="service" class="block text-gray-700 mb-2">
                Select service
              </label>
              <select
                name="service"
                onChange={handleChange}
                required
                value={inputs.service}
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              >
                <option>Bulky pickup</option>
                <option>Rent a container</option>
                <option>Hire a cleaner</option>
              </select>
            </div>

            <div class="mb-4">
              <label for="name" class="block text-gray-700 mb-2">
                Enter your name
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                required
                value={inputs.name}
                placeholder="Your name..."
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div class="mb-4">
              <label for="address" class="block text-gray-700 mb-2">
                Enter your address
              </label>
              <input
                type="text"
                name="address"
                onChange={handleChange}
                required
                value={inputs.address}
                placeholder="Your address..."
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div class="mb-4">
              <label for="phone" class="block text-gray-700 mb-2">
                Enter your phone number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                onChange={handleChange}
                required
                value={inputs.phoneNumber}
                placeholder="Your phone number..."
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div class="flex space-x-4 mb-6">
              <div class="flex-1">
                <label for="date" class="block text-gray-700 mb-2">
                  Select date
                </label>
                <input
                  type="date"
                  name="date"
                  onChange={handleChange}
                  required
                  value={inputs.date}
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div class="flex-1">
                <label for="time" class="block text-gray-700 mb-2">
                  Enter time
                </label>
                <input
                  type="time"
                  name="time"
                  onChange={handleChange}
                  required
                  value={inputs.time}
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            <button
              type="submit"
              class="w-full bg-green-700 text-white py-2 rounded-md shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Update
            </button>
          </form>
        </div>
      </body>
    </div>
  );
}

export default UpdateRequest;
