import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function WCMDriver_Login() {
    const navigate = useNavigate();
    const [driver, setDriver] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDriver((prevDriver) => ({
            ...prevDriver,
            [name]: value  
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await sendRequest();
            if (response && response.message === "Login successful") {
                alert("Login successful");
                navigate("/WCMDriver_Home");
            } else {
                alert("Login error: " + (response.message || "Unknown error"));
            }
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    const sendRequest = async () => {
        const response = await axios.post("http://localhost:5001/drivers/login", {
            email: driver.email,
            password: driver.password,
        });
        return response.data;
    };

    return (
        <div className="max-w-lg mx-auto bg-green-200 p-8 shadow-md rounded-lg mt-10">
            <h1 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Driver Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={driver.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required
                        value={driver.password}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className={`w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ${isLoading ? 'cursor-not-allowed' : ''}`}
                    disabled={isLoading}
                >
                    {isLoading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
}

export default WCMDriver_Login;
