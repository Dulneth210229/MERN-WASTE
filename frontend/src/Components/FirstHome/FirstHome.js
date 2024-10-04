import React from "react";
import Header from "./UserHomeHeader";
import login from "./img/Login.svg";
import { Link } from "react-router-dom";

function FirstHome() {
  return (
    <div>
      <Header />
      <div className="flex flex-row mt-32 w-fit mx-auto">
        <div className="flex flex-col gap-5 p-5 bg-blue-200 shadow-2xl rounded-lg my-3 ml-80">
          <h1 className="font-semibold text-4xl text-slate-700 text-center mb-2">
            Login As
          </h1>

          
          <Link to="/WCMUser_Onboarding">
            <button className="text-3xl font-bold hover:scale-105 hover:bg-green-500 transition duration-300 w-96 bg-green-600 rounded-lg p-2">
              User
            </button>
          </Link>

          
          <Link to="/login">
            <button className="text-3xl font-bold hover:scale-105 hover:bg-green-500 transition duration-300 w-96 rounded-lg bg-green-600 p-2">
              Staff
            </button>
          </Link>

          
          <Link to="/WCMDriver_Onboarding">
            <button className="text-3xl font-bold hover:scale-105 hover:bg-green-500 transition duration-300 w-96 rounded-lg bg-green-600 p-2">
              Driver
            </button>
          </Link>



          {/* Sign Up Section */}
          <p className="ml-7 mt-3">
            If you Don't have an account?
            <Link to="/StaffRegister">
              <span className="text-lime-700 font-semibold ml-2 hover:text-lime-800">
                Sign Up Here
              </span>
            </Link>
          </p>
        </div>

        {/* Image Section */}
        <div>
          <img src={login} alt="login" className="w-3/4 h-3/4 mt-6 ml-3" />
        </div>
      </div>
    </div>
  );
}

export default FirstHome;
