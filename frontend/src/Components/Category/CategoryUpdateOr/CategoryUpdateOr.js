import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CategoryNavOr from "../CategoryNavOr/CategoryNavOr"; // Import the navigation component
import UserFooter from '../../UserHomePage/UserFooter'; // Import the footer component

function CategoryUpdateOr() {
  const [inputs, setInputs] = useState({
    WasteType: '',
    Quantity: '',
    DateOfCollection: '',
    Location: '',
    TransportMethod: '',
    Notes: '',
  });
  const [errors, setErrors] = useState({});
  const history = useNavigate();
  const { id } = useParams();

  // Get the current date and time in a compatible format for comparison
  const currentDateTime = new Date().toISOString().slice(0, 16);

  useEffect(() => {
    const fetchHandler = async () => {
      await axios.get(`http://localhost:5001/recyclable/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.recyclable));
    };
    fetchHandler();
  }, [id]);

  const validateInputs = (name, value) => {
    const newErrors = { ...errors };

    // Validate WasteType must be 'Recyclable'
    if (name === "WasteType" && value.toLowerCase() !== "recyclable") {
      newErrors.WasteType = 'Waste type must be "Recyclable".';
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

    // Prevent invalid typing in WasteType (only allow "Recyclable")
    if (name === "WasteType") {
      const allowedValue = "recyclable".slice(0, value.length);
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
    if (Object.keys(errors).length > 0 || inputs.WasteType.toLowerCase() !== "recyclable") {
      alert("Please fix the errors before submitting.");
      return;
    }

    sendRequest().then(() => history('/categorydetailsOr'));
  };

  const sendRequest = async () => {
    await axios.put(`http://localhost:5001/recyclable/${id}`, {
      WasteType: String(inputs.WasteType),
      Quantity: Number(inputs.Quantity),
      DateOfCollection: String(inputs.DateOfCollection),
      Location: String(inputs.Location),
      TransportMethod: String(inputs.TransportMethod),
      Notes: String(inputs.Notes),
    }).then((res) => res.data);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <CategoryNavOr /> {/* Add the navigation bar */}
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">Update Recyclable Category</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Waste Type</label>
              <input
                type="text"
                name="WasteType"
                onChange={handleChange}
                value={inputs.WasteType || ''}
                required
                placeholder="Must be 'Recyclable'"
                className={`w-full mt-2 p-2 border rounded-lg ${errors.WasteType ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.WasteType && <p className="text-red-500 text-sm">{errors.WasteType}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Quantity (KG)</label>
              <input
                type="text"
                name="Quantity"
                onChange={handleChange}
                value={inputs.Quantity || ''}
                required
                className={`w-full mt-2 p-2 border rounded-lg ${errors.Quantity ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.Quantity && <p className="text-red-500 text-sm">{errors.Quantity}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Date Of Collection</label>
              <input
                type="datetime-local"
                name="DateOfCollection"
                onChange={handleChange}
                value={inputs.DateOfCollection || ''}
                required
                className={`w-full mt-2 p-2 border rounded-lg ${errors.DateOfCollection ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.DateOfCollection && <p className="text-red-500 text-sm">{errors.DateOfCollection}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Location</label>
              <input
                type="text"
                name="Location"
                onChange={handleChange}
                value={inputs.Location || ''}
                required
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Transport Method</label>
              <select
                name="TransportMethod"
                onChange={handleChange}
                value={inputs.TransportMethod || ''}
                required
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              >
                <option>Garbage Truck</option>
                <option>Roll-Off Truck</option>
                <option>Dump Trailers</option>
                <option>Manual Collection (Bicycles, Handcarts)</option>
                <option>Vacuum Trucks</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Notes</label>
              <input
                type="text"
                name="Notes"
                onChange={handleChange}
                value={inputs.Notes || ''}
                required
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <UserFooter /> {/* Add the footer */}
    </div>
  );
}

export default CategoryUpdateOr;
