import React from 'react';
import './EmployeeNav.css';
import {Link} from "react-router-dom";
import logo from "./LOGO.png";

function EmployeeNav() {
  return (
    <div className=" flex flex-col" >
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
                <li className="font-bold font-serif text-slate-1000 text-3xl">Home</li>
              </Link>
              <Link to="/addemployee">
                <li className="font-bold font-serif text-slate-1000 text-3xl">New Employee</li>
              </Link>
              <Link to="/employeedetails">
                <li className="font-bold font-serif text-slate-1000 text-3xl">Employee Details</li>
              </Link>
            </ul>
          </div>
          <div className="flex p-1">
            <ul className="flex gap-10 font-bold pr-2 pt-1">
              <Link to="./sign-in">
                <li className="font-bold font-serif text-slate-1000 text-3xl">SignIn</li>
              </Link>
              <Link to="./sign-up">
                <li className="font-bold font-serif text-slate-1000 text-3xl">SignUp</li>
              </Link>
            </ul>

            
          </div>
        </div>
      </header>
    </div>


  );
}

export default EmployeeNav
