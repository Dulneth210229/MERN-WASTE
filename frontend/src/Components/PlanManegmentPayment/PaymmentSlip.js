import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import Footer from '../UserHomePage/UserFooter';
import UserHomeHeader from '../UserHomePage/UserHomeHeader';
import logo from "./img/LOGO.png"; 

const PaymentSlip = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { packageName, packagePrice, cardHolderName, time } = location.state || {};

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Add Image (Logo) to the top-right corner
    const img = new Image();
    img.src = logo;
    doc.addImage(img, 'PNG', 150, 10, 50, 20); // Adjust position and size as needed
    
    // Add Company Name and Date/Time
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Payment Invoice', 60, 25); // Adjust your company name here
  
    // Current Date and Time
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Date: ${currentDate} | Time: ${currentTime}`, 60, 35); // Dynamic Date & Time
  
    // Payment Slip Title
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text(`Payment Slip`, 20, 60);
  
    // Payment Details
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text(`Package Name: ${packageName}`, 20, 80);
    doc.text(`Package Price: $${packagePrice}`, 20, 100);
    doc.text(`Card Holder: ${cardHolderName}`, 20, 120);
    doc.text(`Date and Time: ${time}`, 20, 140);
  
    // Add Thank You Section
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('Thank You for Your Payment!', 20, 170);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('We appreciate your business. If you have any questions or need further assistance, please', 20, 185);
    doc.text('contact our support team at support@yourcompany.com.', 20, 195);
  
    // Footer with Contact Info
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text('Your Company Name | yourcompany.com | +1 123-456-7890', 20, 280);
  
    // Save PDF
    doc.save('payment-slip.pdf');
  };

  return <>
  <UserHomeHeader />
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-blue-100 to-blue-300">
      <div className="relative p-6 bg-white bg-opacity-70 backdrop-blur-xl shadow-xl rounded-lg max-w-lg w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-300 opacity-30 rounded-lg blur-md"></div>

        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-8">
          Payment Slip
        </h2>

        <div className="space-y-4">
          <div className="text-center">
            <p className="text-lg font-medium text-gray-700">Customer Name</p>
            <p className="text-xl font-bold text-blue-800">{cardHolderName}</p>
          </div>

          <div className="text-center">
            <p className="text-lg font-medium text-gray-700">Package</p>
            <p className="text-xl font-bold text-blue-800">{packageName}</p>
          </div>

          <div className="text-center">
            <p className="text-lg font-medium text-gray-700">Price</p>
            <p className="text-xl font-bold text-blue-800">${packagePrice}</p>
          </div>

          <div className="text-center">
            <p className="text-lg font-medium text-gray-700">Date & Time</p>
            <p className="text-xl font-bold text-blue-800">{time}</p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="md-6 mr-1 w-full">
            <button
              onClick={generatePDF}
              className="mt-8 w-full py-4 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105 active:scale-95"
            >
              Download PDF
            </button>
          </div>
          <div className="md-6 ml-1 w-full">
            <button
              onClick={() => navigate('/userHomePage')}
              className="mt-8 w-full py-4 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105 active:scale-95"
            >
              Back to Home Page
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>;
};

export default PaymentSlip;
