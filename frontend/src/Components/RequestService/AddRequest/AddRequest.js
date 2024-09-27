import React, { useState } from "react";
import RequestNav from "../RequestNav/RequestNav";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserFooter from "../../UserHomePage/UserFooter";
import UserHomeHeader from "../../UserHomePage/UserHomeHeader";

function AddRequest() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    service: "",
    name: "",
    address: "",
    phoneNumber: "",
    date: "",
    time: "",
  });

  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      // Check if the input contains numeric or special characters
      if (/[^a-zA-Z\s]/.test(value)) {
        setNameErrorMessage(
          "Please enter only alphabetic characters and spaces."
        );
      } else {
        setNameErrorMessage(""); // Clear the error message when valid input is entered
      }

      // Remove any invalid characters
      const alphabeticValue = value.replace(/[^a-zA-Z\s]/g, "");
      setInputs((prevState) => ({
        ...prevState,
        [name]: alphabeticValue,
      }));
    } else {
      setInputs((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handlePhoneInput = (e) => {
    const value = e.target.value;

    // Check if the input contains non-numeric characters
    if (/\D/.test(value)) {
      setPhoneErrorMessage("Please enter only numeric values.");
    } else {
      setPhoneErrorMessage(""); // Clear the error message when valid input is entered
    }

    // Remove all non-numeric characters
    const numericValue = value.replace(/\D/g, "");
    setInputs((prevState) => ({
      ...prevState,
      phoneNumber: numericValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(inputs.phoneNumber)) {
      setPhoneErrorMessage("Please enter a valid 10-digit phone number.");
      return;
    }
    console.log(inputs);
    await sendRequest();
    history("/requestDetailsUser");
  };

  const sendRequest = async () => {
    await axios
      .post("http://Localhost:5001/request", {
        service: String(inputs.service),
        name: String(inputs.name),
        address: String(inputs.address),
        phoneNumber: String(inputs.phoneNumber),
        date: String(inputs.date),
        time: String(inputs.time),
      })
      .then((res) => res.data);
  };

  return (
    <div>
      <UserHomeHeader />
      <div className="bg-gray-100 p-3">
        <RequestNav />
      </div>

      <body class="flex items-center justify-center pt-24 bg-gray-100">
        <div class="bg-white p-8 rounded-2xl shadow-md w-full max-w-4xl mb-32">
          <h2 class="text-2xl font-semibold mb-6">Request a Special Service</h2>
          <form onSubmit={handleSubmit}>
            {/* Service Selection */}
            <div class="mb-4">
              <label for="service" class="block text-gray-700 mb-2">
                Select service
              </label>
              <select
                name="service"
                onChange={handleChange}
                required
                value={inputs.service}
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              >
                <option>Bulky pickup</option>
                <option>Rent a container</option>
                <option>Hire a cleaner</option>
              </select>
            </div>

            {/* Name Input with Error Message */}
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
              {nameErrorMessage && (
                <p class="text-red-500 mt-2 text-sm">{nameErrorMessage}</p>
              )}
            </div>

            {/* Address Input */}
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

            {/* Phone Number Input with Error Message */}
            <div class="mb-4">
              <label for="phone" class="block text-gray-700 mb-2">
                Enter your phone number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                onChange={handlePhoneInput}
                required
                value={inputs.phoneNumber}
                placeholder="Your phone number..."
                inputMode="numeric"
                pattern="\d*"
                maxLength="10"
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
              {phoneErrorMessage && (
                <p class="text-red-500 mt-2 text-sm">{phoneErrorMessage}</p>
              )}
            </div>

            {/* Date and Time Inputs */}
            <div class="flex space-x-4 mb-6">
              <div class="flex-1">
                <label for="date" class="block text-gray-700 mb-2">
                  Select date
                </label>
                <input
                  type="date"
                  name="date"
                  onChange={handleChange}
                  required
                  value={inputs.date}
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div class="flex-1">
                <label for="time" class="block text-gray-700 mb-2">
                  Enter time
                </label>
                <input
                  type="time"
                  name="time"
                  onChange={handleChange}
                  required
                  value={inputs.time}
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              class="w-full bg-green-700 text-white py-2 rounded-md shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
        </div>
      </body>
      <UserFooter />
    </div>
  );
}

export default AddRequest;

// import React, { useState } from "react";
// import RequestNav from "../RequestNav/RequestNav";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import UserFooter from "../../UserHomePage/UserFooter";
// import UserHomeHeader from "../../UserHomePage/UserHomeHeader";
// // import { Link } from "react-router-dom";
// // import "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";

// function AddRequest() {
//   const history = useNavigate();
//   const [inputs, setInputs] = useState({
//     service: "",
//     name: "",
//     address: "",
//     phoneNumber: "",
//     date: "",
//     time: "",
//   });

//   // const handleChange = (e) => {
//   //   setInputs((prevState) => ({
//   //     ...prevState,
//   //     [e.target.name]: e.target.value,
//   //   }));
//   // };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
  
//     if (name === "name") {
//       // Check if the input contains numeric or special characters
//       if (/[^a-zA-Z\s]/.test(value)) {
//         alert("Please enter only alphabetic characters and spaces for the name.");
//       }
  
//       // Allow only letters and spaces for the name field
//       const alphabeticValue = value.replace(/[^a-zA-Z\s]/g, "");
//       setInputs((prevState) => ({
//         ...prevState,
//         [name]: alphabeticValue,
//       }));
//     } else {
//       setInputs((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };

//   // const handlePhoneInput = (e) => {
//   //   const value = e.target.value;
//   //   const numericValue = value.replace(/\D/g, "");
//   //   setInputs((prevState) => ({
//   //     ...prevState,
//   //     phoneNumber: numericValue,
//   //   }));
//   // };

//   const handlePhoneInput = (e) => {
//   const value = e.target.value;

//   // Check if the input contains non-numeric characters
//   if (/\D/.test(value)) {
//     alert("Please enter only numeric values for the phone number.");
//   }

//   // Remove all non-numeric characters
//   const numericValue = value.replace(/\D/g, "");
//   setInputs((prevState) => ({
//     ...prevState,
//     phoneNumber: numericValue,
//   }));
// };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const phonePattern = /^\d{10}$/;
//     if (!phonePattern.test(inputs.phoneNumber)) {
//       alert("Please enter a valid 10-digit phone number.");
//       return;
//     }
//     console.log(inputs);
//     await sendRequest();
//     history("/requestDetailsUser");
//   };

//   const sendRequest = async () => {
//     await axios
//       .post("http://Localhost:5001/request", {
//         service: String(inputs.service),
//         name: String(inputs.name),
//         address: String(inputs.address),
//         phoneNumber: String(inputs.phoneNumber),
//         date: String(inputs.date),
//         time: String(inputs.time),
//       })
//       .then((res) => res.data);
//   };

//   return (
//     <div>
//       <UserHomeHeader />
//       {/* <div className="flex justify-between items-center mt-2"> */}
//       {/* <h1 className="text-4xl pr- font-bold text-gray-800 flex-grow text-center">
//               Request a Special Service
//             </h1> */}
//       <div className="bg-gray-100 p-3">
//         <RequestNav />
//       </div>
//       {/* <Link to="/addrequest">
//               <button className="px-6 py-2 mr-44 bg-green-700 text-white rounded-full shadow hover:bg-green-800 transition duration-200">
//               Add New Request
//               </button>
//               </Link> */}
//       {/* </div> */}
//       {/* <RequestNav /> */}
//       <body class="flex items-center justify-center pt-24 bg-gray-100">
//         <div class="bg-white p-8 rounded-2xl shadow-md w-full max-w-4xl mb-32">
//           <h2 class="text-2xl font-semibold mb-6">Request a Special Service</h2>
//           <form onSubmit={handleSubmit}>
//             <div class="mb-4">
//               <label for="service" class="block text-gray-700 mb-2">
//                 Select service
//               </label>
//               <select
//                 name="service"
//                 onChange={handleChange}
//                 required
//                 value={inputs.service}
//                 class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//               >
//                 <option>Bulky pickup</option>
//                 <option>Rent a container</option>
//                 <option>Hire a cleaner</option>
//               </select>
//             </div>

//             <div class="mb-4">
//               <label for="name" class="block text-gray-700 mb-2">
//                 Enter your name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 onChange={handleChange}
//                 required
//                 value={inputs.name}
//                 placeholder="Your name..."
//                 class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//               />
//             </div>

//             <div class="mb-4">
//               <label for="address" class="block text-gray-700 mb-2">
//                 Enter your address
//               </label>
//               <input
//                 type="text"
//                 name="address"
//                 onChange={handleChange}
//                 required
//                 value={inputs.address}
//                 placeholder="Your address..."
//                 class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//               />
//             </div>

//             <div class="mb-4">
//               <label for="phone" class="block text-gray-700 mb-2">
//                 Enter your phone number
//               </label>
//               <input
//                 type="tel"
//                 name="phoneNumber"
//                 onChange={handlePhoneInput}
//                 required
//                 value={inputs.phoneNumber}
//                 placeholder="Your phone number..."
//                 inputMode="numeric"
//                 pattern="\d*"
//                 maxLength="10"
//                 class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//               />
//             </div>

//             <div class="flex space-x-4 mb-6">
//               <div class="flex-1">
//                 <label for="date" class="block text-gray-700 mb-2">
//                   Select date
//                 </label>
//                 <input
//                   type="date"
//                   name="date"
//                   onChange={handleChange}
//                   required
//                   value={inputs.date}
//                   class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                 />
//               </div>
//               <div class="flex-1">
//                 <label for="time" class="block text-gray-700 mb-2">
//                   Enter time
//                 </label>
//                 <input
//                   type="time"
//                   name="time"
//                   onChange={handleChange}
//                   required
//                   value={inputs.time}
//                   class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               class="w-full bg-green-700 text-white py-2 rounded-md shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </body>

//       {/* <form>
//         <label>Service</label>
//         <input
//           type="text"
//           name="service"
//           required
//           value={inputs.service}
//           onChange={(e) => setInputs({ ...inputs, service: e.target.value })}
//         />
//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           required
//           value={inputs.name}
//           onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
//         />
//         <label>Address</label>
//         <input
//           type="text"
//           name="address"
//           required
//           value={inputs.address}
//           onChange={(e) => setInputs({ ...inputs, address: e.target.value })}
//         />
//         <label>Phone Number</label>
//         <input
//           type="text"
//           name="phoneNumber"
//           required
//           value={inputs.phoneNumber}
//           onChange={(e) =>
//             setInputs({ ...inputs, phoneNumber: e.target.value })
//           }
//         />
//         <label>Date</label>
//         <input
//           type="text"
//           name="date"
//           required
//           value={inputs.date}
//           onChange={(e) => setInputs({ ...inputs, date: e.target.value })}
//         />
//         <label>Time</label>
//         <input
//           type="text"
//           name="time"
//           required
//           value={inputs.time}
//           onChange={(e) => setInputs({ ...inputs, time: e.target.value })}
//         />
//         <button
//           onClick={() => {
//             fetch("http://localhost:5001/request", {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify(inputs),
//             }).then(() => {
//               history("/request");
//             });
//           }}
//         >
//           Add Request
//         </button>
//       </form> */}
//       <UserFooter />
//     </div>
//   );
// }

// export default AddRequest;

// // import React, { useState } from "react";
// // import RequestNav from "../RequestNav/RequestNav";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import UserFooter from "../../UserHomePage/UserFooter";
// // import { GoogleMap, useJsApiLoader, Autocomplete } from "@react-google-maps/api";

// // const libraries = ['places'];

// // function AddRequest() {
// //   const history = useNavigate();
// //   const [inputs, setInputs] = useState({
// //     service: "",
// //     name: "",
// //     address: "",
// //     phoneNumber: "",
// //     date: "",
// //     time: "",
// //   });

// //   const [autocomplete, setAutocomplete] = useState(null);
// //   const [mapLoaded, setMapLoaded] = useState(false);

// //   const { isLoaded } = useJsApiLoader({
// //     googleMapsApiKey: "YOUR_API_KEY", // Replace with your Google Maps API Key
// //     libraries,
// //   });

// //   const handleChange = (e) => {
// //     setInputs((prevState) => ({
// //       ...prevState,
// //       [e.target.name]: e.target.value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     console.log(inputs);
// //     await sendRequest();
// //     history("/viewrequests");
// //   };

// //   const sendRequest = async () => {
// //     await axios
// //       .post("http://Localhost:5001/request", {
// //         service: String(inputs.service),
// //         name: String(inputs.name),
// //         address: String(inputs.address),
// //         phoneNumber: String(inputs.phoneNumber),
// //         date: String(inputs.date),
// //         time: String(inputs.time),
// //       })
// //       .then((res) => res.data);
// //   };

// //   const onLoad = (autocompleteInstance) => {
// //     setAutocomplete(autocompleteInstance);
// //   };

// //   const onPlaceChanged = () => {
// //     if (autocomplete !== null) {
// //       const place = autocomplete.getPlace();
// //       setInputs((prevState) => ({
// //         ...prevState,
// //         address: place.formatted_address || place.name, // Use the formatted address or place name
// //       }));
// //     } else {
// //       console.log("Autocomplete is not loaded yet!");
// //     }
// //   };

// //   return (
// //     <div>
// //       <RequestNav />
// //       <h1>Add Request</h1>

// //       <div className="flex items-center justify-center min-h-screen bg-gray-100">
// //         <div className="bg-green-200 p-8 rounded-lg shadow-md w-full max-w-lg">
// //           <h2 className="text-2xl font-semibold mb-6">Request a Special Service</h2>

// //           <form onSubmit={handleSubmit}>
// //             <div className="mb-4">
// //               <label htmlFor="service" className="block text-gray-700 mb-2">
// //                 Select service
// //               </label>
// //               <select
// //                 name="service"
// //                 onChange={handleChange}
// //                 required
// //                 value={inputs.service}
// //                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
// //               >
// //                 <option>Bulky pickup</option>
// //                 <option>Rent a container</option>
// //                 <option>Hire a cleaner</option>
// //               </select>
// //             </div>

// //             <div className="mb-4">
// //               <label htmlFor="name" className="block text-gray-700 mb-2">
// //                 Enter your name
// //               </label>
// //               <input
// //                 type="text"
// //                 name="name"
// //                 onChange={handleChange}
// //                 required
// //                 value={inputs.name}
// //                 placeholder="Your name..."
// //                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
// //               />
// //             </div>

// //             <div className="mb-4">
// //               <label htmlFor="address" className="block text-gray-700 mb-2">
// //                 Enter your address
// //               </label>
// //               {isLoaded && (
// //                 <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
// //                   <input
// //                     type="text"
// //                     name="address"
// //                     onChange={handleChange}
// //                     required
// //                     value={inputs.address}
// //                     placeholder="Your address..."
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
// //                   />
// //                 </Autocomplete>
// //               )}
// //             </div>

// //             <div className="mb-4">
// //               <label htmlFor="phone" className="block text-gray-700 mb-2">
// //                 Enter your phone number
// //               </label>
// //               <input
// //                 type="tel"
// //                 name="phoneNumber"
// //                 onChange={handleChange}
// //                 required
// //                 value={inputs.phoneNumber}
// //                 placeholder="Your phone number..."
// //                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
// //               />
// //             </div>

// //             <div className="flex space-x-4 mb-6">
// //               <div className="flex-1">
// //                 <label htmlFor="date" className="block text-gray-700 mb-2">
// //                   Select date
// //                 </label>
// //                 <input
// //                   type="date"
// //                   name="date"
// //                   onChange={handleChange}
// //                   required
// //                   value={inputs.date}
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
// //                 />
// //               </div>
// //               <div className="flex-1">
// //                 <label htmlFor="time" className="block text-gray-700 mb-2">
// //                   Enter time
// //                 </label>
// //                 <input
// //                   type="time"
// //                   name="time"
// //                   onChange={handleChange}
// //                   required
// //                   value={inputs.time}
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
// //                 />
// //               </div>
// //             </div>

// //             <button
// //               type="submit"
// //               className="w-full bg-green-700 text-white py-2 rounded-md shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
// //             >
// //               Submit
// //             </button>
// //           </form>
// //         </div>
// //       </div>

// //       <UserFooter />
// //     </div>
// //   );
// // }

// // export default AddRequest;
