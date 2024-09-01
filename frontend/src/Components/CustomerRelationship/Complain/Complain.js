import React from 'react'
import './Complain.css'
import CrmNav from '../CrmNav/CrmNav'

function Complain() {
  return (
    <div className="form-container">
      <CrmNav />
      <h1>Make complain</h1> 
      <div className="input-group">
        <input type="text" placeholder="Full Name *" required />
        <input type="email" placeholder="Email *" required />
        <input type="text" placeholder="Address *" required />
        <input type="tel" placeholder="Phone No *" required />
      </div> 
      <div className="complain-category">
            <p>Complain Category</p>
            <label><input type="radio" name="category" value="Service Quality" required /> Service Quality</label>
            <label><input type="radio" name="category" value="Timeliness of Waste Collections" required /> Timeliness of Waste Collections</label>
            <label><input type="radio" name="category" value="Staff Behavior" required /> Staff Behavior</label>
            <label><input type="radio" name="category" value="Pricing" required /> Pricing</label>
            <label><input type="radio" name="category" value="Environmental Impact" required /> Environmental Impact</label>
          </div>
          <textarea placeholder="Description" rows="4" required></textarea>
          <textarea placeholder="Attachments" rows="4" required></textarea>
          <button type="submit">Submit</button>
    </div>
  )
}

export default Complain
