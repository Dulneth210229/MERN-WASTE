import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating'; 
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { styled } from '@mui/material/styles';

// Custom icons for the rating component
const customIcons = {
  1: { icon: <SentimentVeryDissatisfiedIcon color="error" />, label: 'Very Dissatisfied' },
  2: { icon: <SentimentDissatisfiedIcon color="error" />, label: 'Dissatisfied' },
  3: { icon: <SentimentSatisfiedIcon color="warning" />, label: 'Neutral' },
  4: { icon: <SentimentSatisfiedAltIcon color="success" />, label: 'Satisfied' },
  5: { icon: <SentimentVerySatisfiedIcon color="success" />, label: 'Very Satisfied' },
};

// Styled rating component
const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

function UpdateFeedback() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    comment: '',
    rating: 0,
  });

  const history = useNavigate();
  const id = useParams().id;

    useEffect(() =>{
        const fetchHandler = async ()=>{
            await axios
            .get(`http://localhost:5001/feedback/${id}`)
            .then((res)=> res.data)
            .then((data)=> setInputs(data.feedback))
        };
        fetchHandler();
    },[id]);

    const sendRequest = async () => {
        await axios
        .put(`http://localhost:5001/feedback/${id}`,{
            name: String(inputs.name),
            email: String(inputs.email),
            address: String(inputs.address),
            phone: Number(inputs.phone),
            comment: String(inputs.comment),
            rating: Number(inputs.rating), 
        })
        .then(res =>res.data);
        };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRatingChange = (event, newValue) => {
    setInputs((prevState) => ({
      ...prevState,
      rating: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history('/FeedbackDisplay'));
  };

  return (
    <div>
      <h1 className="text-center mt-5 font-semibold text-slate-800">
        Update Your Feedback
      </h1>
      <hr className="border-2" />

      <body className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-green-200 p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-semibold mb-6">Update Your Feedback</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="Name" className="block text-gray-700 mb-2">
                Enter Your Name
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                required
                value={inputs.name}
                placeholder="Your name..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="Email" className="block text-gray-700 mb-2">
                Enter Email
              </label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                required
                value={inputs.email}
                placeholder="Your email..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 mb-2">
                Enter your address
              </label>
              <input
                type="text"
                name="address"
                onChange={handleChange}
                required
                value={inputs.address}
                placeholder="Your address..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 mb-2">
                Enter your phone number
              </label>
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                required
                value={inputs.phone}
                placeholder="Your phone number..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Rating Input */}
            <div className="mb-4">
              <label htmlFor="rating" className="block text-gray-700 mb-2">
                Give a rating
              </label>
              <StyledRating
                name="highlight-selected-only"
                IconContainerComponent={IconContainer}
                getLabelText={(value) => customIcons[value].label}
                highlightSelectedOnly
                onChange={handleRatingChange}
                value={inputs.rating || 0} // Default value to prevent issues when undefined
                className="w-full"
              />
            </div>

                      <div class="mb-4">
                        <label for="comment" class="block text-gray-700 mb-2">
                          Enter your Comment
                        </label>
                        <input
                          type="comment"
                          name="comment"
                          onChange={handleChange}
                          required
                          value={inputs.comment}
                          placeholder="Your comment..."
                          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
          
                      <button
                        type="submit"
                        class="w-full bg-green-700 text-white py-2 rounded-md shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </body>
                </div>
  );
}

export default UpdateFeedback;


// import React, {useEffect,useState} from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'


// function UpdateFeedback() {

//     const[inputs, setInputs] = useState({});
//     const history = useNavigate();
//     const id = useParams().id;

//     useEffect(() =>{
//         const fetchHandler = async ()=>{
//             await axios
//             .get(`http://localhost:5001/feedback/${id}`)
//             .then((res)=> res.data)
//             .then((data)=> setInputs(data.feedback))
//         };
//         fetchHandler();
//     },[id]);

//     const sendRequest = async () => {
//         await axios
//         .put(`http://localhost:5001/feedback/${id}`,{
//             name: String(inputs.name),
//             email: String(inputs.email),
//             address: String(inputs.address),
//             phone: Number(inputs.phone),
//             comment: String(inputs.comment),
//             rating: Number(inputs.rating), 
//         })
//         .then(res =>res.data);
//         };

//         const handleChange = (e) => {
//             setInputs((prevState)=>({
//                 ...prevState,
//                 [e.target.name]: e.target.value,
//             }));
//             };
    
//             const handleSubmit = (e) => {
//                 e.preventDefault();
//                 console.log(inputs);
//                 sendRequest().then(()=>
//                 history("/FeedbackDisplay"));
//             };
            
//             return (
//               <div>
//                 <h1 className="text-center mt-5 font-semibold text-slate-800">
//         Add Your Feedback
//       </h1>
//       <hr className="border-2" />
          
//                 <body class="flex items-center justify-center min-h-screen bg-gray-100">
//                   <div class="bg-green-200 p-8 rounded-lg shadow-md w-full max-w-lg">
//                     <h2 class="text-2xl font-semibold mb-6">Add Your Feedback</h2>
          
//                     <form onSubmit={handleSubmit}>
//                       <div class="mb-4">
//                         <label for="Name" class="block text-gray-700 mb-2">
//                           Enter Your Name
//                         </label>
//                         <input
//                           type="text"
//                           name="name"
//                           onChange={handleChange}
//                           required
//                           value={inputs.name}
//                           placeholder="Your name..."
//                           class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                         />
//                       </div>
          
//                       <div class="mb-4">
//                         <label for="Email" class="block text-gray-700 mb-2">
//                           Enter Email
//                         </label>
//                         <input
//                           type="text"
//                           name="email"
//                           onChange={handleChange}
//                           required
//                           value={inputs.email}
//                           placeholder="Your email..."
//                           class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                         />
//                       </div>
          
//                       <div class="mb-4">
//                         <label for="address" class="block text-gray-700 mb-2">
//                           Enter your address
//                         </label>
//                         <input
//                           type="text"
//                           name="address"
//                           onChange={handleChange}
//                           required
//                           value={inputs.address}
//                           placeholder="Your address..."
//                           class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                         />
//                       </div>
          
//                       <div class="mb-4">
//                         <label for="phone" class="block text-gray-700 mb-2">
//                           Enter your phone number
//                         </label>
//                         <input
//                           type="tel"
//                           name="phone"
//                           onChange={handleChange}
//                           required
//                           value={inputs.phone}
//                           placeholder="Your phone number..."
//                           class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                         />
//                       </div>
          
//                       <div class="flex space-x-4 mb-6">
//                         <div class="flex-1">
//                           <label for="rate" class="block text-gray-700 mb-2">
//                             Give the rating
//                           </label>
//                           <input
//                             type="rate"
//                             name="rating"
//                             onChange={handleChange}
//                             required
//                             value={inputs.rating}
//                             placeholder="Give the rate..."
//                             class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                           />
//                         </div>
//                       </div>

//                       <div class="mb-4">
//                         <label for="comment" class="block text-gray-700 mb-2">
//                           Enter your Comment
//                         </label>
//                         <input
//                           type="comment"
//                           name="comment"
//                           onChange={handleChange}
//                           required
//                           value={inputs.comment}
//                           placeholder="Your comment..."
//                           class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                         />
//                       </div>
          
//                       <button
//                         type="submit"
//                         class="w-full bg-green-700 text-white py-2 rounded-md shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
//                       >
//                         Submit
//                       </button>
//                     </form>
//                   </div>
//                 </body>
//                 </div>
//   );  
// }

// export default UpdateFeedback
