// AdminAssignTask.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminAssignTask = () => {
    const [drivers, setDrivers] = useState([]);
    const [bins, setBins] = useState([]);
    const [taskId, setTaskId] = useState('');
    const [driverId, setDriverId] = useState('');
    const [binIds, setBinIds] = useState([]);
    const [duration, setDuration] = useState('');

    useEffect(() => {
        // Fetch drivers and bins
        const fetchData = async () => {
            try {
                const driversData = await axios.get('http://localhost:5001/drivers');
                const binsData = await axios.get('http://localhost:5001/bins');
                setDrivers(driversData.data.drivers);
                setBins(binsData.data.bins);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, []);

    const handleAssignTask = async () => {
        const taskData = { driverId, binIds, taskId, duration };
        try {
            await axios.post('http://localhost:5001/tasks', taskData);
            // Handle response or update UI
            alert("Task assigned successfully!");
        } catch (error) {
            console.error("Error assigning task: ", error);
            alert("Failed to assign task!");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
                <h1 className="text-2xl font-semibold text-center mb-6">Assign Task</h1>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Task ID</label>
                    <input
                        type="text"
                        placeholder="Enter Task ID"
                        value={taskId}
                        onChange={(e) => setTaskId(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Select Driver</label>
                    <select
                        value={driverId}
                        onChange={(e) => setDriverId(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select a driver</option>
                        {drivers.map(driver => (
                            <option key={driver._id} value={driver._id}>{driver.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Select Bins</label>
                    <select
                        multiple
                        onChange={(e) => setBinIds([...e.target.selectedOptions].map(option => option.value))}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {bins.map(bin => (
                            <option key={bin._id} value={bin._id}>{bin.location}</option>
                        ))}
                    </select>
                    <p className="text-sm text-gray-500 mt-1">Hold down the Ctrl (Windows) or Command (Mac) button to select multiple options.</p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Duration (minutes)</label>
                    <input
                        type="number"
                        placeholder="Enter Duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    onClick={handleAssignTask}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                    Assign Task
                </button>
            </div>
        </div>
    );
};

export default AdminAssignTask;

