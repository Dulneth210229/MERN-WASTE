import React, { useState } from 'react';
import { useNavigate } from "react-router";
import axios from 'axios';
import AdminHomeHeader from '../WCMAdmin_Header';

function WCMBin_Add() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        ID: "", 
        latitude: "", 
        longitude: "", 
        landmark: "", 
    });
    
    const [errors, setErrors] = useState({}); // To store validation errors

    const handleChange = (e) => {
        const { name, value } = e.target;
        let regex;
        switch (name) {
            case "ID":
                // Allow only letters and digits while typing
                regex = /^[A-Za-z0-9]*$/;
                if (value === "" || regex.test(value)) {
                    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error if valid
                    setInputs((prevState) => ({ ...prevState, [name]: value }));
                }
                break;
            case "latitude":
            case "longitude":
                // Regex to allow only digits, decimal points, and minus signs for coordinates
                regex = /^-?\d+(\.\d+)?$/;
                if (value === "" || regex.test(value)) {
                    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error if valid
                    setInputs((prevState) => ({ ...prevState, [name]: value }));
                } else {
                    setErrors((prev) => ({ ...prev, [name]: "Invalid format for coordinates" }));
                }
                break;
            case "landmark":
                // Regex to allow only alphanumeric characters and spaces
                regex = /^[a-zA-Z0-9\s]*$/;
                if (value === "" || regex.test(value)) {
                    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error if valid
                    setInputs((prevState) => ({ ...prevState, [name]: value }));
                } else {
                    setErrors((prev) => ({ ...prev, [name]: "Landmark cannot contain special characters" }));
                }
                break;
            default:
                setInputs((prevState) => ({ ...prevState, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Final validation for ID before submission
        const IDRegex = /^[A-Z][0-9]{7}$/;
        if (!IDRegex.test(inputs.ID)) {
            setErrors((prev) => ({ ...prev, ID: "ID must be one capital letter followed by 7 digits" }));
            return;
        }

        if (errors.latitude || errors.longitude || errors.landmark) {
            console.error("Validation failed. Check the input values.");
            return;
        }

        sendRequest().then(() => navigate('/WCMBin_Details'));
    };

    const sendRequest = async () => {
        try {
            await axios.post("http://localhost:5001/bins", {
                ID: String(inputs.ID), 
                latitude: String(inputs.latitude), 
                longitude: String(inputs.longitude), 
                landmark: String(inputs.landmark), 
            });
        } catch (error) {
            console.error("Error posting data", error); 
        }
    };

    return (
        <div>
        <AdminHomeHeader />
        
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form 
                className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md" 
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Add Bin Information</h2>

                <div className="mb-4">
                    <label htmlFor="ID" className="block text-sm font-medium text-gray-700">ID</label>
                    <input
                        type="text"
                        name="ID"
                        id="ID"
                        value={inputs.ID}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-3 py-2 border ${errors.ID ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        placeholder="Enter bin ID"
                        required
                    />
                    {errors.ID && <p className="text-red-500 text-sm">{errors.ID}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="latitude" className="block text-sm font-medium text-gray-700">Latitude</label>
                    <input
                        type="text"
                        name="latitude"
                        id="latitude"
                        value={inputs.latitude}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-3 py-2 border ${errors.latitude ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        placeholder="Enter latitude"
                        required
                    />
                    {errors.latitude && <p className="text-red-500 text-sm">{errors.latitude}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="longitude" className="block text-sm font-medium text-gray-700">Longitude</label>
                    <input
                        type="text"
                        name="longitude"
                        id="longitude"
                        value={inputs.longitude}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-3 py-2 border ${errors.longitude ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        placeholder="Enter longitude"
                        required
                    />
                    {errors.longitude && <p className="text-red-500 text-sm">{errors.longitude}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="landmark" className="block text-sm font-medium text-gray-700">Landmark</label>
                    <input
                        type="text"
                        name="landmark"
                        id="landmark"
                        value={inputs.landmark}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-3 py-2 border ${errors.landmark ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        placeholder="Enter landmark"
                        required
                    />
                    {errors.landmark && <p className="text-red-500 text-sm">{errors.landmark}</p>}
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Submit
                </button>
            </form>
        </div>
        </div>
    );
}

export default WCMBin_Add;
