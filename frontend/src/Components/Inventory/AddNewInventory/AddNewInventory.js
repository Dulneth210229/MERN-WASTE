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
    <div className="min-h-screen flex flex-col">
      <InventoyHeader />
      <div className=" bg-gray-100">
        <div>
          <h1 className="text-center mt-8 font-bold text-slate-900 text-3xl mb-6">
            Add New Inventory Stock
          </h1>
          <hr className="border border-gray-300 mb-8  mx-auto" />
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl mx-auto p-6 rounded-lg shadow-lg bg-white"
          >
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700 text-lg">
                  Product Name
                </label>
                <input
                  type="text"
                  name="productName"
                  onChange={handleChange}
                  value={input.productName}
                  placeholder="Enter product name"
                  className="border border-gray-300 rounded-lg p-3  focus:border-transparent transition ease-in-out duration-200"
                />
                {error.productName && (
                  <div className="text-red-500 text-sm mt-1">
                    {error.productName}
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-gray-700 text-lg">
                  Product Category
                </label>
                <input
                  type="text"
                  name="ProductCategory"
                  onChange={handleChange}
                  value={input.ProductCategory}
                  placeholder="Enter product category"
                  className="border border-gray-300 rounded-lg p-3  focus:border-transparent transition ease-in-out duration-200"
                />
                {error.ProductCategory && (
                  <div className="text-red-500 text-sm mt-1">
                    {error.ProductCategory}
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-gray-700 text-lg">
                  Material Type
                </label>
                <input
                  type="text"
                  name="materialType"
                  onChange={handleChange}
                  value={input.materialType}
                  placeholder="Enter material type"
                  className="border border-gray-300 rounded-lg p-3  focus:border-transparent transition ease-in-out duration-200"
                />
                {error.materialType && (
                  <div className="text-red-500 text-sm mt-1">
                    {error.materialType}
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-gray-700 text-lg">
                  Unit
                </label>
                <input
                  type="text"
                  name="unit"
                  onChange={handleChange}
                  value={input.unit}
                  placeholder="Enter unit"
                  className="border border-gray-300 rounded-lg p-3  focus:border-transparent transition ease-in-out duration-200"
                />
                {error.unit && (
                  <div className="text-red-500 text-sm mt-1">{error.unit}</div>
                )}
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-gray-700 text-lg">
                  Product Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  onChange={handleChange}
                  value={input.quantity}
                  placeholder="Enter product quantity"
                  className="border border-gray-300 rounded-lg p-3  focus:border-transparent transition ease-in-out duration-200"
                />
                {error.quantity && (
                  <div className="text-red-500 text-sm mt-1">
                    {error.quantity}
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-gray-700 text-lg">
                  Product Description
                </label>
                <textarea
                  name="productDescription"
                  onChange={handleChange}
                  value={input.productDescription}
                  placeholder="Enter product description"
                  className="border border-gray-300 rounded-lg p-3 h-24 resize-none focus:border-transparent transition ease-in-out duration-200"
                />
                {error.productDescription && (
                  <div className="text-red-500 text-sm mt-1">
                    {error.productDescription}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition ease-in-out duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewInventory;
