import React, { useRef } from "react";
import PrintInventory from "../PrintInventoryButton/PrintInventoryButton";
import PrintableInventory from "../PrintableInventory/PrintableInventory";
// Import the new component

function InventoryDetails() {
  const componentsRef = useRef(); // Shared ref for the content to print

  return (
    <div>
      {/* Render the PrintableInventory component and attach the ref */}
      <PrintableInventory ref={componentsRef} />
      {/* Add the Print Button Component */}
      <PrintInventory contentRef={componentsRef} />
    </div>
  );
}

export default InventoryDetails;
