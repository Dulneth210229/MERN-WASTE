import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UpdateComplain() {
  const [inputs, setInputs] = useState({});
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5001/complain/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.complain));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5001/complain/${id}`, {
        name: String(inputs.name),
        email: String(inputs.email),
        address: String(inputs.address),
        complainCategory: String(inputs.complainCategory),
        description: String(inputs.description),
        attachments: String(inputs.attachments),
      })
      .then((res) => res.data);
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
                history("/ComplainDisplay"));
            };
            
            return (
                <div>
                  <h1 className="text-center mt-5 font-semibold text-slate-800 ">
                Make Complain
                </h1>
                <hr className="border-2" />
            
                  <body class="flex items-center justify-center min-h-screen bg-gray-100">
                    <div class="bg-green-200 p-8 rounded-lg shadow-md w-full max-w-lg">
                      <h2 class="text-2xl font-semibold mb-6">Make Complain</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-4">
                          <label for="Full Name" class="block text-gray-700 mb-2">
                          Full Name
                          </label>
                          <input
                            name="name"
                            onChange={handleChange}
                            required
                            value={inputs.fullName}
                            placeholder="Your name..."
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                        </input>
                        </div>
            
                        <div class="mb-4">
                          <label for="email" class="block text-gray-700 mb-2">
                            Enter your Email
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
                            placeholder="Your email..."
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                          />
                        </div>
        
        
                    <div class="mb-4">
                      <label for="complain category" class="block text-gray-700 mb-2">
                        Select Complain Category
                      </label>
                      <select
                        name="complainCategory"
                        onChange={handleChange}
                        required
                        value={inputs.complainCategory}
                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                        <option>Bulky pickup</option>
                        <option>Rent a container</option>
                        <option>Hire a cleaner</option>
                      </select>
                    </div>
            
                        
            
                        <div class="mb-4">
                          <label for="description" class="block text-gray-700 mb-2">
                            Enter your Description
                          </label>
                          <input
                            type="text"
                            name="description"
                            onChange={handleChange}
                            required
                            value={inputs.description}
                            placeholder="Your Address..."
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                          />
                        </div>
            
                        <div class="flex space-x-4 mb-6">
                          <div class="flex-1">
                            <label for="attachements" class="block text-gray-700 mb-2">
                              Attachements
                            </label>
                            <input
                              type="test"
                              name="attachements"
                              onChange={handleChange}
                              required
                              value={inputs.attachements}
                              placeholder="Your City..."
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

export default UpdateComplain;
