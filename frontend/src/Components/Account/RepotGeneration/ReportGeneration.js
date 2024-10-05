import React, { useState, useEffect } from 'react'
import AccountNav from '../AccountNav/AccountNav'
import axios from "axios";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from "./LOGO.png";




const AURL = "http://Localhost:5001/account";

const fetchSalary = async () => {
  return await axios.get(AURL).then((res) => res.data);
}

export const generateReport = (account) => {
  // Set the orientation to landscape by using 'l'
  const doc = new jsPDF('l', 'mm', 'a4'); // 'l' for landscape

 // Set logo position and size
 const logoX = 14; // X-coordinate for logo
 const logoY = 10; // Y-coordinate for logo
 doc.addImage(logo, 'PNG', logoX, logoY, 40, 20); // Adjust the position and size as needed
 
 const titleY = 35; // Position for title
 const subtitleY = 50; // Position for subtitle

   
 
  const title = "Salary Report";
  const subtitle = "Comprehensive overview of Salary details";

  // Title
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text(title, 14, titleY);

  // Subtitle
  doc.setFontSize(16);
  doc.setFont("helvetica", "normal");
  doc.text(subtitle, 14, subtitleY);

  // Add a horizontal line under the title
  doc.setLineWidth(0.5);
  doc.line(14, 55, 280, 55); // Adjust line width to fit landscape

  // Set marginTop for the table
  const marginTop = 60;

  // AutoTable for displaying salary details
  doc.autoTable({
    startY: marginTop,
    head: [['First Name', 'Last Name', 'NIC', 'EID', 'Designation','Basic Salary','Allowance', 'Credit','Debit','ETF','EPF','Total Salary']],
    body: account.map((salaryItem) => [
      salaryItem.First_Name,
      salaryItem.Last_Name,
      salaryItem.NIC,
      salaryItem.Employee_ID,
      salaryItem.Designation,
      salaryItem.Basic_Salary,
      salaryItem.Allowance,
      salaryItem.Credit,
      salaryItem.Debit,
      salaryItem.ETF,
      salaryItem.EPF,
      salaryItem.Total_Salary,
    ]),
    headStyles: {
      fillColor: [41, 87, 141], // Dark blue
      textColor: [255, 255, 255], // White
      fontSize: 12,
      fontStyle: 'bold',
      halign: 'center',
    },
    bodyStyles: {
      fontSize: 11,
      cellPadding: 3, // Increase cell padding for better spacing
      halign: 'center', // Align body cells content to center
    },
    alternateRowStyles: {
      fillColor: [240, 240, 240], // Light gray for alternate rows
    },
    styles: {
      lineColor: [200, 200, 200], // Add table grid lines
      lineWidth: 0.5,
    },
    columnStyles: {
      0: { cellWidth: 20 }, // FName auto width
      1: { cellWidth: 25 }, // LName auto width
      2: { cellWidth: 33 }, // NIC column (index 2)
      3: { cellWidth: 20 }, // EID fixed width
      4: { cellWidth: 30 }, // Designation auto width
      5: { cellWidth: 30 },
      6: { cellWidth: 25 }, 
      7: { cellWidth: 20 }, 
      8: { cellWidth: 20 }, 
      9: { cellWidth: 20 }, 
      10: { cellWidth: 20 }, 
      11: { cellWidth: 20 }, 
      12: { cellWidth: 20 }, 
    },
    margin: { left:10, right: 14 },
    theme: 'grid', // Use grid theme for better visual separation
  });

  // Add Signature Line
  const signatureY = doc.previousAutoTable.finalY + 20; // Position below the table
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("Signature:___________________________", 14, signatureY);

  // Get the current date and format it
  const currentDate = new Date().toLocaleDateString();
  doc.setFontSize(12);
  doc.setFont("helvetica", "italic");

  // Adjust date to the right-hand side (pageWidth - margin)
  const pageWidth = doc.internal.pageSize.getWidth();
  const dateX = pageWidth - 50; // 50 units from the right edge
  doc.text(`Date: ${currentDate}`, dateX, signatureY);

  // Save the PDF
  doc.save("salary_Report.pdf");
}



function ReportGeneration() {
  const [account, setSalary] = useState([]);

  useEffect(() => {
    fetchSalary().then((data) => setSalary(data.account));
  }, []);


  return (
    <div>
      <AccountNav/>

      <div className="flex flex-col m-5">
        <h1 className="text-center font-bold text-6xl text-slate-700">
          Report Section
        </h1>
        <hr className="border-4 mt-3 mb-5" />
      </div>

       {/* Center the report generation section */}
       <div className="flex justify-center mt-20">
        <div className="relative w-1/3 h-52 bg-slate-100 rounded-lg m-3">
          <div className="w-auto h-12 bg-green-200 rounded-lg">
            <div className="text-center font-medium text-2xl text-slate-900 p-1">
             Generate Salary Report
            </div>
          </div >
          <div className="flex justify-center mt-20">
          <button
        onClick={() => generateReport(account)}
        className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
      >
        Download Salary Report (PDF)
      </button>
        </div>
        </div>
      </div>
    </div>


  )
}

export default ReportGeneration
