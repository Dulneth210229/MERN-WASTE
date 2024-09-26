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
    unti: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if quantity is a non-negative integer
    const quantity = Number(input.quantity);
    if (isNaN(quantity) || quantity < 0 || !Number.isInteger(quantity)) {
      setError("must be an integer.");
      return;
    } else {
      setError(""); // Clear any previous error
    }

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
        unit: Number(input.unit),
      })
      .then((res) => res.data);
  };

  return (
    <div>
      <InventoyHeader />
      <div>
        <h1 className="text-center mt-5 font-semibold text-slate-800 text-4xl mb-4">
          Add New Inventory Stock
        </h1>
        <hr className="border-2" />
        <form
          onSubmit={handleSubmit}
          className=" w-2/6 mx-auto m-3 rounded-lg shadow-xl bg-sky-300"
        >
          <div className="flex flex-col w-auto mr-10 ml-10">
            <div className="flex flex-col w-96 mx-auto">
              <label className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700 ">
                Product Name
              </label>
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
              <label className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                Product Category
              </label>
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
              <label className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                Material Type
              </label>
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
              <label className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                Product Quantity
              </label>
              <input
                type="text"
                name="quantity"
                onChange={handleChange}
                value={input.quantity}
                placeholder="Quantity"
                className="border p-3 rounded-lg  m-2 bg-lime-300 border-lime-500"
              />
              {error && (
                <div className="text-red-500 mt-2 ml-2 font-semibold">
                  {error}
                </div>
              )}
            </div>
            <div className="flex flex-col w-96 mx-auto">
              <label className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                Product Description
              </label>
              <input
                type="text"
                name="productDescription"
                onChange={handleChange}
                value={input.productDescription}
                placeholder="Product Description.."
                className="border pt-1 rounded-lg  m-2 bg-lime-300 h-32 text-justify border-lime-500"
              />
            </div>
            <div className="flex flex-col w-96 mx-auto">
              <label className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                Unit
              </label>
              <input
                type="text"
                name="unit"
                onChange={handleChange}
                value={input.unit}
                placeholder="unit"
                className="border pt-1 rounded-lg  m-2 bg-lime-300 h-14 text-justify border-lime-500"
              />
              {error && (
                <div className="text-red-500 mt-2 ml-2 font-semibold">
                  {error}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-72 mx-auto mt-3 mb-5 rounded-lg font-bold bg-green-700 h-10"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddNewInventory;
