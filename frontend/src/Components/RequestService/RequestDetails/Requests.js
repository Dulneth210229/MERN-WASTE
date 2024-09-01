import React, { useEffect, useState } from 'react';
import RequestNav from '../RequestNav/RequestNav';
import axios from 'axios';
import Request from '../Request/Request';

const URL = 'http://Localhost:5001/request';

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
}
function Requests() {

  const [requests, setRequests] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setRequests(data.requests));
    },[])

  return (
    <div>
        <RequestNav/>
        <h1>User details display page</h1>
        <div>
          {requests && requests.map((request, i) => (
            <div key={i}>
              <Request request={request} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Requests
