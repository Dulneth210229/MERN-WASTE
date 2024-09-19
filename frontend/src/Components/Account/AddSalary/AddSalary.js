import React, { useState } from 'react';
import AccountNav from '../AccountNav/AccountNav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddSalary() {
  const EPF = 500;
  const ETF = 500;
  const history = useNavigate();// Creating a function to navigate to different routes after form submission
  const [inputs, setinputs] = useState({
    First_Name: "",
    Last_Name: "",
    NIC: "",
    Employee_ID: "",
    Designation: "",
    Basic_Salary: "",
    Allowance: "", 
    ETF: "",
    EPF: "", 
    Total_Salary: 0,
  });

// Function to handle changes in form inputss.
  const handleChange = (e) => {
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const totalSalary =(basic, allowance)=> {
    
    return(EPF + ETF +Number(basic)  + Number(allowance))
    
  }
// Function to handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    let Total_Salary=totalSalary(inputs.Basic_Salary,inputs.Allowance)
    //alert (totalSalary(inputs.Basic_Salary,inputs.Allowance))
    setinputs(()=>({
      ...inputs,
      Total_Salary
    }));
   
    
    sendRequest(Total_Salary).then(() => history('/ViewSalary')); // Fixing the route path
  };
// Function to send HTTP POST request with form data to the server.
  const sendRequest = async (Total_Salary) => {
    //alert(inputs.Total_Salary)
    await axios.post("http://localhost:5001/account", {
      First_Name: String(inputs.First_Name),
      Last_Name: String(inputs.Last_Name),
      NIC: String(inputs.NIC),
      Employee_ID: String(inputs.Employee_ID),
      Designation: String(inputs.Designation),
      Basic_Salary: Number(inputs.Basic_Salary),
      Allowance: Number(inputs.Allowance),
      ETF: Number(ETF),
      EPF: Number(EPF),
      Total_Salary: Number(Total_Salary),
    }).then(res => res.data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <AccountNav />
      <div className="w-full max-w-lg p-8 mt-10 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Add Salary</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">First Name:</label>
            <input
              type="text"
              name="First_Name"
              onChange={handleChange}
              value={inputs.First_Name}
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">Last Name:</label>
            <input
              type="text"
              name="Last_Name"
              onChange={handleChange}
              value={inputs.Last_Name}
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">NIC:</label>
            <input
              type="text"
              name="NIC"
              onChange={handleChange}
              value={inputs.NIC}
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">Employee ID:</label>
            <input
              type="text"
              name="Employee_ID"
              onChange={handleChange}
              value={inputs.Employee_ID}
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">Designation:</label>
            <input
              type="text"
              name="Designation"
              onChange={handleChange}
              value={inputs.Designation}
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">Basic Salary:</label>
            <input
              type="number"
              name="Basic_Salary"
              onChange={handleChange}
              value={inputs.Basic_Salary}
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">Allowance:</label>
            <input
              type="number"
              name="Allowance"
              onChange={handleChange}
              value={inputs.Allowance}
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          

          <div className="text-center">
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSalary;
