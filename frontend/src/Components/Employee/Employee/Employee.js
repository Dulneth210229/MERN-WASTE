import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Employee(props) {
  const {
    employeeId,
    employeeFirstName,
    employeeLastName,
    employeeNic,
    employeeCatogory,
    employeeAddress,
    employeeEmail,
    employeePhone,
    employeeSalary,
  } = props.employee;

  // Delete inventory
  const history = useNavigate();

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5001/Employee/${employeeId}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/employeedetails"));
  };

  return (
    <div className="my-10 p-6 mx-auto max-w-4xl bg-white shadow-lg rounded-lg border border-gray-300 ">
      <h1 className="text-3xl font-bold text-black text-center hover:underline gap-6">Employee Details</h1>
      <hr className="border-2" />
      <br />
      <div className="align-center">
      <table className="w-full border-collapse mb-6 text-left align-center">
        <tbody>
          <tr className="bg-gray-800">
            <td className="text-2xl font-bold text-white gap-6">Employee Id</td>
            <td className="text-2xl font-bold text-white gap-6">{employeeId}</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="text-2xl font-bold text-black gap-6">Employee First Name</td>
            <td className="text-2xl text-black gap-6">{employeeFirstName}</td>
          </tr>
          <tr className="bg-white">
            <td className="text-2xl font-bold text-black gap-6">Employee Last Name</td>
            <td className="text-2xl text-black gap-6">{employeeLastName}</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="text-2xl font-bold text-black gap-6">Employee NIC</td>
            <td className="text-2xl text-black gap-6">{employeeNic}</td>
          </tr>
          <tr className="bg-white">
            <td className="text-2xl font-bold text-black gap-6">Employee Designation</td>
            <td className="text-2xl text-black gap-6">{employeeCatogory}</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="text-2xl font-bold text-black gap-6">Employee Address</td>
            <td className="text-2xl text-black gap-6">{employeeAddress}</td>
          </tr>
          <tr className="bg-white">
            <td className="text-2xl font-bold text-black gap-6">Employee Email</td>
            <td className="text-2xl text-black gap-6">{employeeEmail}</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="text-2xl font-bold text-black gap-6">Employee Phone</td>
            <td className="text-2xl text-black gap-6">{employeePhone}</td>
          </tr>
          <tr className="bg-white">
            <td className="text-2xl font-bold text-black gap-6">Employee Salary</td>
            <td className="text-2xl text-black gap-6">{employeeSalary}</td>
          </tr>

          {/* Buttons Row */}
          <tr className="bg-gray-200">
            <td className="p-2 border-b" colSpan="2" align="center">
              {/* Update Button */}
              <Link to={`/employeedetails/${employeeId}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg mr-4">
                  Update
                </button>
              </Link>

              {/* Remove Button */}
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg"
                onClick={deleteHandler}
              >
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Employee;