
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import AccountNav from '../AccountNav/AccountNav';

function UpdateSalary() {
  const EPF = 500;
  const ETF = 500;
  const [inputs, setinputs] = useState({});
  const history = useNavigate();
  const {id } = useParams(); // Destructure the account ID from params

  // Fetch data on mount
  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/account/${id}`);
        setinputs(response.data.account); // Set the fetched account data into state
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchHandler();
  }, [id]); 

 
  // Update salary information
  const sendRequest = async (Total_Salary) => {
    console.log(inputs)
    try {
      await axios.put(`http://localhost:5001/account/${id}`, {
        ...inputs,
        Basic_Salary: Number(inputs.Basic_Salary),
        Allowance: Number(inputs.Allowance),
        ETF: Number(inputs.ETF),
        EPF: Number(inputs.EPF),
        Total_Salary: Number(Total_Salary),
        Credit: Number(inputs.Credit),
        Debit: Number(inputs.Debit),
      });
    } catch (error) {
      console.error("Error updating data", error);
    }
  };

  // Handle form inputs change
  const handleChange = (e) => {
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const totalSalary =(basic, allowance,Credit,Debit)=> {
    
    return(EPF + ETF +Number(basic)  + Number(allowance) -Number(Credit) + Number(Debit))
    
  }
// Function to handle form submission.

  const handleSubmit = (e) => {

    e.preventDefault();
    let Total_Salary=totalSalary(inputs.Basic_Salary,inputs.Allowance,inputs.Credit, inputs.Debit)
    setinputs(()=>({
      ...inputs,
      
    }));
    console.log(inputs.Total_Salary)
    console.log(Total_Salary)
   
    //alert (totalSalary(inputs.Basic_Salary,inputs.Allowance))
   
   
    
    sendRequest(Total_Salary).then(() => history('/ViewSalary'));

  };

  // Handle form submit
  //const handleSubmit = (e) => {
   // e.preventDefault();
   // sendRequest().then(() => navigate('/ViewSalary')); // Navigate after submission
  //};



  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <AccountNav />
      <div className="w-full max-w-lg p-8 mt-10 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Update Salary</h1>
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
          <div>
              <label className="block text-gray-700">Credit:</label>
              <input
                type="number"
                name="Credit"
                onChange={handleChange}
                value={inputs.Credit}
                required
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">Debit:</label>
              <input
                type="number"
                name="Debit"
                onChange={handleChange}
                value={inputs.Debit}
                required
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          <div>
            <label className="block text-gray-700">ETF:</label>
            <input
              type="number"
              name="ETF"
              onChange={handleChange}
              value={inputs.ETF}
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">EPF:</label>
            <input
              type="number"
              name="EPF"
              onChange={handleChange}
              value={inputs.EPF}
              required
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">Total Salary:</label>
            <input
              type="number"
              name="Total_Salary"
              onChange={handleChange}
              value={inputs.Total_Salary}
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
export default UpdateSalary;