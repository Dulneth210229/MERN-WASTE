import React from "react";
import { Link } from "react-router-dom";
// import RequestNav from '../RequestNav/RequestNav'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Request(props) {
  const { _id, service, name, address, phoneNumber, date, time } =
    props.request;

  //delete request
  const history = useNavigate();

  const deleteHandler = async () => {
    await axios
      .delete(`http://Localhost:5001/request/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/viewrequests"));
  };

  return (
    <tr className="p-3 bg-green-100">
      <td className="border px-4 py-2 font-medium text-center ">{service}</td>
      <td className="border px-4 py-2 font-medium text-center"> {name}</td>
      <td className="border px-4 py-2 max-w-[250px] font-medium text-center">
        {address}
      </td>
      <td className="border px-4 py-2 font-medium text-center">
        {phoneNumber}
      </td>
      <td className="border px-4 py-2 font-medium text-center"> {date}</td>
      <td className="border px-4 py-2 font-medium text-center"> {time}</td>
      <td className="border px-4 py-2 font-medium text-center">
        <Link to={`/viewrequests/${_id}`}>
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
