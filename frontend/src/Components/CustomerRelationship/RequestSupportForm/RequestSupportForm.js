import React, {useState} from 'react'
// import './RequestSupportForm.css'
import CrmNav from '../CrmNav/CrmNav'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function RequestSupportForm() {

  const history = useNavigate();
    const [inputs, setInputs] = useState({
      additonalServices:"",
      name:"",
      email:"",
      address:"",
      city:"",
      subject:"",
      message:"",
      
    });

    const handleChange = (e) => {
      setInputs((prevState)=>({
          ...prevState,
          [e.target.name]: e.target.value
      }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(()=>history('SupportDisplay'));
    }

    const sendRequest = async () => {
      await axios.post('http://localhost:5001/support',{
        additonalServices: String(inputs.additonalServices),
        name: String(inputs.name),
        email: String(inputs.email),
        address: String(inputs.address),
        city: String(inputs.city),
        subject: String(inputs.subject),
        message: String(inputs.message), 
      }).then(res =>res.data);
      }

  return (
    <div className="form-container">
          <CrmNav/>
          <h1>Request Support</h1>
          <form onSubmit={handleSubmit}>
          <p>HOW CAN WE HELP YOU?</p>
          <p>CHOOSE FROM THE OPTION BELOW :</p>
          <h2>Additional Services</h2>
            <div className="checkbox-group">
              <label><input type="checkbox" name="additonalServices" onChange={handleChange} value={inputs.additonalServices}/> Start New Account</label>
              <label><input type="checkbox" name="additonalServices" onChange={handleChange} value={inputs.additonalServices}/> Bulky Item Pickup</label>
              <label><input type="checkbox" name="additonalServices" onChange={handleChange} value={inputs.additonalServices}/> Request Extra Pickup</label>
              <label><input type="checkbox" name="additonalServices" onChange={handleChange} value={inputs.additonalServices}/> Update Your Information</label>
              <label><input type="checkbox" name="additonalServices" onChange={handleChange} value={inputs.additonalServices}/> Replace Container</label>
              <label><input type="checkbox" name="additonalServices" onChange={handleChange} value={inputs.additonalServices}/> Other</label>
            </div>
            <div className="input-group">
              <input type="text" name="name" placeholder="Full Name *" onChange={handleChange} value={inputs.name} required/>
              <input type="text" name="email" placeholder="Email *" onChange={handleChange} value={inputs.email} required/>
              <input type="text" name="address" placeholder="Address *" onChange={handleChange} value={inputs.address} required/>
              <input type="text" name="city" placeholder="City *" onChange={handleChange} value={inputs.city} required/>
              {/* <input type="text" placeholder="Account ID *" /> */}
              <input type="text" name="subject" placeholder="Subject *"  onChange={handleChange} value={inputs.subject} />
            </div>
            <textarea placeholder="message" name="message" rows="4" onChange={handleChange} value={inputs.message} required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
  )
}

export default RequestSupportForm
