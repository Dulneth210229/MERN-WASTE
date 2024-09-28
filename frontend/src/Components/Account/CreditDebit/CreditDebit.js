import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FirstForm() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    Credit: '',
    Debit: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/AddSalary', { state: { credit: inputs.Credit, debit: inputs.Debit } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Add Details</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium mb-1">Credit:</label>
            <input
              type="number"
              name="Credit"
              onChange={handleChange}
              value={inputs.Credit}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">Debit:</label>
            <input
              type="number"
              name="Debit"
              onChange={handleChange}
              value={inputs.Debit}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default FirstForm;
