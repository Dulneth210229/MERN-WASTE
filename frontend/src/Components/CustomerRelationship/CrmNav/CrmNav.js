import React from "react";
import { Link } from "react-router-dom";
import logo from "./LOGO.png";

function CrmNav() {
  return (
    <div className=" flex flex-col">
      <Link to="/">
        <div className="ml-3">
          <img src={logo} alt="Logo" className="h-20" />
        </div>
      </Link>
      <header>
        <div className="flex  p-2 bg-slate-300">
          <div className="mx-auto ml-5 mt-1">
            <ul className="flex gap-8 font-bold ">
              <Link to="/crmHome">
                <li className="hover:underline text-2xl gap-6">Home</li>
              </Link>
              <Link to="/FeedbackDisplay">
                <li className="hover:underline text-2xl">Display Feedback</li>
              </Link>
              <Link to="/complaindisplay">
                <li className="hover:underline text-2xl">Display Complain</li>
              </Link>
              <Link to="/supportdisplay">
                <li className="hover:underline text-2xl">Display Support</li>
              </Link>
              <Link to="/crmReport">
                <li className="hover:underline text-2xl">Report</li>
              </Link>
            </ul>
          </div>
          <div className="flex p-1 mr-5">
            <ul className="flex gap-5 font-bold pr-2 pt-1">
              <Link to="./sign-in">
                <li className="hover:underline text-2xl"></li>
              </Link>
              <Link to="./sign-up">
                <li className="hover:underline text-2xl">Log Out</li>
              </Link>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
export default CrmNav;



   