import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
  

function SupportDisplay(props) {
  const {_id, additonalServices, name, email, address, city, subject, message } = props.support;

const history = useNavigate();

const deleteHandler = async () => {
  await axios.delete(`http://localhost:5001/support/${_id}`)
  .then(res => res.data)
  .then(()=>history("/"))
  .then(()=>history("/SupportDisplay"))
}

  return (
    <div>
      <h1>SupportDisplay</h1>
      <br></br>
      <h1>ID:{_id}</h1>
      <h1>additonalServices:{additonalServices}</h1>
      <h1>name:{name}</h1>
      <h1>email:{email}</h1>
      <h1>address:{address}</h1>
      <h1>city:{city}</h1>
      <h1>subject:{subject}</h1>
      <h1>message:{message}</h1>
      <Link to={`/supportdisplay/${_id}`}>Update</Link>
      <button onClick={deleteHandler}>Delete</button>

    </div>
  )
}

export default SupportDisplay
