import React from "react";
import "./EmployeeNav.css";
import { Link } from "react-router-dom";
import logo from "./LOGO.png";

function EmployeeNav() {
  return (
    <div className=" flex flex-col">
      <Link to="/">
        <div className="ml-3">
          <img src={logo} alt="Logo" className="h-20" />
        </div>
      </Link>
      <header>
        <div className="flex  p-2 bg-slate-300">
          <div className="mx-auto ml-5 ">
            <ul className="flex gap-10 font-bold ">
              <Link to="/employeehome">
                <li className="hover:underline text-2xl gap-6">Home</li>
              </Link>
              <Link to="/addemployee">
                <li className="hover:underline text-2xl gap-6">New Employee</li>
              </Link>
              <Link to="/employeedetails">
                <li className="hover:underline text-2xl gap-6">
                  Employee Details
                </li>
              </Link>
              <Link to="/employeeschedules">
                <li className="hover:underline text-2xl gap-6">
                  Employee Schedules
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex p-1">
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

export default EmployeeNav;
