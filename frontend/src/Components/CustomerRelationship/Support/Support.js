import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SupportDisplay(props) {
  const {
    _id,
    additonalServices,
    name,
    email,
    address,
    city,
    subject,
    message,
  } = props.support;

  const history = useNavigate();

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5001/support/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/SupportDisplay"));
  };

  return (
    <tr className="p-3 bg-green-100">
      <td className="border px-4 py-2 font-medium text-center ">
        {additonalServices}
      </td>
      <td className="border px-4 py-2 font-medium text-center"> {name}</td>
      <td className="border px-4 py-2 max-w-[250px] font-medium text-center">
        {email}
      </td>
      <td className="border px-4 py-2 font-medium text-center">{address}</td>
      <td className="border px-4 py-2 font-medium text-center"> {city}</td>
      <td className="border px-4 py-2 font-medium text-center"> {subject}</td>
      <td className="border px-4 py-2 font-medium text-center"> {message}</td>
      <td className="border px-4 py-2 font-medium text-center">
        <Link to={`/supportdisplay/${_id}`}>
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
  );
}

export default SupportDisplay;
