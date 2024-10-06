import React, { useState } from 'react';
import AccountNav from '../AccountNav/AccountNav';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function AddSalary() {
  const EPF = 12000; //12%
  const ETF = 8000; //3%
  const history = useNavigate();

  // Using location state to get autofill values passed from the first form
  const location = useLocation();
  const { credit, debit } = location.state || { credit: "", debit: "" }; // Default to empty if not provided

  const [inputs, setInputs] = useState({
    First_Name: "",
    Last_Name: "",
    NIC: "",
    Employee_ID: "",
    Designation: "",
    Basic_Salary: "",
    Allowance: "",
    Credit: credit, // Autofilled value
    Debit: debit,   // Autofilled value
    ETF: "",
    EPF: "",
    Total_Salary: 0,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation for first name, last name, designation fields
    if (["First_Name", "Last_Name", "Designation"].includes(name)) {
      const regex = /^[A-Za-z\s]*$/; // Only allow letters and spaces
      if (!regex.test(value)) {
        return; // Prevent input if it contains invalid characters
      }
    }

    // NIC validation: Allow only digits and letters (no symbols)
  if (name === "NIC") {
    const regex = /^[0-9A-Za-z]*$/; // Only allow digits and letters
    if (!regex.test(value)) {
      return; // Prevent input if it contains invalid characters
    }
  }

    // Allow only numeric input for salary, allowance, credit, and debit fields
    if (["Basic_Salary", "Allowance", "Credit", "Debit"].includes(name)) {
      const regex = /^[0-9]*$/; // Only allow digits
      if (!regex.test(value)) {
        return; // Prevent input if it contains invalid characters
      }
    }

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  // NIC validation for both new and old NIC formats
  const validateNIC = (nic) => {
    const oldNicPattern = /^[0-9]{9}[VXvx]$/; // Old NIC pattern (9 digits followed by V or X)
    const newNicPattern = /^[0-9]{12}$/; // New NIC pattern (12 digits)

    return oldNicPattern.test(nic) || newNicPattern.test(nic);
  };

  const totalSalary = (basic, allowance, Credit, Debit) => {
    return (Number(basic) + Number(allowance) + Number(Credit) - Number(Debit) - EPF - ETF);
  };

  // Form validation
  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    // Check for empty fields
    if (!inputs.NIC) {
      formErrors.NIC = "NIC is required";
      valid = false;
    } else if (!validateNIC(inputs.NIC)) {
      formErrors.NIC = "Invalid NIC number. Please enter a valid NIC.";
      valid = false;
    }
    setErrors(formErrors);
    return valid;
  };

  // Function to handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) { // Only submit if form is valid
      let Total_Salary = totalSalary(inputs.Basic_Salary, inputs.Allowance, inputs.Credit, inputs.Debit);
      setInputs((prevInputs) => ({
        ...prevInputs,
        Total_Salary
      }));

      sendRequest(Total_Salary).then(() => history('/ViewSalary')); // Fixing the route path
    } else {
      console.log("Form validation failed."); // Debugging message if validation fails
    }
  };

  // Function to send HTTP POST request with form data to the server.
  const sendRequest = async (Total_Salary) => {
    await axios.post("http://localhost:5001/account", {
      First_Name: String(inputs.First_Name),
      Last_Name: String(inputs.Last_Name),
      NIC: String(inputs.NIC),
      Employee_ID: String(inputs.Employee_ID),
      Designation: String(inputs.Designation),
      Basic_Salary: Number(inputs.Basic_Salary),
      Allowance: Number(inputs.Allowance),
      Credit: Number(inputs.Credit),
      Debit: Number(inputs.Debit),
      ETF: Number(ETF),
      EPF: Number(EPF),
      Total_Salary: Number(Total_Salary),
    }).then(res => res.data);
  };

  return (
    <div>
      <AccountNav />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
        <div className="w-full max-w-lg p-8 mt-10 bg-white rounded-lg shadow-lg border border-gray-200">
          <h1 className="text-3xl font-semibold text-center mb-6 text-blue-600">Add Salary</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">First Name:</label>
              <input
                type="text"
                name="First_Name"
                onChange={handleChange}
                value={inputs.First_Name}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Last Name:</label>
              <input
                type="text"
                name="Last_Name"
                onChange={handleChange}
                value={inputs.Last_Name}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">NIC:</label>
              <input
                type="text"
                name="NIC"
                onChange={handleChange}
                value={inputs.NIC}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.NIC && <p className="text-red-500 text-sm">{errors.NIC}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Employee ID:</label>
              <input
                type="text"
                name="Employee_ID"
                onChange={handleChange}
                value={inputs.Employee_ID}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Designation:</label>
              <input
                type="text"
                name="Designation"
                onChange={handleChange}
                value={inputs.Designation}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Basic Salary:</label>
              <input
                type="number"
                name="Basic_Salary"
                onChange={handleChange}
                value={inputs.Basic_Salary}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Allowance:</label>
              <input
                type="number"
                name="Allowance"
                onChange={handleChange}
                value={inputs.Allowance}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Credit:</label>
              <input
                type="number"
                name="Credit"
                onChange={handleChange}
                value={inputs.Credit}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Debit:</label>
              <input
                type="number"
                name="Debit"
                onChange={handleChange}
                value={inputs.Debit}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-center">
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Add Salary
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddSalary;
