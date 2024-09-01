import React, {useState} from 'react'
import CrmNav from '../CrmNav/CrmNav'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddFeedbackForm() {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
        comment: "",
        rating: "",
        
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
            sendRequest().then(()=>history('FeedbackDisplay_01'));
        }

        const sendRequest = async () => {
            await axios.post('http://localhost:5001/feedback',{
                name: String(inputs.name),
                email: String(inputs.email),
                address: String(inputs.address),
                phone: Number(inputs.phone),
                comment: String(inputs.comment),
                rating: Number(inputs.rating), 
            }).then(res =>res.data);
            }

  return (
  <div className="form-container">
    
    <div>
      <CrmNav/>
      <h1>Add Feedback</h1>
        <form onSubmit={handleSubmit}>
      <div className="input-group">
            <input type="text" name="name" placeholder="Full Name *" onChange={handleChange} value={inputs.name} required />
            <input type="email" name="email" placeholder="Email *" onChange={handleChange} value={inputs.email} required />
            <input type="text" name="address" placeholder="Address *" onChange={handleChange} value={inputs.address} required />
            <input type="tel" name="phone" placeholder="Phone No *" onChange={handleChange} value={inputs.phone} required />
            <input type="rating" name="rating" placeholder="Rate *" onChange={handleChange} value={inputs.rating} required />
          </div>        
          {/* <div className="feedback-category">
            <p>Feedback Category</p>
            <label><input type="radio" name="category" value="Service Quality"  required /> Service Quality</label>
            <label><input type="radio" name="category" value="Timeliness of Waste Collections" required /> Timeliness of Waste Collections</label>
            <label><input type="radio" name="category" value="Staff Behavior" required /> Staff Behavior</label>
            <label><input type="radio" name="category" value="Pricing" required /> Pricing</label>
            <label><input type="radio" name="category" value="Environmental Impact" required /> Environmental Impact</label>
          </div> */}
          <textarea placeholder="Comment" name="comment" rows="4" onChange={handleChange} value={inputs.comment} required></textarea>
          <button type="submit">Submit</button>
          </form>
    </div>
    </div>
    
  )
}


export default AddFeedbackForm
