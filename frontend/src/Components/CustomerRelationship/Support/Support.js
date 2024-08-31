import React from 'react'
import './Support.css'
import CrmNav from '../CrmNav/CrmNav'

function Support() {
  return (
    <div className="form-container">
          <CrmNav/>
          <h1>Request Support</h1>
          <p>HOW CAN WE HELP YOU?</p>
          <p>CHOOSE FROM THE OPTION BELOW :</p>
          <h2>Additional Services</h2>
          <form>
            <div className="checkbox-group">
              <label><input type="checkbox" /> Start New Account</label>
              <label><input type="checkbox" /> Bulky Item Pickup</label>
              <label><input type="checkbox" /> Request Extra Pickup</label>
              <label><input type="checkbox" /> Update Your Information</label>
              <label><input type="checkbox" /> Replace Container</label>
              <label><input type="checkbox" /> Other</label>
            </div>
            <div className="input-group">
              <input type="text" placeholder="Full Name *" />
              <input type="text" placeholder="Email *" />
              <input type="text" placeholder="Address *" />
              <input type="text" placeholder="City *" />
              <input type="text" placeholder="Account ID *" />
              <input type="text" placeholder="Subject *" />
            </div>
            <textarea placeholder="Message" rows="4"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
  )
}

export default Support
