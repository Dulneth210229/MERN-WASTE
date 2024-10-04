import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import InventoyHeader from "../InventoryHeader/InventoyHeader";

function UpdateInventory() {
  const [input, setInput] = useState({});
  const [error, setError] = useState({});
  const history = useNavigate();
  const inventoryId = useParams().Iid;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5001/inventory/${inventoryId}`)
        .then((res) => res.data)
        .then((data) => setInput(data.inventory));
    };
    fetchHandler();
  }, [inventoryId]);

  const validateInput = (name, value) => {
    let errorMessage = "";

    switch (name) {
      case "productName":
      case "ProductCategory":
      case "materialType":
      case "productDescription":
        if (!/^[a-zA-Z\s]*$/.test(value) && value !== "") {
          errorMessage = "Only letters and spaces are allowed.";
        }
        break;
      case "quantity":
        if (!/^\d*$/.test(value) || (value !== "" && Number(value) <= 0)) {
          errorMessage = "Quantity must be a positive integer.";
        }
        break;
      case "unit":
        if (!/^[a-zA-Z0-9]*$/.test(value) && value !== "") {
          errorMessage = "Only letters and numbers are allowed.";
        }
        break;
      default:
        break;
    }

    return errorMessage;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const errorMessage = validateInput(name, value);

    // Update state only if the input is valid
    if (errorMessage === "") {
      setInput((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }

    setError((prevState) => ({
      ...prevState,
      [name]: errorMessage,
    }));
  };

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5001/inventory/${inventoryId}`, {
        productName: String(input.productName),
        ProductCategory: String(input.ProductCategory),
        materialType: String(input.materialType),
        quantity: Number(input.quantity),
        productDescription: String(input.productDescription),
        unit: input.unit, // Since it accepts both strings and numbers
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasErrors = Object.values(error).some((err) => err !== "");
    if (hasErrors) {
      alert("Please fix the errors before submitting.");
      return;
    }

    sendRequest().then(() => history("/inventoryDeatails"));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <InventoyHeader />
      <div className=" bg-gray-100">
        <div>
          <h1 className="text-center mt-8 font-bold text-slate-900 text-3xl mb-6">
            Update Inventory Stock
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

export default UpdateInventory;
