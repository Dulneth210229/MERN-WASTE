import React from "react";
import logo from "./LOGO.png";
import { Link } from "react-router-dom";
import customerServices from "./img/cusromerServices.png";
import paymentPlan from "./img/payment.png";
import requestServices from "./img/requestServices.png";
import home from "./img/home.png";
import recycleGuid from "./img/guid.png";

function UserHomeHeader() {
  return (
    <div className=" flex flex-col ">
      <div className="flex flex-row justify-between">
        <Link to="/">
          <div className="ml-3">
            <img src={logo} alt="Logo" className="h-20" />
          </div>
        </Link>
        <div></div>
      </div>
      <header>
        <div className="flex p-1 bg-slate-300">
          <div className="mx-auto ml-3">
            <ul className="flex gap-4 font-bold ">
              <Link to="/">
                <li className="hover:bg-slate-400 text-2xl h-12 pt-1 w-32 flex  flex-row rounded-lg text-center">
                  <img
                    src={home}
                    alt="customerServices"
                    className="w-9 h-9 mr-2 ml-1 "
                  />
                  Home
                </li>
              </Link>
              <Link to="">
                <li className="hover:bg-slate-400 text-2xl h-12 pt-1 w-72 flex  flex-row rounded-lg text-center">
                  <img
                    src={customerServices}
                    alt="customerServices"
                    className="w-10 h-10 mr-2 ml-1 "
                  />
                  Customer Services
                </li>
              </Link>
              <Link to="">
                <li className="hover:bg-slate-400 text-2xl h-12 pt-1 w-64  flex  flex-row rounded-lg text-center">
                  <img
                    src={requestServices}
                    alt="customerServices"
                    className="w-10 h-10 mr-2 ml-1 "
                  />
                  Request Services
                </li>
              </Link>
              <Link to="">
                <li className="hover:bg-slate-400 text-2xl h-12 pt-1 w-36 flex  flex-row rounded-lg text-center">
                  <img
                    src={paymentPlan}
                    alt="customerServices"
                    className="w-10 h-10 mr-2 ml-1 "
                  />
                  Pay Bill
                </li>
              </Link>
              <Link to="">
                <li className="hover:bg-slate-400 text-2xl  h-12 pt-1 w-52 flex  flex-row rounded-lg text-center">
                  <img
                    src={recycleGuid}
                    alt="customerServices"
                    className="w-9 h-9 mr-2 ml-1 "
                  />
                  Recycle Guid
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default UserHomeHeader;
