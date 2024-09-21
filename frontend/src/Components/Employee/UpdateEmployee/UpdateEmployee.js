import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EmployeeNav from "../EmployeeNav/EmployeeNav";


function UpdateEmployee() {
  const [inputs, setInput] = useState({});
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5001/Employee/${id}`)
        .then((res) => res.data)
        .then((data) => setInput(data.employee));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5001/Employee/${id}`, {
        employeeId:String(inputs.employeeId),
        employeeFirstName:String(inputs.employeeFirstName),
        employeeLastName:String(inputs.employeeLastName),
        employeeCatogory:String(inputs.employeeCatogory),
        employeeAddress:String(inputs.employeeAddress),
        employeeEmail:String(inputs.employeeEmail),
        employeePhone:Number(inputs.employeePhone),
      })
      .then((res) => res.data);
  };

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

  return (
    <div>
      <EmployeeNav />
      <div className="text-center mt-16">
        <h2 className="font-bold font-serif text-slate-600 text-5xl">
          Update Employee Management 
        </h2>
        <p className="mt-4 text-gray-600 text-xl italic">
          Update employee details in to the system here.
        </p>
      </div>

      <div className="my-10 p-6 mx-auto max-w-4xl bg-white shadow-lg rounded-lg border border-gray-300">
        <h2 className="text-2xl font-bold mb-4">
          Add New Employee
        </h2>
        <hr className="border-2" />
        <form onSubmit={handleSubmit}>
          <div className="flex  w-3/5 mx-auto ">
            <div className="my-10 p-6 mx-auto max-w-4xl bg-white shadow-lg rounded-lg border border-gray-300  border-2">
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
                    placeholder="Material"
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

          </div>
          <div className="text-center mt-16">
          <button type="submit"
          className="bg-lime-700 text-white p-3 rounded-lg uppercase w-72 over:opacity-95  "
          >Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateEmployee;