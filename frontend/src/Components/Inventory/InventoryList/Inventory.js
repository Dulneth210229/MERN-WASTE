import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Inventory(props) {
  const {
    _id,
    productName,
    ProductCategory,
    materialType,
    quantity,
    productDescription,
    unit,
  } = props.inventory;

  //delete inventory
  const history = useNavigate();

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5001/inventory/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/inventoryDeatails"));
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
          <tr className="p-3 bg-white">
            <td className="border-2 p-2 w-48 font-medium text-center border-slate-400 ">
              {productName}
            </td>
            <td className="border-2 p-2 w-48 font-medium text-center border-slate-400 ">
              {ProductCategory}
            </td>
            <td className="border-2 p-2 w-48 font-medium text-center border-slate-400 ">
              {materialType}
            </td>

            <td className="border-2 p-2 w-24 font-medium text-center border-slate-400 ">
              {unit}
            </td>
            <td className="border-2 p-2 w-24 font-medium text-center border-slate-400 ">
              {quantity}
            </td>
            <td className="border-2 p-2 w-48 font-medium text-center border-slate-400 ">
              {productDescription}
            </td>
            <td className="border-2 p-2 w-52 font-medium text-center border-slate-400 ">
              <Link to={`/inventoryDeatails/${_id}`}>
                <button className="p-1 pr-2 pl-2 m-2 hover:bg-green-700 bg-green-600 rounded-lg">
                  Update
                </button>
              </Link>
              <button
                className="p-1 pr-2 pl-2 m-2 bg-red-600 hover:bg-red-700 rounded-lg"
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
export default Inventory;
