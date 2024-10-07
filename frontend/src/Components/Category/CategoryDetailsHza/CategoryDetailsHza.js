import React, { useEffect, useState, useRef } from "react";
import CategoryNavHza from "../CategoryNavHza/CategoryNavHza";
import axios from "axios";
import CategoryMHza from "../CategoryMHza/CategoryMHza";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from "./img/LOGO.png"; // Ensure the logo image is correctly placed in your project
import UserFooter from '../../UserHomePage/UserFooter'; // Import the footer component
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Import WhatsApp Icon
import Tooltip from '@mui/material/Tooltip'; // Import Tooltip component

const URL = "http://Localhost:5001/hazardous";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function CategoryDetailsHza() {
  const [hazardous, setCategoryDetailsHza] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchHandler().then((data) => setCategoryDetailsHza(data.hazardous));
  }, []);

  const ComponentsRef = useRef();

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredCategories = data.hazardous.filter((hazardous) =>
        Object.values(hazardous).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setCategoryDetailsHza(filteredCategories);
    });
  };

  // Function to generate the PDF report
  const generateReport = () => {
    const doc = new jsPDF();

    // Add logo to the top right corner
    const logoWidth = 50; // Adjust logo width
    const logoHeight = 20; // Adjust logo height
    const marginRight = 10; // Right margin
    doc.addImage(logo, 'PNG', doc.internal.pageSize.getWidth() - logoWidth - marginRight, 10, logoWidth, logoHeight);

    const title = "Hazardous Waste Report";
    const subtitle = "Overview Of Hazardous Waste Details";

    // Get current date and time
    const currentDate = new Date();
    const dateStr = currentDate.toLocaleDateString();
    const timeStr = currentDate.toLocaleTimeString();

    // Set margin for title and subtitles
    const marginLeft = 14;

    // Title
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text(title, marginLeft, 22);

    // Subtitle
    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text(subtitle, marginLeft, 30);

    // Current date and time
    doc.setFontSize(12);
    doc.text(`Date: ${dateStr}`, marginLeft, 40);
    doc.text(`Time: ${timeStr}`, marginLeft, 46);

    // Add a horizontal line under the title
    doc.setLineWidth(0.5);
    doc.line(marginLeft, 50, doc.internal.pageSize.getWidth() - marginRight, 50);

    // Set marginTop for the table
    const marginTop = 55;

    // AutoTable for displaying hazardous waste category details
    if (hazardous && hazardous.length > 0) {
      doc.autoTable({
        startY: marginTop,
        head: [['Waste Type', 'Quantity(KG)', 'Date Of Collection', 'Location', 'Transport Method', 'Notes']],
        body: hazardous.map((item) => [
          item.WasteType,
          item.Quantity,
          item.DateOfCollection,
          item.Location,
          item.TransportMethod,
          item.Notes,
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
    }

    // Add a placeholder for the signature
    doc.text("Signature: _____________________", 14, doc.autoTable.previous.finalY + 20);

    // Save the PDF with the current date in the filename
    doc.save(`Hazardous_Category_Report_${dateStr}.pdf`);
  };

  // Function to send report via WhatsApp with Tooltip and Icon
  const handleSendReport = () => {
    const phoneNumber = "+94763405524"; // Add the desired WhatsApp phone number here
    const message = `Hazardous Waste Category Report is available. Please check the details.`;
    const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp chat in a new window
    window.open(whatsAppUrl, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="w-full">
        <CategoryNavHza />
      </div>
      <br />
      <h1 className="text-3xl font-bold text-gray-800 mt-0 mb-6 text-center">
        Hazardous Waste Details
      </h1>

      <div className="mb-6 flex justify-center space-x-4">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          name="search"
          placeholder="Search Category Details"
          className="px-4 py-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Search
        </button>
        <button
          onClick={generateReport}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Download Hazardous Report (PDF)
        </button>

        {/* WhatsApp button with Tooltip and Icon */}
        <Tooltip title="Send a message via WhatsApp">
          <button
            onClick={handleSendReport}
            className="ml-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 flex items-center"
          >
            <WhatsAppIcon className="mr-2" />
            Send WhatsApp Message
          </button>
        </Tooltip>
      </div>

      <div ref={ComponentsRef} className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {hazardous && hazardous.length > 0 ? (
          hazardous.map((hazardo, i) => (
            <div key={i} className="mb-4 p-4 bg-white shadow-md rounded-lg w-full">
              <CategoryMHza hazardo={hazardo} />
            </div>
          ))
        ) : (
          <div className="text-gray-500">No categories found.</div>
        )}
      </div>
      <UserFooter className="w-full" /> {/* Add the footer component here to ensure it spans full width */}
    </div>
  );
}

export default CategoryDetailsHza;
