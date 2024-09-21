import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UpdateRequestSupport() {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({}); // Added errors state
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5001/support/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.support));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5001/support/${id}`, {
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

    if (!inputs.name || !namePattern.test(inputs.name)) {
      newErrors.name = "Full name must contain only letters and spaces.";
    }

    if (!inputs.email || !emailPattern.test(inputs.email)) {
      newErrors.email = "Please provide a valid email.";
    }

    if (!inputs.address || inputs.address.length < 5) {
      newErrors.address = "Address must be at least 5 characters long.";
    }

    if (!inputs.city) {
      newErrors.city = "City is required.";
    }

    if (!inputs.subject || inputs.subject.length < 5) {
      newErrors.subject = "Subject must be at least 5 characters long.";
    }

    if (!inputs.message || inputs.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    if (!inputs.additonalServices) {
      newErrors.additonalServices = "Please select an additional service.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      sendRequest().then(() => history("/SupportDisplay"));
    }
  };

  return (
    <div>
      {/* <h1 className="text-center mt-5 font-semibold text-slate-800 ">
        Request Support
      </h1>
      <hr className="border-2" /> */}

      <body className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-green-200 p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-semibold mb-6">Request Support</h2>
          <p>HOW CAN WE HELP YOU?</p>

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
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.address && (
                <span className="text-red-500">{errors.address}</span>
              )}
            </div>

            {/* City */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">City</label>
              <input
                type="text"
                name="city"
                onChange={handleChange}
                value={inputs.city}
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.subject && (
                <span className="text-red-500">{errors.subject}</span>
              )}
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Enter Message</label>
              <textarea
                name="message"
                onChange={handleChange}
                value={inputs.message}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                rows="4"
              ></textarea>
              {errors.message && (
                <span className="text-red-500">{errors.message}</span>
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
      </body>
    </div>
  );
}

export default UpdateRequestSupport;


