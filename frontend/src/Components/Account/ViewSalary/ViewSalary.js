// ViewSalary.js
import React, { useEffect, useState } from 'react';
import AccountNav from '../AccountNav/AccountNav';
import axios from "axios";
import Salary from '../Salary/Salary';
//import jsPDF from 'jspdf';
//import 'jspdf-autotable';

const AURL = "http://Localhost:5001/account";

const fetchSalary = async () => {
  return await axios.get(AURL).then((res) => res.data);
}

function ViewSalary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);
  const [account, setSalary] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetchSalary().then((data) => setSalary(data.account));
  }, []);

  const handleSearch = () => {
    fetchSalary().then((data) => {
      const filteredSalary = data.account.filter((account) =>
        Object.values(account).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setSalary(filteredSalary);
      setNoResults(filteredSalary.length === 0);
      setSuggestions(filteredSalary);
    });
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value) {
      fetchSalary().then((data) => {
        const filteredSalary = data.account.filter((account) =>
          Object.values(account).some((field) =>
            field.toString().toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
        setSuggestions(filteredSalary);
      });
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div>
      <AccountNav />

      <div className="flex justify-end mb-6 bg-sla bg-gray-100">
        <input
          onChange={handleInputChange}
          value={searchQuery}
          type="text"
          placeholder="Search salary"
          className="border border-gray-300 rounded p-2 w-64"
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 text-white py-2 px-4 rounded ml-2 hover:bg-green-600">
          Search
        </button>
      </div>

      <div>
        {account && account.map((account, i) => (
          <div key={i}>
            <Salary account={account} />
          </div>
        ))}
      </div>

      </div>
  );
}

export default ViewSalary;













// export const generateReport = (account) => {
//   // Set the orientation to landscape by using 'l'
//   const doc = new jsPDF('l', 'mm', 'a4'); // 'l' for landscape

//   const title = "Salary Report";
//   const subtitle = "Comprehensive overview of Salary details";

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
//   doc.line(14, 33, 280, 33); // Adjust line width to fit landscape

//   // Set marginTop for the table
//   const marginTop = 40;

//   // AutoTable for displaying salary details
//   doc.autoTable({
//     startY: marginTop,
//     head: [['First Name', 'Last Name', 'NIC', 'EID', 'Designation','Basic_Salary','Allowance', 'Credit','Debit','ETF','EPF','Total Salary']],
//     body: account.map((salaryItem) => [
//       salaryItem.First_Name,
//       salaryItem.Last_Name,
//       salaryItem.NIC,
//       salaryItem.Employee_ID,
//       salaryItem.Designation,
//       salaryItem.Basic_Salary,
//       salaryItem.Allowance,
//       salaryItem.Credit,
//       salaryItem.Debit,
//       salaryItem.ETF,
//       salaryItem.EPF,
//       salaryItem.Total_Salary,
//     ]),
//     headStyles: {
//       fillColor: [41, 87, 141], // Dark blue
//       textColor: [255, 255, 255], // White
//       fontSize: 12,
//       fontStyle: 'bold',
//       halign: 'center',
//     },
//     bodyStyles: {
//       fontSize: 11,
//       cellPadding: 3, // Increase cell padding for better spacing
//       halign: 'center', // Align body cells content to center
//     },
//     alternateRowStyles: {
//       fillColor: [240, 240, 240], // Light gray for alternate rows
//     },
//     styles: {
//       lineColor: [200, 200, 200], // Add table grid lines
//       lineWidth: 0.5,
//     },
//     columnStyles: {
//       0: { cellWidth: 20 }, // FName auto width
//       1: { cellWidth: 20 }, // LName auto width
//       2: { cellWidth: 20 }, // NIC column (index 2)
//       3: { cellWidth: 20 }, // EID fixed width
//       4: { cellWidth: 20 }, // Designation auto width
//       5: { cellWidth: 25 },
//       6: { cellWidth: 20 }, 
//       7: { cellWidth: 20 }, 
//       8: { cellWidth: 20 }, 
//       9: { cellWidth: 20 }, 
//       10: { cellWidth: 20 }, 
//       11: { cellWidth: 20 }, 
//       12: { cellWidth: 20 }, 
//     },
//     margin: { left: 14, right: 14 },
//     theme: 'grid', // Use grid theme for better visual separation
//   });

//   // Add Signature Line
//   const signatureY = doc.previousAutoTable.finalY + 20; // Position below the table
//   doc.setFontSize(12);
//   doc.setFont("helvetica", "normal");
//   doc.text("Signature:--------------------", 14, signatureY);

//   // Get the current date and format it
//   const currentDate = new Date().toLocaleDateString();
//   doc.setFontSize(12);
//   doc.setFont("helvetica", "italic");

//   // Adjust date to the right-hand side (pageWidth - margin)
//   const pageWidth = doc.internal.pageSize.getWidth();
//   const dateX = pageWidth - 50; // 50 units from the right edge
//   doc.text(`Date: ${currentDate}`, dateX, signatureY);

//   // Save the PDF
//   doc.save("salary_Report.pdf");
// }

{/* <button
        onClick={() => generateReport(account)}
        className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
      >
        Download Salary Report (PDF)
      </button> */}
   
