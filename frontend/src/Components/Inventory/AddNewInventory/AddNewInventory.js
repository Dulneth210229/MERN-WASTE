import React from "react";
import InventoyHeader from "../InventoryHeader/InventoyHeader";

function AddNewInventory() {
  return (
    <div>
      <InventoyHeader />
      <div>
        <h1 className="text-center mt-5 font-semibold text-slate-800">
          Add New Inventory Stock
        </h1>
        <hr className="border-2" />
        <from>
          <div className="bg-emerald-100 ml-20 mr-20 rounded-lg">
            <div className="flex flex-col w-72 g-0 al  m-5">
              <lable className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                Product Name
              </lable>
              <input
                type="text"
                placeholder="Product Name"
                className="border p-3 rounded-lg  m-2 bg-lime-300 border-lime-500"
              />
            </div>
            <div className="flex flex-col w-72 g-0 al  m-5">
              <lable className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                Product Category
              </lable>
              <input
                type="text"
                placeholder="Product Category"
                className="border p-3 rounded-lg  m-2 bg-lime-300 border-lime-500"
              />
            </div>
            <div className="flex flex-col w-72 g-0 al  m-5">
              <lable className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                Material Type
              </lable>
              <input
                type="text"
                placeholder="Material"
                className="border p-3 rounded-lg  m-2 bg-lime-300 border-lime-500"
              />
            </div>
            <div className="flex flex-col w-72 g-0 al  m-5">
              <lable className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                Product Quantity
              </lable>
              <input
                type="text"
                placeholder="Quantity"
                className="border p-3 rounded-lg  m-2 bg-lime-300 border-lime-500"
              />
            </div>
            <div className="flex flex-col w-72  g-0 al  m-5">
              <lable className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                Product Description
              </lable>
              <input
                type="text"
                placeholder="Product Description.."
                className="border pt-1 rounded-lg  m-2 bg-lime-300 h-40 text-justify border-lime-500"
              />
            </div>
          </div>
        </from>
      </div>
    </div>
  );
}
export default AddNewInventory;
