import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import UserHomeHeader from "../../FirstHome/UserHomeHeader"; // Import UserHomeHeader component

function WCMUser_Onboarding() {
  return (
    <div>
      <UserHomeHeader />
      <h1 className="text-3xl font-bold mb-8 text-slate-700 text-center mt-5">
        Welcome To Waste Management
      </h1>
      <hr className="border-2" />

      <div className="space-y-4 w-full max-w-sm mx-auto bg-slate-300 mt-16 p-5 rounded-lg ">
        <Link
          to="/WCMUser_Register"
          className="block w-full bg-blue-500 text-white text-center py-3 rounded-md shadow hover:bg-blue-600 transition duration-300 font-bold"
        >
          New User? Register Here
        </Link>
        <Link
          to="/WCMUser_Login"
          className="block w-full bg-green-500 text-white text-center py-3 rounded-md shadow hover:bg-green-600 transition duration-300 font-bold"
        >
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
}

export default WCMUser_Onboarding;
