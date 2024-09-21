import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ComplainDisplay(props) {
  const {
    _id,
    fullName,
    email,
    address,
    complainCategory,
    description,
    attachements,
  } = props.complain;

  const history = useNavigate();

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5001/complain/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/ComplainDisplay"));
  };

  return (

    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
    <h1 className="text-2xl font-bold text-gray-800 mb-4">Complain Details</h1>
    
    <div className="space-y-2 mb-4">
      {/* <div>
        <span className="font-semibold text-gray-600">ID:</span>
        <span className="ml-2 text-gray-800">{_id}</span>
      </div> */}
      <div>
        <span className="font-semibold text-gray-600">Full Name:</span>
        <span className="ml-2 text-gray-800">{fullName}</span>
      </div>
      <div>
        <span className="font-semibold text-gray-600">Email:</span>
        <span className="ml-2 text-gray-800">{email}</span>
      </div>
      <div>
        <span className="font-semibold text-gray-600">Address:</span>
        <span className="ml-2 text-gray-800">{address}</span>
      </div>
      <div>
        <span className="font-semibold text-gray-600">Complain Category:</span>
        <span className="ml-2 text-gray-800">{complainCategory}</span>
      </div>
      <div>
        <span className="font-semibold text-gray-600">Description:</span>
        <span className="ml-2 text-gray-800">{description}</span>
      </div>
      <div>
        <span className="font-semibold text-gray-600">Attachements:</span>
        <span className="ml-2 text-gray-800">{attachements}</span>
      </div>
    </div>
    
    <div className="flex space-x-4">
      <Link 
        to={`/complaindisplay/${_id}`}
        className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
      >
        Update
      </Link>
      <button
        onClick={deleteHandler}
        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg"
      >
        Delete
      </button>
    </div>
  </div>

          // <tr className="p-3 bg-green-100">
          //   <td className="border px-4 py-2 font-medium text-center ">
          //     {fullName}
          //   </td>
          //   <td className="border px-4 py-2 font-medium text-center">
          //     {" "}
          //     {email}
          //   </td>
          //   <td className="border px-4 py-2 max-w-[250px] font-medium text-center">
          //     {address}
          //   </td>
          //   <td className="border px-4 py-2 font-medium text-center">
          //     {complainCategory}
          //   </td>
          //   <td className="border px-4 py-2 font-medium text-center">
          //     {" "}
          //     {description}
          //   </td>
          //   <td className="border px-4 py-2 font-medium text-center">
          //     {" "}
          //     {attachements}
          //   </td>
          //   <td className="border px-4 py-2 font-medium text-center">
          //     <Link to={`/complaindisplay/${_id}`}>
          //       <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          //         Update
          //       </button>
          //     </Link>
          //     <button
          //       className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          //       onClick={deleteHandler}
          //     >
          //       Remove
          //     </button>
          //   </td>
          // </tr>
  );
}

export default ComplainDisplay

