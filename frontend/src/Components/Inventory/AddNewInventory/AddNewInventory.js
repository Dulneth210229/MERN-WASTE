import React from "react";
import { useState } from "react";
import InventoyHeader from "../InventoryHeader/InventoyHeader";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddNewInventory() {
  const history = useNavigate();
  const [input, setInput] = useState({
    productName: "",
    ProductCategory: "",
    materialType: "",
    quantity: "",
    productDescription: "",
  });

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    sendRequest().then(() => history("/inventoryDeatails"));
  };

  const sendRequest = async () => {
    await axios
      .post("http://Localhost:5001/inventory", {
        productName: String(input.productName),
        ProductCategory: String(input.ProductCategory),
        materialType: String(input.materialType),
        quantity: Number(input.quantity),
        productDescription: String(input.productDescription),
      })
      .then((res) => res.data);
  };
  return (
    <div>
      <InventoyHeader />
      <div>
        <h1 className="text-center mt-5 font-semibold text-slate-800 ">
          Add New Inventory Stock
        </h1>
        <hr className="border-2" />
        <form
          onSubmit={handleSubmit}
          className=" w-1/4 mx-auto m-3 rounded-lg shadow-xl bg-green-50"
        >
          <div className="flex flex-col w-auto mr-10 ml-10">
            <div className="flex flex-col w-96 mx-auto">
              <lable className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700 ">
                Product Name
              </lable>
              <input
                type="text"
                name="productName"
                onChange={handleChange}
                value={input.productName}
                placeholder="Product Name"
                className="border p-3 rounded-lg  m-2 bg-lime-300 border-lime-500 "
              />
            </div>
            <div className="flex flex-col w-96 mx-auto">
              <lable className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                Product Category
              </lable>
              <input
                type="text"
                name="ProductCategory"
                onChange={handleChange}
                value={input.ProductCategory}
                placeholder="Product Category"
                className="border p-3 rounded-lg  m-2 bg-lime-300 border-lime-500"
              />
            </div>
            <div className="flex flex-col w-96 mx-auto">
              <lable className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                Material Type
              </lable>
              <input
                type="text"
                name="materialType"
                onChange={handleChange}
                value={input.materialType}
                placeholder="Material"
                className="border p-3 rounded-lg  m-2 bg-lime-300 border-lime-500"
              />
            </div>
            <div className="flex flex-col w-96 mx-auto">
              <lable className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                Product Quantity
              </lable>
              <input
                type="text"
                name="quantity"
                onChange={handleChange}
                value={input.quantity}
                placeholder="Quantity"
                className="border p-3 rounded-lg  m-2 bg-lime-300 border-lime-500"
              />
            </div>
            <div className="flex flex-col w-96 mx-auto">
              <lable className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                Product Description
              </lable>
              <input
                type="text"
                name="productDescription"
                onChange={handleChange}
                value={input.productDescription}
                placeholder="Product Description.."
                className="border pt-1 rounded-lg  m-2 bg-lime-300 h-32 text-justify border-lime-500"
              />
            </div>

            <button
              type="submit"
              className="w-72 ml-4 mt-3 mb-5 rounded-lg font-bold"
            >
              Submit
            </button>
          </div>

          {/* <div className="bg-emerald-100 w-auto mt-10 ml-5 mr-5 rounded-lg mb-10 border-2">
              <div className="flex flex-col w-auto mr-10 ml-10 mx-auto">
                <div className="flex flex-col w-72  g-0 m-5 gap-5">
                  <label className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                    Upload an image
                  </label>
                  <input
                    type="file"
                    id="imageUpload"
                    name="imageUpload"
                    accept="image/*"
                    className="rounded-lg "
                  />
                </div>
              </div>
            </div> */}
        </form>
      </div>
    </div>
  );
}
export default AddNewInventory;
