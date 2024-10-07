import React, { useState } from 'react';
import CategoryNavHza from "../CategoryNavHza/CategoryNavHza";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserFooter from '../../UserHomePage/UserFooter'; // Import the footer component

function CategoryAddHza() {
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

  // Get the current date and time in a compatible format for comparison
  const currentDateTime = new Date().toISOString().slice(0, 16);

  const validateInputs = (name, value) => {
    const newErrors = { ...errors };

    // Validate WasteType
    if (name === "WasteType" && value.toLowerCase() !== "hazardous") {
      newErrors.WasteType = 'Waste type must be "Hazardous".';
    } else {
      delete newErrors.WasteType;
    }

    // Validate Quantity (must be a positive number)
    if (name === "Quantity" && (!/^[1-9]\d*$/.test(value))) {
      newErrors.Quantity = "Quantity must be a positive number.";
    } else {
      delete newErrors.Quantity;
    }

    // Validate DateOfCollection (cannot be before current date and time)
    if (name === "DateOfCollection" && value < currentDateTime) {
      newErrors.DateOfCollection = "Date and time cannot be in the past.";
    } else {
      delete newErrors.DateOfCollection;
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate as the user types
    validateInputs(name, value);

    // Prevent invalid typing in Quantity
    if (name === "Quantity" && !/^\d*$/.test(value)) return;

    // Prevent invalid typing in WasteType (only allow "Hazardous")
    if (name === "WasteType") {
      const allowedValue = "hazardous".slice(0, value.length);
      if (value.toLowerCase() !== allowedValue) return;
    }

    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent submission if there are validation errors
    if (Object.keys(errors).length > 0 || inputs.WasteType.toLowerCase() !== "hazardous") {
      alert("Please fix the errors before submitting.");
      return;
    }

    try {
      await sendRequest();
      alert("Successfully added hazardous waste category!");
      // Reset form inputs
      setInputs({
        WasteType: "",
        Quantity: "",
        DateOfCollection: "",
        Location: "",
        TransportMethod: "",
        Notes: "",
      });
      history('/categorydetailsHza');
    } catch (error) {
      alert("Error submitting data. Please try again.");
    }
  };

  const sendRequest = async () => {
    await axios.post("http://localhost:5001/hazardous", {
      WasteType: String(inputs.WasteType),
      Quantity: Number(inputs.Quantity),
      DateOfCollection: String(inputs.DateOfCollection),
      Location: String(inputs.Location),
      TransportMethod: String(inputs.TransportMethod),
      Notes: String(inputs.Notes),
    }).then(res => res.data);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="w-full">
        <CategoryNavHza />
      </div>
      <div className="flex flex-col items-center justify-center flex-grow"> {/* Centering container */}
        <br />
        <br />
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Add Hazardous Waste Category</h1>
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
              placeholder="Must be 'Hazardous'"
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
              className={`w-full px-3 py-2 border rounded-lg ${errors.DateOfCollection ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.DateOfCollection && <p className="text-red-500 text-sm">{errors.DateOfCollection}</p>}
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
      <UserFooter /> {/* Add the footer component to ensure it spans full width */}
    </div>
  );
}

export default CategoryAddHza;
