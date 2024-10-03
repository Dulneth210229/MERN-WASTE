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

  // Validation patterns
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
  const namePattern = /^[A-Za-z\s]+$/; // Allows only letters and spaces
  const cityPattern = /^[A-Za-z\s]+$/; // Allows only letters and spaces

  // Real-time input handler with prevention of numbers in name and city fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    // For 'name' and 'city' fields, prevent numbers from being input
    if ((name === "name" || name === "city") && !/^[A-Za-z\s]*$/.test(value)) {
      return; // Do nothing if input contains numbers
    }

    // Update the input state if the input is valid
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Validate the input after the change
    validateField(name, value);
  };

  // Real-time validation function
  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value || !namePattern.test(value)) {
          error = "Full name must contain only letters and spaces.";
        }
        break;
      case "email":
        if (!value || !emailPattern.test(value)) {
          error = "Please provide a valid email.";
        }
        break;
      case "address":
        if (!value || value.length < 5) {
          error = "Address must be at least 5 characters long.";
        }
        break;
      case "city":
        if (!value || !cityPattern.test(value)) {
          error = "City must contain only letters and spaces.";
        }
        break;
      case "subject":
        if (!value || value.length < 5) {
          error = "Subject must be at least 5 characters long.";
        }
        break;
      case "message":
        if (!value || value.length < 10) {
          error = "Message must be at least 10 characters long.";
        }
        break;
      case "additonalServices":
        if (!value) {
          error = "Please select an additional service.";
        }
        break;
      default:
        break;
    }

    // Update errors state
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      console.log(inputs);
      sendRequest().then(() => history("/supportDisplay"));
    }
  };

  // Full validation before submission
  const validateInputs = () => {
    const fieldsToValidate = Object.keys(inputs);
    let valid = true;

    fieldsToValidate.forEach((field) => {
      validateField(field, inputs[field]);
      if (errors[field]) {
        valid = false;
      }
    });

    return valid;
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
      <body className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-green-200 p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-semibold mb-6">Request a Support</h2>
          <p>HOW CAN WE HELP YOU?</p>
          <p>CHOOSE FROM THE OPTION BELOW :</p>

          <form onSubmit={handleSubmit}>
            {/* Additional Services */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Additional Services</label>
              <select
                name="additonalServices"
                onChange={handleChange}
                value={inputs.additonalServices}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
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
                <span className="text-red-500">{errors.additonalServices}</span>
              )}
            </div>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Enter your name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={inputs.name}
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.name && <span className="text-red-500">{errors.name}</span>}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Enter your email</label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                value={inputs.email}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Enter your Address</label>
              <input
                type="text"
                name="address"
                onChange={handleChange}
                value={inputs.address}
                placeholder="Enter your Address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.address && <span className="text-red-500">{errors.address}</span>}
            </div>

            {/* City */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">City</label>
              <input
                type="text"
                name="city"
                onChange={handleChange}
                value={inputs.city}
                placeholder="Enter your city"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.city && <span className="text-red-500">{errors.city}</span>}
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                onChange={handleChange}
                value={inputs.subject}
                placeholder="Enter subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.subject && <span className="text-red-500">{errors.subject}</span>}
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                onChange={handleChange}
                value={inputs.message}
                placeholder="Enter your message"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.message && <span className="text-red-500">{errors.message}</span>}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </body>
      <UserFooter />
    </div>
  );
}

export default RequestSupportForm;




