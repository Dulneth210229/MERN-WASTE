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
                <h1 className="text-center mt-5 font-semibold text-slate-800 ">
                Request Support
                </h1>
                <hr className="border-2" />
          
                <body class="flex items-center justify-center min-h-screen bg-gray-100">
                  <div class="bg-green-200 p-8 rounded-lg shadow-md w-full max-w-lg">
                    <h2 class="text-2xl font-semibold mb-6">Request a Support</h2>
                    <p>HOW CAN WE HELP YOU?</p>
                    <div>
                      <p>CHOOSE FROM THE OPTION BELOW :</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div class="mb-4">
                        <label for="Additional Services" class="block text-gray-700 mb-2">
                        Additional Services
                        </label>
                        <select
                          name="additonalServices"
                          onChange={handleChange}
                          required
                          value={inputs.additonalServices}
                          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                          <option>Start New Account</option>
                          <option>Bulky Item Pickup</option>
                          <option>Request Extra Pickup</option>
                          <option>Update Your Information</option>
                          <option>Replace Container</option>
                          <option>Other</option>
                        </select>
                      </div>
          
                      <div class="mb-4">
                        <label for="name" class="block text-gray-700 mb-2">
                          Enter your name
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
                        <label for="address" class="block text-gray-700 mb-2">
                          Enter your address
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
                          Enter your Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          onChange={handleChange}
                          required
                          value={inputs.address}
                          placeholder="Your Address..."
                          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
          
                      <div class="flex space-x-4 mb-6">
                        <div class="flex-1">
                          <label for="city" class="block text-gray-700 mb-2">
                            City
                          </label>
                          <input
                            type="city"
                            name="city"
                            onChange={handleChange}
                            required
                            value={inputs.city}
                            placeholder="Your City..."
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                          />
                        </div>
                      </div>
      
                      <div class="flex space-x-4 mb-6">
                        <div class="flex-1">
                          <label for="subject" class="block text-gray-700 mb-2">
                          subject
                          </label>
                          <input
                            type="subject"
                            name="subject"
                            onChange={handleChange}
                            required
                            value={inputs.subject}
                            placeholder="Your Subject..."
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                          />
                        </div>
                      </div>
      
                      <div class="flex space-x-4 mb-6">
                        <div class="flex-1">
                          <label for="message" class="block text-gray-700 mb-2">
                            Enter Messege
                          </label>
                          <input
                            type="message"
                            name="message"
                            onChange={handleChange}
                            required
                            value={inputs.message}
                            placeholder="Your Messege..."
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                          />
                        </div>
                        
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

export default UpdateRequestSupport
