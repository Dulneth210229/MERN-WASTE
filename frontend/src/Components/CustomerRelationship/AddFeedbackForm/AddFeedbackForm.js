import React, {useState} from 'react'
import CrmNav from '../CrmNav/CrmNav'
import {  useNavigate } from 'react-router-dom'
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
            sendRequest().then(()=>history('FeedbackDisplay'));
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
              <div>
                <CrmNav />
                <h1>Add Feedback</h1>
          
                <body class="flex items-center justify-center min-h-screen bg-gray-100">
                  <div class="bg-green-200 p-8 rounded-lg shadow-md w-full max-w-lg">
                    <h2 class="text-2xl font-semibold mb-6">Add Your Feedback</h2>
          
                    <form onSubmit={handleSubmit}>
                      <div class="mb-4">
                        <label for="Name" class="block text-gray-700 mb-2">
                          Enter Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          required
                          value={inputs.name}
                          placeholder="Your name..."
                          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
          
                      <div class="mb-4">
                        <label for="Email" class="block text-gray-700 mb-2">
                          Enter Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          onChange={handleChange}
                          required
                          value={inputs.email}
                          placeholder="Your email..."
                          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
          
                      <div class="mb-4">
                        <label for="address" class="block text-gray-700 mb-2">
                          Enter your address
                        </label>
                        <input
                          type="text"
                          name="address"
                          onChange={handleChange}
                          required
                          value={inputs.address}
                          placeholder="Your address..."
                          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
          
                      <div class="mb-4">
                        <label for="phone" class="block text-gray-700 mb-2">
                          Enter your phone number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          onChange={handleChange}
                          required
                          value={inputs.phone}
                          placeholder="Your phone number..."
                          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
          
                      <div class="flex space-x-4 mb-6">
                        <div class="flex-1">
                          <label for="rate" class="block text-gray-700 mb-2">
                            Give the rating
                          </label>
                          <input
                            type="rate"
                            name="rating"
                            onChange={handleChange}
                            required
                            value={inputs.rating}
                            placeholder="Give the rate..."
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                          />
                        </div>
                      </div>

                      <div class="mb-4">
                        <label for="comment" class="block text-gray-700 mb-2">
                          Enter your Comment
                        </label>
                        <input
                          type="comment"
                          name="comment"
                          onChange={handleChange}
                          required
                          value={inputs.comment}
                          placeholder="Your comment..."
                          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        class="w-full bg-green-700 text-white py-2 rounded-md shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                      >
                        Submit
                      </button>
                      
                    </form>
                  </div>
                </body>
                </div>
  ); 
}
export default AddFeedbackForm
