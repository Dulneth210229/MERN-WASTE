import React from 'react'
// import './CrmHome.css'
import CrmNav from '../CrmNav/CrmNav'
import { Link } from "react-router-dom";

function Crmhome() {
 
  return (
    <div>
      <CrmNav />
      <h1 className="text-center mt-5 font-semibold text-slate-800 ">
          Customer Relationship Management
        </h1>
        <hr className="border-2" />
      <div className="flex flex-row ">
        <div className="flex flex-col gap-5 p-5 mt-10 w-2/7 bg-slate-200 rounded-xl ml-10">
          <h1 className="text-center font-semibold">Dashboard</h1>
          <Link to="/AddFeedbackForm">
            <button
              type="submit"
              className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72 ml-4 over:opacity-95 font-semibold hover:bg-lime-500 mb-2"
            >
              Add Feedback
            </button>
          </Link>
          <Link to="/AddComplainForm">
            <button
              type="submit"
              className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72 ml-4 over:opacity-95 font-semibold hover:bg-lime-500 mb-2"
            >
              Make Complain
            </button>
          </Link>
          <Link to="/RequestSupportForm">
            <button
              type="submit"
              className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72 ml-4 over:opacity-95 font-semibold hover:bg-lime-500 mb-2"
            >
              Request Support
            </button>
          </Link>
        </div>
      </div>
    </div>
  );   
}

export default Crmhome