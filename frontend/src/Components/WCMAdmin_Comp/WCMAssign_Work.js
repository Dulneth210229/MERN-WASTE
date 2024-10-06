import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'; // Import the icon
import AdminHomeHeader from "./WCMAdmin_Header";

function AssignWorkDashboard() {
  const navigate = useNavigate(); 
  const [assignments, setAssignments] = useState([]);

  // Fetch all work assignments when the component loads
  useEffect(() => {
    axios.get("http://localhost:5001/work-assignments")
      .then((response) => setAssignments(response.data.assignments))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <AdminHomeHeader />
    
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-center w-full">Assigned Work Dashboard</h1>
          <button 
            className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 flex items-center justify-center"
            onClick={() => navigate('/WCMAdmin_Task')} 
          >
            <FaPlus className="text-xl" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Driver ID</th>
                <th className="py-2 px-4 border-b text-left">Bin IDs</th>
                <th className="py-2 px-4 border-b text-left">Working Duration</th>
                <th className="py-2 px-4 border-b text-left">Assigned Date</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment, i) => (
                <tr key={i} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{assignment.driverId.name}</td>
                  <td className="py-2 px-4 border-b">{assignment.binIds.join(", ")}</td>
                  <td className="py-2 px-4 border-b">{assignment.workingDuration}</td>
                  <td className="py-2 px-4 border-b">{new Date(assignment.assignedDate).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AssignWorkDashboard;
