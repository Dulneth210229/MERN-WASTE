import React from 'react';
import AccountNav from '../AccountNav/AccountNav';
import { Link } from "react-router-dom";

function AccountHome() {
  return (
    <div>
      <AccountNav />
      
        <hr className="border-2" />
      <div className="flex flex-row ">
        <div className="flex flex-col gap-5 p-5 mt-10 w-2/7 bg-slate-200 rounded-xl ml-10">
          <h1 className="text-center font-semibold">Dashboard</h1>
          <Link to="/AddSalary">
            <button
              type="submit"
              className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72 ml-4 over:opacity-95 font-semibold hover:bg-lime-500 mb-2"
            >
              Add Salary
            </button>
          </Link>
          <Link to="/ViewSalary">
            <button
              type="submit"
              className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72 ml-4 over:opacity-95 font-semibold hover:bg-lime-500 mb-2"
            >
              View Salary
            </button>
          </Link>
        
        </div>
      </div>
    </div>
  );   
}


export default AccountHome;
