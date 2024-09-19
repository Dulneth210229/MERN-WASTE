import React, { useRef, useState, useEffect } from 'react';
import CrmNav from '../CrmNav/CrmNav';
import { useReactToPrint } from 'react-to-print';
import Feedback from '../Feedback/Feedback';
import axios from 'axios';

function CrmReport() {
  const componentsRef = useRef();
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get('http://localhost:5001/feedback');
        setFeedback(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };
    fetchFeedback();
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentsRef.current,
    documentTitle: "Feedback Report",
    onAfterPrint: () => alert("Feedback Report Printed"),
  });

  return (
    <div>
      <CrmNav />

      <div className="flex flex-col m-5">
        <h1 className="text-center font-bold text-6xl text-slate-700">
          Report Section
        </h1>
        <hr className="border-4 mt-3 mb-5" />
      </div>

      <div className="flex flex-row gap-20 mx-auto w-3/3 mt-20 mr-10 ml-10">
        <div className="relative w-1/3 h-52 bg-slate-100 rounded-lg m-3">
          <div className="w-auto h-12 bg-green-200 rounded-lg">
            <div className="text-center font-medium text-2xl text-slate-900 p-1">
              Generate Feedback Report
            </div>

            <div>
              {feedback.length > 0 ? (
                feedback.map((item, i) => (
                  <div key={i}>
                    <Feedback feedback={item} />
                  </div>
                ))
              ) : (
                <p></p>
              )}
            </div>
          </div>
          <button onClick={handlePrint} className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75" >Download Feedback Report</button>
        </div>
      </div>

      {/* Hidden div for the printable content */}
      <div style={{ display: "none" }}>
        <div ref={componentsRef}>
          <h2>Feedback Report</h2>
          {feedback.length > 0 ? (
            feedback.map((item, i) => (
              <div key={i}>
                <Feedback feedback={item} />
              </div>
            ))
          ) : (
            <p>No feedback available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CrmReport;


