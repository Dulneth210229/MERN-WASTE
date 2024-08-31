import React from 'react';
import './PaymentPlanNav.css';
import {Link} from "react-router-dom";

function PaymentPlanNav() {
  return (
    <div>

<ul className="home-ui">
            <li className="home-li">
            <Link to="/mainHome" className="active home-a">
                <h1>Home</h1>
            </Link>
            </li>
            <li className="home-li">
            <Link to="/annualpaymentplan" className="active home-a">
                <h1>Annual Payment Plan</h1>
            </Link>
            </li>
            <li className="home-li">
            <Link to="/momthlypaymentplan" className="active home-a">
                <h1>Momthly Payment Plan</h1>
            </Link>
            </li>
            <li className="home-li">
            <Link to="/weeklypaymentplan" className="active home-a">
                <h1>Weekly Payment Plan</h1>
            </Link>
            </li>
        </ul>
      
    </div>
  )
}

export default PaymentPlanNav
