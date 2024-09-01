import React from "react";
import './CategoryNav.css';
import {Link} from "react-router-dom";


function CategoryNav() {
  return (
    <div>
      <ul className="home-ul">
        <li className="home-ll">
            <Link to= "/categoryhome" className="active home-a">
            <h1>HOME</h1>
            </Link>
        </li>
        <li className="home-ll">
        <Link to= "/categoryadd" className="active home-a">
            <h1>ADD CATEGORY</h1>
            </Link>
        </li>
        <li className="home-ll">
        <Link to= "/categorydetails" className="active home-a">
            <h1>CATEGORY DETAILS</h1>
            </Link>
        </li>
      </ul>
    </div>
  );
}

export default CategoryNav
