import React from 'react';
import { Link } from "react-router-dom";

function Salary(props) {
  if (!props.account) {
    return <div className="text-center p-12 bg-gray-100 border border-gray-300 rounded-lg max-w-md mx-auto text-lg text-gray-700">Salary Details</div>;
  }
 
  const {
    _id,
    First_Name,
    Last_Name,
    NIC,
    Employee_ID,
    Designation,
    Basic_Salary,
    Allowance, 
    ETF,
    EPF, 
    Total_Salary
  } = props.account;

  return (
    <div className="bg-gray-50 p-6 rounded-lg max-w-4xl mx-auto shadow-md text-center">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Salary Details </h1>
      <table className="w-full border-collapse mb-6 text-left">
        <thead className="bg-green-500 text-white">
          <tr>
            <th className="p-2 border-b">Detail</th>
            <th className="p-2 border-b">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-green-100">
            <td className="p-2 border-b font-bold">First Name</td>
            <td className="p-2 border-b">{First_Name}</td>
          </tr>
          <tr className="bg-green-50">
            <td className="p-2 border-b font-bold">Last Name</td>
            <td className="p-2 border-b">{Last_Name}</td>
          </tr>
          <tr className="bg-green-100">
            <td className="p-2 border-b font-bold">NIC</td>
            <td className="p-2 border-b">{NIC}</td>
          </tr>
          <tr className="bg-green-50">
            <td className="p-2 border-b font-bold">Employee ID</td>
            <td className="p-2 border-b">{Employee_ID}</td>
          </tr>
          <tr className="bg-green-100">
            <td className="p-2 border-b font-bold">Designation</td>
            <td className="p-2 border-b">{Designation}</td>
          </tr>
          <tr className="bg-green-50">
            <td className="p-2 border-b font-bold">Basic Salary</td>
            <td className="p-2 border-b">{Basic_Salary}</td>
          </tr>
          <tr className="bg-green-100">
            <td className="p-2 border-b font-bold">Allowance</td>
            <td className="p-2 border-b">{Allowance}</td>
          </tr>
          <tr className="bg-green-50">
            <td className="p-2 border-b font-bold">ETF</td>
            <td className="p-2 border-b">{ETF}</td>
          </tr>
          <tr className="bg-green-100">
            <td className="p-2 border-b font-bold">EPF</td>
            <td className="p-2 border-b">{EPF}</td>
          </tr>
          <tr className="bg-green-50">
            <td className="p-2 border-b font-bold">Total Salary</td>
            <td className="p-2 border-b">{Total_Salary}</td>
          </tr>
          <tr className="bg-green-100">
            <td className="p-2 border-b" colSpan="2">
              <Link to={`/ViewSalary/${_id}`} >
                <button className="inline-block bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600"> Update</button>
               </Link>
              <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 ml-2">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Salary;
