import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FeedbackDisplay(props) {
  const { _id, name, email, address, phone, comment, rating } = props.feedback;

  const history = useNavigate();

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5001/feedback/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/FeedbackDisplay"));
  };

  return (

    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
    <h1 className="text-2xl font-bold text-gray-800 mb-4">Feedback Details</h1>
    
    <div className="space-y-2 mb-4">
      {/* <div>
        <span className="font-semibold text-gray-600">ID:</span>
        <span className="ml-2 text-gray-800">{_id}</span>
      </div> */}
      <div>
        <span className="font-semibold text-gray-600">Full Name:</span>
        <span className="ml-2 text-gray-800">{name}</span>
      </div>
      <div>
        <span className="font-semibold text-gray-600">Email:</span>
        <span className="ml-2 text-gray-800">{email}</span>
      </div>
      <div>
        <span className="font-semibold text-gray-600">Address:</span>
        <span className="ml-2 text-gray-800">{address}</span>
      </div>
      <div>
        <span className="font-semibold text-gray-600">Phone:</span>
        <span className="ml-2 text-gray-800">{phone}</span>
      </div>
      <div>
        <span className="font-semibold text-gray-600">Comment:</span>
        <span className="ml-2 text-gray-800">{comment}</span>
      </div>
      <div>
        <span className="font-semibold text-gray-600">Rating:</span>
        <span className="ml-2 text-gray-800">{rating}</span>
      </div>
    </div>
    
    <div className="flex space-x-4">
      <Link 
        to={`/feedbackdisplay/${_id}`}
        className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
      >
        Update
      </Link>
      <button
        onClick={deleteHandler}
        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg"
      >
        Delete
      </button>
    </div>
  </div>

    
  );
}

export default FeedbackDisplay;
