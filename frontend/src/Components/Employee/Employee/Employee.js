import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Employee(props) {
  const {
    employeeId,
    employeeFirstName,
    employeeLastName,
    employeeCatogory,
    employeeAddress,
    employeeEmail,
    employeePhone,
  } = props.employee;

  //delete inventory
  const history = useNavigate();

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5001/Employee/${employeeId}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/employeedetails"));
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
          <tr className="p-3 bg-green-100">
            <td className="border-2 p-2 w-48 font-medium text-center ">
              {employeeId}
            </td>
            <td className="border-2 p-2 w-48 font-medium text-center">
              {employeeFirstName}
            </td>
            <td className="border-2 p-2 w-48 font-medium text-center">
              {employeeLastName}
            </td>
            <td className="border-2 p-2 w-24 font-medium text-center">
              {employeeCatogory}
            </td>
            <td className="border-2 p-2 w-48 font-medium text-center">
             
              {employeeAddress}
            </td>
            <td className="border-2 p-2 w-48 font-medium text-center">
              
              {employeeEmail}
            </td>
            <td className="border-2 p-2 w-48 font-medium text-center">
              
              {employeePhone}
            </td>
            <td className="border-2 p-2 w-52 font-medium text-center">
              <Link to={`/employeedetails/${employeeId}`}>
                <button className="p-1 pr-2 pl-2 m-2 hover:bg-green-700">
                  Update
                </button>
              </Link>
              <button
                className="p-1 pr-2 pl-2 m-2 bg-red-600 hover:bg-red-700"
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
export default Employee;
