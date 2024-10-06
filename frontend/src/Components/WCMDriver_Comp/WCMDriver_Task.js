// DriverTasks.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DriverTasks = ({ driverId }) => {
    const [tasks, setTasks] = useState([]);
    const [notification, setNotification] = useState('');

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/tasks`);
                const filteredTasks = response.data.tasks.filter(task => task.driverId === driverId);
                setTasks(filteredTasks);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };
        fetchTasks();
    }, [driverId]);

    const handleCompleteTask = async (taskId) => {
        try {
            await axios.patch(`http://localhost:5001/tasks/${taskId}`, { completionStatus: true });
            // Update tasks state to reflect completion
            setTasks(tasks.filter(task => task._id !== taskId)); // Remove completed task from the list
            setNotification("Task marked as complete!"); // Set notification message
            setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
        } catch (error) {
            console.error("Error completing task:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Your Tasks</h1>

            {/* Notification Section */}
            {notification && (
                <div className="mb-4 p-4 text-white bg-green-500 rounded-lg text-center">
                    {notification}
                </div>
            )}

            {/* Tasks List */}
            <div className="grid grid-cols-1 gap-6">
                {tasks.length === 0 ? (
                    <div className="p-4 text-center bg-gray-200 rounded-lg">
                        <p>No tasks available.</p>
                    </div>
                ) : (
                    tasks.map(task => (
                        <div key={task._id} className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="text-xl font-semibold">Task ID: {task.taskId}</h2>
                            <p className="text-gray-700">Bins: {task.binIds.join(', ')}</p>
                            <p className="text-gray-700">Duration: {task.duration} mins</p>
                            <button 
                                onClick={() => handleCompleteTask(task._id)} 
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                            >
                                Mark as Complete
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default DriverTasks;
