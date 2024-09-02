import React from "react";
import InventoyHeader from "../InventoryHeader/InventoyHeader";

function Report() {
  return (
    <div>
      <InventoyHeader />

      <div className="flex flex-row gap-20 mx-auto w-3/3 mt-20 mr-10 ml-10">
        <div className="relative w-1/3 h-52 bg-slate-100 rounded-lg m-3 ">
          <div className=" w-auto h-12 bg-green-200 rounded-lg  "></div>
          <button className="bg-lime-500 w-48 rounded-lg text-center absolute bottom-3 right-3">
            Generate Report
          </button>
        </div>
        <div className="relative w-1/3 h-52 bg-slate-100 rounded-lg m-3 ">
          <div className=" w-auto h-12 bg-green-200 rounded-lg  "></div>
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
    </div>
  );
}

export default Report;
