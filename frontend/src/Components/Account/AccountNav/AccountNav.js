import React from 'react'
import { Link } from "react-router-dom";


function AccountNav() {

    return (
        <header className="bg-slate-300 static-fixed">
          <div className="flex justify-between items-center max-w-8xl p-2">
            <Link to="/">
              <h1 className="font-bold text-sm sm:text-xl flex flex-wrap     ">
                <span className="font-boldt text-3xl">Fresh</span>
                <span className="text-emerald-500 font-bold text-3xl">Colombo</span>
              </h1>
            </Link>
    
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
             
            </ul>
            <div className="flex p-1">
              <ul className="flex gap-5 font-bold pr-2 pt-1">
                <Link to="/sign-in">
                  <li className="hover:underline text-2xl">SignIn</li>
                </Link>
               <Link to="/sign-up">
                 <li className="hover:underline text-2xl">SignUp</li>
               </Link>
              </ul>
    
    
            </div>
          </div>
        </header>
      );


}

export default AccountNav;



   