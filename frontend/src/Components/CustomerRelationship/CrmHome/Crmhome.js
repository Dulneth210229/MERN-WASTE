import React from 'react'
import './CrmHome.css'
import CrmNav from '../CrmNav/CrmNav'


function Crmhome() {
    return (
        <div className="main-buttons">
        <CrmNav />
        <button>Add feedback</button>
        <button>Request support</button>
        <button>Make complain</button>
      </div>
    )
}

export default Crmhome