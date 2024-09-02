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
        <h1 className="text-center mt-5 font-semibold text-slate-800 ">
          Update Inventory Stock
        </h1>
        <hr className="border-2" />
        <form onSubmit={handleSubmit}>
          <div className="flex  w-3/5 mx-auto ">
            <div className="bg-emerald-100 w-auto mt-10 ml-20 mr-5 mb-10 rounded-lg border-2">
              <div className="flex flex-col w-auto mr-10 ml-10">
                <div className="flex flex-col w-96 g-0 al m-5 ">
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
                <div className="flex flex-col w-96 g-0 al  m-5">
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
                <div className="flex flex-col w-96 g-0 al  m-5">
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
                <div className="flex flex-col w-96 g-0 al  m-5">
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
                <div className="flex flex-col w-96  g-0 al  m-5">
                  <lable className="p-3 pb-0 m-0 font-bold text-2xl text-slate-700">
                    Product Description
                  </lable>
                  <input
                    type="text"
                    name="productDescription"
                    onChange={handleChange}
                    value={input.productDescription}
                    placeholder="Product Description.."
                    className="border pt-1 rounded-lg  m-2 bg-lime-300 h-40 text-justify border-lime-500"
                  />
                </div>
              </div>
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
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateInventory;
