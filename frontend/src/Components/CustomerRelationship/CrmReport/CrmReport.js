import React from 'react'
import CrmNav from '../CrmNav/CrmNav'
import { Link } from "react-router-dom"

function CrmReport() {
  return (
    <div className="main-buttons">
        <CrmNav />
        <Link to="FeedbackDisplay">
            <button className="bg-lime-700 text-white p-3 rounded-lg uppercase font-bold w-72 hover:opacity-95">
              Feedback Report
            </button>
        </Link>
        <Link to="FeedbackDisplay">
            <button className="bg-lime-700 text-white p-3 rounded-lg uppercase font-bold w-72 hover:opacity-95">
              Request Support Report
            </button>
        </Link>
        <Link to="FeedbackDisplay">
            <button className="bg-lime-700 text-white p-3 rounded-lg uppercase font-bold w-72 hover:opacity-95">
              Make Complain Report
            </button>
        </Link>
      </div>
  )
}

export default CrmReport
