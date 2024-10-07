import React, { useEffect, useState, useRef } from "react";
import CategoryNav from "../CategoryNav/CategoryNav";
import axios from "axios";
import CategoryM from "../CategoryM/CategoryM";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from "./img/LOGO.png"; // Ensure the logo image is correctly placed in your project
import UserFooter from '../../UserHomePage/UserFooter';  // Import the footer component

const URL = "http://localhost:5001/category";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function CategoryDetails() {
  const [category, setCategoryDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchHandler().then((data) => setCategoryDetails(data.category));
  }, []);

  const ComponentsRef = useRef();

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredCategorys = data.category.filter((category) =>
        Object.values(category).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setCategoryDetails(filteredCategorys);
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

    const title = "Organic Waste Report";
    const subtitle = "Overview Of Organic Waste Details";

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

    // AutoTable for displaying category details
    if (category && category.length > 0) {
      doc.autoTable({
        startY: marginTop,
        head: [['Waste Type', 'Quantity(KG)', 'Date Of Collection', 'Location', 'Transport Method', 'Notes']],
        body: category.map((item) => [
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

    // Save the PDF
    doc.save(`Organic_Category_Report_${dateStr}.pdf`);
  };

  const handleSendReport = () => {
    // Create the WhatsApp chat message
    const phoneNumber = "+94763405524";
    const message = `Selected Waste Category Reports`;
    const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open the WhatsApp chat in a new window
    window.open(whatsAppUrl, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="w-full">
        <CategoryNav />
      </div>
      <br />
      <br />
      <h1 className="text-3xl font-bold text-gray-800 mt-0 mb-6 text-center">
        Organic Waste Details
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
          Download Organic Report (PDF)
        </button>
        <button
          onClick={handleSendReport}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Send Report via WhatsApp
        </button>
      </div>

      <div ref={ComponentsRef} className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {category && category.length > 0 ? (
          category.map((catego, i) => (
            <div key={i} className="mb-4 p-4 bg-white shadow-md rounded-lg w-full">
              <CategoryM catego={catego} />
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

export default CategoryDetails;
