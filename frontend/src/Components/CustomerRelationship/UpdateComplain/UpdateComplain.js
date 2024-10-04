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
        fullName: String(inputs.fullName),
        email: String(inputs.email),
        address: String(inputs.address),
        complainCategory: String(inputs.complainCategory),
        description: String(inputs.description),
        attachments: String(inputs.attachments),
      })
      .then((res) => res.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate Full Name (only letters and spaces allowed)
    if (name === "fullName") {
      const namePattern = /^[A-Za-z\s]*$/;
      if (!namePattern.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          fullName: "Full name must contain only letters and spaces.",
        }));
        return; // Prevent invalid characters from being added to state
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          fullName: "",
        }));
      }
    }

    // Other validations remain the same

    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
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
              <label htmlFor="complainCategory" className="block text-gray-700 mb-2">
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
// import { useParams, useNavigate } from "react-router-dom";

// function UpdateComplain() {
//   const [inputs, setInputs] = useState({});
//   const [errors, setErrors] = useState({});
//   const history = useNavigate();
//   const { id } = useParams();

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

//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const validateInputs = () => {
//     const newErrors = {};
//     const namePattern = /^[A-Za-z\s]+$/;
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

//     // Full Name validation
//     if (!inputs.fullName || !namePattern.test(inputs.fullName)) {
//       newErrors.fullName = "Full name must contain only letters and spaces.";
//     }

//     // Email validation
//     if (!inputs.email || !emailPattern.test(inputs.email)) {
//       newErrors.email = "Please provide a valid email.";
//     }

//     // Address validation
//     if (!inputs.address || inputs.address.length < 5) {
//       newErrors.address = "Address must be at least 5 characters long.";
//     }

//     // Complain category validation
//     if (!inputs.complainCategory) {
//       newErrors.complainCategory = "Please select a complaint category.";
//     }

//     // Description validation
//     if (!inputs.description || inputs.description.length < 10) {
//       newErrors.description = "Description must be at least 10 characters long.";
//     }

//     // Attachments validation
//     if (!inputs.attachements) {
//       newErrors.attachements = "Please provide an attachment or a file URL.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateInputs()) {
//       sendRequest().then(() => history("/ComplainDisplay"));
//     }
//   };

//   return (
//     <div>
//       {/* <h1 className="text-center mt-5 font-semibold text-slate-800">
//         Update Complain
//       </h1>
//       <hr className="border-2" /> */}

//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="bg-green-200 p-8 rounded-lg shadow-md w-full max-w-lg">
//           <h2 className="text-2xl font-semibold mb-6">Update Complain</h2>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="fullName" className="block text-gray-700 mb-2">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="fullName"
//                 onChange={handleChange}
//                 value={inputs.fullName}
//                 placeholder="Your name..."
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//               />
//               {errors.fullName && (
//                 <span className="text-red-500">{errors.fullName}</span>
//               )}
//             </div>

//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-700 mb-2">
//                 Email
//               </label>
//               <input
//                 type="text"
//                 name="email"
//                 onChange={handleChange}
//                 value={inputs.email}
//                 placeholder="Your email..."
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//               />
//               {errors.email && (
//                 <span className="text-red-500">{errors.email}</span>
//               )}
//             </div>

//             <div className="mb-4">
//               <label htmlFor="address" className="block text-gray-700 mb-2">
//                 Address
//               </label>
//               <input
//                 type="text"
//                 name="address"
//                 onChange={handleChange}
//                 value={inputs.address}
//                 placeholder="Your address..."
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//               />
//               {errors.address && (
//                 <span className="text-red-500">{errors.address}</span>
//               )}
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="complainCategory"
//                 className="block text-gray-700 mb-2"
//               >
//                 Select Complain Category
//               </label>
//               <select
//                 name="complainCategory"
//                 onChange={handleChange}
//                 value={inputs.complainCategory}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//               >
//                 <option value="">Select a category...</option>
//                 <option>Service Quality</option>
//                 <option>Timeliness of Waste Collections</option>
//                 <option>Staff Behavior</option>
//                 <option>Pricing</option>
//                 <option>Environmental Impact</option>
//               </select>
//               {errors.complainCategory && (
//                 <span className="text-red-500">{errors.complainCategory}</span>
//               )}
//             </div>

//             <div className="mb-4">
//               <label htmlFor="description" className="block text-gray-700 mb-2">
//                 Description
//               </label>
//               <input
//                 type="text"
//                 name="description"
//                 onChange={handleChange}
//                 value={inputs.description}
//                 placeholder="Describe your issue..."
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//               />
//               {errors.description && (
//                 <span className="text-red-500">{errors.description}</span>
//               )}
//             </div>

//             <div className="mb-6">
//               <label htmlFor="attachements" className="block text-gray-700 mb-2">
//                 Attachments
//               </label>
//               <input
//                 type="text"
//                 name="attachements"
//                 onChange={handleChange}
//                 value={inputs.attachements}
//                 placeholder="Attach a file or link..."
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
//               />
//               {errors.attachements && (
//                 <span className="text-red-500">{errors.attachements}</span>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-green-700 text-white py-2 rounded-md shadow-md hover:bg-green-800"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UpdateComplain;


