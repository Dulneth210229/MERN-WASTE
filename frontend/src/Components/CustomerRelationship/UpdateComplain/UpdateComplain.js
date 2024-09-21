import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateComplain() {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const history = useNavigate();
  const { id } = useParams();

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
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const validateInputs = () => {
    const newErrors = {};
    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    // Full Name validation
    if (!inputs.fullName || !namePattern.test(inputs.fullName)) {
      newErrors.fullName = "Full name must contain only letters and spaces.";
    }

    // Email validation
    if (!inputs.email || !emailPattern.test(inputs.email)) {
      newErrors.email = "Please provide a valid email.";
    }

    // Address validation
    if (!inputs.address || inputs.address.length < 5) {
      newErrors.address = "Address must be at least 5 characters long.";
    }

    // Complain category validation
    if (!inputs.complainCategory) {
      newErrors.complainCategory = "Please select a complaint category.";
    }

    // Description validation
    if (!inputs.description || inputs.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters long.";
    }

    // Attachments validation
    if (!inputs.attachements) {
      newErrors.attachements = "Please provide an attachment or a file URL.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      sendRequest().then(() => history("/ComplainDisplay"));
    }
  };

  return (
    <div>
      {/* <h1 className="text-center mt-5 font-semibold text-slate-800">
        Update Complain
      </h1>
      <hr className="border-2" /> */}

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-green-200 p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-semibold mb-6">Update Complain</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                onChange={handleChange}
                value={inputs.fullName}
                placeholder="Your name..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.fullName && (
                <span className="text-red-500">{errors.fullName}</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                value={inputs.email}
                placeholder="Your email..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                onChange={handleChange}
                value={inputs.address}
                placeholder="Your address..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.address && (
                <span className="text-red-500">{errors.address}</span>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="complainCategory"
                className="block text-gray-700 mb-2"
              >
                Select Complain Category
              </label>
              <select
                name="complainCategory"
                onChange={handleChange}
                value={inputs.complainCategory}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Select a category...</option>
                <option>Service Quality</option>
                <option>Timeliness of Waste Collections</option>
                <option>Staff Behavior</option>
                <option>Pricing</option>
                <option>Environmental Impact</option>
              </select>
              {errors.complainCategory && (
                <span className="text-red-500">{errors.complainCategory}</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 mb-2">
                Description
              </label>
              <input
                type="text"
                name="description"
                onChange={handleChange}
                value={inputs.description}
                placeholder="Describe your issue..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.description && (
                <span className="text-red-500">{errors.description}</span>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="attachements" className="block text-gray-700 mb-2">
                Attachments
              </label>
              <input
                type="text"
                name="attachements"
                onChange={handleChange}
                value={inputs.attachements}
                placeholder="Attach a file or link..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.attachements && (
                <span className="text-red-500">{errors.attachements}</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-md shadow-md hover:bg-green-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateComplain;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// function UpdateComplain() {
//   const [inputs, setInputs] = useState({});
//   const history = useNavigate();
//   const id = useParams().id;

//   useEffect(() => {
//     const fetchHandler = async () => {
//       await axios
//         .get(`http://localhost:5001/complain/${id}`)
//         .then((res) => res.data)
//         .then((data) => setInputs(data.complain));
//     };
//     fetchHandler();
//   }, [id]);

//   const sendRequest = async () => {
//     await axios
//       .put(`http://localhost:5001/complain/${id}`, {
//         name: String(inputs.name),
//         email: String(inputs.email),
//         address: String(inputs.address),
//         complainCategory: String(inputs.complainCategory),
//         description: String(inputs.description),
//         attachments: String(inputs.attachments),
//       })
//       .then((res) => res.data);
      
//   };

//         const handleChange = (e) => {
//             setInputs((prevState)=>({
//                 ...prevState,
//                 [e.target.name]: e.target.value,
//             }));
//             };

            
    
//             const handleSubmit = (e) => {
//                 e.preventDefault();
//                 console.log(inputs);
//                 sendRequest().then(()=>
//                 history("/ComplainDisplay"));
//             };
            
//             return (
//                 <div>
//                   <h1 className="text-center mt-5 font-semibold text-slate-800 ">
//                 Make Complain
//                 </h1>
//                 <hr className="border-2" />
            
//                   <body class="flex items-center justify-center min-h-screen bg-gray-100">
//                     <div class="bg-green-200 p-8 rounded-lg shadow-md w-full max-w-lg">
//                       <h2 class="text-2xl font-semibold mb-6">Make Complain</h2>

                      

//                     <form onSubmit={handleSubmit}>
//                         <div class="mb-4">
//                           <label for="Full Name" class="block text-gray-700 mb-2">
//                           Full Name
//                           </label>
//                           <input
//                             name="name"
//                             onChange={handleChange}
//                             required
//                             value={inputs.fullName}
//                             placeholder="Your name..."
//                             class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
//                         </input>
//                         </div>
            
//                         <div class="mb-4">
//                           <label for="email" class="block text-gray-700 mb-2">
//                             Enter your Email
//                           </label>
//                           <input
//                             type="text"
//                             name="email"
//                             onChange={handleChange}
//                             required
//                             value={inputs.email}
//                             placeholder="Your email..."
//                             class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                           />
//                         </div>
                        
//                         <div class="mb-4">
//                           <label for="address" class="block text-gray-700 mb-2">
//                             Enter your address
//                           </label>
//                           <input
//                             type="text"
//                             name="address"
//                             onChange={handleChange}
//                             required
//                             value={inputs.address}
//                             placeholder="Your email..."
//                             class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                           />
//                         </div>
        
        
//                     <div class="mb-4">
//                       <label for="complain category" class="block text-gray-700 mb-2">
//                         Select Complain Category
//                       </label>
//                       <select
//                         name="complainCategory"
//                         onChange={handleChange}
//                         required
//                         value={inputs.complainCategory}
//                         class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
//                         <option>Bulky pickup</option>
//                         <option>Rent a container</option>
//                         <option>Hire a cleaner</option>
//                       </select>
//                     </div>
            
                        
            
//                         <div class="mb-4">
//                           <label for="description" class="block text-gray-700 mb-2">
//                             Enter your Description
//                           </label>
//                           <input
//                             type="text"
//                             name="description"
//                             onChange={handleChange}
//                             required
//                             value={inputs.description}
//                             placeholder="Your Address..."
//                             class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                           />
//                         </div>
            
//                         <div class="flex space-x-4 mb-6">
//                           <div class="flex-1">
//                             <label for="attachements" class="block text-gray-700 mb-2">
//                               Attachements
//                             </label>
//                             <input
//                               type="test"
//                               name="attachements"
//                               onChange={handleChange}
//                               required
//                               value={inputs.attachements}
//                               placeholder="Your City..."
//                               class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                             />
//                           </div>
//                         </div>
        
//                     <button
//                           type="submit"
//                           class="w-full bg-green-700 text-white py-2 rounded-md shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
//                         >
//                           Submit
//                         </button>
//                       </form>
//                     </div>
//                   </body>
        
//                   </div>
//           );

//         }

// export default UpdateComplain;