// import React, { useState } from "react";
// import CrmNav from '../CrmNav/CrmNav';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import UserHomeHeader from '../../UserHomePage/UserHomeHeader';
// import UserFooter from '../../UserHomePage/UserFooter';


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

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const validateInputs = () => {
//     const newErrors = {};
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
//     const namePattern = /^[A-Za-z\s]+$/;

//     // Name validation (must only contain letters and spaces)
//     if (!inputs.name || !namePattern.test(inputs.name)) {
//       newErrors.name = "Full name must contain only letters and spaces.";
//     }

//     // Email validation
//     if (!inputs.email || !emailPattern.test(inputs.email)) {
//       newErrors.email = "Please provide a valid email.";
//     }

//     // Address validation (minimum length of 5 characters)
//     if (!inputs.address || inputs.address.length < 5) {
//       newErrors.address = "Address must be at least 5 characters long.";
//     }

//     // City validation (must not be empty)
//     if (!inputs.city) {
//       newErrors.city = "City is required.";
//     }

//     // Subject validation (minimum length of 5 characters)
//     if (!inputs.subject || inputs.subject.length < 5) {
//       newErrors.subject = "Subject must be at least 5 characters long.";
//     }

//     // Message validation (minimum length of 10 characters)
//     if (!inputs.message || inputs.message.length < 10) {
//       newErrors.message = "Message must be at least 10 characters long.";
//     }

//     // Additional Services validation (must be selected)
//     if (!inputs.additonalServices) {
//       newErrors.additonalServices = "Please select an additional service.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateInputs()) {
//       console.log(inputs);
//       sendRequest().then(() => history("/supportDisplay"));
//     }
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

//   return (
//     <div>
//       <UserHomeHeader />
//       <CrmNav />
//       <body class="flex items-center justify-center min-h-screen bg-gray-100">
//         <div class="bg-green-200 p-8 rounded-lg shadow-md w-full max-w-lg">
//           <h2 class="text-2xl font-semibold mb-6">Request a Support</h2>
//           <p>HOW CAN WE HELP YOU?</p>
//           <p>CHOOSE FROM THE OPTION BELOW :</p>
          
//           <form onSubmit={handleSubmit}>
//             {/* Additional Services */}
//             <div class="mb-4">
//               <label class="block text-gray-700 mb-2">Additional Services</label>
//               <select
//                 name="additonalServices"
//                 onChange={handleChange}
//                 value={inputs.additonalServices}
//                 class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//               >
//                 <option value="">Select a service</option>
//                 <option>Start New Account</option>
//                 <option>Bulky Item Pickup</option>
//                 <option>Request Extra Pickup</option>
//                 <option>Update Your Information</option>
//                 <option>Replace Container</option>
//                 <option>Other</option>
//               </select>
//               {errors.additonalServices && (
//                 <span class="text-red-500">{errors.additonalServices}</span>
//               )}
//             </div>

//             {/* Name */}
//             <div class="mb-4">
//               <label class="block text-gray-700 mb-2">Enter your name</label>
//               <input
//                 type="text"
//                 name="name"
//                 onChange={handleChange}
//                 value={inputs.name}
//                 placeholder="Enter your name"
//                 class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//               />
//               {errors.name && <span class="text-red-500">{errors.name}</span>}
//             </div>

//             {/* Email */}
//             <div class="mb-4">
//               <label class="block text-gray-700 mb-2">Enter your email</label>
//               <input
//                 type="text"
//                 name="email"
//                 onChange={handleChange}
//                 value={inputs.email}
//                 placeholder="Enter your email"
//                 class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//               />
//               {errors.email && <span class="text-red-500">{errors.email}</span>}
//             </div>

//             {/* Address */}
//             <div class="mb-4">
//               <label class="block text-gray-700 mb-2">Enter your Address</label>
//               <input
//                 type="text"
//                 name="address"
//                 onChange={handleChange}
//                 value={inputs.address}
//                 placeholder="Enter your Address"
//                 class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//               />
//               {errors.address && (
//                 <span class="text-red-500">{errors.address}</span>
//               )}
//             </div>

//             {/* City */}
//             <div class="mb-4">
//               <label class="block text-gray-700 mb-2">City</label>
//               <input
//                 type="text"
//                 name="city"
//                 onChange={handleChange}
//                 value={inputs.city}
//                 placeholder="Enter your city"
//                 class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//               />
//               {errors.city && <span class="text-red-500">{errors.city}</span>}
//             </div>

//             {/* Subject */}
//             <div class="mb-4">
//               <label class="block text-gray-700 mb-2">Subject</label>
//               <input
//                 type="text"
//                 name="subject"
//                 onChange={handleChange}
//                 value={inputs.subject}
//                 placeholder="Subject of your message"
//                 class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//               />
//               {errors.subject && (
//                 <span class="text-red-500">{errors.subject}</span>
//               )}
//             </div>

//             {/* Message */}
//             <div class="mb-4">
//               <label class="block text-gray-700 mb-2">Enter Message</label>
//               <textarea
//                 name="message"
//                 onChange={handleChange}
//                 value={inputs.message}
//                 placeholder="Write your message here..."
//                 class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//                 rows="4"
//               ></textarea>
//               {errors.message && (
//                 <span class="text-red-500">{errors.message}</span>
//               )}
//             </div>

//             <button
//               type="submit"
//               class="w-full bg-green-700 text-white py-2 rounded-md shadow-md hover:bg-green-800"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </body>
//       <UserFooter/>
//     </div>
//   );
// }

// export default RequestSupportForm;




