import React from 'react'
// import './CrmNav.css'
import { Link } from "react-router-dom";
// import logo from "./LOGO.png";



function CrmNav() {

  return (
    <div className=" flex flex-col">
      

      <header className="bg-sky-100 mt-5 mx-auto rounded-lg p-2">
        <div className="flex justify-between items-center max-w-8xl p-2 ">
          <ul className="flex gap-9 font-bold">
          <Link to="/crmHome">
                 <li className="hover:underline text-2xl gap-6">Home</li>
               </Link>
               <Link to="/FeedbackDisplay">
               <li className="hover:underline text-2xl">Feedback Display</li>
               </Link>
               <Link to="/complaindisplay">
                 <li className="hover:underline text-2xl">Complain Display</li>
               </Link>
               <Link to="/supportdisplay">
                 <li className="hover:underline text-2xl">Support Display</li>
               </Link>
               <Link to="/CrmReport">
                 <li className="hover:underline text-2xl">Report</li>
               </Link>
             </ul>
             <div className="flex p-1">
               <ul className="flex gap-5 font-bold pr-2 pt-1">
                 
            </ul>

          </div>
        </div>
      </header>
    </div>
  );
}

export default CrmNav;



   