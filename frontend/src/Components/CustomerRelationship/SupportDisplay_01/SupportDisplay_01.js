import { useEffect, useState, useRef } from "react";
import axios from "axios";
import CrmNav from "../CrmNav/CrmNav";
import Support from "../Support/Support";
// import { useReactToPrint } from "react-to-print";
import SearchIcon from '@mui/icons-material/Search';
// import DownloadIcon from '@mui/icons-material/Download'; // Import Download Icon
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Import WhatsApp Icon
import Tooltip from '@mui/material/Tooltip'; // Import Tooltip component
import jsPDF from 'jspdf';
import 'jspdf-autotable'; 

const URL = "http://localhost:5001/support";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function SupportDisplay_01() {
  const [support, setSupport] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);
  const ComponentsRef = useRef();

  useEffect(() => {
    fetchHandler().then((data) => setSupport(data.support));
  }, []);

  // const handlePrint = useReactToPrint({
  //   content: () => ComponentsRef.current,
  //   documentTitle: "Support Report",
  //   onAfterPrint: () => alert("Support Report Printed"),
  // });

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredData = data.support.filter((support) =>
        Object.values(support).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setSupport(filteredData);
      setNoResults(filteredData.length === 0);
    });
  };

  const handleSendReport = () => {
    const phoneNumber = "+94770705120";
    const message = "Support Report Downloaded Successfully";
    const WhatsAppURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open the WhatsApp URL in a new tab
    window.open(WhatsAppURL, "_blank");
  };

  const generateReport = () => {
    const doc = new jsPDF();
    const title = "Request Support Report";
    const subtitle = "Comprehensive overview of support details";

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

    // AutoTable for displaying support details
    doc.autoTable({
      startY: marginTop,
      head: [['Additional Support', 'Name','Email','Address','City', 'Subject', 'Message']],
      body: support.map((supportItem) => [
        supportItem.additonalServices,
        supportItem.name,
        supportItem.email,
        supportItem.address,
        supportItem.city,
        supportItem.subject,
        supportItem.message,
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
    doc.save("Support_Report.pdf");
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
            placeholder="Search support requests"
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
          <p className="text-lg font-semibold">Oops! No support requests matched your search.</p>
          <p>Please try different keywords or check your spelling.</p>
          <p>Alternatively, you can view all support requests below.</p>
        </div>
      ) : (
        <div className="mt-10" ref={ComponentsRef}>
          <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-0">
            <div className="w-full max-w-4xl p-5">
              {support &&
                support.map((supportItem, i) => (
                  <Support key={i} support={supportItem} />
                ))} 
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between mt-4">
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={generateReport}
          className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          Download Request Support Report (PDF)
        </button>
      </div>

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
    </div>
  );
}

export default SupportDisplay_01;
