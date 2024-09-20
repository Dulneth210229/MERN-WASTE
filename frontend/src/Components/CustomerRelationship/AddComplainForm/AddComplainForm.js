import React, { useState } from "react";
import CrmNav from "../CrmNav/CrmNav";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddComplainForm() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    address: "",
    complainCategory: "",
    description: "",
    attachements: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("ComplainDisplay"));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5001/complain", {
        fullName: String(inputs.fullName),
        email: String(inputs.email),
        address: String(inputs.address),
        complainCategory: String(inputs.complainCategory),
        description: String(inputs.description),
        attachements: String(inputs.attachements),
      })
      .then((res) => res.data);
  };

  return (
    <div>
      <CrmNav />
      {/* <h1 className="text-center mt-5 font-semibold text-slate-800 ">
        Make Your Complain
      </h1>
      <hr className="border-2" /> */}

      <body class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-green-200 p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 class="text-2xl font-semibold mb-6">Make Complain</h2>
          <form onSubmit={handleSubmit}>
            <div class="mb-4">
              <label for="Full Name" class="block text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                onChange={handleChange}
                required
                value={inputs.fullName}
                placeholder="Your name..."
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              ></input>
            </div>

            <div class="mb-4">
              <label for="email" class="block text-gray-700 mb-2">
                Enter your Email
              </label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                required
                value={inputs.email}
                placeholder="Your email..."
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
              <label for="complain category" class="block text-gray-700 mb-2">
                Select Complain Category
              </label>
              <select
                name="complainCategory"
                onChange={handleChange}
                required
                value={inputs.complainCategory}
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              >
                <option>Service Quality</option>
                <option>Timeliness of Waste Collections</option>
                <option>Staff Behavior</option>
                <option>Pricing</option>
                <option>Environmental Impact</option>
              </select>
            </div>

            <div class="mb-4">
              <label for="description" class="block text-gray-700 mb-2">
                Enter your Description
              </label>
              <input
                type="text"
                name="description"
                onChange={handleChange}
                required
                value={inputs.description}
                placeholder="Your Address..."
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div class="flex space-x-4 mb-6">
              <div class="flex-1">
                <label for="attachements" class="block text-gray-700 mb-2">
                  Attachements
                </label>
                <input
                  type="text"
                  name="attachements"
                  onChange={handleChange}
                  required
                  value={inputs.attachements}
                  placeholder="Attachements..."
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            <button
              type="submit"
              class="w-full bg-green-700 text-white py-2 rounded-md shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
        </div>
      </body>
    </div>
  );
}

export default AddComplainForm;
