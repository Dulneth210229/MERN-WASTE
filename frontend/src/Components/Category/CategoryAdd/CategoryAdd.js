import React, { useState } from 'react';
import CategoryNav from "../CategoryNav/CategoryNav";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CategoryAdd() {

  const history = useNavigate();
  const [inputs, setInputs] = useState({
    WasteType: "",
    Quantity: "",
    DateOfCollection: "",
    Location: "",
    TransportMethod: "",
    Notes: "",
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
    sendRequest().then(() => history('/categorydetails'));
  };

  const sendRequest = async () => {
    await axios.post("http://Localhost:5001/category", {
      WasteType: String(inputs.WasteType),
      Quantity: Number(inputs.Quantity),
      DateOfCollection: String(inputs.DateOfCollection),
      Location: String(inputs.Location),
      TransportMethod: String(inputs.TransportMethod),
      Notes: String(inputs.Notes),
    }).then(res => res.data);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-0">
      {/* Header with 100% width */}
      <div className="w-full">
        <CategoryNav />
      </div>
      <br></br>
      {/* Form section */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Categories Your Waste</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">WasteType</label>
          <select
            type="text"
            name="WasteType"
            onChange={handleChange}
            value={inputs.WasteType}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          >
          <option>Organic</option>
          <option>Recyclable</option>
          <option>Hazardous</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Quantity (KG)</label>
          <input
            type="text"
            name="Quantity"
            onChange={handleChange}
            value={inputs.Quantity}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Date Of Collection</label>
          <input
            type="text"
            name="DateOfCollection"
            onChange={handleChange}
            value={inputs.DateOfCollection}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
          <input
            type="text"
            name="Location"
            onChange={handleChange}
            value={inputs.Location}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Transport Method</label>
          <select
            name="TransportMethod"
            onChange={handleChange}
            value={inputs.TransportMethod}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          >
            <option>Garbage Truck</option>
            <option>Roll-Off Truck</option>
            <option>Dump Trailers</option>
            <option>Manual Collection (Bicycles, Handcarts)</option>
            <option>Vacuum Trucks</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Notes</label>
          <input
            type="text"
            name="Notes"
            onChange={handleChange}
            value={inputs.Notes}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CategoryAdd;
