import React from 'react';
import './AccountNav.css';
import {Link} from "react-router-dom";

function AccountNav() {
  return (
    <header className="bg-slate-000 ">
    <div className="flex justify-between items-center max-w-8xl p-2 ">
    <Link to="/">
    <h1 className="font-bold text-sm sm:text-xl flex flex-wrap     ">
      <span className="font-boldt text-3xl">Fresh</span>
      <span className="text-emerald-500 font-bold text-3xl">Colombo</span>
    </h1>
  </Link>   
  </div> 

  <div>
     <ul className="acchome">
        
     <li className="accli">
    <Link to="/AccountHome" >
      <h1>Home</h1>
    </Link>
     </li>

     <li className="accli">
            <Link to="/AddSalary" >
                <h1>Add Salary</h1>
            </Link>
            </li>

    <li className="accli">
            <Link to="/ViewSalary" >
                <h1>View Salary</h1>
            </Link>
            </li>

    <li className="accli">
            <Link to="/GenerateSalary" >
               <h1>Generate Salary</h1>
               </Link>
            </li>

     <li className="accli">
            <Link to="./sign-in">
                <h1>Sign In</h1>
             </Link>
               
           </li>
    <li className="accli">
           <Link to="./sign-up">
                <h1>Sign Up</h1>
            </Link>    
           </li>

        </ul>

    </div>        

      
    
    </header>
  )
}

export default AccountNav
