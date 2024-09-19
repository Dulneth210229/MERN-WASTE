import { useEffect } from "react";
import { useState } from "react";
// import './FeedbackDisplay_01.css'
import CrmNav from "../CrmNav/CrmNav";
import axios from "axios";
//import Feedback from '../Feedback/Feedback'
import Support from "../Support/Support";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
// import "./RequestSupportForm.css";

const URL = "http://localhost:5001/support";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function SupportDisplay_01() {
  const [support, setSupport] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setSupport(data.support));
  }, []);

  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle: "Support Report",
    onafterPrint: () => alert("Support Report Printed"),
  });

  return (
    <div className="form-container">
      <CrmNav />
      <div className="mt-10" ref={ComponentsRef}>
        <table className="border-2 mx-auto">
          <thead>
            <tr className="bg-green-200">
              <th className="border-2 p-2 w-40 border-green-500">
                Additional Services
              </th>
              <th className="border-2 p-2 w-48 border-green-500">Name</th>
              <th className="border-2 p-2 w-48 border-green-500">Email</th>
              <th className="border-2 p-2 w-24 border-green-500">Address</th>
              <th className="border-2 p-2 w-20 border-green-500">City</th>
              <th className="border-2 p-2 w-20 border-green-500">Subject</th>
              <th className="border-2 p-2 w-20 border-green-500">Message</th>
              <th className="border-2 p-2 w-20 border-green-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {support &&
              support.map((support, i) => (
                <Support key={i} support={support} />
              ))}
          </tbody>
        </table>
      </div>

      <button onClick={handlePrint} className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">Download Support Report</button>
    </div>
  );
}

export default SupportDisplay_01;
