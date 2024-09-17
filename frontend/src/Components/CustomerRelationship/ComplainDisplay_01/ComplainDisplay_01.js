import  { useEffect } from 'react'
import { useState } from 'react'
// import './FeedbackDisplay_01.css'
import CrmNav from '../CrmNav/CrmNav'
import axios from 'axios'
//import Feedback from '../Feedback/Feedback'
import Complain from '../Complain/Complain'
import {useReactToPrint} from 'react-to-print'
import { useRef } from 'react'

const URL = "http://localhost:5001/complain"

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
}

function ComplainDisplay_01() {

  const [complain, setComplain] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setComplain(data.complain));
    
  },[])

  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
        content: () => ComponentsRef.current,
        DocumentTitle: "Complain Report",
        onafterPrint:() =>alert("Complain Report Printed"),
  })

  return (
    
    <div className="form-container">
      <CrmNav/>
        
        <div className="mt-10">
        <table className="border-2 mx-auto">
          <tr className="bg-green-200 ">
            <th className="border-2 p-2 w-40 border-green-500">
            Full Name
            </th>
            <th className="border-2 p-2 w-48  border-green-500">
              Email
            </th>
            <th className="border-2 p-2 w-48 border-green-500">
              Address
            </th>
            <th className="border-2 p-2 w-24 border-green-500">
              Complain Category
            </th>
            <th className="border-2 p-2 w-20 border-green-500">
              Description
            </th>
            <th className="border-2 p-2 w-20 border-green-500">
              Attachements
            </th>
            
          </tr>
        </table>
      </div>

           <div ref={ComponentsRef}>
          {complain && complain.map((complain, i) => (
            <div key={i}>
              <Complain complain={complain}/>
              </div>
            ))}
           </div>
           
          <button onClick={handlePrint}>Download Complain Report</button>
        </div>
        
        
  )
}

export default ComplainDisplay_01
