import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function UpdateFeedback() {

    const[inputs, setInputs] = useState({});
    const history = useNavigate();
    const id = useParams().id;

    useEffect(() =>{
        const fetchHandler = async ()=>{
            await axios
            .get(`http://localhost:5001/feedback/${id}`)
            .then((res)=> res.data)
            .then((data)=> setInputs(data.feedback))
        };
        fetchHandler();
    },[id]);

    const sendRequest = async () => {
        await axios
        .put(`http://localhost:5001/feedback/${id}`,{
            name: String(inputs.name),
            email: String(inputs.email),
            address: String(inputs.address),
            phone: Number(inputs.phone),
            comment: String(inputs.comment),
            rating: Number(inputs.rating), 
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
                history("/FeedbackDisplay"));
            };
            
            return (
              <div>
                {/* <CrmNav /> */}
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

  // return (
  //   <div>
  //     <h1>Update feedback</h1>
  //     <form onSubmit={handleSubmit}>
  //     <div className="input-group">
  //           <input type="text" name="name" placeholder="Full Name *" onChange={handleChange} value={inputs.name} required />
  //           <input type="email" name="email" placeholder="Email *" onChange={handleChange} value={inputs.email} required />
  //           <input type="text" name="address" placeholder="Address *" onChange={handleChange} value={inputs.address} required />
  //           <input type="tel" name="phone" placeholder="Phone No *" onChange={handleChange} value={inputs.phone} required />
  //           <input type="rating" name="rating" placeholder="Rate *" onChange={handleChange} value={inputs.rating} required />
  //         </div>        
  //         {/* <div className="feedback-category">
  //           <p>Feedback Category</p>
  //           <label><input type="radio" name="category" value="Service Quality"  required /> Service Quality</label>
  //           <label><input type="radio" name="category" value="Timeliness of Waste Collections" required /> Timeliness of Waste Collections</label>
  //           <label><input type="radio" name="category" value="Staff Behavior" required /> Staff Behavior</label>
  //           <label><input type="radio" name="category" value="Pricing" required /> Pricing</label>
  //           <label><input type="radio" name="category" value="Environmental Impact" required /> Environmental Impact</label>
  //         </div> */}
  //         <textarea placeholder="Comment" name="comment" rows="4" onChange={handleChange} value={inputs.comment} required></textarea>
  //         <button type="submit">Submit</button>
  //         </form>
  //   </div>
  // )
}

export default UpdateFeedback
