import React from 'react'
import './CrmNav.css'
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
            <Link to="/feedback" className="active home-a">
                <h1>Feedback</h1>
            </Link>
            </li>
            <li className="home-li">
            <Link to="/support" className="active home-a">
                <h1>Support</h1>
            </Link>
            </li>
            <li className="home-li">
            <Link to="/complain" className="active home-a">
                <h1>Complain</h1>
            </Link>
            </li>
        </ul>
    </div>
  )
}

export default CrmNav;
