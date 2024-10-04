import React from 'react';
import AccountNav from '../AccountNav/AccountNav';
import { Link } from "react-router-dom";

function AccountHome() {
  return (
    <div>
      <AccountNav />
      
      <div className="flex flex-row ">
        <div className="flex flex-col gap-5 p-5 mt-16 w-2/7 bg-sky-200 rounded-xl mx-auto">
          <h1 className="text-center font-semibold text-3xl">Account Home</h1>
          <Link to="/AddSalary">
            <button
              type="submit"
              className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72  over:opacity-95 font-semibold hover:bg-lime-500 mb-2  hover:scale-110 transition duration-300 ml-2"
            >
              Add Salary
            </button>
          </Link>
          <Link to="/ViewSalary">
            <button
              type="submit"
              className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72  over:opacity-95 font-semibold hover:bg-lime-500 mb-2 hover:scale-110 transition duration-300 ml-2"
            >
              View Salary
            </button>
          </Link>

          <Link to="/CreditDebit">
            <button
              type="submit"
              className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72  over:opacity-95 font-semibold hover:bg-lime-500 mb-2 hover:scale-110 transition duration-300 ml-2"
            >
              Transaction Summary
            </button>
          </Link>

          <Link to="/ReportGeneration">
            <button
              type="submit"
              className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72  over:opacity-95 font-semibold hover:bg-lime-500 mb-2 hover:scale-110 transition duration-300 ml-2"
            >
             Report Generation
            </button>
          </Link>
        
        
        </div>
      </div>
    </div>
  );   
}


export default AccountHome;
