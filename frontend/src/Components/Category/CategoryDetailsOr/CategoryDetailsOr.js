import React, { useEffect, useState, useRef } from "react";
import CategoryNavOr from "../CategoryNavOr/CategoryNavOr";
import axios from "axios";
import CategoryMOr from "../CategoryMOr/CategoryMOr";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from "./img/LOGO.png"; // Ensure the logo image is correctly placed in your project
import UserFooter from '../../UserHomePage/UserFooter'; // Import the footer component

const URL = "http://localhost:5001/recyclable"; // Ensure this URL is correct

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function CategoryDetailsOr() {
  const [recyclable, setCategoryDetailsOr] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchHandler().then((data) => setCategoryDetailsOr(data.recyclable));
  }, []);

  const ComponentsRef = useRef();

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredCategories = data.recyclable.filter((recyclable) =>
        Object.values(recyclable).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setCategoryDetailsOr(filteredCategories);
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

    const title = "Recyclable Waste Report";
    const subtitle = "Overview Of Recyclable Waste Details";

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

    // AutoTable for displaying recyclable category details
    if (recyclable && recyclable.length > 0) {
      doc.autoTable({
        startY: marginTop,
        head: [['Waste Type', 'Quantity(KG)', 'Date Of Collection', 'Location', 'Transport Method', 'Notes']],
        body: recyclable.map((item) => [
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
    doc.save(`Recyclable_Category_Report_${dateStr}.pdf`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="w-full">
        <CategoryNavOr />
      </div>
      <br />
      <br />
      <h1 className="text-3xl font-bold text-gray-800 mt-0 mb-6 text-center">
        Recyclable Waste Details
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
          Download Recyclable Report (PDF)
        </button>
      </div>

      <div ref={ComponentsRef} className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {recyclable && recyclable.length > 0 ? (
          recyclable.map((recyco, i) => (
            <div key={i} className="mb-4 p-4 bg-white shadow-md rounded-lg w-full">
              <CategoryMOr recyco={recyco} />
            </div>
          ))
        ) : (
          <div className="text-gray-500">No categories found.</div>
        )}
      </div>
      <UserFooter className="w-full" />  {/* Add the footer component here to ensure it spans full width */}
    </div>
  );
}

export default CategoryDetailsOr;
