// import { FaSearch } from "react-icons/fa";
import logo from "./LOGO.png";
import React from "react";
import "./AdminNav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className=" flex flex-col">
      <Link to="/adminHome">
        <div className="ml-3">
          <img src={logo} alt="Logo" className="h-20" />
        </div>
      </Link>
      <header className="bg-slate-300 ">
        <div className="flex justify-between items-center max-w-8xl p-2">
          <ul className="flex gap-9 font-bold">
            <Link to="./">
              <li className="hover:underline text-2xl">Home</li>
            </Link>
            <li className="hover:underline text-2xl">Services</li>
            <Link to="about">
              <li className="hover:underline text-2xl">About</li>
            </Link>
          </ul>
          <div className="flex p-1 mr-5">
            <ul className="flex gap-5 font-bold pr-2 pt-1">
              <Link to="/">
                <li className="hover:underline text-2xl">Log Out</li>
              </Link>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;
