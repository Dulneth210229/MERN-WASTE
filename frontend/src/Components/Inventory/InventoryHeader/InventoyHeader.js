import React from "react";
import { Link } from "react-router-dom";
import logo from "./LOGO.png";

function InventoyHeader() {
  return (
    <div className=" flex flex-col">
      <Link to="/">
        <div className="ml-3">
          <img src={logo} alt="Logo" className="h-20" />
        </div>
      </Link>
      <header>
        <div className="flex  p-2 bg-slate-300">
          <div className="mx-auto ml-5 ">
            <ul className="flex gap-8 font-bold ">
              <Link to="/">
                <li className="hover:underline text-2xl gap-6">Home</li>
              </Link>
              <Link to="/inventoryHome">
                <li className="hover:underline text-2xl">Inventory</li>
              </Link>
              <Link to="about">
                <li className="hover:underline text-2xl">Orders</li>
              </Link>
              <Link to="/inventoryReport">
                <li className="hover:underline text-2xl">Report</li>
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
export default InventoyHeader;
