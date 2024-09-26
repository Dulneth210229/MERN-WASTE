import React, { useState } from "react";
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
    unit: "",
  });

  const [error, setError] = useState({
    productName: "",
    ProductCategory: "",
    materialType: "",
    quantity: "",
    productDescription: "",
    unit: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate fields based on input name
    let isValid = true; // Track if input is valid
    switch (name) {
      case "productName":
      case "ProductCategory":
      case "materialType":
      case "productDescription":
        // Check if value contains invalid characters
        if (/[^a-zA-Z\s]/.test(value)) {
          setError((prev) => ({
            ...prev,
            [name]: "This field should only contain letters.",
          }));
          isValid = false; // Set valid flag to false
        } else {
          setError((prev) => ({ ...prev, [name]: "" }));
        }
        break;
      case "quantity":
        // Check if value is a positive number
        if (!/^\d+$/.test(value)) {
          setError((prev) => ({
            ...prev,
            quantity: "Quantity should only be a positive number.",
          }));
          isValid = false; // Set valid flag to false
        } else {
          setError((prev) => ({ ...prev, quantity: "" }));
        }
        break;
      case "unit":
        // Check if value contains invalid characters
        if (/[^a-zA-Z0-9\s]/.test(value)) {
          setError((prev) => ({
            ...prev,
            unit: "Unit should contain only letters and numbers.",
          }));
          isValid = false; // Set valid flag to false
        } else {
          setError((prev) => ({ ...prev, unit: "" }));
        }
        break;
      default:
        break;
    }

    // Only update state if the input is valid
    if (isValid) {
      setInput((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any errors are present before submitting
    if (Object.values(error).some((errMsg) => errMsg !== "")) {
      alert("Please fix the validation errors.");
      return;
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
        unit: input.unit,
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
          className="w-2/6 mx-auto m-3 rounded-lg shadow-xl bg-blue-100"
        >
          <div className="flex flex-col w-auto mr-10 ml-10">
            <div className="flex flex-col w-96 mx-auto">
              <label className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                onChange={handleChange}
                value={input.productName}
                placeholder="Product Name"
                className="border p-3 rounded-lg m-2 bg-lime-300 border-lime-500"
              />
              {error.productName && (
                <div className="text-red-500 mt-2 ml-2 font-semibold">
                  {error.productName}
                </div>
              )}
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
                className="border p-3 rounded-lg m-2 bg-lime-300 border-lime-500"
              />
              {error.ProductCategory && (
                <div className="text-red-500 mt-2 ml-2 font-semibold">
                  {error.ProductCategory}
                </div>
              )}
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
                className="border p-3 rounded-lg m-2 bg-lime-300 border-lime-500"
              />
              {error.materialType && (
                <div className="text-red-500 mt-2 ml-2 font-semibold">
                  {error.materialType}
                </div>
              )}
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
                placeholder="Unit"
                className="border p-3 rounded-lg m-2 bg-lime-300"
              />
              {error.unit && (
                <div className="text-red-500 mt-2 ml-2 font-semibold">
                  {error.unit}
                </div>
              )}
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
                className="border p-3 rounded-lg m-2 bg-lime-300 border-lime-500"
              />
              {error.quantity && (
                <div className="text-red-500 mt-2 ml-2 font-semibold">
                  {error.quantity}
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
                className="border pt-1 rounded-lg m-2 bg-lime-300 h-32 text-justify border-lime-500"
              />
              {error.productDescription && (
                <div className="text-red-500 mt-2 ml-2 font-semibold">
                  {error.productDescription}
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
