import React from "react";
import { Link } from "react-router-dom";
// import RequestNav from '../RequestNav/RequestNav'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Request(props) {
  const { _id, service, name, address, phoneNumber, date, time } =
    props.request;

  // const date = "2024-09-01T00:00:00.000Z";
  const formattedDate = date.slice(0, 10);

  //delete request
  const history = useNavigate();

  const deleteHandler = async () => {
    await axios
      .delete(`http://Localhost:5001/request/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/requestDetailsUser"));
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Request Details</h1>

      <div className="space-y-2 mb-4">
        {/* <div>
          <span className="font-bold text-gray-600">ID:</span>
          <span className="ml-2 text-gray-800">{_id}</span>
        </div> */}
        <div>
          <span className="font-bold text-gray-600">Service Type:</span>
          <span className="ml-2 text-gray-800">{service}</span>
        </div>
        <div>
          <span className="font-bold text-gray-600">Name:</span>
          <span className="ml-2 text-gray-800">{name}</span>
        </div>
        <div>
          <span className="font-bold text-gray-600">Address:</span>
          <span className="ml-2 text-gray-800">{address}</span>
        </div>
        <div>
          <span className="font-bold text-gray-600">Contact Number:</span>
          <span className="ml-2 text-gray-800">{phoneNumber}</span>
        </div>
        <div>
          <span className="font-bold text-gray-600">Date:</span>
          <span className="ml-2 text-gray-800">{formattedDate}</span>
        </div>
        <div>
          <span className="font-bold text-gray-600">Time:</span>
          <span className="ml-2 text-gray-800">{time}</span>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          to={`/viewrequests/${_id}`}
          className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg"
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
    //   <td className="border px-4 py-2 font-medium text-center ">{service}</td>
    //   <td className="border px-4 py-2 font-medium text-center"> {name}</td>
    //   <td className="border px-4 py-2 max-w-[250px] font-medium text-center">
    //     {address}
    //   </td>
    //   <td className="border px-4 py-2 font-medium text-center">
    //     {phoneNumber}
    //   </td>
    //   <td className="border px-4 py-2 font-medium text-center"> {date}</td>
    //   <td className="border px-4 py-2 font-medium text-center"> {time}</td>
    //   <td className="border px-4 py-2 font-medium text-center">
    //     <Link to={`/viewrequests/${_id}`}>
    //       <button className="p-1 pr-2 pl-2 m-2 hover:bg-green-700">
    //         Update
    //       </button>
    //     </Link>
    //     <button
    //       className="p-1 pr-2 pl-2 m-2 bg-red-600 hover:bg-red-700"
    //       onClick={deleteHandler}
    //     >
    //       Remove
    //     </button>
    //   </td>
    // </tr>

    // <div>
    //   {/* <RequestNav /> */}
    //   <br></br>
    //   <h1>ID:{_id}</h1>
    //   <h1>Service:{service}</h1>
    //   <h1>Name:{name}</h1>
    //   <h1>Address:{address}</h1>
    //   <h1>Phone Number:{phoneNumber}</h1>
    //   <h1>Date:{date}</h1>
    //   <h1>Time:{time}</h1>
    //   <Link to={`/viewrequests/${_id}`}>Update</Link>
    //   <button>Delete</button>
    //   <br></br><br></br><br></br><br></br>
    // </div>
  );
}

export default Request;
