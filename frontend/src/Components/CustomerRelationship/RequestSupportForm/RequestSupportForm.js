import React, { useState } from "react";
import CrmNav from '../CrmNav/CrmNav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserHomeHeader from '../../UserHomePage/UserHomeHeader';
import UserFooter from '../../UserHomePage/UserFooter';


function RequestSupportForm() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    additonalServices: "",
    name: "",
    email: "",
    address: "",
    city: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const validateInputs = () => {
    const newErrors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const namePattern = /^[A-Za-z\s]+$/;

    // Name validation (must only contain letters and spaces)
    if (!inputs.name || !namePattern.test(inputs.name)) {
      newErrors.name = "Full name must contain only letters and spaces.";
    }

    // Email validation
    if (!inputs.email || !emailPattern.test(inputs.email)) {
      newErrors.email = "Please provide a valid email.";
    }

    // Address validation (minimum length of 5 characters)
    if (!inputs.address || inputs.address.length < 5) {
      newErrors.address = "Address must be at least 5 characters long.";
    }

    // City validation (must not be empty)
    if (!inputs.city) {
      newErrors.city = "City is required.";
    }

    // Subject validation (minimum length of 5 characters)
    if (!inputs.subject || inputs.subject.length < 5) {
      newErrors.subject = "Subject must be at least 5 characters long.";
    }

    // Message validation (minimum length of 10 characters)
    if (!inputs.message || inputs.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    // Additional Services validation (must be selected)
    if (!inputs.additonalServices) {
      newErrors.additonalServices = "Please select an additional service.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      console.log(inputs);
      sendRequest().then(() => history("/supportDisplay"));
    }
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5001/support", {
        additonalServices: String(inputs.additonalServices),
        name: String(inputs.name),
        email: String(inputs.email),
        address: String(inputs.address),
        city: String(inputs.city),
        subject: String(inputs.subject),
        message: String(inputs.message),
      })
      .then((res) => res.data);
  };

  return (
    <div>
      <UserHomeHeader />
      <CrmNav />
      <body class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-green-200 p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 class="text-2xl font-semibold mb-6">Request a Support</h2>
          <p>HOW CAN WE HELP YOU?</p>
          <p>CHOOSE FROM THE OPTION BELOW :</p>
          
          <form onSubmit={handleSubmit}>
            {/* Additional Services */}
            <div class="mb-4">
              <label class="block text-gray-700 mb-2">Additional Services</label>
              <select
                name="additonalServices"
                onChange={handleChange}
                value={inputs.additonalServices}
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Select a service</option>
                <option>Start New Account</option>
                <option>Bulky Item Pickup</option>
                <option>Request Extra Pickup</option>
                <option>Update Your Information</option>
                <option>Replace Container</option>
                <option>Other</option>
              </select>
              {errors.additonalServices && (
                <span class="text-red-500">{errors.additonalServices}</span>
              )}
            </div>

            {/* Name */}
            <div class="mb-4">
              <label class="block text-gray-700 mb-2">Enter your name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={inputs.name}
                placeholder="Enter your name"
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.name && <span class="text-red-500">{errors.name}</span>}
            </div>

            {/* Email */}
            <div class="mb-4">
              <label class="block text-gray-700 mb-2">Enter your email</label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                value={inputs.email}
                placeholder="Enter your email"
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.email && <span class="text-red-500">{errors.email}</span>}
            </div>

            {/* Address */}
            <div class="mb-4">
              <label class="block text-gray-700 mb-2">Enter your Address</label>
              <input
                type="text"
                name="address"
                onChange={handleChange}
                value={inputs.address}
                placeholder="Enter your Address"
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.address && (
                <span class="text-red-500">{errors.address}</span>
              )}
            </div>

            {/* City */}
            <div class="mb-4">
              <label class="block text-gray-700 mb-2">City</label>
              <input
                type="text"
                name="city"
                onChange={handleChange}
                value={inputs.city}
                placeholder="Enter your city"
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.city && <span class="text-red-500">{errors.city}</span>}
            </div>

            {/* Subject */}
            <div class="mb-4">
              <label class="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                onChange={handleChange}
                value={inputs.subject}
                placeholder="Subject of your message"
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.subject && (
                <span class="text-red-500">{errors.subject}</span>
              )}
            </div>

            {/* Message */}
            <div class="mb-4">
              <label class="block text-gray-700 mb-2">Enter Message</label>
              <textarea
                name="message"
                onChange={handleChange}
                value={inputs.message}
                placeholder="Write your message here..."
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                rows="4"
              ></textarea>
              {errors.message && (
                <span class="text-red-500">{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              class="w-full bg-green-700 text-white py-2 rounded-md shadow-md hover:bg-green-800"
            >
              Submit
            </button>
          </form>
        </div>
      </body>
      <UserFooter/>
    </div>
  );
}

export default RequestSupportForm;



// import React, { useState } from "react";
// // import './RequestSupportForm.css'
// import CrmNav from '../CrmNav/CrmNav'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

// function RequestSupportForm() {
//   const history = useNavigate();
//   const [inputs, setInputs] = useState({
//     additonalServices: "",
//     name: "",
//     email: "",
//     address: "",
//     city: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs);
//     sendRequest().then(() => history("/supportDisplay"));
//   };

//   const sendRequest = async () => {
//     await axios
//       .post("http://localhost:5001/support", {
//         additonalServices: String(inputs.additonalServices),
//         name: String(inputs.name),
//         email: String(inputs.email),
//         address: String(inputs.address),
//         city: String(inputs.city),
//         subject: String(inputs.subject),
//         message: String(inputs.message),
//       })
//       .then((res) => res.data);
//   };

//       return (
//         <div>
//           <CrmNav />
//           {/* <h1 className="text-center mt-5 font-semibold text-slate-800 ">
//                 Request Support
//                 </h1>
//                 <hr className="border-2" /> */}
    
//           <body class="flex items-center justify-center min-h-screen bg-gray-100">
//             <div class="bg-green-200 p-8 rounded-lg shadow-md w-full max-w-lg">
//               <h2 class="text-2xl font-semibold mb-6">Request a Support</h2>
//               <p>HOW CAN WE HELP YOU?</p>
//               <div>
//                 <p>CHOOSE FROM THE OPTION BELOW :</p>
//               </div>
//               <form onSubmit={handleSubmit}>
//                 <div class="mb-4">
//                   <label for="Additional Services" class="block text-gray-700 mb-2">
//                   Additional Services
//                   </label>
//                   <select
//                     name="additonalServices"
//                     onChange={handleChange}
//                     required
//                     value={inputs.additonalServices}
//                     class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
//                     <option>Start New Account</option>
//                     <option>Bulky Item Pickup</option>
//                     <option>Request Extra Pickup</option>
//                     <option>Update Your Information</option>
//                     <option>Replace Container</option>
//                     <option>Other</option>
//                   </select>
//                 </div>
    
//                 <div class="mb-4">
//                   <label for="name" class="block text-gray-700 mb-2">
//                     Enter your name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     onChange={handleChange}
//                     required
//                     value={inputs.name}
//                     placeholder="Your name..."
//                     class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                   />
//                 </div>
    
//                 <div class="mb-4">
//                   <label for="email" class="block text-gray-700 mb-2">
//                     Enter your email
//                   </label>
//                   <input
//                     type="text"
//                     name="email"
//                     onChange={handleChange}
//                     required
//                     value={inputs.email}
//                     placeholder="Your email..."
//                     class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                   />
//                 </div>
    
//                 <div class="mb-4">
//                   <label for="address" class="block text-gray-700 mb-2">
//                     Enter your Address
//                   </label>
//                   <input
//                     type="text"
//                     name="address"
//                     onChange={handleChange}
//                     required
//                     value={inputs.address}
//                     placeholder="Your Address..."
//                     class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                   />
//                 </div>
    
//                 <div class="flex space-x-4 mb-6">
//                   <div class="flex-1">
//                     <label for="city" class="block text-gray-700 mb-2">
//                       City
//                     </label>
//                     <input
//                       type="city"
//                       name="city"
//                       onChange={handleChange}
//                       required
//                       value={inputs.city}
//                       placeholder="Your City..."
//                       class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                     />
//                   </div>
//                 </div>

//             <div class="flex space-x-4 mb-6">
//               <div class="flex-1">
//                 <label for="subject" class="block text-gray-700 mb-2">
//                   subject
//                 </label>
//                 <input
//                   type="subject"
//                   name="subject"
//                   onChange={handleChange}
//                   required
//                   value={inputs.subject}
//                   placeholder="Your Subject..."
//                   class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                 />
//               </div>
//             </div>

//                 <div class="flex space-x-4 mb-6">
//                   <div class="flex-1">
//                     <label for="message" class="block text-gray-700 mb-2">
//                       Enter Messege
//                     </label>
//                     <input
//                       type="message"
//                       name="message"
//                       onChange={handleChange}
//                       required
//                       value={inputs.message}
//                       placeholder="Your Messege..."
//                       class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                     />
//                   </div>
                  
//                 </div>
//               <button
//                   type="submit"
//                   class="w-full bg-green-700 text-white py-2 rounded-md shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
//                 >
//                   Submit
//                 </button>
                
//               </form>
//             </div>
//           </body>

//           </div>
//   );

  
// }

// export default RequestSupportForm;
