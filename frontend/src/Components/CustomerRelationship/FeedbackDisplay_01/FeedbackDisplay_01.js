import { useEffect } from "react";
import { useState } from "react";
// import "./FeedbackDisplay_01.css";
import CrmNav from "../CrmNav/CrmNav";
import axios from "axios";
//import Feedback from '../Feedback/Feedback'
import Feedback from "../Feedback/Feedback";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

const URL = "http://localhost:5001/feedback";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function FeedbackDisplay_01() {
  const [feedback, setFeedback] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setFeedback(data.feedback));
  }, []);

  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle: "Feedback Report",
    onafterPrint: () => alert("Feedback Report Printed"),
  });

  return (
    <div className="form-container">
      <CrmNav />
      <div className="mt-10" ref={ComponentsRef}>

      <div className="flex flex-col items-center bg-gray-100 min-h-screen pt-0">
        <div className="w-full max-w-4xl p-5">
          {feedback &&
            feedback.map((feedback, i) => <Feedback feedback={feedback} />)}
        </div>
      </div>

        
      </div>

      <button onClick={handlePrint} className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75" >Download feedback Report</button>
    </div>
  );
}

export default FeedbackDisplay_01;
