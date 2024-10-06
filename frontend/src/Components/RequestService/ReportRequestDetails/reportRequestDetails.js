import React, { useRef } from "react";
// import PrintRequest from "../PrintRequestButton/printRequestButton";
import PrintableRequest from "../PrintableRequest/printableRequest";
// Import the new component

function RequestDetails() {
  const componentsRef = useRef(); // Shared ref for the content to print

  return (
    <div>
      {/* Render the PrintableRequest component and attach the ref */}
      <PrintableRequest ref={componentsRef} />
      {/* Add the Print Button Component */}
      <PrintRequest contentRef={componentsRef} />
    </div>
  );
}

export default RequestDetails;
