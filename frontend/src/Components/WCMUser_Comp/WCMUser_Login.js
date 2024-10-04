import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserHomeHeader from "../FirstHome/UserHomeHeader"; // Import UserHomeHeader component

function WCMUser_Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value  
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await sendRequest();
            if (response && response.message === "Login successful") {
                alert("Login successful");
                navigate("/userHomePage");
            } else {
                alert("Login error: " + (response.message || "Unknown error"));
            }
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    const sendRequest = async () => {
        const response = await axios.post("http://localhost:5001/users/login", {
            email: user.email,
            password: user.password,
        });
        return response.data;
    };

    return (
        <div>
            <UserHomeHeader />
        
            <div className="max-w-lg mx-auto bg-green-200 p-8 shadow-md rounded-lg mt-10">
            <h1 className="text-2xl font-semibold text-gray-700 mb-6 text-center">User Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={user.email}
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
                        value={user.password}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                    Login
                </button>
            </form>
        </div>
        </div>
    );
}

export default WCMUser_Login;
