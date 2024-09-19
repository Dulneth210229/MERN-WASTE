import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function CategoryUpdateHza() {

    const [inputs, setInputs] = useState({});
    const history = useNavigate();
    const id = useParams().id;

    useEffect(() => {
        const fetchHandler = async ()=> {
            await axios
            .get(`http://Localhost:5001/category/${id}`)
            .then((res) => res.data)
            .then((data)=> setInputs(data.category));
        };
        fetchHandler();
    },[id]);

    const sendRequest = async () => {
        await axios.put(`http://Localhost:5001/category/${id}`, {
            WasteType: String (inputs.WasteType),
            Quantity: Number (inputs.Quantity),
            DateOfCollection: String (inputs.DateOfCollection),
            Location: String (inputs.Location),
            TransportMethod: String (inputs.TransportMethod),
            Notes: String (inputs.Notes),

        })
            .then((res) => res.data);

    };

    const handleChange =(e)=>{
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
  
      const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(()=> history('/categorydetailsHza'));
      };


  return (
    <div class="flex justify-center">
      <h1>Update Category</h1>

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
        <select type="text" name="TransportMethod" onChange={handleChange}  value={inputs.TransportMethod} required>
        <option>Garbage Truck</option>
        <option>Roll-Off Truck</option>
        <option>Dump Trailers</option>
        <option>Manual Collection (Bicycles, Handcarts)</option>
        <option>Vacuum Trucks</option>
        </select>
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
  )
}

export default CategoryUpdateHza
