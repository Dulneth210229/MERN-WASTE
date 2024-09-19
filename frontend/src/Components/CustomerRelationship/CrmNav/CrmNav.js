import React from 'react'
// import './CrmNav.css'
import { Link } from "react-router-dom";


function CrmNav() {
    return (
    <div>
        <ul className="home-ui">
            <li className="home-li">
            <Link to="/crmHome" className="active home-a">
                <h1>Home</h1>
            </Link>
            </li>
            <li className="home-li">
            <Link to="/FeedbackDisplay" className="active home-a">
                <h1>FeedbackDisplay</h1>
            </Link>
            </li>
            <li className="home-li">
            <Link to="/supportdisplay" className="active home-a">
                <h1>Support Display</h1>
            </Link>
            </li>
            <li className="home-li">
            <Link to="/complaindisplay" className="active home-a">
                <h1>Complain Display</h1>
            </Link>
            </li>
            <li className="home-li">
            <Link to="/AddComplainForm" className="active home-a">
                <h1>Make Complain</h1>
            </Link>
            </li>
            <li className="home-li">
            <Link to="/AddFeedbackForm" className="active home-a">
                <h1>Add Feedback</h1>
            </Link>
            </li>
            <li className="home-li">
            <Link to="/RequestSupportForm" className="active home-a">
                <h1>Request Support</h1>
            </Link>
            </li>
            <li className="home-li">
            <Link to="/CrmReport" className="active home-a">
                <h1>Report</h1>
            </Link>
            </li>
        </ul>
    </div>
  )
}

export default CrmNav;

   