import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function UpdateRequestSupport() {

    const[inputs, setInputs] = useState({});
    const history = useNavigate();
    const id = useParams().id;

    useEffect(() =>{
        const fetchHandler = async ()=>{
            await axios
            .get(`http://localhost:5001/support/${id}`)
            .then((res)=> res.data)
            .then((data)=> setInputs(data.support))
        };
        fetchHandler();
    },[id]);

    const sendRequest = async () => {
        await axios
        .put(`http://localhost:5001/support/${id}`,{
        additonalServices: String(inputs.additonalServices),
        name: String(inputs.name),
        email: String(inputs.email),
        address: String(inputs.address),
        city: String(inputs.city),
        subject: String(inputs.subject),
        message: String(inputs.message), 
        })
        .then(res =>res.data);
        };

        const handleChange = (e) => {
            setInputs((prevState)=>({
                ...prevState,
                [e.target.name]: e.target.value,
            }));
            };
    
            const handleSubmit = (e) => {
                e.preventDefault();
                console.log(inputs);
                sendRequest().then(()=>
                history("/SupportDisplay"));
            };   

  return (
    <div>
      <h1>Update support</h1>
      <form onSubmit={handleSubmit}>
          <p>HOW CAN WE HELP YOU?</p>
          <p>CHOOSE FROM THE OPTION BELOW :</p>
          <h2>Additional Services</h2>
            <div className="checkbox-group">
              <label><input type="checkbox" onChange={handleChange} value={inputs.additonalServices} /> Start New Account</label>
              <label><input type="checkbox" onChange={handleChange} value={inputs.additonalServices} /> Bulky Item Pickup</label>
              <label><input type="checkbox" onChange={handleChange} value={inputs.additonalServices} /> Request Extra Pickup</label>
              <label><input type="checkbox" onChange={handleChange} value={inputs.additonalServices} /> Update Your Information</label>
              <label><input type="checkbox" onChange={handleChange} value={inputs.additonalServices} /> Replace Container</label>
              <label><input type="checkbox" onChange={handleChange} value={inputs.additonalServices} /> Other</label>
            </div>
            <div className="input-group">
              <input type="text" name="name" placeholder="Full Name *" onChange={handleChange} value={inputs.name} required/>
              <input type="text" name="email"  placeholder="Email *" onChange={handleChange} value={inputs.email} required/>
              <input type="text" name="address" placeholder="Address *" onChange={handleChange} value={inputs.address} required/>
              <input type="text" name="city" placeholder="City *" onChange={handleChange} value={inputs.city} required/>
              {/* <input type="text" placeholder="Account ID *" /> */}
              <input type="text" name="subject" placeholder="Subject *"  onChange={handleChange} value={inputs.subject} />
            </div>
              {/* <input type="text"  placeholder="Subject *"  onChange={handleChange} value={inputs.subject} /> */}
              <textarea placeholder="Message" name="message"  rows="4" onChange={handleChange} value={inputs.message} required></textarea>
            <button type="submit">Submit</button>
          </form>
    </div>
  )
}

export default UpdateRequestSupport
