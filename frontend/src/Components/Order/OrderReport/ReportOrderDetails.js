import React, { useRef } from "react";
import ReportButton from "./ReportButton";
import PrintableOrder from "./PrintableOrder";
//04

// Import the new component

function ReportOrderDetails() {
  const componentsRefO = useRef(); // Shared ref for the content to print

  return (
    <div>
      {/* Render the PrintableInventory component and attach the ref */}
      <PrintableOrder ref={componentsRefO} />
      {/* Add the Print Button Component */}
      <ReportButton contentRef={componentsRefO} />
    </div>
  );
}

export default ReportOrderDetails;
