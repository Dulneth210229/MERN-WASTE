import React from 'react'; 
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Salary({ account }) {
  const {
    _id,
    First_Name,
    Last_Name,
    NIC,
    Employee_ID,
    Designation,
    Basic_Salary,
    Allowance, 
    Credit,
    Debit,
    ETF,
    EPF, 
    Total_Salary
  } = account || {};

  const history = useNavigate();
  const deleteHandler = async () => {
    await axios.delete(`http://localhost:5001/account/${_id}`)
      .then(res => res.data)
      .then(() => history("/"))
      .then(() => history("/ViewSalary"));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
    <div className="bg-white p-6 rounded-lg max-w-4xl mx-auto shadow-lg text-center">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Employee : {Employee_ID}</h1>
      <table className="w-full border-collapse mb-6 text-left">
        <thead className="bg-slate-400 text-white">
          <tr>
            <th className="p-2 border-b">Detail</th>
            <th className="p-2 border-b">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-sky-100">
            <td className="p-2 border-b font-bold">First Name</td>
            <td className="p-2 border-b">{First_Name}</td>
          </tr>
          <tr className="bg-sky-50">
            <td className="p-2 border-b font-bold">Last Name</td>
            <td className="p-2 border-b">{Last_Name}</td>
          </tr>
          <tr className="bg-sky-100">
            <td className="p-2 border-b font-bold">NIC</td>
            <td className="p-2 border-b">{NIC}</td>
          </tr>
          <tr className="bg-sky-50">
            <td className="p-2 border-b font-bold">Employee ID</td>
            <td className="p-2 border-b">{Employee_ID}</td>
          </tr>
          <tr className="bg-sky-100">
            <td className="p-2 border-b font-bold">Designation</td>
            <td className="p-2 border-b">{Designation}</td>
          </tr>
          <tr className="bg-sky-50">
            <td className="p-2 border-b font-bold">Basic Salary</td>
            <td className="p-2 border-b">{Basic_Salary}</td>
          </tr>
          <tr className="bg-sky-100">
            <td className="p-2 border-b font-bold">Allowance</td>
            <td className="p-2 border-b">{Allowance}</td>
          </tr>
          <tr className="bg-sky-50">
            <td className="p-2 border-b font-bold">Credit</td>
            <td className="p-2 border-b">{Credit}</td>
          </tr>
          <tr className="bg-sky-100">
            <td className="p-2 border-b font-bold">Debit</td>
            <td className="p-2 border-b">{Debit}</td>
          </tr>
          <tr className="bg-sky-50">
            <td className="p-2 border-b font-bold">ETF</td>
            <td className="p-2 border-b">{ETF}</td>
          </tr>
          <tr className="bg-sky-100">
            <td className="p-2 border-b font-bold">EPF</td>
            <td className="p-2 border-b">{EPF}</td>
          </tr>
          <tr className="bg-sky-50">
            <td className="p-2 border-b font-bold">Total Salary</td>
            <td className="p-2 border-b">{Total_Salary}</td>
          </tr>

          {/* Buttons that will be hidden during PDF print */}
          <tr className="bg-sky-100 print:hidden">
            <td className="p-2 border-b" colSpan="2">
              <Link to={`/ViewSalary/${_id}`} >
                <button className="inline-block bg-sky-500 text-white py-1 px-3 rounded-md hover:bg-sky-600">Update</button>
              </Link>
              <button onClick={deleteHandler} className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 ml-2">Delete</button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Salary;
