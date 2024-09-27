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
    <div>
      <InventoyHeader />
      <div>
        <h1 className="text-center mt-5 font-semibold text-slate-800 text-4xl mb-4">
          Update Inventory Stock
        </h1>
        <hr className="border-2" />
        <form
          onSubmit={handleSubmit}
          className=" w-2/6 mx-auto m-3 rounded-lg shadow-xl bg-blue-100"
        >
          <div className="flex flex-col w-auto mr-10 ml-10">
            {/* Product Name */}
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
              {error.productName && (
                <div className="text-red-500 mt-2 ml-2 font-semibold">
                  {error.productName}
                </div>
              )}
            </div>

            {/* Product Category */}
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
              {error.ProductCategory && (
                <div className="text-red-500 mt-2 ml-2 font-semibold">
                  {error.ProductCategory}
                </div>
              )}
            </div>

            {/* Material Type */}
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
              {error.materialType && (
                <div className="text-red-500 mt-2 ml-2 font-semibold">
                  {error.materialType}
                </div>
              )}
            </div>

            {/* Unit */}
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
                className="border pt-1 rounded-lg  m-2 bg-lime-300 h-14 text-justify border-lime-500"
              />
              {error.unit && (
                <div className="text-red-500 mt-2 ml-2 font-semibold">
                  {error.unit}
                </div>
              )}
            </div>

            {/* Quantity */}
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
              {error.quantity && (
                <div className="text-red-500 mt-2 ml-2 font-semibold">
                  {error.quantity}
                </div>
              )}
            </div>

            {/* Product Description */}
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

export default UpdateInventory;
