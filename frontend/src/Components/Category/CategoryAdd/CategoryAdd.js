import React, { useState } from 'react';
import CategoryNav from "../CategoryNav/CategoryNav";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CategoryAdd() {

    const history = useNavigate();
    const [inputs,setInputs] = useState({
        WasteType:"",
        Quantity:"",
        DateOfCollection:"",
        Location:"",
        TransportMethod:"",
        Notes:"",
    });

    const handleChange =(e)=>{
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };

    const handleSubmit =(e)=>{
      e.preventDefault();
      console.log(inputs);
      sendRequest().then(()=> history('/categorydetails'));
    };

    const sendRequest = async() => {
      await axios.post("http://Localhost:5001/category",{
        WasteType: String (inputs.WasteType),
        Quantity: Number (inputs.Quantity),
        DateOfCollection: Number (inputs.DateOfCollection),
        Location: String (inputs.Location),
        TransportMethod: String (inputs.TransportMethod),
        Notes: String (inputs.Notes),

      }).then(res => res.data);
    };

  return (
    <div>
      <CategoryNav />
      <h1>Add Category</h1>
      <form onSubmit={handleSubmit}>
        <lable>WasteType</lable>
        <br />
        <input type="text" name="WasteType" onChange={handleChange} value={inputs.WasteType} required></input>
        <br></br>
        <br></br>
        <lable>Quantity</lable>
        <br />
        <input type="text" name="Quantity" onChange={handleChange}  value={inputs.Quantity} required></input>
        <br></br>
        <br></br>
        <lable>Date Of Collection</lable>
        <br />
        <input type="text" name="DateOfCollection" onChange={handleChange}  value={inputs.DateOfCollection} required></input>
        <br></br>
        <br></br>
        <lable>Location</lable>
        <br />
        <input type="text" name="Location" onChange={handleChange}  value={inputs.Location}required></input>
        <br></br>
        <br></br>
        <lable>Transport Method</lable>
        <br />
        <input type="text" name="TransportMethod" onChange={handleChange}  value={inputs.TransportMethod} required></input>
        <br></br>
        <br></br>
        <lable>Notes</lable>
        <br />
        <input type="text" name="Notes" onChange={handleChange}  value={inputs.Notes} required></input>
        <br></br>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CategoryAdd
