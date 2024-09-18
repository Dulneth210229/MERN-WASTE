import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
  

function ComplainDisplay(props) {
  const {_id, fullName, email, address, complainCategory, description, attachements  } = props.complain;

const history = useNavigate();

const deleteHandler = async () => {
  await axios.delete(`http://localhost:5001/complain/${_id}`)
  .then(res => res.data)
  .then(()=>history("/"))
  .then(()=>history("/ComplainDisplay"))
}

  return (

    <div className="flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-6xl">
    <table className="w-auto mx-auto m-1 table-auto border-collapse">
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
    </table>
  </div>
</div>


    // <div>
    //   <h1>ComplainDisplay</h1>
    //   <br></br>
    //   <h1>ID:{_id}</h1>
    //   <h1>fullName:{fullName}</h1>
    //   <h1>email:{email}</h1>
    //   <h1>address:{address}</h1>
    //   <h1>complainCategory:{complainCategory}</h1>
    //   <h1>description:{description}</h1>
    //   <h1>attachements:{attachements}</h1>
    //   <Link to={`/complaindisplay/${_id}`}>Update</Link>
    //   <button onClick={deleteHandler}>Delete</button>

    // </div>
  )
}

export default ComplainDisplay

