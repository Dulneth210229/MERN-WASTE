import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHomeHeader from "./WCMAdmin_Header";

function AssignWorkDashboard() {
  const [assignments, setAssignments] = useState([]);

  // Fetch all work assignments when the component loads
  useEffect(() => {
    axios.get("http://localhost:5001/work-assignments")
      .then((response) => setAssignments(response.data.assignments))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
        <AdminHomeHeader/>
    
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-6">Assigned Work Dashboard</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Driver ID</th>
            <th className="py-2 px-4 border">Bin IDs</th>
            <th className="py-2 px-4 border">Working Duration</th>
            <th className="py-2 px-4 border">Assigned Date</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment._id}>
              <td className="py-2 px-4 border">{assignment.driverId.name}</td>
              <td className="py-2 px-4 border">{assignment.binIds.join(", ")}</td>
              <td className="py-2 px-4 border">{assignment.workingDuration}</td>
              <td className="py-2 px-4 border">{new Date(assignment.assignedDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default AssignWorkDashboard;
