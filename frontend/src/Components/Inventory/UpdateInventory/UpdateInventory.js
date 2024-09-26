import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InventoyHeader from "../InventoryHeader/InventoyHeader";

function UpdateInventory() {
  const [input, setInput] = useState({});
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

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5001/inventory/${inventoryId}`, {
        productName: String(input.productName),
        ProductCategory: String(input.ProductCategory),
        materialType: String(input.materialType),
        quantity: Number(input.quantity),
        productDescription: String(input.productDescription),
        unit: Number(input.unit),
      })
      .then((res) => res.data);
  };

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
          className=" w-2/6 mx-auto m-3 rounded-lg shadow-xl bg-green-50"
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
