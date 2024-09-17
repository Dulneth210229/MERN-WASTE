// import { FaSearch } from "react-icons/fa";
import logo from "./LOGO.png";
import React from "react";
import "./AdminNav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className=" flex flex-col">
      <Link to="/">
        <div className="ml-3">
          <img src={logo} alt="Logo" className="h-20" />
        </div>
      </Link>
      <header className="bg-slate-300 ">
        <div className="flex justify-between items-center max-w-8xl p-2 ">
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
              <Link to="/login">
                <li className="hover:underline text-2xl">SignIn</li>
              </Link>
              <Link to="/AdminRegister">
                <li className="hover:underline text-2xl">SignUp</li>
              </Link>
            </ul>

            {/* <form className="bg-slate-100 p-2 rounded-lg flex items-center ">
            <input
              type="text"
              placeholder="Search..."
              //Responsivness od the components
              //w-24 --> make the size according to the mobile
              //sm:w-64 --> above the size of the mobile
              className="bg-transparent focus:outline-none w-24 sm:w-64"
            />
            <FaSearch className="text-slate-600" />
          </form> */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;

//previous nav bar
// <div>

//   <ul className='home-ui'>
//     <li className='home-li'>
//         <Link to='/inventory' className='active home-a'>
//             <h1>Invetory</h1>
//         </Link>
//     </li>
//     <li className='home-li'>
//         <Link to='/requestservice' className='active home-a'>
//             <h1>Request service</h1>
//         </Link>
//     </li>
//     <li className='home-li'>
//         <Link to='/customerrelationship' className='active home-a'>
//             <h1>Coutomer relationship</h1>
//         </Link>
//     </li>
//     <li className='home-li'>
//         <Link to='/recyclingguide' className='active home-a'>
//             <h1>Account management</h1>
//         </Link>
//     </li>
//     <li className='home-li'>
//         <Link to='/wastecollection' className='active home-a'>
//             <h1>Waste collection</h1>
//         </Link>
//     </li>
//     <li className='home-li'>
//         <Link to='/paymentplan' className='active home-a'>
//             <h1>Payment plan</h1>
//         </Link>
//     </li>
//     <li className='home-li'>
//         <Link to='/employeemgt' className='active home-a'>
//             <h1>Employee magt</h1>
//         </Link>
//     </li>
//     <li className='home-li'>
//         <Link to='/wastecategory' className='active home-a'>
//             <h1>Waste category</h1>
//         </Link>
//     </li>
//   </ul>
// </div>
