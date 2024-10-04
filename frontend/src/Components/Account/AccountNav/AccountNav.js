import React from 'react'
import { Link } from "react-router-dom";
import logo from "./LOGO.png";



function AccountNav() {

    return (
      <div className=" flex flex-col">
      <Link to="/adminHome">
        <div className="ml-3">
          <img src={logo} alt="Logo" className="h-20" />
        </div>
      </Link>
      <header>
        <div className="flex  p-2 bg-slate-300">
          <div className="mx-auto ml-5 mt-1">
    
            <ul className="flex gap-5 font-bold">
              <Link to="/AccountHome">
                <li className="hover:underline text-2xl gap-6">Home</li>
              </Link>
              <Link to="/AddSalary">
              <li className="hover:underline text-2xl">Add Salary</li>
              </Link>
              <Link to="/ViewSalary">
                <li className="hover:underline text-2xl">View Salary</li>
              </Link>
              <Link to="/CreditDebit">
                <li className="hover:underline text-2xl">Transaction Summary</li>
              </Link>
              <Link to="/ReportGeneration">
                <li className="hover:underline text-2xl">Report Generation</li>
              </Link>
             
            </ul>
            </div>
            <div className="flex p-1 mr-5">
            <ul className="flex gap-5 font-bold pr-2 pt-1">
              <Link to="/">
                <li className="hover:underline text-2xl">Log Out</li>
              </Link>
            </ul>
            </div>
    
    
            </div>
        
          </header>
          </div>
          
         
          
          
      );


}

export default AccountNav;



   