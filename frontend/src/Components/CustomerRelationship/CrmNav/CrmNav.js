import React from 'react'
// import './CrmNav.css'
import { Link } from "react-router-dom";
// import logo from "./LOGO.png";



function CrmNav() {

  return (
    <div className=" flex flex-col">
      

      <header className="bg-sky-100 mt-5 mx-auto rounded-lg p-2">
        <div className="flex justify-between items-center max-w-8xl p-2 ">
          <ul className="flex gap-9 font-bold">
          <Link to="/crmHome">
                 <li className="hover:underline text-2xl gap-6">Home</li>
               </Link>
               <Link to="/FeedbackDisplay">
               <li className="hover:underline text-2xl">Feedback Display</li>
               </Link>
               <Link to="/complaindisplay">
                 <li className="hover:underline text-2xl">Complain Display</li>
               </Link>
               <Link to="/supportdisplay">
                 <li className="hover:underline text-2xl">Support Display</li>
               </Link>
               <Link to="/CrmReport">
                 <li className="hover:underline text-2xl">Report</li>
               </Link>
             </ul>
             <div className="flex p-1">
               <ul className="flex gap-5 font-bold pr-2 pt-1">
                 
            </ul>

          </div>
        </div>
      </header>
    </div>
  );
}

export default CrmNav;


// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { BsThreeDotsVertical } from 'react-icons/bs'; // Install react-icons if needed: npm install react-icons

// function CrmNav() {
//   const location = useLocation();
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // Toggle dropdown
//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // Close the dropdown if clicked outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Function to apply active class to the current route
//   const isActive = (path) =>
//     location.pathname === path
//       ? 'text-blue-600 border-b-4 border-blue-600'
//       : 'text-gray-700';

//   return (
//     <nav className="">
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         {/* Add other navigation items here if needed */}

//         {/* Customize and Control (Three Dots) */}
//         <div className="relative ml-auto" ref={dropdownRef}>
//           <button
//             className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
//             onClick={toggleDropdown}
//           >
//             <BsThreeDotsVertical className="text-2xl text-gray-700" />
//           </button>

//           {dropdownOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
//               <Link
//                 to="/crmHome"
//                 className={`block px-4 py-2 ${isActive(
//                   '/crmHome'
//                 )} hover:bg-gray-100`}
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/profile"
//                 className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//               >
//                 Profile
//               </Link>
//               <Link
//                 to="/settings"
//                 className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//               >
//                 Settings
//               </Link>
//               <Link
//                 to="/logout"
//                 className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//               >
//                 Logout
//               </Link>
//               <hr className="my-1" />
//               <Link
//                 to="/FeedbackDisplay"
//                 className={`block px-4 py-2 ${isActive(
//                   '/FeedbackDisplay'
//                 )} hover:bg-gray-100`}
//               >
//                 Feedback Display
//               </Link>
//               <Link
//                 to="/complaindisplay"
//                 className={`block px-4 py-2 ${isActive(
//                   '/complaindisplay'
//                 )} hover:bg-gray-100`}
//               >
//                 Complain Display
//               </Link>
//               <Link
//                 to="/supportdisplay"
//                 className={`block px-4 py-2 ${isActive(
//                   '/supportdisplay'
//                 )} hover:bg-gray-100`}
//               >
//                 Support Display
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default CrmNav;



