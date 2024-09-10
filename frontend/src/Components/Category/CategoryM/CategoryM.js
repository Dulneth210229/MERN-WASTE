import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CategoryM(props) {
  const {_id ,WasteType,Quantity,DateOfCollection ,Location ,TransportMethod ,Notes } = props.catego;

  const history = useNavigate();

  const deleteHandler = async()=>{
    await axios.delete(`http://Localhost:5001/category/${_id}`)
    .then(res =>res.data)
    .then(() =>history("/"))
    .then(() =>history("/categorydetails"))
  }

  return (
    <div>
      
      <h1>User Display</h1>
      <br></br>
      <h1>ID:{_id}</h1>
      <h1>Waste Type:{WasteType}</h1>
      <h1>Quantity:{Quantity}</h1>
      <h1>Date Of Collection:{DateOfCollection}</h1>
      <h1>Location:{Location}</h1>
      <h1>Transport Method:{TransportMethod}</h1>
      <h1>Notes:{Notes}</h1>
      <Link to={`/categorydetails/${_id}`}>Update</Link>
      <button onClick={deleteHandler}>Delete</button>
      <br></br>
      <br></br>
      <br></br>
      
    </div>
  )
}

export default CategoryM
