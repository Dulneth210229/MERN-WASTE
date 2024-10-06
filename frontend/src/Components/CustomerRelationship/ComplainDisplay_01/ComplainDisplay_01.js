import { useEffect, useRef, useState } from "react";
import CrmNav from "../CrmNav/CrmNav";
import axios from "axios";
import Complain from "../Complain/Complain";
import SearchIcon from '@mui/icons-material/Search';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from "./img/LOGO.png"; 

const URL = "http://localhost:5001/complain";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function ComplainDisplay_01() {
  const [complain, setComplain] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);
  const ComponentsRef = useRef();

  useEffect(() => {
    fetchHandler().then((data) => setComplain(data.complain));
  }, []);

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredData = data.complain.filter((complain) =>
        Object.values(complain).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setComplain(filteredData);
      setNoResults(filteredData.length === 0);
    });
  };

  const generateReport = () => {
    const doc = new jsPDF();

    doc.addImage(logo, 'PNG', 9, 5, 20, 9);

    const title = "Complain Report";
    const subtitle = "Comprehensive overview of complain details";

    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text(title, 14, 22);
    
    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text(subtitle, 14, 30);
    
    doc.setLineWidth(0.5);
    doc.line(14, 33, 195, 33);

    const marginTop = 40;

    // Get the current date and time
    const currentDate = new Date();
    const dateStr = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

    doc.autoTable({
      startY: marginTop,
      head: [['Full Name', 'Email', 'Category', 'Description', 'Attachments']],
      body: complain.map((complainItem) => [
        complainItem.fullName,
        complainItem.email,
        complainItem.complainCategory,
        complainItem.description,
        complainItem.attachements,
      ]),
      headStyles: {
        fillColor: [41, 87, 141],
        textColor: [255, 255, 255],
        fontSize: 12,
        fontStyle: 'bold',
      },
      bodyStyles: {
        fontSize: 11,
      },
      alternateRowStyles: {
        fillColor: [240, 240, 240],
      },
      margin: { left: 14, right: 14 },
      theme: 'grid',
    });

    // Set date and time below the table
    const dateY = doc.autoTable.previous.finalY + 10; // Positioning date below the table
    doc.text(`Date & Time: ${dateStr}`, 14, dateY);

    // Set signature line
    const signatureY = dateY + 10; // Position for signature below the date
    const signatureText = "Signature: ___________________________";
    doc.text(signatureText, 14, signatureY);

    doc.save("Complain_Report.pdf");
  };

  return (
    <div className="form-container bg-gray-50 min-h-screen">
      <CrmNav />

      <div className="flex items-center justify-center mt-8 mb-4">
        <div className="relative w-1/2"> {/* Centering the search bar */}
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            name="search"
            placeholder="Search complain Details"
            className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-green-200"
          />
          <SearchIcon
            onClick={handleSearch}
            className="absolute right-2 top-2 cursor-pointer transition-all duration-300 hover:scale-110"
            style={{ color: 'gray', fontSize: '24px' }} // Slightly larger icon
          />
        </div>
        <button
          onClick={handleSearch}
          className="ml-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          Search
        </button>
      </div>

      {/* <div className="flex flex-col items-center mt-8 mb-4">
        <div className="relative w-1/2">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            name="search"
            placeholder="Search complain Details"
            className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-green-200"
          />
          <SearchIcon
            onClick={handleSearch}
            // className="absolute right-2 top-2 cursor-pointer text-gray-500"
            className="absolute right-2 top-2 cursor-pointer transition-all duration-300 hover:scale-110"
          />
        </div>
        <button
          onClick={handleSearch}
          className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          Search
        </button>
      </div> */}

      {noResults ? (
        <div className="text-center mt-6">
          <p className="text-lg font-semibold">No complaints found.</p>
          <p>Try searching with different keywords or check your spelling.</p>
        </div>
      ) : (
        <div className="mt-10" ref={ComponentsRef}>
          <div className="flex flex-col items-center bg-white py-10">
            <div className="w-full max-w-4xl p-5">
              {complain &&
                complain.map((complain, i) => (
                  <Complain key={i} complain={complain} />
                ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={generateReport}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Download Complain Report (PDF)
        </button>
      </div>
    </div>
  );
}

export default ComplainDisplay_01;


// import { useEffect, useRef, useState } from "react";
// import CrmNav from "../CrmNav/CrmNav";
// import axios from "axios";
// import Complain from "../Complain/Complain";
// // import { useReactToPrint } from "react-to-print";
// import SearchIcon from '@mui/icons-material/Search';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const URL = "http://localhost:5001/complain";

// const fetchHandler = async () => {
//   return await axios.get(URL).then((res) => res.data);
// };

// function ComplainDisplay_01() {
//   const [complain, setComplain] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [noResults, setNoResults] = useState(false);
//   const ComponentsRef = useRef(); // Define ComponentsRef here

//   useEffect(() => {
//     fetchHandler().then((data) => setComplain(data.complain));
//   }, []);

//   const handleSearch = () => {
//     fetchHandler().then((data) => {
//       const filteredData = data.complain.filter((complain) =>
//         Object.values(complain).some((field) =>
//           field.toString().toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       );
//       setComplain(filteredData);
//       setNoResults(filteredData.length === 0);
//     });
//   };

//   // Function to generate the PDF report
//   const generateReport = () => {
//     const doc = new jsPDF();
//     const title = "Complain Report";
//     const subtitle = "Comprehensive overview of complain details";

//     // Title
//     doc.setFontSize(22);
//     doc.setFont("helvetica", "bold");
//     doc.text(title, 14, 22);
    
//     // Subtitle
//     doc.setFontSize(16);
//     doc.setFont("helvetica", "normal");
//     doc.text(subtitle, 14, 30);
    
//     // Add a horizontal line under the title
//     doc.setLineWidth(0.5);
//     doc.line(14, 33, 195, 33);

//     // Set marginTop for the table
//     const marginTop = 40;

//     // AutoTable for displaying complain details
//     doc.autoTable({
//       startY: marginTop,
//       head: [['Full Name', 'Email', 'Category', 'Description', 'Attachments']],
//       body: complain.map((complainItem) => [
//         complainItem.fullName,
//         complainItem.email,
//         complainItem.complainCategory,
//         complainItem.description,
//         complainItem.attachements,
//       ]),
//       headStyles: {
//         fillColor: [41, 87, 141], // Dark blue
//         textColor: [255, 255, 255], // White
//         fontSize: 12,
//         fontStyle: 'bold',
//       },
//       bodyStyles: {
//         fontSize: 11,
//       },
//       alternateRowStyles: {
//         fillColor: [240, 240, 240], // Light gray for alternate rows
//       },
//       margin: { left: 14, right: 14 },
//       theme: 'grid', // Use grid theme for better visual separation
//     });

//     // Save the PDF
//     doc.save("Complain_Report.pdf");
//   };

//   // const handlePrint = useReactToPrint({
//   //   content: () => ComponentsRef.current,
//   //   documentTitle: "Complain Report",
//   //   onAfterPrint: () => alert("Complain Report Printed"),
//   // });

//   return (
//     <div className="form-container">
//       <CrmNav />

//       <div className="flex items-center justify-end mb-4">
//         <div className="relative">
//           <input
//             onChange={(e) => setSearchQuery(e.target.value)}
//             type="text"
//             name="search"
//             placeholder="Search complain Details"
//             className="px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-green-200"
//           />
//           <SearchIcon
//             onClick={handleSearch}
//             className="absolute right-2 top-2 cursor-pointer"
//             style={{ color: 'gray' }}
//           />
//         </div>
//         <button
//           onClick={handleSearch}
//           className="ml-2 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
//         >
//           Search
//         </button>
//       </div>

//       {noResults ? (
//         <div className="text-center mt-4">
//           <p className="text-lg font-semibold">Oops! No complain matched your search.</p>
//           <p>Please try different keywords or check your spelling.</p>
//           <p>Alternatively, you can view all feedback below.</p>
//         </div>
//       ) : (
//         <div className="mt-10" ref={ComponentsRef}>
//           <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-0">
//             <div className="w-full max-w-4xl p-5">
//               {complain &&
//                 complain.map((complain, i) => (
//                   <Complain key={i} complain={complain} />
//                 ))}
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="flex justify-center gap-4 mt-6">
//         <button
//           onClick={generateReport}
//           className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
//         >
//           Download Complain Report (PDF)
//         </button>

//         {/* <button
//           onClick={handlePrint}
//           className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
//         >
//           Print Complain Report
//         </button> */}
//       </div>
//     </div>
//   );
// }

// export default ComplainDisplay_01;



// import { useEffect } from "react";
// import { useState } from "react";
// // import './FeedbackDisplay_01.css'
// import CrmNav from "../CrmNav/CrmNav";
// import axios from "axios";
// //import Feedback from '../Feedback/Feedback'
// import Complain from "../Complain/Complain";
// import { useReactToPrint } from "react-to-print";
// import { useRef } from "react";
// import SearchIcon from '@mui/icons-material/Search';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const URL = "http://localhost:5001/complain";

// const fetchHandler = async () => {
//   return await axios.get(URL).then((res) => res.data);
// };

// function ComplainDisplay_01() {
//   const [complain, setComplain] = useState();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [noResults, setNoResults] = useState(false);
//   useEffect(() => {
//     fetchHandler().then((data) => setComplain(data.complain));
//   }, []);

//   // const ComponentsRef = useRef();
//   // const handlePrint = useReactToPrint({
//   //   content: () => ComponentsRef.current,
//   //   DocumentTitle: "Complain Report",
//   //   onAfterPrint: () => alert("Complain Report Printed"),
//   // });

//   const handleSearch = () => {
//     fetchHandler().then((data) => {
//       const filteredData = data.complain.filter((complain) =>
//         Object.values(complain).some((field) =>
//           field.toString().toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       );
//       setComplain(filteredData);
//       setNoResults(filteredData.length === 0);
//     });
//   };

//   // Function to generate the PDF report
//   const generateReport = () => {
//     const doc = new jsPDF();
//     const title = "Complain Report";
//     const subtitle = "Comprehensive overview of complain details";

//     // Title
//     doc.setFontSize(22);
//     doc.setFont("helvetica", "bold");
//     doc.text(title, 14, 22);
    
//     // Subtitle
//     doc.setFontSize(16);
//     doc.setFont("helvetica", "normal");
//     doc.text(subtitle, 14, 30);
    
//     // Add a horizontal line under the title
//     doc.setLineWidth(0.5);
//     doc.line(14, 33, 195, 33);

//     // Set marginTop for the table
//     const marginTop = 40;

//     // AutoTable for displaying complain details
//     doc.autoTable({
//       startY: marginTop,
//       head: [['fullName', 'Email','Address','Complain Category','Description','Attachements']],
//       body: complain.map((complainItem) => [
//         complainItem.fullName,
//         complainItem.email,
//         complainItem.complainCategory,
//         complainItem.description,
//         complainItem.attachements,
        
//       ]),
//       headStyles: {
//         fillColor: [41, 87, 141], // Dark blue
//         textColor: [255, 255, 255], // White
//         fontSize: 12,
//         fontStyle: 'bold',
//       },
//       bodyStyles: {
//         fontSize: 11,
//       },
//       alternateRowStyles: {
//         fillColor: [240, 240, 240], // Light gray for alternate rows
//       },
//       margin: { left: 14, right: 14 },
//       theme: 'grid', // Use grid theme for better visual separation
//     });

//     // Save the PDF
//     doc.save("Feedback_Report.pdf");
//   };



//   return (
//     <div className="form-container">
//       <CrmNav />

//       <div className="flex items-center justify-end mb-4">
//         <div className="relative">
//           <input
//             onChange={(e) => setSearchQuery(e.target.value)}
//             type="text"
//             name="search"
//             placeholder="Search complain Details"
//             className="px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-green-200"
//           />
//           <SearchIcon
//             onClick={handleSearch}
//             className="absolute right-2 top-2 cursor-pointer"
//             style={{ color: 'gray' }}
//           />
//         </div>
//         <button
//           onClick={handleSearch}
//           className="ml-2 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
//         >
//           Search
//         </button>
//       </div>

//       {noResults ? (
//         <div className="text-center mt-4">
//           <p className="text-lg font-semibold">Oops! No complain matched your search.</p>
//           <p>Please try different keywords or check your spelling.</p>
//           <p>Alternatively, you can view all feedback below.</p>
//         </div>
//       ) : (

//       <div className="mt-10" ref={ComponentsRef}>
//         <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-0">
//           <div className="w-full max-w-4xl p-5">
//             {complain &&
//               complain.map((complain, i) => (
//                 <Complain key={i} complain={complain} />
//               ))}
//           </div>
//         </div> 
//       </div>
//       )}

//      <div className="flex justify-center gap-4 mt-6">
//         <button
//           onClick={generateReport}
//           className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
//         >
//           Download Complain Report (PDF)
//         </button>

       
//       </div>



//       {/* <button
//         onClick={handlePrint}
//         className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
//       >
//         Download Complain Report
//       </button> */}
//     </div>
//   );
// }

// export default ComplainDisplay_01;
