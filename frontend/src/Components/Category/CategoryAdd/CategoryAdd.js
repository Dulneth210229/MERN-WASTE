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

  const [errors, setErrors] = useState({});

  // Real-time validation logic
  const validateInputs = (name, value) => {
    const newErrors = { ...errors };

    // Validate WasteType
    if (name === "WasteType" && value.toLowerCase() !== "organic") {
      newErrors.WasteType = 'Waste type must be "Organic".';
    } else {
      delete newErrors.WasteType;
    }

    // Validate Quantity (must be a positive number)
    if (name === "Quantity" && (!/^[1-9]\d*$/.test(value))) {
      newErrors.Quantity = "Quantity must be a positive number.";
    } else {
      delete newErrors.Quantity;
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate as the user types
    validateInputs(name, value);

    // Prevent invalid typing in Quantity
    if (name === "Quantity" && !/^\d*$/.test(value)) return;

    // Prevent invalid typing in WasteType (only allow "Organic")
    if (name === "WasteType") {
      const allowedValue = "organic".slice(0, value.length);
      if (value.toLowerCase() !== allowedValue) return;
    }

    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent submission if there are validation errors
    if (Object.keys(errors).length > 0 || inputs.WasteType.toLowerCase() !== "organic") {
      alert("Please fix the errors before submitting.");
      return;
    }

    sendRequest().then(() => history('/categorydetails'));
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5001/category", {
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
      <div className="w-full">
        <CategoryNav />
      </div>
      <br />
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add Organic Waste Category</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        {/* Waste Type Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Waste Type</label>
          <input
            type="text"
            name="WasteType"
            onChange={handleChange}
            value={inputs.WasteType}
            required
            placeholder="Must be 'Organic'"
            className={`w-full px-3 py-2 border rounded-lg ${errors.WasteType ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.WasteType && <p className="text-red-500 text-sm">{errors.WasteType}</p>}
        </div>

        {/* Quantity Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Quantity (KG)</label>
          <input
            type="text"
            name="Quantity"
            onChange={handleChange}
            value={inputs.Quantity}
            required
            placeholder="Enter Quantity (KG)"
            className={`w-full px-3 py-2 border rounded-lg ${errors.Quantity ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.Quantity && <p className="text-red-500 text-sm">{errors.Quantity}</p>}
        </div>

        {/* Date-Time Picker Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Date Of Collection</label>
          <input
            type="datetime-local"
            name="DateOfCollection"
            onChange={handleChange}
            value={inputs.DateOfCollection}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Location Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
          <input
            type="text"
            name="Location"
            onChange={handleChange}
            value={inputs.Location}
            required
            placeholder="Add Your Address"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Transport Method Field */}
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

        {/* Notes Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Notes</label>
          <input
            type="text"
            name="Notes"
            onChange={handleChange}
            value={inputs.Notes}
            required
            placeholder="Add Your Special Notes"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Submit Button */}
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
