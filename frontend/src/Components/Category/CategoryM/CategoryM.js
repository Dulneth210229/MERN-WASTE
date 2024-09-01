import React from 'react';


function CategoryM(props) {
  const {_id ,WasteType,Quantity,DateOfCollection ,Location ,TransportMethod ,Notes } = props.catego;
  return (
    <div>
      
      <h1>User Display</h1>
      <br></br>
      <h1>ID:{_id}</h1>
      <h1>Waste Type:{WasteType}</h1>
      <h1>Quantity:{Quantity}</h1>
      <h1>Date Of Collection:{DateOfCollection}</h1>
      <h1>Location:{Location}</h1>
      <h1>Transport Method:{TransportMethod}</h1>
      <h1>Notes:{Notes}</h1>
      <button>Update</button>
      <button>Delete</button>
      
    </div>
  )
}

export default CategoryM
