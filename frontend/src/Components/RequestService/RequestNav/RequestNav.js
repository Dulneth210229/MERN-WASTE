import React from "react";
import "./RequestNav.css";
import { Link } from "react-router-dom";

function requestNav() {
  return (
    <div>
      <ul className="home-ui">
        <li className="home-li">
          <Link to="/" className="active home-a">
            <h1>Home</h1>
          </Link>
        </li>
        <li className="home-li">
          <Link to="/addrequest" className="active home-a">
            <h1>Add Request</h1>
          </Link>
        </li>
        <li className="home-li">
          <Link to="/viewrequests" className="active home-a">
            <h1>View Requests</h1>
          </Link>
        </li>

        {/* <li className='home-li'>
            <Link to='/careers' className='active home-a'>
                <h1>Careers</h1>
            </Link>
        </li> */}
      </ul>
    </div>
  );
}

export default requestNav;
