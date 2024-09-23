import React, { useEffect, useState } from "react";
import RequestNav from "../RequestNav/RequestNav";
import axios from "axios";
import Request from "../Request/Request";
import UserFooter from "../../UserHomePage/UserFooter";
import UserHomeHeader from "../../UserHomePage/UserHomeHeader";

const URL = "http://Localhost:5001/request";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
function Requests() {
  const [requests, setRequests] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setRequests(data.requests));
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

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
  return (
    <div>
      <UserHomeHeader />
      {/* <div className="bg-gray-100 p-1">
      </div> */}
      <div className="flex space-x-4 justify-end py-4 pl-96 bg-gray-100">
        <RequestNav />
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          name="search"
          placeholder="Search Request Details"
          className="px-4 py-2 border border-gray-300 rounded-lg active:border-blue-500"
        ></input>
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
              requests.map((request, i) => <Request request={request} />)}
          </div>
        </div>
      )}
      <UserFooter />
      {/* <div className="mt-10">
        <table className="border-2 mx-auto">
          <tr className="bg-green-200 ">
            <th className="border-2 p-2 w-25 border-green-500">Service</th>
            <th className="border-2 p-2 w-46  border-green-500">Name</th>
            <th className="border-2 p-2 w-51 border-green-500">Address</th>
            <th className="border-2 p-2 w-24 border-green-500">Phone Number</th>
            <th className="border-2 p-2 w-20 border-green-500">Date</th>
            <th className="border-2 p-2 w-20 border-green-500">Time</th>
            <th className="border-2 p-2 w-55 border-green-500">Actions</th>
          </tr>
          {requests &&
            requests.map((request, i) => <Request request={request} />)}
        </table>
      </div> */}

      <div></div>
    </div>
  );
}

export default Requests;
