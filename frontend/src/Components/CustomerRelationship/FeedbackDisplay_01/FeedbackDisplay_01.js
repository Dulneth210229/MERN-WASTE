import { useEffect, useState, useRef } from "react";
import axios from "axios";
import CrmNav from "../CrmNav/CrmNav";
import Feedback from "../Feedback/Feedback";
import SearchIcon from '@mui/icons-material/Search'; // Import Search Icon
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Import autoTable

const URL = "http://localhost:5001/feedback";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function FeedbackDisplay_01() {
  const [feedback, setFeedback] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);
  const ComponentsRef = useRef();

  useEffect(() => {
    fetchHandler().then((data) => setFeedback(data.feedback));
  }, []);

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredData = data.feedback.filter((feedback) =>
        Object.values(feedback).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setFeedback(filteredData);
      setNoResults(filteredData.length === 0);
    });
  };

  // Function to generate the PDF report
  const generateReport = () => {
    const doc = new jsPDF();
    const title = "Feedback Report";
    const subtitle = "Comprehensive overview of feedback details";

    // Title
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text(title, 14, 22);
    
    // Subtitle
    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text(subtitle, 14, 30);
    
    // Add a horizontal line under the title
    doc.setLineWidth(0.5);
    doc.line(14, 33, 195, 33);

    // Set marginTop for the table
    const marginTop = 40;

    // AutoTable for displaying feedback details
    doc.autoTable({
      startY: marginTop,
      head: [['User Name', 'Email','Address','Phone','Rating', 'Feedback']],
      body: feedback.map((feedbackItem) => [
        feedbackItem.name,
        feedbackItem.email,
        feedbackItem.address,
        feedbackItem.phone,
        feedbackItem.rating,
        feedbackItem.comment,
      ]),
      headStyles: {
        fillColor: [41, 87, 141], // Dark blue
        textColor: [255, 255, 255], // White
        fontSize: 12,
        fontStyle: 'bold',
      },
      bodyStyles: {
        fontSize: 11,
      },
      alternateRowStyles: {
        fillColor: [240, 240, 240], // Light gray for alternate rows
      },
      margin: { left: 14, right: 14 },
      theme: 'grid', // Use grid theme for better visual separation
    });

    // Save the PDF
    doc.save("Feedback_Report.pdf");
  };

  return (
    <div className="form-container">
      <CrmNav />
      <div className="flex items-center justify-end mb-4">
        <div className="relative">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            name="search"
            placeholder="Search feedback Details"
            className="px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-green-200"
          />
          <SearchIcon
            onClick={handleSearch}
            className="absolute right-2 top-2 cursor-pointer"
            style={{ color: 'gray' }}
          />
        </div>
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          Search
        </button>
      </div>

      {noResults ? (
        <div className="text-center mt-4">
          <p className="text-lg font-semibold">Oops! No feedback matched your search.</p>
          <p>Please try different keywords or check your spelling.</p>
          <p>Alternatively, you can view all feedback below.</p>
        </div>
      ) : (
        <div className="mt-10" ref={ComponentsRef}>
          <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-0">
            <div className="w-full max-w-4xl p-5">
              {feedback.map((feedbackItem, i) => (
                <Feedback key={i} feedback={feedbackItem} />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={generateReport}
          className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          Download Feedback Report (PDF)
        </button>
      </div>
    </div>
  );
}

export default FeedbackDisplay_01;


// import { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import CrmNav from "../CrmNav/CrmNav";
// import Feedback from "../Feedback/Feedback";
// import { useReactToPrint } from "react-to-print";
// import SearchIcon from '@mui/icons-material/Search'; // Import Search Icon
// import jsPDF from 'jspdf';
// import 'jspdf-autotable'; // Import autoTable

// const URL = "http://localhost:5001/feedback";

// const fetchHandler = async () => {
//   return await axios.get(URL).then((res) => res.data);
// };

// function FeedbackDisplay_01() {
//   const [feedback, setFeedback] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [noResults, setNoResults] = useState(false);
//   const ComponentsRef = useRef();

//   useEffect(() => {
//     fetchHandler().then((data) => setFeedback(data.feedback));
//   }, []);

//   const handleSearch = () => {
//     fetchHandler().then((data) => {
//       const filteredData = data.feedback.filter((feedback) =>
//         Object.values(feedback).some((field) =>
//           field.toString().toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       );
//       setFeedback(filteredData);
//       setNoResults(filteredData.length === 0);
//     });
//   };

//   // Function to generate the PDF report
//   const generateReport = () => {
//     const doc = new jsPDF();
//     const title = "Feedback Report";
//     const subtitle = "Comprehensive overview of feedback details";

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

//     // AutoTable for displaying feedback details
//     doc.autoTable({
//       startY: marginTop,
//       head: [['User Name', 'Email','Address','Phone','Rating', 'Feedback']],
//       body: feedback.map((feedbackItem) => [
//         feedbackItem.name,
//         feedbackItem.email,
//         feedbackItem.address,
//         feedbackItem.phone,
//         feedbackItem.rating,
//         feedbackItem.comment,
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

//   // Print function using react-to-print
//   const handlePrint = useReactToPrint({
//     content: () => ComponentsRef.current,
//     documentTitle: "Feedback Report",
//     onAfterPrint: () => alert("Feedback Report Printed"),
//   });

//   return (
//     <div className="form-container">
//       <CrmNav />
//       <div className="flex items-center justify-end mb-4">
//         <div className="relative">
//           <input
//             onChange={(e) => setSearchQuery(e.target.value)}
//             type="text"
//             name="search"
//             placeholder="Search feedback Details"
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
//           <p className="text-lg font-semibold">Oops! No feedback matched your search.</p>
//           <p>Please try different keywords or check your spelling.</p>
//           <p>Alternatively, you can view all feedback below.</p>
//         </div>
//       ) : (
//         <div className="mt-10" ref={ComponentsRef}>
//           <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-0">
//             <div className="w-full max-w-4xl p-5">
//               {feedback.map((feedbackItem, i) => (
//                 <Feedback key={i} feedback={feedbackItem} />
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="flex justify-center gap-4 mt-6">
//         <button
//           onClick={generateReport}
//           className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
//         >
//           Download Feedback Report (PDF)
//         </button>

       
//       </div>
//     </div>
//   );
// }

// export default FeedbackDisplay_01;



// import { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import CrmNav from "../CrmNav/CrmNav";
// import Feedback from "../Feedback/Feedback";
// import { useReactToPrint } from "react-to-print";
// import SearchIcon from '@mui/icons-material/Search'; // Import Search Icon

// const URL = "http://localhost:5001/feedback";

// const fetchHandler = async () => {
//   return await axios.get(URL).then((res) => res.data);
// };

// function FeedbackDisplay_01() {
//   const [feedback, setFeedback] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [noResults, setNoResults] = useState(false);
//   const ComponentsRef = useRef();

//   useEffect(() => {
//     fetchHandler().then((data) => setFeedback(data.feedback));
//   }, []);

//   const handlePrint = useReactToPrint({
//     content: () => ComponentsRef.current,
//     documentTitle: "Feedback Report",
//     onAfterPrint: () => alert("Feedback Report Printed"),
//   });

//   const handleSearch = () => {
//     fetchHandler().then((data) => {
//       const filteredData = data.feedback.filter((feedback) =>
//         Object.values(feedback).some((field) =>
//           field.toString().toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       );
//       setFeedback(filteredData);
//       setNoResults(filteredData.length === 0);
//     });
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
//             placeholder="Search feedback Details"
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
//           <p className="text-lg font-semibold">Oops! No feedback matched your search.</p>
//           <p>Please try different keywords or check your spelling.</p>
//           <p>Alternatively, you can view all feedback below.</p>
//         </div>
//       ) : (
//         <div className="mt-10" ref={ComponentsRef}>
//           <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-0">
//             <div className="w-full max-w-4xl p-5">
//               {feedback.map((feedbackItem, i) => (
//                 <Feedback key={i} feedback={feedbackItem} />
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       <button
//         onClick={handlePrint}
//         className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
//       >
//         Download Feedback Report
//       </button>
//     </div>
//   );
// }

// export default FeedbackDisplay_01;






