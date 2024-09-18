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
                <p>No feedback available</p>
              )}
            </div>
          </div>
          <button onClick={handlePrint}>Download Feedback Report</button>
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

// import React, { useRef } from 'react';
// import CrmNav from '../CrmNav/CrmNav';
// import { useReactToPrint } from 'react-to-print';
// import Feedback from '../Feedback/Feedback'

// function CrmReport() {
//   const componentsRef = useRef();

//   const handlePrint = useReactToPrint({
//     content: () => componentsRef.current,
//     documentTitle: "Feedback Report",
//     onAfterPrint: () => alert("Feedback Report Printed"),
//   });

//   return (
//     <div>
//       <CrmNav />
//       <div className="flex flex-col m-5">
//         <h1 className="text-center font-bold text-6xl text-slate-700">
//           Report Section
//         </h1>
//         <hr className="border-4 mt-3 mb-5" />
//       </div>

//       <div className="flex flex-row gap-20 mx-auto w-3/3 mt-20 mr-10 ml-10">
//         <div className="relative w-1/3 h-52 bg-slate-100 rounded-lg m-3">
//           <div className="w-auto h-12 bg-green-200 rounded-lg">
//             <div className="text-center font-medium text-2xl text-slate-900 p-1">
//               Generate Feedback Report
//             </div>
//             <div ref={componentsRef}>
//               {feedback && feedback.map((feedback, i) => (
//                 <div key={i}>
//                   <Feedback feedback={feedback}/>
//                 </div>
//               ))}

//             </div>
          
//           </div>
//           <button onClick={handlePrint}>Download Feedback Report</button>
//         </div>
//       </div>

//       {/* The component you want to print */}
//       <div ref={componentsRef} className="hidden">
//         {/* The content that will appear in the printed report */}
//         <h2>Feedback Report</h2>
//         {/* Add the content of your report here */}
//       </div>
//     </div>
//   );
// }

// export default CrmReport;


// // import React from 'react'
// // import CrmNav from '../CrmNav/CrmNav'
// // import {useReactToPrint} from 'react-to-print'

// // const ComponentsRef = useRef();
// // const handlePrint = useReactToPrint({
// //   content: () => ComponentsRef.current,
// //   DocumentTitle: "Complain Report",
// //   onafterPrint:() =>alert("Complain Report Printed"),
// // })

// // function CrmReport() {
// //   return (
// //     <div>
// //      <CrmNav />
// //      <div className="flex flex-col m-5">
// //         <h1 className="text-center font-bold text-6xl text-slate-700">
// //           Report Section
// //         </h1>
// //         <hr className="border-4 mt-3 mb-5" />
// //       </div>
// //       <div className="flex flex-row gap-20 mx-auto w-3/3 mt-20 mr-10 ml-10">
// //         <div className="relative w-1/3 h-52 bg-slate-100 rounded-lg m-3 ">
// //           <div className=" w-auto h-12 bg-green-200 rounded-lg  ">
// //             <div className="text-center font-medium text-2xl text-slate-900 p-1">
// //               Generathe Feedback Report
// //             </div>
// //           </div>
// //           <button onClick={handlePrint}>Download Complain Report</button>
// //         </div>
        
// //       </div>
// //     </div>
// //   )
// // }

// // export default CrmReport

