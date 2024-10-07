import React, { useState, useEffect, useRef } from 'react';
import EmployeeNav from '../EmployeeNav/EmployeeNav';
import axios from 'axios';
import Employee from '../Employee/Employee';
import { Link } from "react-router-dom";
// import { useReactToPrint } from "react-to-print";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from "./LOGO.png";

const EURL = "http://Localhost:5001/Employee";

const fetchHandler = async () => {
    return await axios.get(EURL).then((res) => res.data);
}

function Employees() {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetchHandler().then((data) => setEmployees(data.employees));
    }, []);

    const ComponentsRef = useRef();
    // const handlePrint = useReactToPrint({
    //     content: () => ComponentsRef.current,
    //     DocumentTitle: "Employees Report",
    //     onafterprint: () => alert("Employee report successfully downloaded!"),
    // });

    const [searchQuery, setSearchQuery] = useState("");
    const [noResults, setNoResults] = useState(false);

    const handleSearch = () => {
        fetchHandler().then((data) => {
            const filteredUsers = data.users.filter((user) =>
                Object.values(user).some((field) =>
                    field.toString().toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
            setEmployees(filteredUsers);
            setNoResults(filteredUsers.length === 0);
        });
    };

    // Function to generate the PDF report
    const generateReport = () => {
        const doc = new jsPDF();

        // Set logo position and size
 const logoX = 14; // X-coordinate for logo
 const logoY = 10; // Y-coordinate for logo
 doc.addImage(logo, 'PNG', logoX, logoY, 40, 20); // Adjust the position and size as needed
<br></br>





        const title = "                            Employee Report";
        const subtitle = "                         Comprehensive overview of employee details: (Date:   Month:   )Year:  ";
        
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

        // AutoTable for displaying employee details
        doc.autoTable({
            startY: marginTop,
            head: [[' First Name', ' Last Name', ' Designation', ' Address', ' Email', ' Phone', ' Salary']],
            body: employees.map((item) => [
                item.employeeFirstName,
                item.employeeLastName,
                item.employeeCatogory,
                item.employeeAddress,
                item.employeeEmail,
                item.employeePhone,
                item.employeeSalary,
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

        // Add Signature Line
  const signatureY = doc.previousAutoTable.finalY + 20; // Position below the table
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("Signature:_______________________", 14, signatureY);

        // Save the PDF
        doc.save("Employee_Report.pdf");
    };

    return (
        <div>
            <EmployeeNav />
            <div className="flex flex-row mt-5 mb-2 justify-between">
                <h1 className="text-center font-semibold m-1 ml-5 text-4xl text-slate-700">
                    Employee Details Display
                </h1>

                <hr className="border-2" />

                <div className="flex flex-row gap-5">
                    <Link to="/addemployee">
                        <button className="h-10 p-3 mt-2 mr-2 font-bold bg-red-500 px-5 rounded-lg text-white">
                            +Add
                        </button>
                    </Link>

                    <div className="mb-6 flex space-x-4">
                        <input
                            onChange={(e) => setSearchQuery(e.target.value)}
                            type="text"
                            name="search"
                            placeholder="Search Employee Details"
                            className="px-4 py-2 border border-gray-300 rounded-lg"
                        />
                        <button
                            onClick={handleSearch}
                            className="h-10 p-2 mt-2 mr-2 font-bold bg-green-500 px-5 rounded-lg text-white"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <hr className="border-2" />

            <br />

            {noResults ? (
                <div>
                    <p>No Employee Found</p>
                </div>
            ) : (
                <div ref={ComponentsRef} className='w-full max-w-4xl '>
                    {employees && employees.map((employee, i) => (
                        <div key={i} className="mb-4 p-4 bg-white shadow-md rounded-lg">
                            <Employee employee={employee} />
                        </div>
                    ))}
                </div>
            )}
            <br />
            <br />

            <button
                onClick={generateReport}
                className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            >
                Download Employee Report (PDF)
            </button>
        </div>
    );
}

export default Employees;


// import React,{ useState,useEffect } from 'react';
// import { useRef } from 'react';
// import EmployeeNav from '../EmployeeNav/EmployeeNav';
// import axios from 'axios';
// import Employee from '../Employee/Employee';
// import { Link } from "react-router-dom";
// import {useReactToPrint} from "react-to-print";
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';


// const EURL = "http://Localhost:5001/Employee";

// const fetchHandler = async()=>{
//     return await axios.get(EURL).then((res) => res.data);
// }

// function Employees() {
// const [employees, setEmployees]=useState();
// useEffect(()=>{
//     fetchHandler().then((data)=> setEmployees(data.employees));
// },[])

// const ComponentsRef = useRef();
// const handlePrint = useReactToPrint({
//   content: () => ComponentsRef.current,
//   DocumentTitle:"Employees Report",
//   onafterprint:()=>alert ("Employee report successfully download!"),

// });

// const [searchQuery, setSearchQuery]=useState("");
// const [noResults, setNoResults]=useState(false);

// const handleSearch =()=>{
//   fetchHandler().then((data)=>{
//     const filteredUsers = data.users.filter((user)=>
//       Object.values(user).some((field)=>
    
//       field.toString().toLowerCase().includes(searchQuery.toLowerCase())
      
//       ))
//       setEmployees(filteredUsers);
//       setNoResults(filteredUsers.length === 0);
//   });
// };
// // Function to generate the PDF report
// const generateReport = () => {
//   const doc = new jsPDF();
//   const title = "Feedback Report";
//   const subtitle = "Comprehensive overview of feedback details";

//   // Title
//   doc.setFontSize(22);
//   doc.setFont("helvetica", "bold");
//   doc.text(title, 14, 22);
  
//   // Subtitle
//   doc.setFontSize(16);
//   doc.setFont("helvetica", "normal");
//   doc.text(subtitle, 14, 30);
  
//   // Add a horizontal line under the title
//   doc.setLineWidth(0.5);
//   doc.line(14, 33, 195, 33);

//   // Set marginTop for the table
//   const marginTop = 40;

//   // AutoTable for displaying feedback details
//   doc.autoTable({
//     startY: marginTop,
//     head: [['Employee First Name', 'Employee Last Name','Employee Designation','Employee Address','Employee Email', 'Employee Phone','Employee Salary']],
//     body: employees.map((Item) => [
//       Item.employeeFirstName,
//       Item.employeeLastName,
//       Item.employeeCatogory,
//       Item.employeeAddress,
//       Item.employeeEmail,
//       Item.employeePhone,
//       Item.employeeSalary,
//     ]),
//     headStyles: {
//       fillColor: [41, 87, 141], // Dark blue
//       textColor: [255, 255, 255], // White
//       fontSize: 12,
//       fontStyle: 'bold',
//     },
//     bodyStyles: {
//       fontSize: 11,
//     },
//     alternateRowStyles: {
//       fillColor: [240, 240, 240], // Light gray for alternate rows
//     },
//     margin: { left: 14, right: 14 },
//     theme: 'grid', // Use grid theme for better visual separation
//   });

//   // Save the PDF
//   doc.save("Employee_Report.pdf");
// };


// return (
//     <div>
//         <EmployeeNav/>
//         <div className="flex flex-row mt-5 mb-2 justify-between">
//         <h1 className="text-center font-semibold m-1 ml-5 text-4xl text-slate-700">
//           Employee Details Display</h1>
          
//           <hr className="border-2" />

//           <div className="flex flex-row gap-5">
//           <Link to="/addemployee">
//             <button className="bg-lime-700 text-white p-3 rounded-lg uppercase w-72 over:opacity-95  ">
//               Add New Employee
//             </button>
//           </Link>
          
//           <div className="mb-6 flex space-x-4">
//         <input
//           onChange={(e) => setSearchQuery(e.target.value)}
//           type="text"
//           name="search"
//           placeholder="Search Employee Details"
//           className="px-4 py-2 border border-gray-300 rounded-lg"
//         />
//         <button
//           onClick={handleSearch}
//           className="h-10 p-2 mt-2 mr-2 font-bold bg-green-500 px-5 rounded-lg text-white"
//         >
//           Search
//         </button>
//         </div>
//           </div>
         
        
//       </div>
//       <hr className="border-2" />
      
//       <br></br>
      
//       {noResults?(
//         <div>
//           <p>No Employee Found</p>
//           </div>
//       ):(

//       <div ref={ComponentsRef} className='w-full max-w-4xl'>
//         {employees && employees.map((employee, i)=>(
//             <div key={i}className="mb-4 p-4 bg-white shadow-md rounded-lg" >
//                 <Employee employee={employee}/>
//             </div>
//         ))}
//       </div>
//       )}
//       <br></br>
//       <br></br>


//       <button
//           onClick={generateReport}
//           className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
//         >
//           Download Feedback Report (PDF)
//         </button>
//     </div>
//   );
// };

// export default Employees;
