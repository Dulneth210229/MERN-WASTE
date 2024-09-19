import React, { useRef } from "react";
import ReportButton from "./ReportButton";
import PrintableOrder from "./PrintableOrder";
//04

// Import the new component

function ReportOrderDetails() {
  const componentsRef = useRef(); // Shared ref for the content to print

  return (
    <div>
      {/* Render the PrintableInventory component and attach the ref */}
      <PrintableOrder ref={componentsRef} />
      {/* Add the Print Button Component */}
      <ReportButton contentRef={componentsRef} />
    </div>
  );
}

export default ReportOrderDetails;
