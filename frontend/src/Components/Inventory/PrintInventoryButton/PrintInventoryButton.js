// PrintInventory.js
import React from "react";
import { useReactToPrint } from "react-to-print";

const PrintInventory = ({ contentRef }) => {
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: "Inventory Report",
    onAfterPrint: () => alert("Inventory Report Download Successful!"),
  });

  return (
    <button
      onClick={handlePrint}
      className="bg-lime-500 w-48 rounded-lg text-center"
    >
      Generate Report
    </button>
  );
};

export default PrintInventory;
