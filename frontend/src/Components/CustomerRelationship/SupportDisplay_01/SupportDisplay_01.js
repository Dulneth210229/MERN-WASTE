import  { useEffect } from 'react'
import { useState } from 'react'
// import './FeedbackDisplay_01.css'
import CrmNav from '../CrmNav/CrmNav'
import axios from 'axios'
//import Feedback from '../Feedback/Feedback'
import Support from '../Support/Support'
import {useReactToPrint} from 'react-to-print'
import { useRef } from 'react'
import './RequestSupportForm.css'



const URL = "http://localhost:5001/support"

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
}

function SupportDisplay_01() {

  const [support, setSupport] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setSupport(data.support));
    
  },[])

  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
        content: () => ComponentsRef.current,
        DocumentTitle: "Support Report",
        onafterPrint:() =>alert("Support Report Printed"),
  })

  return (
    
    <div className="form-container">
      <CrmNav/>
          <h1>Request Support</h1>
           <div ref={ComponentsRef}>
          {support && support.map((support, i) => (
            <div key={i}>
              <Support support={support}/>
              </div>
            ))}
           </div>
           
          <button onClick={handlePrint}>Download Request Support Report</button>
        </div>
        
        
  )
}

export default SupportDisplay_01
