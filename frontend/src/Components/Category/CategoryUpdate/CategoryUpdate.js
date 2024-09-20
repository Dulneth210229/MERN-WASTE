import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CategoryUpdate() {
  const [inputs, setInputs] = useState({});
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://Localhost:5001/category/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.category));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios.put(`http://Localhost:5001/category/${id}`, {
      WasteType: String(inputs.WasteType),
      Quantity: Number(inputs.Quantity),
      DateOfCollection: String(inputs.DateOfCollection),
      Location: String(inputs.Location),
      TransportMethod: String(inputs.TransportMethod),
      Notes: String(inputs.Notes),
    }).then((res) => res.data);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history('/categorydetails'));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-green-600 mb-6">Update Category</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Waste Type</label>
            <input
              type="text"
              name="WasteType"
              onChange={handleChange}
              value={inputs.WasteType || ''}
              required
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Quantity</label>
            <input
              type="text"
              name="Quantity"
              onChange={handleChange}
              value={inputs.Quantity || ''}
              required
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Date Of Collection</label>
            <input
              type="text"
              name="DateOfCollection"
              onChange={handleChange}
              value={inputs.DateOfCollection || ''}
              required
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Location</label>
            <input
              type="text"
              name="Location"
              onChange={handleChange}
              value={inputs.Location || ''}
              required
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Transport Method</label>
            <select
              name="TransportMethod"
              onChange={handleChange}
              value={inputs.TransportMethod || ''}
              required
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300"
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
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CategoryUpdate;
