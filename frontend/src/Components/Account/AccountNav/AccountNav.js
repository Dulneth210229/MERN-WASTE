import React from 'react';
import './AccountNav.css';
import {Link} from "react-router-dom";

function AccountNav() {
  return (
    <header className="bg-slate-300 ">
    <div className="flex justify-between items-center max-w-8xl p-2 ">
    <Link to="/">
    <h1 className="font-bold text-sm sm:text-xl flex flex-wrap     ">
      <span className="font-boldt text-3xl">Fresh</span>
      <span className="text-emerald-500 font-bold text-3xl">Colombo</span>
    </h1>
  </Link>    

  <div>
     <ul className="home-ui">
        
     <li className="home-li">
    <Link to="/AccountHome" className="active home-a">
      <h1>Home</h1>
    </Link>
     </li>

     <li className="home-li">
            <Link to="/AddSalary" className="active home-a">
                <h1>Add Salary</h1>
            </Link>
            </li>

    <li className="home-li">
            <Link to="/ViewSalary" className="active home-a">
                <h1>View Salary</h1>
            </Link>
            </li>

    <li className="home-li">
            <Link to="/GenerateSalary" className="active home-a">
               <h1>Generate Salary</h1>
               </Link>
            </li>

     <li className="home-li">
            <Link to="./sign-in">
                <h1>Sign In</h1>
             </Link>
               
           </li>
    <li className="home-li">
           <Link to="./sign-up">
                <h1>Sign Up</h1>
            </Link>    
           </li>

        </ul>

    </div>        

      
    </div>
    </header>
  )
}

export default AccountNav
