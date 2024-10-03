import React, { useState } from 'react';
import CrmNav from '../CrmNav/CrmNav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { styled } from '@mui/material/styles';
import UserHomeHeader from '../../UserHomePage/UserHomeHeader';
import UserFooter from '../../UserHomePage/UserFooter';

const customIcons = {
  1: { icon: <SentimentVeryDissatisfiedIcon color="error" />, label: 'Very Dissatisfied' },
  2: { icon: <SentimentDissatisfiedIcon color="error" />, label: 'Dissatisfied' },
  3: { icon: <SentimentSatisfiedIcon color="warning" />, label: 'Neutral' },
  4: { icon: <SentimentSatisfiedAltIcon color="success" />, label: 'Satisfied' },
  5: { icon: <SentimentVerySatisfiedIcon color="success" />, label: 'Very Satisfied' },
};

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

function AddFeedbackForm() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    comment: '',
    rating: 0,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate name to allow only letters and spaces
    if (name === 'name') {
      const namePattern = /^[A-Za-z\s]*$/;
      if (!namePattern.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: 'Name should contain only letters and spaces',
        }));
        return;
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: '',
        }));
      }
    }

    // Validate phone number to allow only numbers and exactly 10 digits
    if (name === 'phone') {
      const phonePattern = /^[0-9]{0,10}$/;
      if (!phonePattern.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: 'Phone number must contain exactly 10 digits',
        }));
        return;
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: '',
        }));
      }
    }

    // Update the inputs state if validation passed
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRatingChange = (event, newValue) => {
    setInputs((prevState) => ({
      ...prevState,
      rating: newValue,
    }));
  };

  const validateInputs = () => {
    const newErrors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!inputs.name) {
      newErrors.name = 'Name should contain only letters and spaces';
    }

    if (!inputs.email || !emailPattern.test(inputs.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!inputs.address || inputs.address.length < 5) {
      newErrors.address = 'Address must be at least 5 characters long';
    }

    if (!inputs.phone || inputs.phone.length !== 10) {
      newErrors.phone = 'Phone number must contain exactly 10 digits';
    }

    if (inputs.rating === 0) {
      newErrors.rating = 'Please provide a rating';
    }

    if (!inputs.comment || inputs.comment.length < 10) {
      newErrors.comment = 'Comment must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      sendRequest().then(() => history('/FeedbackDisplay'));
    }
  };

  const sendRequest = async () => {
    await axios
      .post('http://localhost:5001/feedback', {
        name: String(inputs.name),
        email: String(inputs.email),
        address: String(inputs.address),
        phone: Number(inputs.phone),
        comment: String(inputs.comment),
        rating: Number(inputs.rating),
      })
      .then((res) => res.data);
  };

  return (
    <div>
      <UserHomeHeader />
      <CrmNav />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-green-200 p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-semibold mb-6">Add Your Feedback</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Enter Your Name
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                required
                value={inputs.name}
                placeholder="Your name..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.name && <span className="text-red-500">{errors.name}</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Enter Email
              </label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                required
                value={inputs.email}
                placeholder="Your email..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.address && <span className="text-red-500">{errors.address}</span>}
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
              {errors.phone && <span className="text-red-500">{errors.phone}</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="rating" className="block text-gray-700 mb-2">
                Give the rating
              </label>
              <StyledRating
                name="highlight-selected-only"
                defaultValue={2}
                IconContainerComponent={IconContainer}
                getLabelText={(value) => customIcons[value].label}
                highlightSelectedOnly
                onChange={handleRatingChange}
                value={inputs.rating}
                className="w-full"
              />
              {errors.rating && <span className="text-red-500">{errors.rating}</span>}
            </div>
            
            <div class="mb-4">
              <label class="block text-gray-700 mb-2">Enter your Comment</label>
              <textarea
                name="comment"
                onChange={handleChange}
                value={inputs.comment}
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                rows="4"
              ></textarea>
              {errors.comment && (
                <span class="text-red-500">{errors.comment}</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-md shadow-md hover:bg-green-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <UserFooter />
    </div>
  );
}

export default AddFeedbackForm;





