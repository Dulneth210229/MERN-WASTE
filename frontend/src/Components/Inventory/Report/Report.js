import React from "react";
import InventoyHeader from "../InventoryHeader/InventoyHeader";
import PrintInventory from "../PrintInventoryButton/PrintInventoryButton";
import PrintableInventory from "../PrintableInventory/PrintableInventory";
import { useRef } from "react";
// Import the new component

function Report() {
  const componentsRef = useRef(); // Shared ref for the content to print
  return (
    <div>
      <InventoyHeader />

      <div className="flex flex-col m-5">
        <h1 className="text-center font-bold text-6xl text-slate-700">
          Report Section
        </h1>
        <hr className="border-4 mt-3 mb-5" />
      </div>
      <div className="flex flex-row gap-20 mx-auto w-3/3 mt-20 mr-10 ml-10">
        <div className="relative w-1/3 h-52 bg-slate-100 rounded-lg m-3 ">
          <div className=" w-auto h-12 bg-green-200 rounded-lg  ">
            <div className="text-center font-medium text-2xl text-slate-900 p-1">
              Generate Inventory Stock Report
            </div>
          </div>
          {/* Print button is outside the ref scope, which is fine */}
          <div className="absolute bottom-3 right-3">
            <PrintInventory contentRef={componentsRef} />
          </div>
        </div>
        <div className="relative w-1/3 h-52 bg-slate-100 rounded-lg m-3 ">
          <div className=" w-auto h-12 bg-green-200 rounded-lg  ">
            <div className="text-center font-medium text-2xl text-slate-900 p-1">
              Generate Order Report
            </div>
          </div>
          <button className="bg-lime-500 w-48 rounded-lg text-center absolute bottom-3 right-3">
            Generate Report
          </button>
        </div>
        <div className="relative w-1/3 h-52 bg-slate-100 rounded-lg m-3 ">
          <div className=" w-auto h-12 bg-green-200 rounded-lg "></div>
          <button className="bg-lime-500 w-48 rounded-lg text-center absolute bottom-3 right-3">
            Generate Report
          </button>
        </div>
      </div>
      {/* Hidden Printable Inventory */}
      <div style={{ display: "none" }}>
        <PrintableInventory ref={componentsRef} />
      </div>
    </div>
  );
}

export default Report;
