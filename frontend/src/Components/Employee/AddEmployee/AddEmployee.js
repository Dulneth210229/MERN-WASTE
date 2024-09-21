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
    employeeCatogory: "",
    employeeAddress: "",
    employeeEmail: "",
    employeePhone: "",
  });
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/employeedetails"));
  };

  const sendRequest = async () => {
    await axios
      .post("http://Localhost:5001/Employee", {
        employeeId: String(inputs.employeeId),
        employeeFirstName: String(inputs.employeeFirstName),
        employeeLastName: String(inputs.employeeLastName),
        employeeCatogory: String(inputs.employeeCatogory),
        employeeAddress: String(inputs.employeeAddress),
        employeeEmail: String(inputs.employeeEmail),
        employeePhone: Number(inputs.employeePhone),
      })
      .then((res) => res.data);
  };
  return (

    
    <div>
      <EmployeeNav/>
      <div className="text-center mt-16">
        <h2 className="font-bold font-serif text-slate-600 text-5xl">
          Add Employee Management 
        </h2>
        <p className="mt-4 text-gray-600 text-xl italic">
          Add new employee in to the system here.
        </p>
      </div>

      <div className="my-10 p-6 mx-auto max-w-4xl bg-white shadow-lg rounded-lg border border-gray-300">
        <h3 className="text-2xl font-bold mb-4">
          Add New Employee
        </h3>
        <hr className="border-2" />
        <form onSubmit={handleSubmit}>
          <div className="flex  w-3/5 mx-auto ">
          <div className="my-10 p-6 mx-auto max-w-4xl bg-white shadow-lg rounded-lg border border-gray-300 border-2">
              <div className="flex flex-col w-auto mr-10 ml-10">
                <div className="flex flex-col w-96 g-0 al m-5 ">
                  <lable className="text-2xl font-bold mb-4">
                    Employee Id
                  </lable>
                  <input
                    type="text"
                    name="employeeId"
                    onChange={handleChange}
                    value={inputs.employeeId}
                    placeholder="Employee Id"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-96 g-0 al  m-5">
                  <lable className="text-2xl font-bold mb-4">
                    Employee First Name
                  </lable>
                  <input
                    type="text"
                    name="employeeFirstName"
                    onChange={handleChange}
                    value={inputs.employeeFirstName}
                    placeholder="Employee First Name"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-96 g-0 al  m-5">
                  <lable className="text-2xl font-bold mb-4">
                    Employee Last Name
                  </lable>
                  <input
                    type="text"
                    name="employeeLastName"
                    onChange={handleChange}
                    value={inputs.employeeLastName}
                    placeholder="Employee Last Name"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-96 g-0 al  m-5">
                  <lable className="text-2xl font-bold mb-4">
                    Employee Catogory
                  </lable>
                  <input
                    type="text"
                    name="employeeCatogory"
                    onChange={handleChange}
                    value={inputs.employeeCatogory}
                    placeholder="Employee Catogory"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-96  g-0 al  m-5">
                  <lable className="text-2xl font-bold mb-4">
                    Employee Address
                  </lable>
                  <input
                    type="text"
                    name="employeeAddress"
                    onChange={handleChange}
                    value={inputs.employeeAddress}
                    placeholder="Employee Address"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-96  g-0 al  m-5">
                  <lable className="text-2xl font-bold mb-4">
                    Employee Email
                  </lable>
                  <input
                    type="text"
                    name="employeeEmail"
                    onChange={handleChange}
                    value={inputs.employeeEmail}
                    placeholder="Employee Email"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-96  g-0 al  m-5">
                  <lable className="text-2xl font-bold mb-4">
                    Employee Phone
                  </lable>
                  <input
                    type="text"
                    name="employeePhone"
                    onChange={handleChange}
                    value={inputs.employeePhone}
                    placeholder="Employee Phone"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* <div className="bg-emerald-100 w-auto mt-10 ml-5 mr-5 rounded-lg mb-10 border-2">
              <div className="flex flex-col w-auto mr-10 ml-10 mx-auto">
                <div className="flex flex-col w-72  g-0 m-5 gap-5">
                  <label className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                    Upload an image
                  </label>
                  <input
                    type="file"
                    id="imageUpload"
                    name="imageUpload"
                    accept="image/*"
                    className="rounded-lg "
                  />
                </div>
              </div>
            </div> */}
          </div>
          <div className="text-center mt-16">
          <button type="submit" 
          className="bg-lime-700 text-white p-3 rounded-lg uppercase w-72 over:opacity-95  ">Submit</button>
        </div>
      </form>
     
      </div>
    </div>
  );
}
export default AddEmployee;
