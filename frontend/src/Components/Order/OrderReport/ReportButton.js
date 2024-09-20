// PrintInventory.js
import React from "react";
import { useReactToPrint } from "react-to-print";
import downlodImage from "./img/download.png";
//03

const PrintOrder = ({ contentRef }) => {
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: "Order Report",
    onAfterPrint: () => alert("Order Report Download Successful!"),
  });

  return (
    <button
      onClick={handlePrint}
      className="bg-lime-500 w-52 rounded-lg text-center flex flex-row justify-between font-medium"
    >
      <img src={downlodImage} alt="download logo" className="w-5 h-5 mt-1" />
      Generate Report
    </button>
  );
};

export default PrintOrder;
