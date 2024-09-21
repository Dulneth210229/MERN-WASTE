import React, { useEffect, useState } from "react";
import RequestNav from "../RequestNav/RequestNav";
import axios from "axios";
import Request from "../Request/Request";
import UserFooter from "../../UserHomePage/UserFooter";

const URL = "http://Localhost:5001/request";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
function Requests() {
  const [requests, setRequests] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setRequests(data.requests));
  }, []);

  return (
    <div>
      <RequestNav />
      <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-0">
        <div className="w-full max-w-4xl p-5">
          {requests &&
            requests.map((request, i) => <Request request={request} />)}
        </div>
      </div>
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
