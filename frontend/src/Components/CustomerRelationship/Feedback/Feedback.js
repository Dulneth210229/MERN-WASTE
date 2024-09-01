import React from 'react'
  

function FeedbackDisplay(props) {
  const {_id, name, email, address, phone, comment, rating} = props.feedback;
  return (
    <div>
      <h1>FeedbackDisplay</h1>
      <br></br>
      <h1>ID:{_id}</h1>
      <h1>Name:{name}</h1>
      <h1>Email:{email}</h1>
      <h1>Address:{address}</h1>
      <h1>Phone:{phone}</h1>
      <h1>Comment:{comment}</h1>
      <h1>Rating:{rating}</h1>
      <button>Update</button>
      <button>Delete</button>

    </div>
  )
}

export default FeedbackDisplay
