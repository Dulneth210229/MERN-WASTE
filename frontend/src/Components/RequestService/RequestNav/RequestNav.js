import React from "react";
import "./RequestNav.css";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function requestNav() {
  return (
    <header className="bg-green-200 mt-1 mx-auto rounded-lg max-w-max">
      <div className="flex justify-center items-center max-w-8xl p-2">
        {/* <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap     ">
            <span className="font-boldt text-3xl">Fresh</span>
            <span className="text-emerald-500 font-bold text-3xl">Colombo</span>
          </h1>
        </Link> */}

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
            to="/requestDetailsUser"
            className={({ isActive }) =>
              isActive ? "underline text-2xl" : "hover:underline text-2xl"
            }
          >
            <li>View Requests</li>
          </NavLink>
        </ul>
        {/* <div className="flex p-1">
          <ul className="flex gap-5 font-bold pr-2 pt-1">
            <Link to="/sign-in">
              <li className="hover:underline text-2xl">SignIn</li>
            </Link>
            <Link to="/sign-up">
              <li className="hover:underline text-2xl">SignUp</li>
            </Link>
          </ul>
        </div> */}
      </div>
    </header>

    // <div>
    //   <ul className="home-ui">
    //     <li className="home-li">
    //       <Link to="/" className="active home-a">
    //         <h1>Home</h1>
    //       </Link>
    //     </li>
    //     <li className="home-li">
    //       <Link to="/addrequest" className="active home-a">
    //         <h1>Add Request</h1>
    //       </Link>
    //     </li>
    //     <li className="home-li">
    //       <Link to="/viewrequests" className="active home-a">
    //         <h1>View Requests</h1>
    //       </Link>
    //     </li>

    // {/* <li className='home-li'>
    //     <Link to='/careers' className='active home-a'>
    //         <h1>Careers</h1>
    //     </Link>
    // </li> */}
    //    </ul>
    //  </div>
  );
}

export default requestNav;
