import React from 'react'
import EmployeeNav from '../EmployeeNav/EmployeeNav';
import { Link } from "react-router-dom";


function EmployeeHome() {
  return (
    <div>
        <EmployeeNav/>
        <div className="flex flex-row ">
        <div className="flex flex-col gap-5 p-5 mt-16 w-2/7 bg-sky-200 rounded-xl mx-auto">
          <h1 className="text-center font-semibold text-3xl">Employee Home</h1>
          <Link to="/employeedetails">
            <button
              type="submit"
              className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72  over:opacity-95 font-semibold hover:bg-lime-500 mb-2  hover:scale-110 transition duration-300 ml-2"
            >
              Employee Details
            </button>
          </Link>
          <Link to="/addemployee">
            <button
              type="submit"
              className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72  over:opacity-95 font-semibold hover:bg-lime-500 mb-2  hover:scale-110 transition duration-300 ml-2"
            >
              Add New Employee 
            </button>
          </Link>
          
          <Link to="/employeereports">
            <button
              type="submit"
              className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72  over:opacity-95 font-semibold hover:bg-lime-500 mb-2 hover:scale-110 transition duration-300 ml-2"
            >
              Report Details
            </button>
          </Link>
        </div>
      </div>

      
    </div>
  )
}

export default EmployeeHome
