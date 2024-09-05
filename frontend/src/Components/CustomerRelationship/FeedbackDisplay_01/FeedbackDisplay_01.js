import  { useEffect } from 'react'
import { useState } from 'react'
import './FeedbackDisplay_01.css'
import CrmNav from '../CrmNav/CrmNav'
import axios from 'axios'
//import Feedback from '../Feedback/Feedback'
import Feedback from '../Feedback/Feedback'
import {useReactToPrint} from 'react-to-print'
import { useRef } from 'react'



const URL = "http://localhost:5001/feedback"

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
}

function FeedbackDisplay_01() {

  const [feedback, setFeedback] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setFeedback(data.feedback));
    
  },[])

  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
        content: () => ComponentsRef.current,
        DocumentTitle: "Feedback Report",
        onafterPrint:() =>alert("Feedback Report Printed"),
  })

  return (
    
    <div className="form-container">
      <CrmNav/>
          <h1>Add Feedback</h1>
           <div ref={ComponentsRef}>
          {feedback && feedback.map((feedback, i) => (
            <div key={i}>
              <Feedback feedback={feedback}/>
              </div>
            ))}
           </div>
           {/* <div className="input-group">
            <input type="text" placeholder="Full Name *" required />
            <input type="email" placeholder="Email *" required />
            <input type="text" placeholder="Address *" required />
            <input type="tel" placeholder="Phone No *" required />
          </div>        
          <div className="feedback-category">
            <p>Feedback Category</p>
            <label><input type="radio" name="category" value="Service Quality" required /> Service Quality</label>
            <label><input type="radio" name="category" value="Timeliness of Waste Collections" required /> Timeliness of Waste Collections</label>
            <label><input type="radio" name="category" value="Staff Behavior" required /> Staff Behavior</label>
            <label><input type="radio" name="category" value="Pricing" required /> Pricing</label>
            <label><input type="radio" name="category" value="Environmental Impact" required /> Environmental Impact</label>
          </div>
          <textarea placeholder="Comment" rows="4" required></textarea>
          <button type="submit">Submit</button> */}
          <button onClick={handlePrint}>Download Feedback Report</button>
        </div>
        
        
  )
}

export default FeedbackDisplay_01
