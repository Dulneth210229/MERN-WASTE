import React, { useState, useEffect } from 'react';
import DriverHomeHeader from './DriverHomeHeader';
import Footer from './Footer'; // Assuming you have a Footer component

function WCMDriver_Home() {
  const [assignedTasks, setAssignedTasks] = useState([]);

  // Simulate fetching assigned tasks (to be replaced with real API call)
  useEffect(() => {
    // Example data for assigned tasks
    const fetchTasks = async () => {
      // Replace this with actual API call
      const tasks = [
        { id: 1, description: 'Deliver package to location A', status: 'Pending' },
        { id: 2, description: 'Pick up waste from site B', status: 'Completed' },
      ];
      setAssignedTasks(tasks);
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <DriverHomeHeader />

      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome, Driver!</h1>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Assigned Tasks</h2>
          {assignedTasks.length > 0 ? (
            <ul>
              {assignedTasks.map((task) => (
                <li key={task.id} className="flex justify-between py-2 border-b">
                  <span>{task.description}</span>
                  <span className={`font-semibold ${task.status === 'Completed' ? 'text-green-500' : 'text-red-500'}`}>
                    {task.status}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No assigned tasks at the moment.</p>
          )}
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Driver Summary</h2>
          <p>Your current vehicle: <strong>Truck #12</strong></p>
          <p>Total completed tasks: <strong>15</strong></p>
          <p>Average rating: <strong>4.8/5</strong></p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default WCMDriver_Home;
