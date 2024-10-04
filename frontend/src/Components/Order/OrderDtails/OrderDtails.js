import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../../Inventory/InventoryHeader/InventoyHeader";
import axios from "axios";
import Order from "../OrderList/Order";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import nodata from "../comonimages/noresults.svg";

const IURL = "http://Localhost:5001/order";

const fetchOrder = async () => {
  return await axios.get(IURL).then((res) => res.data);
};

function OrderDtails() {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetchOrder().then((data) => setOrder(data.order));
  }, []);

  //search function
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchOrder().then((data) => {
      const filterOrder = data.order.filter((order) =>
        Object.values(order).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setOrder(filterOrder);
      setNoResults(filterOrder.length === 0);
    });
  };
  // Calculations
  const totalOrders = order.length;
  const ordersLessThan20 = order.filter((o) => o.quantity < 20).length;
  const totalAmount = order.reduce((acc, o) => acc + (o.orderTotal || 0), 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className=" bg-gray-100">
        <div className="flex flex-row mt-5 mb-2 justify-between">
          <h1 className="text-center font-semibold m-1 ml-5 text-4xl text-slate-700">
            Order Details Display
          </h1>

          <div className="flex flex-row gap-5">
            <Link to="/addorder">
              <button className="h-10 p-2 mt-2 font-semibold bg-green-700 mr-28 rounded-lg text-white hover:bg-green-600">
                Place New Order
              </button>
            </Link>
            <form className="bg-green-100 p-2 pt-1 rounded-lg flex items-center mt-2 h-10 mr-1 ">
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                placeholder="Search..."
                //Responsivness od the components
                //w-24 --> make the size according to the mobile
                //sm:w-64 --> above the size of the mobile
                className="bg-transparent focus:outline-none w-24 sm:w-64 "
              />
              <FaSearch className="text-slate-600" />
            </form>
            <button
              className="h-10 p-2 mt-2 mr-2 font-bold bg-green-500 px-5 rounded-lg hover:bg-green-400 text-white"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <hr className="border-2" />
        <div className="mt-2 text-center  p-3 bg-white w-3/5 mx-auto rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mr-2 text-slate-700">
            Order Summary
          </h1>
          <div className="flex flex-row gap-10 mx-auto items-center   mt-5">
            <h4 className="font-semibold text-2xl ml-14 border-2 p-1 rounded-lg bg-sky-50 border-dashed border-slate-900">
              Total Orders: {totalOrders}
            </h4>
            <h4 className="font-semibold text-2xl border-2 rounded-lg p-1 border-dashed border-slate-900 bg-sky-50">
              Quantity Less Than 20: {ordersLessThan20}
            </h4>
            <h4 className="font-semibold text-2xl border-2 rounded-lg p-1 border-dashed border-slate-900 bg-sky-50">
              Total Amount : ${totalAmount.toFixed(2)}
            </h4>
          </div>
        </div>
        <div className="mt-10">
          <table className="border-2 mx-auto">
            <tr className="bg-slate-400 ">
              <td className=" p-2 font-bold text-center w-48 border-green-500">
                Product Name
              </td>
              <td className=" p-2 font-bold text-center w-48  border-green-500">
                Category
              </td>
              <td className="p-2 font-bold text-center w-48 border-green-500">
                Seller
              </td>
              <td className=" font-bold text-center p-2 w-48 border-green-500">
                Delivery Type
              </td>

              <td className=" font-bold text-center p-2 w-48 border-green-500">
                Traking ID
              </td>
              <td className=" font-bold text-center p-2 w-48 border-green-500 text-nowrap">
                Description
              </td>

              <td className=" font-bold text-center p-2 w-48 border-green-500">
                Unit Price
              </td>
              <td className=" font-bold text-center w-28 border-green-500">
                Quantity
              </td>
              <td className=" font-bold text-center p-2 w-48 border-green-500">
                Order Total
              </td>
              <td className="font-bold text-center p-2 w-48 border-green-500">
                Payment Type
              </td>
              <td className=" font-bold text-center p-2 w-60 border-green-500">
                Actions
              </td>
            </tr>
          </table>
        </div>
        {/* Search bar results display */}
        {noResults ? (
          <div className="flex flex-col ">
            <h1 className="text-5xl font-bold text-slate-600 text-center mt-16">
              There are no matching results!......
              <img
                src={nodata}
                alt="No Data"
                className="mx-auto mt-20 w-96 h-96"
              />
            </h1>
          </div>
        ) : (
          <div className="mb-20">
            {/*get the order details repetitively from the order.js*/}
            {order &&
              order.map((order, i) => (
                <div key={i}>
                  <Order order={order} />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderDtails;
