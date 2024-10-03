import React, { useRef, useState, useEffect } from 'react'
import AccountNav from '../AccountNav/AccountNav'
import { useReactToPrint } from 'react-to-print';
import Salary from '../Salary/Salary';
import axios from 'axios';


function ReportGeneration() {
  const componentsRef = useRef();
  const [account, setSalary] = useState([]);

  useEffect(() => {
    const fetchSalary = async () => {
      try {
        const response = await axios.get('http://localhost:5001/account');
        setSalary(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error fetching account:', error);
      }
    };
    fetchSalary();
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentsRef.current,
    documentTitle: "Salary Report",
    onAfterPrint: () => alert("Salary Report Printed"),
  });
 

 
  return (
    <div>
      <AccountNav/>

      <div className="flex flex-col m-5">
        <h1 className="text-center font-bold text-6xl text-slate-700">
          Report Section
        </h1>
        <hr className="border-4 mt-3 mb-5" />
      </div>

       {/* Center the report generation section */}
       <div className="flex justify-center mt-20">
        <div className="relative w-1/3 h-52 bg-slate-100 rounded-lg m-3">
          <div className="w-auto h-12 bg-green-200 rounded-lg">
            <div className="text-center font-medium text-2xl text-slate-900 p-1">
             Generate Salary Report
            </div>

            
            <div>
              {account.length > 0 ? (
                account.map((item, i) => (
                  <div key={i}>
                    <Salary account={item} />
                  </div>
                ))
              ) : (
                <p></p>
              )}
            </div>
          </div>
          <button onClick={handlePrint} className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75" >Download Salary Report</button>
        </div>
      </div>

       {/* Hidden div for the printable content */}
       <div style={{ display: "none" }}>
        <div ref={componentsRef}>
          <h2>Salary Report</h2>
          {account.length > 0 ? (
            account.map((item, i) => (
              <div key={i}>
                <Salary account={item} />
              </div>
            ))
          ) : (
            <p>No salary available</p>
          )}
        </div>
      </div>
    </div>


  )
}

export default ReportGeneration
