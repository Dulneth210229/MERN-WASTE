import EmployeeNav from '../EmployeeNav/EmployeeNav';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from './LOGO.png';

const AURL = 'http://localhost:5001/Employee';

const fetchEmployee = async () => {
  return await axios.get(AURL).then((res) => res.data);
};

export const generateEmployeeReport = (Employee = []) => {
  // Check if Employee array is empty
  if (!Employee || Employee.length === 0) {
    alert('No employee data available to generate the report.');
    return;
  }

  const doc = new jsPDF('l', 'mm', 'a4'); // 'l' for landscape

  // Set logo position and size
  const logoX = 14; // X-coordinate for logo
  const logoY = 10; // Y-coordinate for logo
  doc.addImage(logo, 'PNG', logoX, logoY, 40, 20); // Adjust the position and size as needed

  const titleY = 35; // Position for title
  const subtitleY = 50; // Position for subtitle

  const title = 'Employee Details Report';
  const subtitle = 'Comprehensive overview of Employee details';

  // Title
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text(title, 14, titleY);

  // Subtitle
  doc.setFontSize(16);
  doc.setFont('helvetica', 'normal');
  doc.text(subtitle, 14, subtitleY);

  // Add a horizontal line under the title
  doc.setLineWidth(0.5);
  doc.line(14, 55, 280, 55); // Adjust line width to fit landscape

  // Set marginTop for the table
  const marginTop = 60;

  // AutoTable for displaying salary details
  doc.autoTable({
    startY: marginTop,
    head: [['First Name', 'Last Name', 'NIC', 'Address', 'Designation', 'Basic Salary', 'Phone', 'Email']],
    body: Employee.map((employeeItem) => [
      employeeItem.employeeFirstName,
      employeeItem.employeeLastName,
      employeeItem.employeeNic,
      employeeItem.employeeAddress,
      employeeItem.employeeCatogory,
      employeeItem.employeeSalary,
      employeeItem.employeePhone,
      employeeItem.employeeEmail,
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
    },
    margin: { left: 10, right: 14 },
    theme: 'grid', // Use grid theme for better visual separation
  });

  // Add Signature Line
  const signatureY = doc.previousAutoTable.finalY + 20; // Position below the table
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Signature:_________', 14, signatureY);

  // Save the PDF
  doc.save('employee_Report.pdf');
};

function EmployeeSchedules() {
  const [Employee, setEmployee] = useState([]);

  useEffect(() => {
    fetchEmployee().then((data) => setEmployee(data.Employee || []));
  }, []);

  return (
    <div>
      <EmployeeNav />
      <div className="flex flex-col m-5">
        <h1 className="text-center font-bold text-6xl text-slate-700">Report Section</h1>
        <hr className="border-4 mt-3 mb-5" />
      </div>

      {/* Center the report generation section */}
      <div className="flex justify-center mt-20">
        <div className="relative w-1/3 h-52 bg-slate-100 rounded-lg m-3">
          <div className="w-auto h-12 bg-green-200 rounded-lg">
            <div className="text-center font-medium text-2xl text-slate-900 p-1">Display Employee Report</div>
          </div>
          <div className="flex justify-center mt-20">
            <button
              onClick={() => generateEmployeeReport(Employee)}
              className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            >
              Download Employee Report (PDF)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeSchedules;


