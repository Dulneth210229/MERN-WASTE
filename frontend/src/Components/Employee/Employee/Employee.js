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
      <div className="bg-gray-50 p-6 rounded-lg max-w-4xl mx-auto shadow-md text-center"> 
      <div className="bg-lime-500 text-white p-3 rounded-lg uppercase w-50 over:opacity-95  ">
      
      <h1 className="text-2xl font-bold mb-4">Employee Details </h1>
      </div>
      
      <div className="space-y-2 mb-4">
        <div>
          <span className="text-2xl font-bold mb-4">Employee Id:</span>
          <span className="text-2xl  mb-4">{employeeId}</span>
        </div>
        <div>
          <span className="text-2xl font-bold mb-4">Waste Type:</span>
          <span className="text-2xl  mb-4">{employeeFirstName}</span>
        </div>
        <div>
          <span className="text-2xl font-bold mb-4">Quantity:</span>
          <span className="text-2xl  mb-4">{employeeLastName}</span>
        </div>
        <div>
          <span className="text-2xl font-bold mb-4">Date Of Collection:</span>
          <span className="text-2xl  mb-4">{employeeCatogory}</span>
        </div>
        <div>
          <span className="text-2xl font-bold mb-4">Location:</span>
          <span className="text-2xl  mb-4">{employeeAddress}</span>
        </div>
        <div>
          <span className="text-2xl font-bold mb-4">Transport Method:</span>
          <span className="text-2xl  mb-4">{employeeEmail}</span>
        </div>
        <div>
          <span className="text-2xl font-bold mb-4">Notes:</span>
          <span className="text-2xl  mb-4">{employeePhone}</span>
        </div>
      </div>
            <div className="border-2 p-2 w-52 font-medium text-center">
              <Link to={`/employeedetails/${employeeId}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
                  Update
                </button>
              </Link>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg"
                onClick={deleteHandler}
              >
                Remove
              </button>
            </div>
          
        
      </div>
    </div>
  );
}
export default Employee;
