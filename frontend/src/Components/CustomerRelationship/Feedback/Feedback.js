import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
  

function FeedbackDisplay(props) {
  const {_id, name, email, address, phone, comment, rating} = props.feedback;

const history = useNavigate();

const deleteHandler = async () => {
  await axios.delete(`http://localhost:5001/feedback/${_id}`)
  .then(res => res.data)
  .then(()=>history("/"))
  .then(()=>history("/FeedbackDisplay"))
}

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
      <Link to={`/feedbackdisplay/${_id}`}>Update</Link>
      <button onClick={deleteHandler}>Delete</button>

    </div>
  )
}

export default FeedbackDisplay
