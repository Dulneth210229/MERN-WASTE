import React from "react";
import InventoyHeader from "../InventoryHeader/InventoyHeader";
import PrintInventory from "../PrintInventoryButton/PrintInventoryButton";
import PrintableInventory from "../PrintableInventory/PrintableInventory";
import PrintableOrder from "../../Order/OrderReport/PrintableOrder";
import ReportButton from "../../Order/OrderReport/ReportButton";
import { useRef } from "react";
import { Link } from "react-router-dom";
import uploadimg from "./img/upload.png";

// Import the new component

function Report() {
  const componentsRef = useRef(); // Shared ref for the content to print
  const componentsRefO = useRef(); // Shared ref for the content to print
  return (
    <div>
      <InventoyHeader />
      <div className="min-h-screen bg-gray-100 p-5">
        <div className="flex flex-col m-5">
          <h1 className="text-center font-bold text-6xl text-slate-700">
            Report Section
          </h1>
          <hr className="border-4 mt-3 mb-2" />
        </div>
        <div className=" flex flex-col gap-5 bg-b">
          <div className="flex flex-row gap-20 mx-auto w-3/3 mt-5 mr-10 ml-10 ">
            <div className="relative w-1/3 h-52 bg-slate-100 rounded-lg m-3 shadow-2xl">
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
            <div className="relative w-1/3 h-52 bg-slate-100 rounded-lg m-3 shadow-2xl">
              <div className=" w-auto h-12 bg-green-200 rounded-lg  ">
                <div className="text-center font-medium text-2xl text-slate-900 p-1">
                  Generate Order Report
                </div>
              </div>
              {/* Print button is outside the ref scope, which is fine */}
              <div className="absolute bottom-3 right-3">
                <ReportButton contentRef={componentsRefO} />
              </div>
            </div>
            <div className="relative w-1/3 h-52 bg-slate-100 rounded-lg m-3 shadow-2xl">
              <div className=" w-auto h-12 bg-green-200 rounded-lg ">
                <div className="text-center font-medium text-2xl text-slate-900 p-1">
                  Upload Report
                </div>
              </div>
              <Link to="/sendReport">
                <button className="bg-lime-500 p-1 pr-2 font-bold rounded-lg text-center w-auto  absolute bottom-3 right-3 flex flex-row">
                  <img src={uploadimg} alt="upload" className="w-7 h-7 mr-2 " />
                  Upload Report
                </button>
              </Link>
            </div>
          </div>
          {/* Hidden Printable Inventory */}
          <div style={{ display: "none" }}>
            <PrintableInventory ref={componentsRef} />
          </div>

          {/* Hidden Printable Order */}
          <div style={{ display: "none" }}>
            <PrintableOrder ref={componentsRefO} />
          </div>
          {/* Second report sector begins */}
          {/* <div className="flex flex-row gap-20 mx-auto w-3/3 mt-5 mr-10 ml-10 ">
            <div className="relative w-1/3 h-52 bg-slate-100 rounded-lg m-3 shadow-2xl">
              <div className=" w-auto h-12 bg-green-200 rounded-lg  ">
                <div className="text-center font-medium text-2xl text-slate-900 p-1"> */}
          {/* Generate Order Report */}
          {/* </div>
              </div>
              <Link to="">
                <button className="bg-lime-500 p-2 font-bold rounded-lg text-center w-auto  absolute bottom-3 right-3">
                  Generate Report
                </button>
              </Link>
            </div>
            <div className="relative w-1/3 h-52 bg-slate-100 rounded-lg m-3 shadow-2xl">
              <div className=" w-auto h-12 bg-green-200 rounded-lg  ">
                <div className="text-center font-medium text-2xl text-slate-900 p-1"> */}
          {/* Generate Order Report */}
          {/* </div>
              </div>
              <Link to="">
                <button className="bg-lime-500 p-2 font-bold rounded-lg text-center w-auto  absolute bottom-3 right-3">
                  Generate Report
                </button>
              </Link>
            </div>
            <div className="relative w-1/3 h-52 bg-slate-100 rounded-lg m-3 shadow-2xl">
              <div className=" w-auto h-12 bg-green-200 rounded-lg  ">
                <div className="text-center font-medium text-2xl text-slate-900 p-1"> */}
          {/* Generate Order Report */}
          {/* </div>
              </div>
              <Link to="">
                <button className="bg-lime-500 p-2 font-bold rounded-lg text-center w-auto  absolute bottom-3 right-3">
                  Generate Report
                </button>
              </Link>
            </div>
          </div> */}
          {/* secon report sector ends */}
        </div>
      </div>
    </div>
  );
}

export default Report;
