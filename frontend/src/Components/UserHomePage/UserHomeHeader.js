import React from "react";
import logo from "./LOGO.png";
import { Link } from "react-router-dom";
import account from "./admin-icon.png";

function UserHomeHeader() {
  return (
    <div className=" flex flex-col">
      <div className="flex flex-row justify-between">
        <Link to="/">
          <div className="ml-3">
            <img src={logo} alt="Logo" className="h-20" />
          </div>
        </Link>
        <div>
          <img
            src={account}
            alt="Account-logo"
            className="w-16 h-16 m-2 mt-2 mr-3"
          />
        </div>
      </div>
      <header>
        <div className="flex p-1 bg-slate-300">
          <div className="mx-auto ml-3">
            <ul className="flex gap-4 font-bold ">
              <Link to="">
                <li className="hover:bg-slate-500 text-2xl  bg-slate-400 h-12 pt-1 w-28 rounded-lg text-center">
                  Home
                </li>
              </Link>
              <Link to="">
                <li className="hover:bg-slate-500 text-2xl  bg-slate-400 h-12 pt-1 w-56 rounded-lg text-center">
                  Customer Services
                </li>
              </Link>
              <Link to="">
                <li className="hover:bg-slate-500 text-2xl  bg-slate-400 h-12 pt-1 w-56 rounded-lg text-center">
                  Request Services
                </li>
              </Link>
              <Link to="">
                <li className="hover:bg-slate-500 text-2xl  bg-slate-400 h-12 pt-1 w-28 rounded-lg text-center">
                  Pay Bill
                </li>
              </Link>
              <Link to="">
                <li className="hover:bg-slate-500 text-2xl  bg-slate-400 h-12 pt-1 w-44 rounded-lg text-center">
                  Recycle Guid
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex p-1">
            <ul className="flex gap-5 font-bold pr-2 pt-1">
              <Link to="./sign-in">
                <li className="hover:underline text-2xl">SignIn</li>
              </Link>
              <Link to="./sign-up">
                <li className="hover:underline text-2xl">SignUp</li>
              </Link>
            </ul>

            {/*<form className="bg-slate-100 p-2 rounded-lg flex items-center ">
          <input
            type="text"
            placeholder="Search..."
            //Responsivness od the components
            //w-24 --> make the size according to the mobile
            //sm:w-64 --> above the size of the mobile
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>*/}
          </div>
        </div>
      </header>
    </div>
  );
}

export default UserHomeHeader;
