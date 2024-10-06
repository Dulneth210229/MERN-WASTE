import React from "react";
import "./RequestNav.css";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function requestNav() {
  return (
    <header className="bg-green-200 mt-1 mx-auto rounded-lg max-w-max">
      <div className="flex justify-center items-center max-w-8xl p-2">
        <ul className="flex gap-5 font-bold">
          <NavLink
            to="/requestservicemain"
            className={({ isActive }) =>
              isActive ? "underline text-2xl" : "hover:underline text-2xl"
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/addrequest"
            className={({ isActive }) =>
              isActive ? "underline text-2xl" : "hover:underline text-2xl"
            }
          >
            <li>Add Request</li>
          </NavLink>
          <NavLink
            to="/viewrequests"
            className={({ isActive }) =>
              isActive ? "underline text-2xl" : "hover:underline text-2xl"
            }
          >
            <li>View Requests</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}

export default requestNav;
