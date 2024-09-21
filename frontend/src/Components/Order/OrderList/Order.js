import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Order(props) {
  const {
    _id,
    productName,
    productCategory,
    seller,
    deliveryType,
    trakingID,
    orderDescription,
    unitPrice,
    quantity,
    orderTotal,
    paymentType,
  } = props.order;

  //delete inventory
  const history = useNavigate();

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5001/order/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/orderDetails"));
  };

  return (
    <div>
      {/*<div>
        <h1>Inventory Display</h1>
        <hr />
        <h1>Inventory ID : {_id}</h1>
        <h1>Product Name : {productName}</h1>
        <h1>Product Category : {ProductCategory}</h1>
        <h1>MaterialType : {materialType}</h1>
        <h1>Product Quantity : {quantity}</h1>
        <h1>Product Dis : {productDescription}</h1>
        <button>Update</button>
        <button>Delete</button>
      </div>*/}
      <div>
        <table className="w-auto mx-auto m-1">
          <tr className="p-3 bg-blue-100 hover:bg-blue-200">
            <td className="p-2 w-48 font-medium text-center text-slate-700">
              {productName}
            </td>
            <td className=" w-48 font-medium text-center text-slate-700">
              {productCategory}
            </td>
            <td className=" w-48 font-medium text-center text-slate-700">
              {seller}
            </td>
            <td className=" w-48 font-medium text-center text-slate-700">
              {deliveryType}
            </td>
            <td className="w-48 font-medium text-center text-slate-700">
              {trakingID}
            </td>
            <td className="w-48 font-medium text-center text-slate-700 text-nowrap ">
              {orderDescription}
            </td>

            <td className=" w-48 font-medium text-center text-slate-700">
              {unitPrice}
            </td>
            <td className="  w-32 font-medium text-center text-slate-700">
              {quantity}
            </td>
            <td className="  w-48 font-medium text-center text-slate-700">
              {orderTotal}
            </td>
            <td className=" w-48 font-medium text-center text-slate-700">
              {paymentType}
            </td>
            <td className=" w-56 font-medium text-center ">
              <Link to={`/updateOrder/${_id}`}>
                <button className="p-1  m-2 hover:bg-green-600  bg-green-700 rounded-lg font-bold">
                  Update
                </button>
              </Link>
              <button
                className="p-1  bg-red-600 hover:bg-red-700 rounded-lg font-bold"
                onClick={deleteHandler}
              >
                Remove
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Order;
