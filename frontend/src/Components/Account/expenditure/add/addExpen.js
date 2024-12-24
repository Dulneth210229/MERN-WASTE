import React from "react";
import { useState } from "react";
import Header from "../../Inventory/InventoryHeader/InventoyHeader";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddNewOrder() {
  const history = useNavigate();
  const [input, setInput] = useState({
    productName: "",
    productCategory: "",
    seller: "",
    deliveryType: "",
    trakingID: "",
    orderDescription: "",
    unitPrice: "",
    quantity: "",
    orderTotal: "",
    paymentType: "",
  });

  const [errors, setErrors] = useState({
    productName: "",
    productCategory: "",
    trakingID: "",
    orderDescription: "",
    unitPrice: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate fields based on the name of the input
    switch (name) {
      case "productName":
      case "productCategory":
        // Only allow letters and spaces
        if (!/^[a-zA-Z\s]*$/.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "Please enter valid characters (letters only)",
          }));
          return;
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
          }));
        }
        break;

      case "trakingID":
      case "orderDescription":
        // Allow letters, numbers, and spaces
        if (!/^[a-zA-Z0-9\s]*$/.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "Please enter valid characters (letters and numbers only)",
          }));
          return;
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
          }));
        }
        break;

      case "unitPrice":
      case "quantity":
        // Allow only positive numbers
        if (!/^\d*\.?\d*$/.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "Please enter a valid positive number",
          }));
          return;
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
          }));
        }
        break;

      default:
        break;
    }

    // Update the state
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Auto-calculate orderTotal when quantity and unitPrice are provided
    if (name === "unitPrice" || name === "quantity") {
      const unitPrice =
        name === "unitPrice" ? parseFloat(value) : parseFloat(input.unitPrice);
      const quantity =
        name === "quantity" ? parseFloat(value) : parseFloat(input.quantity);

      if (!isNaN(unitPrice) && !isNaN(quantity)) {
        const total = (unitPrice * quantity).toFixed(2); // Calculate and format the total
        setInput((prevState) => ({
          ...prevState,
          orderTotal: total,
        }));
      } else {
        setInput((prevState) => ({
          ...prevState,
          orderTotal: "", // Clear total if invalid input
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    sendRequest().then(() => history("/orderDetails"));
  };

  const sendRequest = async () => {
    await axios
      .post("http://Localhost:5001/order", {
        productName: String(input.productName),
        productCategory: String(input.productCategory),
        seller: String(input.seller),
        deliveryType: String(input.deliveryType),
        trakingID: String(input.trakingID),
        orderDescription: String(input.orderDescription),
        unitPrice: Number(input.unitPrice),
        quantity: Number(input.quantity),
        orderTotal: Number(input.orderTotal),
        paymentType: String(input.paymentType),
      })
      .then((res) => res.data);
  };

  return (
    <div>
      <Header />
      <div>
        <h1 className="text-5xl font-semibold text-slate-700 text-center my-5">
          Add New Order
        </h1>
        <hr />
      </div>
      <div>
        <form
          className=" w-4/5 mx-auto mt-5 p-5 rounded-lg flex flex-row"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row bg-green-100 p-3 py-5 rounded-lg w-3/5 shadow-2xl mx-auto">
            <div>
              <div className="ml-8">
                <label className="font-bold text-slate-700 text-2xl ">
                  Product Name
                </label>
                <br />
                <input
                  type="text"
                  onChange={handleChange}
                  value={input.productName}
                  name="productName"
                  className="border-2 border-slate-500 rounded-lg w-72 h-10 mt-2 placeholder-shown: placeholder-slate-500 p-1"
                  placeholder="Product Name"
                />
                {errors.productName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.productName}
                  </p>
                )}
              </div>
              <div className="mt-3 ml-8">
                <label className="font-bold text-slate-700 text-2xl ">
                  Product Category
                </label>
                <br />
                <input
                  type="text"
                  onChange={handleChange}
                  value={input.productCategory}
                  name="productCategory"
                  className="border-2 border-slate-500 rounded-lg w-72 h-10 mt-2 placeholder-shown: placeholder-slate-500 p-1"
                  placeholder="Product Category"
                />
                {errors.productCategory && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.productCategory}
                  </p>
                )}
              </div>
              <div className="mt-3 ml-8">
                <label className="font-bold text-slate-700 text-2xl ">
                  Seller
                </label>
                <br />
                <select
                  name="seller"
                  onChange={handleChange}
                  value={input.seller}
                  className="border-2 border-slate-500 rounded-lg w-72 h-10 mt-2 placeholder-shown: placeholder-slate-500 p-1"
                >
                  <option value="" disabled selected className="text-slate-700">
                    Select the seller
                  </option>
                  <option>EcoWaste Supplies Ltd</option>
                  <option>GreenTech Waste Solutions</option>
                  <option>Urban CleanTech Suppliers</option>
                  <option>SustainWaste Industries</option>
                  <option>EnviroPro Waste Solutions</option>
                </select>
              </div>
              <div className="mt-3 ml-8">
                <label className="font-bold text-slate-700 text-2xl ">
                  Delivery Type
                </label>
                <br />
                <select
                  name="deliveryType"
                  onChange={handleChange}
                  value={input.deliveryType}
                  className="border-2 border-slate-500 rounded-lg w-72 h-10 mt-2 placeholder-shown: placeholder-slate-500 p-1"
                >
                  <option value="" disabled selected className="text-slate-700">
                    Select the delivery type
                  </option>
                  <option>Standard Delivery</option>
                  <option>Express Delivery</option>
                  <option>Scheduled Delivery</option>
                  <option>Same-Day Delivery</option>
                  <option>Next-Day Delivery</option>
                </select>
              </div>
              <div className="mt-3 ml-8">
                <label className="font-bold text-slate-700 text-2xl ">
                  Tracking ID
                </label>
                <br />
                <input
                  type="text"
                  onChange={handleChange}
                  value={input.trakingID}
                  name="trakingID"
                  className="border-2 border-slate-500 rounded-lg w-72 h-10 mt-2 placeholder-shown: placeholder-slate-500 p-1"
                  placeholder="Tracking ID"
                />
                {errors.trakingID && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.trakingID}
                  </p>
                )}
              </div>
              <div className="mt-3 ml-8">
                <label className="font-bold text-slate-700 text-2xl ">
                  Payment Type
                </label>
                <br />
                <select
                  name="paymentType"
                  onChange={handleChange}
                  value={input.paymentType}
                  className="border-2 border-slate-500 rounded-lg w-72 h-10 mt-2 placeholder-shown: placeholder-slate-500 p-1"
                >
                  <option value="" disabled selected className="text-slate-700">
                    Select the payment type
                  </option>
                  <option>Credit/Debit Card</option>
                  <option>Bank Transfer</option>
                  <option>Cash on Delivery (COD)</option>
                  <option>Mobile Payment (e.g., Apple Pay, Google Pay)</option>
                  <option>Installment Payment</option>
                </select>
              </div>
            </div>

            <div>
              <div className="ml-10">
                <label className="font-bold text-slate-700 text-2xl ">
                  Order Description
                </label>
                <br />
                <input
                  type="text"
                  onChange={handleChange}
                  value={input.orderDescription}
                  name="orderDescription"
                  className="border-2 border-slate-500 rounded-lg w-72 h-32 mt-2 placeholder-shown: placeholder-slate-500 p-1"
                  placeholder="Order Description"
                />
                {errors.orderDescription && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.orderDescription}
                  </p>
                )}
              </div>
              <div className="mt-3 ml-10">
                <label className="font-bold text-slate-700 text-2xl ">
                  Unit Price
                </label>
                <br />
                <input
                  type="number"
                  onChange={handleChange}
                  value={input.unitPrice}
                  name="unitPrice"
                  className="border-2 border-slate-500 rounded-lg w-72 h-10 mt-2 placeholder-shown: placeholder-slate-500 p-1"
                  placeholder="Unit Price"
                />
                {errors.unitPrice && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.unitPrice}
                  </p>
                )}
              </div>
              <div className="mt-3 ml-10">
                <label className="font-bold text-slate-700 text-2xl ">
                  Quantity
                </label>
                <br />
                <input
                  type="number"
                  onChange={handleChange}
                  value={input.quantity}
                  name="quantity"
                  className="border-2 border-slate-500 rounded-lg w-72 h-10 mt-2 placeholder-shown: placeholder-slate-500 p-1"
                  placeholder="Quantity"
                />
                {errors.quantity && (
                  <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>
                )}
              </div>
              <div className="mt-3 ml-10">
                <label className="font-bold text-slate-700 text-2xl ">
                  Order Total
                </label>
                <br />
                <input
                  type="text"
                  value={input.orderTotal}
                  name="orderTotal"
                  readOnly
                  className="border-2 border-slate-500 rounded-lg w-72 h-10 mt-2 placeholder-shown: placeholder-slate-500 p-1"
                  placeholder="Order Total"
                />
              </div>

              <div className="mt-10 ml-10">
                <button
                  type="submit"
                  className="bg-green-600 w-72 h-12 p-3 text-xl font-semibold text-white shadow-lg rounded-lg hover:bg-green-500"
                >
                  Submit Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewOrder;
