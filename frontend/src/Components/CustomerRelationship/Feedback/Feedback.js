import React from 'react'
import './Feedback.css'

function Feedback() {
  return (
    <div>
          <h1>Add Feedback</h1> 
          <div className="input-group">
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
          <button type="submit">Submit</button>
        </div>
  )
}

export default Feedback
