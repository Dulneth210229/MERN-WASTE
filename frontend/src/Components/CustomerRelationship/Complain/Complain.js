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
          <tr className="p-3 bg-green-100">
            <td className="border px-4 py-2 font-medium text-center ">
              {fullName}
            </td>
            <td className="border px-4 py-2 font-medium text-center">
              {" "}
              {email}
            </td>
            <td className="border px-4 py-2 max-w-[250px] font-medium text-center">
              {address}
            </td>
            <td className="border px-4 py-2 font-medium text-center">
              {complainCategory}
            </td>
            <td className="border px-4 py-2 font-medium text-center">
              {" "}
              {description}
            </td>
            <td className="border px-4 py-2 font-medium text-center">
              {" "}
              {attachements}
            </td>
            <td className="border px-4 py-2 font-medium text-center">
              <Link to={`/complaindisplay/${_id}`}>
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

export default ComplainDisplay;
