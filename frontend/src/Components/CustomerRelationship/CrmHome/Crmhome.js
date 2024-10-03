import React from 'react';
import { Link } from 'react-router-dom';
import { FaComment, FaExclamationCircle, FaHeadset } from 'react-icons/fa'; // Icons
import CrmNav from '../CrmNav/CrmNav';
import UserHomeHeader from '../../UserHomePage/UserHomeHeader';
import UserFooter from '../../UserHomePage/UserFooter';

function CrmHome() {
  return (
    <div>
      <UserHomeHeader />
      <CrmNav />

      <div className="flex flex-col items-center justify-center mt-16">
        <h1 className="text-center font-bold text-4xl mb-10 text-gray-800">How Can We Assist You Today?</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
          {/* Add Feedback Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
            <FaComment className="text-5xl text-green-600 mb-4 mx-auto" />
            <h2 className="font-semibold text-2xl mb-4">Add Feedback</h2>
            <p className="text-gray-600 mb-6">Help us improve by sharing your valuable feedback.</p>
            <Link to="/AddFeedbackForm">
              <button className="bg-green-600 text-white px-6 py-3 rounded-md uppercase font-bold hover:bg-green-700 transition duration-300">
                Add Feedback
              </button>
            </Link>
          </div>

          {/* Make Complaint Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
            <FaExclamationCircle className="text-5xl text-red-600 mb-4 mx-auto" />
            <h2 className="font-semibold text-2xl mb-4">Make Complaint</h2>
            <p className="text-gray-600 mb-6">Report any issues you’re facing and we'll resolve them quickly.</p>
            <Link to="/AddComplainForm">
              <button className="bg-red-600 text-white px-6 py-3 rounded-md uppercase font-bold hover:bg-red-700 transition duration-300">
                Make Complaint
              </button>
            </Link>
          </div>

          {/* Request Support Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
            <FaHeadset className="text-5xl text-blue-600 mb-4 mx-auto" />
            <h2 className="font-semibold text-2xl mb-4">Request Support</h2>
            <p className="text-gray-600 mb-6">Need help? Our support team is here for you.</p>
            <Link to="/RequestSupportForm">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md uppercase font-bold hover:bg-blue-700 transition duration-300">
                Request Support
              </button>
            </Link>
          </div>
        </div>
      </div>

      <UserFooter />
    </div>
  );
}

export default CrmHome;


// import React from 'react'
// // import './CrmHome.css'
// import CrmNav from '../CrmNav/CrmNav'
// import { Link } from "react-router-dom";
// import UserHomeHeader from '../../UserHomePage/UserHomeHeader';
// import UserFooter from '../../UserHomePage/UserFooter';

// function Crmhome() {
 
//   return (

//     <div>
//     <UserHomeHeader />
//     <CrmNav />
//     <div className="flex flex-row ">
//       <div className="flex flex-col gap-5 p-5 mt-16 w-2/7 bg-sky-200 rounded-xl mx-auto">
//         <h1 className="text-center font-semibold text-3xl">Choose Your Path</h1>
//         <Link to="/AddFeedbackForm">
//           <button
//             type="submit"
//             className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72  over:opacity-95 font-semibold hover:bg-lime-500 mb-2  hover:scale-110 transition duration-300 ml-2"
//           >
//             Add Feedback
//           </button>
//         </Link>
//         <Link to="/AddComplainForm">
//           <button
//             type="submit"
//             className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72  over:opacity-95 font-semibold hover:bg-lime-500 mb-2 hover:scale-110 transition duration-300 ml-2"
//           >
//             Make Complain
//           </button>
//         </Link>
//         <Link to="/RequestSupportForm">
//           <button
//             type="submit"
//             className="bg-lime-600 text-white p-3 rounded-lg uppercase w-72  over:opacity-95 font-semibold hover:bg-lime-500 mb-2 hover:scale-110 transition duration-300 ml-2"
//           >
//             Request Support
//           </button>
//         </Link>
//       </div>
//     </div>
//     <UserFooter />
//   </div>

    
//   );   
// }

// export default Crmhome;
