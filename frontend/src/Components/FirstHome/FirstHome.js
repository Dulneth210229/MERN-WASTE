import React from "react";
import Header from "./UserHomeHeader";
import login from "./img/Login.svg";
import { Link } from "react-router-dom";
function FirstHome() {
  return (
    <div>
      <Header />
      <div className="flex flex-row mt-32 w-fit  mx-auto ">
        <div className="flex flex-col  gap-5 p-5 bg-green-50 shadow-2xl rounded-lg my-3 ml-80">
          <h1 className="font-semibold text-4xl text-slate-700 text-center">
            Login As
          </h1>
          <Link to="/userHomePage">
            <button className="text-3xl font-bold hover:bg-green-500 w-96 rounded-lg">
              User
            </button>
          </Link>
          <Link to="">
            <button className="text-3xl font-bold hover:bg-green-500 w-96 rounded-lg">
              Admin
            </button>
          </Link>
          <Link to="">
            <button className="text-3xl font-bold hover:bg-green-500 w-96 rounded-lg">
              Driver
            </button>
          </Link>
        </div>
        <div>
          <img src={login} alt="login" className="w-3/4 h-3/4 mt-6 ml-3 " />
        </div>
      </div>
    </div>
  );
}
export default FirstHome;
