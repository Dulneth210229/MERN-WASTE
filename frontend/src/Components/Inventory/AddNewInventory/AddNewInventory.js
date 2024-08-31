import React from "react";
import InventoyHeader from "../InventoryHeader/InventoyHeader";

function AddNewInventory() {
  return (
    <div>
      <InventoyHeader />
      <div>
        <from>
          <div className="bg-green-50 ml-20 mr-20">
            <div className="flex flex-col w-72 g-0 al  m-5">
              <lable className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                Product Name
              </lable>
              <input
                type="text"
                placeholder="Product Name"
                className="border p-3 rounded-lg  m-2 bg-lime-100 border-lime-300"
              />
            </div>
            <div className="flex flex-col w-72 g-0 al  m-5">
              <lable className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                Product Category
              </lable>
              <input
                type="text"
                placeholder="Product Category"
                className="border p-3 rounded-lg  m-2 bg-lime-100 border-lime-300"
              />
            </div>
            <div className="flex flex-col w-72 g-0 al  m-5">
              <lable className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                Material Type
              </lable>
              <input
                type="text"
                placeholder="Material"
                className="border p-3 rounded-lg  m-2 bg-lime-100 border-lime-300"
              />
            </div>
            <div className="flex flex-col w-72 g-0 al  m-5">
              <lable className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                Product Quantity
              </lable>
              <input
                type="text"
                placeholder="Quantity"
                className="border p-3 rounded-lg  m-2 bg-lime-100 border-lime-300"
              />
            </div>
            <div className="flex flex-col w-72  g-0 al  m-5">
              <lable className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                Product Description
              </lable>
              <input
                type="text"
                placeholder="Product Description.."
                className="border pt-1 rounded-lg  m-2 bg-lime-100 h-40 text-justify border-lime-300"
              />
            </div>
          </div>
        </from>
      </div>
    </div>
  );
}
export default AddNewInventory;
