import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../../Inventory/InventoryHeader/InventoyHeader";

function UpdateOrder() {
  const [input, setInput] = useState({});
  const history = useNavigate();
  const orderId = useParams().Oid;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5001/order/${orderId}`)
        .then((res) => res.data)
        .then((data) => setInput(data.order));
    };
    fetchHandler();
  }, [orderId]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5001/order/${orderId}`, {
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation patterns
    const stringPattern = /^[A-Za-z\s]*$/;
    const stringNumberPattern = /^[A-Za-z0-9\s]*$/;
    const positiveNumberPattern = /^\d*\.?\d*$/;

    // Real-time validation based on field type
    if (name === "productName" || name === "productCategory") {
      if (!stringPattern.test(value)) return; // Only strings are allowed
    }

    if (name === "trakingID" || name === "orderDescription") {
      if (!stringNumberPattern.test(value)) return; // Strings and numbers are allowed
    }

    if (name === "unitPrice" || name === "quantity") {
      if (!positiveNumberPattern.test(value)) return; // Only positive numbers are allowed
    }

    setInput((prevState) => {
      const updatedInput = {
        ...prevState,
        [name]: value,
      };

      // Auto-calculate orderTotal if unitPrice and quantity are provided
      if (name === "unitPrice" || name === "quantity") {
        const unitPrice = parseFloat(updatedInput.unitPrice) || 0;
        const quantity = parseFloat(updatedInput.quantity) || 0;
        updatedInput.orderTotal = (unitPrice * quantity).toFixed(2);
      }

      return updatedInput;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    sendRequest().then(() => history("/orderDetails"));
  };

  return (
    <div>
      <Header />
      <div>
        <h1 className="text-5xl font-semibold text-slate-700 text-center my-5">
          Update Order
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
                  <option>Mobile Payment (e.g., PayPal, Apple Pay)</option>
                  <option>Purchase Order (PO)</option>
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
                  placeholder="Description"
                />
              </div>
              <div className="mt-4 ml-10">
                <label className="font-bold text-slate-700 text-2xl ">
                  Unit Price
                </label>
                <br />
                <input
                  type="text"
                  onChange={handleChange}
                  value={input.unitPrice}
                  name="unitPrice"
                  className="border-2 border-slate-500 rounded-lg w-72 h-10 mt-2 placeholder-shown: placeholder-slate-500 p-1"
                  placeholder="Unit Price"
                />
              </div>
              <div className="mt-3 ml-10">
                <label className="font-bold text-slate-700 text-2xl ">
                  Quantity
                </label>
                <br />
                <input
                  type="text"
                  onChange={handleChange}
                  value={input.quantity}
                  name="quantity"
                  className="border-2 border-slate-500 rounded-lg w-72 h-10 mt-2 placeholder-shown: placeholder-slate-500 p-1"
                  placeholder="Quantity"
                />
              </div>
              <div className="mt-3 ml-10">
                <label className="font-bold text-slate-700 text-2xl ">
                  Order Total
                </label>
                <br />
                <input
                  type="text"
                  onChange={handleChange}
                  value={input.orderTotal}
                  name="orderTotal"
                  className="border-2 border-slate-500 rounded-lg w-72 h-10 mt-2 placeholder-shown: placeholder-slate-500 p-1"
                  placeholder="Auto-calculated...."
                  readOnly
                />
              </div>
              {/* Place Order Button */}
              <div className="mt-5 ml-10">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold mt-6 py-2 px-4 rounded-lg w-72 h-12"
                >
                  Update Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateOrder;
