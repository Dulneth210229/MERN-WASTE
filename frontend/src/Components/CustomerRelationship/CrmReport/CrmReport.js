import { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import CrmNav from "../CrmNav/CrmNav";
import UserHomeHeader from '../../UserHomePage/UserHomeHeader';
import UserFooter from '../../UserHomePage/UserFooter';
import logo from "./img/LOGO.png"; // Adjust the path as necessary

const FEEDBACK_URL = "http://localhost:5001/feedback";
const COMPLAIN_URL = "http://localhost:5001/complain";
const SUPPORT_URL = "http://localhost:5001/support";

const fetchFeedbackHandler = async () => {
  return await axios.get(FEEDBACK_URL).then((res) => res.data);
};

const fetchComplainHandler = async () => {
  return await axios.get(COMPLAIN_URL).then((res) => res.data);
};

const fetchSupportHandler = async () => {
  return await axios.get(SUPPORT_URL).then((res) => res.data);
};

function CrmReport() {
  const [feedback, setFeedback] = useState([]);
  const [complain, setComplain] = useState([]);
  const [support, setSupport] = useState([]);
  const [reportDate, setReportDate] = useState(new Date().toISOString().split("T")[0]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const feedbackData = await fetchFeedbackHandler();
        setFeedback(feedbackData.feedback);
        const complainData = await fetchComplainHandler();
        setComplain(complainData.complain);
        const supportData = await fetchSupportHandler();
        setSupport(supportData.support);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load reports. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const generateReport = (title, subtitle, head, body, filename) => {
    const doc = new jsPDF();
    // Add header image to the PDF
    doc.addImage(logo, 'PNG', 14, 10, 50, 20); // Adjust the position and size as needed

    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text(title, 14, 50); // Adjust y position based on image height
    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text(subtitle, 14, 58); // Adjust y position accordingly
    doc.setLineWidth(0.5);
    doc.line(14, 61, 195, 61); // Adjust line position based on text height

    doc.autoTable({
      startY: 70, // Adjust this to position the table correctly
      head: [head],
      body,
      headStyles: {
        fillColor: [41, 87, 141],
        textColor: [255, 255, 255],
        fontSize: 12,
        fontStyle: "bold",
      },
      bodyStyles: {
        fontSize: 11,
      },
      alternateRowStyles: {
        fillColor: [240, 240, 240],
      },
      margin: { left: 14, right: 14 },
      theme: "grid",
    });

    const dateY = doc.previousAutoTable.finalY + 10;
    const signatureY = dateY + 20; // Increase space for signature

    // Set the report date
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Date: ${reportDate}`, 14, dateY);
    
    // Get the current time in HH:MM format
    const currentTime = new Date();
    const timeStr = `${currentTime.getHours()}:${currentTime.getMinutes().toString().padStart(2, '0')}`;
    
    // Set time separately
    const timeY = dateY + 10; // Adjust the position for time
    doc.text(`Time: ${timeStr}`, 14, timeY);
    
    // Set signature line
    const signatureText = "Signature: ___________________________";
    doc.text(signatureText, 14, signatureY);
    
    doc.save(`${filename}.pdf`);
  };

  const generateFeedbackReport = () => {
    generateReport("Feedback Report", "Detailed Feedback Overview",
      ["User Name", "Email", "Address", "Phone", "Rating", "Feedback"],
      feedback.map((item) => [item.name, item.email, item.address, item.phone, item.rating, item.comment]),
      "Feedback_Report");
  };

  const generateComplainReport = () => {
    generateReport("Complain Report", "Detailed Complain Overview",
      ['Full Name', 'Email', 'Category', 'Description', 'Attachments'],
      complain.map((item) => [item.fullName, item.email, item.complainCategory, item.description, item.attachements]),
      "Complain_Report");
  };

  const generateSupportReport = () => {
    generateReport("Support Report", "Detailed Support Overview",
      ['Additional Support', 'Name', 'Email', 'Address', 'City', 'Subject', 'Message'],
      support.map((item) => [item.additonalServices, item.name, item.email, item.address, item.city, item.subject, item.message]),
      "Support_Report");
  };

  return (
    <div className="py-8 min-h-screen ">
      <UserHomeHeader />
      <div className="bg-slate-100">
        <CrmNav />
        <h1 className="text-5xl font-extrabold text-center mt-8 text-gray-800">CRM Reports</h1>
        <p className="text-center text-lg text-gray-700 mb-8">
          Download detailed reports for Feedback, Complaints, and Support.
        </p>

        {/* Date Input Field */}
        <div className="mb-6 max-w-md mx-auto">
          <label htmlFor="reportDate" className="block mb-2 text-base font-medium text-gray-700">Select Date:</label>
          <input
            type="date"
            id="reportDate"
            value={reportDate}
            onChange={(e) => setReportDate(e.target.value)}
            className="border border-gray-300 rounded-md p-3 w-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Report Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="flex justify-center col-span-3">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <>
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-xl font-semibold mb-2 text-blue-600">Feedback Report</h2>
                <p className="text-gray-600 mb-4">Get detailed feedback from users.</p>
                <button
                  onClick={generateFeedbackReport}
                  className="flex items-center justify-center bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700 transition duration-200 shadow-md"
                  title="Download Feedback Report"
                >
                  <img src={logo} alt="Download Icon" className="mr-2 h-5 w-5" /> Download
                </button>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-xl font-semibold mb-2 text-orange-600">Complain Report</h2>
                <p className="text-gray-600 mb-4">View details of user complaints.</p>
                <button
                  onClick={generateComplainReport}
                  className="flex items-center justify-center bg-orange-600 text-white px-4 py-3 rounded hover:bg-orange-700 transition duration-200 shadow-md"
                  title="Download Complain Report"
                >
                  <img src={logo} alt="Download Icon" className="mr-2 h-5 w-5" /> Download
                </button>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-xl font-semibold mb-2 text-green-600">Support Report</h2>
                <p className="text-gray-600 mb-4">Access all support requests.</p>
                <button
                  onClick={generateSupportReport}
                  className="flex items-center justify-center bg-green-600 text-white px-4 py-3 rounded hover:bg-green-700 transition duration-200 shadow-md"
                  title="Download Support Report"
                >
                  <img src={logo} alt="Download Icon" className="mr-2 h-5 w-5" /> Download
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <UserFooter />
    </div>
  );
}

export default CrmReport;