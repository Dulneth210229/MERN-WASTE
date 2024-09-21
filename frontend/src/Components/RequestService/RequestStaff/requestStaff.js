import React, { useEffect, useState } from "react";
// import RequestNav from "../RequestNav/RequestNav";
import axios from "axios";
import UserFooter from "../../UserHomePage/UserFooter";
import Nav from "../../AdminNav/AdminNav";
// import RequestStatus from "../../../../../Backend/Controllers/RequestController";

const URL = "http://localhost:5001/request";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function Requests() {
  const [requests, setRequests] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    fetchHandler().then((data) => setRequests(data.requests));
  }, []);

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredRequests = data.requests.filter((request) =>
        Object.values(request).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setRequests(filteredRequests);
      setNoResults(filteredRequests.length === 0);
    });
  };

  // Handle status change
  const handleStatusChange = (id, newStatus) => {
    console.log(newStatus);
    axios
      .put(`${URL}/${id}`, { status: newStatus }) // Make API call to update status
      .then((res) => {
        const updatedRequest = res.data;
        // Log the updated request or do something with it
        console.log("Updated request:", updatedRequest);

        // Update local state with new status
        setRequests((prevRequests) =>
          prevRequests.map((request) =>
            request._id === id ? { ...request, status: newStatus } : request
          )
        );
      })
      .catch((err) => {
        console.error("Error updating status:", err);
      });
  };

  return (
    <div>
      <Nav />
      {/* <RequestNav /> */}
      <div className="flex space-x-4 justify-end py-2 pr-12 bg-gray-100">
        <h1 className="bg-gray-100 pr-96 font-semibold text-4xl text-slate-700">
          Order Details Display
        </h1>
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          name="search"
          placeholder="Search Request Details"
          className="px-4 py-2 border border-gray-300 rounded-lg active:border-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-green-700 hover:bg-green-800 rounded-lg px-4 py-2 text-white font-semibold"
        >
          Search
        </button>
      </div>

      {noResults ? (
        <div>
          <p>No requests found</p>
        </div>
      ) : (
        <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-2">
          <div className="w-full max-w-4xl px-20">
            {requests &&
              requests.map((request) => (
                <div className="space-y-2 mb-4">
                  <div
                    key={request._id}
                    className="mb-4 p-4 bg-white rounded-xl shadow-md"
                  >
                    <h3 className="text-xl font-bold pb-4">{request.name}</h3>
                    <p>ID: {request._id}</p>
                    <p>Service Type: {request.service}</p>
                    <p>Name: {request.name}</p>
                    <p>Address: {request.address}</p>
                    <p>Contact Number: {request.phoneNumber}</p>
                    <p>Date: {request.date}</p>
                    <p>Time: {request.time}</p>
                    <p>Status: {request.status}</p>

                    {/* Dropdown to change status */}
                    <select
                      value={request.status}
                      onChange={(e) =>
                        handleStatusChange(request._id, e.target.value)
                      }
                      className="mt-2 border rounded px-2 py-1"
                    >
                      <option value="pending">Pending</option>
                      <option value="assigned">Assigned</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
      <UserFooter />
    </div>
  );
}

export default Requests;

// import React, { useEffect, useState } from "react";
// import RequestNav from "../RequestNav/RequestNav";
// import axios from "axios";
// import UserFooter from "../../UserHomePage/UserFooter";

// const URL = "http://localhost:5001/request";

// const fetchHandler = async () => {
//   return await axios.get(URL).then((res) => res.data);
// };

// function Requests() {
//   const [requests, setRequests] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [noResults, setNoResults] = useState(false);

//   useEffect(() => {
//     fetchHandler().then((data) => setRequests(data.requests));
//   }, []);

//   const handleSearch = () => {
//     fetchHandler().then((data) => {
//       const filteredRequests = data.requests.filter((request) =>
//         Object.values(request).some((field) =>
//           field.toString().toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       );
//       setRequests(filteredRequests);
//       setNoResults(filteredRequests.length === 0);
//     });
//   };

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       // Make a PUT request to update the status in the database
//       await axios.put(`${URL}/${id}`, { status: newStatus });
//       // Update the local state to reflect the new status
//       setRequests((prevRequests) =>
//         prevRequests.map((request) =>
//           request._id === id ? { ...request, status: newStatus } : request
//         )
//       );
//     } catch (error) {
//       console.error("Error updating status:", error);
//     }
//   };

//   return (
//     <div>
//       <RequestNav />
//       <div className="flex space-x-4 justify-end py-4 pr-96 bg-gray-100">
//         <input
//           onChange={(e) => setSearchQuery(e.target.value)}
//           type="text"
//           name="search"
//           placeholder="Search Request Details"
//           className="px-4 py-2 border border-gray-300 rounded-lg active:border-blue-500"
//         />
//         <button
//           onClick={handleSearch}
//           className="bg-green-700 hover:bg-green-800 rounded-lg px-4 py-2 text-white font-semibold"
//         >
//           Search
//         </button>
//       </div>
//       {noResults ? (
//         <div>
//           <p>No requests found</p>
//         </div>
//       ) : (
//         <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-2">
//           <div className="w-full max-w-4xl px-20">
//             {requests &&
//               requests.map((request, i) => (
//                 <div key={request._id} className="p-4 mb-4 bg-white rounded-lg shadow-md">
//                   <div className="mb-2">
//                     <h3 className="text-lg font-semibold">Request: {request.service}</h3>
//                     <p>Requester: {request.name}</p>
//                     <p>Address: {request.address}</p>
//                     <p>Phone: {request.phoneNumber}</p>
//                     <p>Date: {request.date}</p>
//                     <p>Time: {request.time}</p>
//                   </div>

//                   {/* Status dropdown */}
//                   <div className="mb-2">
//                     <label htmlFor={`status-${i}`} className="block mb-1 text-gray-700">
//                       Status:
//                     </label>
//                     <select
//                       id={`status-${i}`}
//                       value={request.status}
//                       onChange={(e) => handleStatusChange(request._id, e.target.value)}
//                       className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                     >
//                       <option value="pending">Pending</option>
//                       <option value="assigned">Assigned</option>
//                       <option value="rejected">Rejected</option>
//                     </select>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       )}
//       <UserFooter />
//     </div>
//   );
// }

// export default Requests;

// import React, { useEffect, useState } from "react";
// import RequestNav from "../RequestNav/RequestNav";
// import axios from "axios";
// import Request from "../Request/Request";
// import UserFooter from "../../UserHomePage/UserFooter";

// const URL = "http://Localhost:5001/request";

// const fetchHandler = async () => {
//   return await axios.get(URL).then((res) => res.data);
// };
// function Requests() {
//   const [requests, setRequests] = useState();
//   useEffect(() => {
//     fetchHandler().then((data) => setRequests(data.requests));
//   }, []);

//   const [searchQuery, setSearchQuery] = useState("");
//   const [noResults, setNoResults] = useState(false);

//   const handleSearch = () => {
//     fetchHandler().then((data) => {
//       const filteredRequests = data.requests.filter((request) =>
//         Object.values(request).some((field) =>
//           field.toString().toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       );
//       setRequests(filteredRequests);
//       setNoResults(filteredRequests.length === 0);
//     });
//   };
//   return (
//     <div>
//       <RequestNav />
//       <div className="flex space-x-4 justify-end py-4 pr-96 bg-gray-100">
//         <input
//           onChange={(e) => setSearchQuery(e.target.value)}
//           type="text"
//           name="search"
//           placeholder="Search Request Details"
//           className="px-4 py-2 border border-gray-300 rounded-lg active:border-blue-500"
//         ></input>
//         <button onClick={handleSearch} className="bg-green-700 hover:bg-green-800 rounded-lg px-4 py-2 text-white font-semibold">Search</button>
//       </div>
//       {noResults ? (
//         <div>
//           <p>No requests found</p>
//         </div>
//       ) : (
//         <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-2">
//           <div className="w-full max-w-4xl px-20">
//             {requests &&
//               requests.map((request, i) => <Request request={request} />)}
//           </div>
//         </div>
//       )}
//       <UserFooter />
//     </div>
//   );
// }

// export default Requests;
