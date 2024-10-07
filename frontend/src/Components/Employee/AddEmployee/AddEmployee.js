import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EmployeeNav from "../EmployeeNav/EmployeeNav";

function AddEmployee() {
  const history = useNavigate();
  const [inputs, setInput] = useState({
    employeeId: "",
    employeeFirstName: "",
    employeeLastName: "",
    employeeNic: "",
    employeeCatogory: "",
    employeeAddress: "",
    employeeEmail: "",
    employeePhone: "",
    employeeSalary: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!inputs.employeeId) {
      tempErrors.employeeId = "Employee ID is required.";
      isValid = false;
    }

    if (!inputs.employeeFirstName) {
      tempErrors.employeeFirstName = "First Name is required.";
      isValid = false;
    }

    if (!inputs.employeeLastName) {
      tempErrors.employeeLastName = "Last Name is required.";
      isValid = false;
    }

    // Validate NIC: must be 12 characters and no special characters
    if (!inputs.employeeNic) {
      tempErrors.employeeNic = "NIC is required.";
      isValid = false;
    } else if (inputs.employeeNic.length !== 12 || !/^[A-Za-z0-9]+$/.test(inputs.employeeNic)) {
      tempErrors.employeeNic = "NIC must be exactly 12 characters and contain no special characters.";
      isValid = false;
    }

    if (!inputs.employeeCatogory) {
      tempErrors.employeeCatogory = "Category is required.";
      isValid = false;
    }

    if (!inputs.employeeAddress) {
      tempErrors.employeeAddress = "Address is required.";
      isValid = false;
    }

    // Validate Email: must contain '@'
    if (!inputs.employeeEmail) {
      tempErrors.employeeEmail = "Email is required.";
      isValid = false;
    } else if (!inputs.employeeEmail.includes('@')) {
      tempErrors.employeeEmail = "Email must contain '@' symbol.";
      isValid = false;
    }

    if (!inputs.employeePhone) {
      tempErrors.employeePhone = "Phone number is required.";
      isValid = false;
    } else if (!/^\d+$/.test(inputs.employeePhone)) {
      tempErrors.employeePhone = "Phone number must be numeric.";
      isValid = false;
    }

    if (!inputs.employeeSalary) {
      tempErrors.employeeSalary = "Salary is required.";
      isValid = false;
    } else if (isNaN(inputs.employeeSalary) || Number(inputs.employeeSalary) < 0) {
      tempErrors.employeeSalary = "Salary must be a valid positive number.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(inputs);
      sendRequest().then(() => history("/employeedetails"));
    }
  };

  const sendRequest = async () => {
    await axios
      .post("http://Localhost:5001/Employee", {
        employeeId: String(inputs.employeeId),
        employeeFirstName: String(inputs.employeeFirstName),
        employeeLastName: String(inputs.employeeLastName),
        employeeNic: String(inputs.employeeNic),
        employeeCatogory: String(inputs.employeeCatogory),
        employeeAddress: String(inputs.employeeAddress),
        employeeEmail: String(inputs.employeeEmail),
        employeePhone: Number(inputs.employeePhone),
        employeeSalary: Number(inputs.employeeSalary),
      })
      .then((res) => res.data);
  };

  return (
    <div>
      <EmployeeNav />
      <div >
      <h1 className="text-center mt-5 font-semibold text-slate-800 text-4xl mb-4">
          Add New Employee
        </h1>
          </div>
          <hr className="border-2" />

      <div className="my-10 p-6 mx-auto max-w-4xl bg-white shadow-lg rounded-lg border border-gray-300">
        
        
        <form onSubmit={handleSubmit}>
          <div className="flex w-3/5 mx-auto">
            <div className="my-10 p-6 mx-auto max-w-4xl bg-white shadow-lg rounded-lg border border-gray-300 border-2">
              <div className="flex flex-col w-auto mr-10 ml-10">
                {/* Employee Id */}
                <div className="flex flex-col w-96 g-0 al m-5">
                  <label className="text-2xl font-bold mb-4">Employee Id</label>
                  <input
                    type="text"
                    name="employeeId"
                    onChange={handleChange}
                    value={inputs.employeeId}
                    placeholder="Employee Id"
                    className={`w-full px-4 py-2 border rounded-lg ${errors.employeeId ? "border-red-500" : ""}`}
                  />
                  {errors.employeeId && <span className="text-red-500 text-sm">{errors.employeeId}</span>}
                </div>

                {/* Employee First Name */}
                <div className="flex flex-col w-96 g-0 al m-5">
                  <label className="text-2xl font-bold mb-4">Employee First Name</label>
                  <input
                    type="text"
                    name="employeeFirstName"
                    onChange={handleChange}
                    value={inputs.employeeFirstName}
                    placeholder="Employee First Name"
                    className={`w-full px-4 py-2 border rounded-lg ${errors.employeeFirstName ? "border-red-500" : ""}`}
                  />
                  {errors.employeeFirstName && <span className="text-red-500 text-sm">{errors.employeeFirstName}</span>}
                </div>

                {/* Employee Last Name */}
                <div className="flex flex-col w-96 g-0 al m-5">
                  <label className="text-2xl font-bold mb-4">Employee Last Name</label>
                  <input
                    type="text"
                    name="employeeLastName"
                    onChange={handleChange}
                    value={inputs.employeeLastName}
                    placeholder="Employee Last Name"
                    className={`w-full px-4 py-2 border rounded-lg ${errors.employeeLastName ? "border-red-500" : ""}`}
                  />
                  {errors.employeeLastName && <span className="text-red-500 text-sm">{errors.employeeLastName}</span>}
                </div>

                {/* Employee NIC */}
                <div className="flex flex-col w-96 g-0 al m-5">
                  <label className="text-2xl font-bold mb-4">Employee NIC</label>
                  <input
                    type="text"
                    name="employeeNic"
                    onChange={handleChange}
                    value={inputs.employeeNic}
                    placeholder="Employee NIC"
                    className={`w-full px-4 py-2 border rounded-lg ${errors.employeeNic ? "border-red-500" : ""}`}
                  />
                  {errors.employeeNic && <span className="text-red-500 text-sm">{errors.employeeNic}</span>}
                </div>

                {/* Employee Category */}
                <div className="flex flex-col w-96 g-0 al m-5">
                  <label className="text-2xl font-bold mb-4">Employee Designation</label>
                  <input
                    type="text"
                    name="employeeCatogory"
                    onChange={handleChange}
                    value={inputs.employeeCatogory}
                    placeholder="Employee Category"
                    className={`w-full px-4 py-2 border rounded-lg ${errors.employeeCatogory ? "border-red-500" : ""}`}
                  />
                  {errors.employeeCatogory && <span className="text-red-500 text-sm">{errors.employeeCatogory}</span>}
                </div>

                {/* Employee Address */}
                <div className="flex flex-col w-96 g-0 al m-5">
                  <label className="text-2xl font-bold mb-4">Employee Address</label>
                  <input
                    type="text"
                    name="employeeAddress"
                    onChange={handleChange}
                    value={inputs.employeeAddress}
                    placeholder="Employee Address"
                    className={`w-full px-4 py-2 border rounded-lg ${errors.employeeAddress ? "border-red-500" : ""}`}
                  />
                  {errors.employeeAddress && <span className="text-red-500 text-sm">{errors.employeeAddress}</span>}
                </div>

                {/* Employee Email */}
                <div className="flex flex-col w-96 g-0 al m-5">
                  <label className="text-2xl font-bold mb-4">Employee Email</label>
                  <input
                    type="text"
                    name="employeeEmail"
                    onChange={handleChange}
                    value={inputs.employeeEmail}
                    placeholder="Employee Email"
                    className={`w-full px-4 py-2 border rounded-lg ${errors.employeeEmail ? "border-red-500" : ""}`}
                  />
                  {errors.employeeEmail && <span className="text-red-500 text-sm">{errors.employeeEmail}</span>}
                </div>

                {/* Employee Phone */}
                <div className="flex flex-col w-96 g-0 al m-5">
                  <label className="text-2xl font-bold mb-4">Employee Phone</label>
                  <input
                    type="text"
                    name="employeePhone"
                    onChange={handleChange}
                    value={inputs.employeePhone}
                    placeholder="Employee Phone"
                    className={`w-full px-4 py-2 border rounded-lg ${errors.employeePhone ? "border-red-500" : ""}`}
                  />
                  {errors.employeePhone && <span className="text-red-500 text-sm">{errors.employeePhone}</span>}
                </div>

                {/* Employee Salary */}
                <div className="flex flex-col w-96 g-0 al m-5">
                  <label className="text-2xl font-bold mb-4">Employee Basic Salary</label>
                  <input
                    type="text"
                    name="employeeSalary"
                    onChange={handleChange}
                    value={inputs.employeeSalary}
                    placeholder="Employee Salary"
                    className={`w-full px-4 py-2 border rounded-lg ${errors.employeeSalary ? "border-red-500" : ""}`}
                  />
                  {errors.employeeSalary && <span className="text-red-500 text-sm">{errors.employeeSalary}</span>}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <button
              type="submit"
              className="bg-lime-700 text-white p-3 rounded-lg uppercase w-72 hover:opacity-95"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee