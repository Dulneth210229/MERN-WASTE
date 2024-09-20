import React from 'react'
// import './CrmNav.css'
import { Link } from "react-router-dom";


function CrmNav() {

    return (
        <header className="bg-slate-300 static-fixed">
          <div className="flex justify-between items-center max-w-8xl p-2">
            <Link to="/">
              <h1 className="font-bold text-sm sm:text-xl flex flex-wrap     ">
                <span className="font-boldt text-3xl">Fresh</span>
                <span className="text-emerald-500 font-bold text-3xl">Colombo</span>
              </h1>
            </Link>
    
            <ul className="flex gap-5 font-bold">
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
                <Link to="/sign-in">
                  <li className="hover:underline text-2xl">SignIn</li>
                </Link>
               <Link to="/sign-up">
                 <li className="hover:underline text-2xl">SignUp</li>
               </Link>
              </ul>
    
    
            </div>
          </div>
        </header>
      );

//     return (
//     <div>
//         <ul className="home-ui">
//             <li className="home-li">
//             <Link to="/crmHome" className="active home-a">
//                 <h1>Home</h1>
//             </Link>
//             </li>
//             <li className="home-li">
//             <Link to="/FeedbackDisplay" className="active home-a">
//                 <h1>FeedbackDisplay</h1>
//             </Link>
//             </li>
//             <li className="home-li">
//             <Link to="/supportdisplay" className="active home-a">
//                 <h1>Support Display</h1>
//             </Link>
//             </li>
//             <li className="home-li">
//             <Link to="/complaindisplay" className="active home-a">
//                 <h1>Complain Display</h1>
//             </Link>
//             </li>
//             {/* <li className="home-li">
//             <Link to="/AddComplainForm" className="active home-a">
//                 <h1>Make Complain</h1>
//             </Link>
//             </li>
//             <li className="home-li">
//             <Link to="/AddFeedbackForm" className="active home-a">
//                 <h1>Add Feedback</h1>
//             </Link>
//             </li>
//             <li className="home-li">
//             <Link to="/RequestSupportForm" className="active home-a">
//                 <h1>Request Support</h1>
//             </Link>
//             </li> */}
//             <li className="home-li">
//             <Link to="/CrmReport" className="active home-a">
//                 <h1>Report</h1>
//             </Link>
//             </li>
//         </ul>
//     </div>
//   )
}

export default CrmNav;



   