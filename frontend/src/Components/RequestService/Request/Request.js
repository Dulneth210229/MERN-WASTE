import React from 'react'
// import RequestNav from '../RequestNav/RequestNav'

function Request(props) {
  const {_id,service,name,address,phoneNumber,date,time} = props.request;
  return (
    <div>
      {/* <RequestNav /> */}
      <br></br>
      <h1>ID:{_id}</h1>
      <h1>Service:{service}</h1>
      <h1>Name:{name}</h1>
      <h1>Address:{address}</h1>
      <h1>Phone Number:{phoneNumber}</h1>
      <h1>Date:{date}</h1>
      <h1>Time:{time}</h1>
      <button>Update</button>
      <button>Delete</button>
      <br></br><br></br><br></br><br></br>
    </div>
  )
}

export default Request
