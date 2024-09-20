import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserHomeHeader from "../UserHomePage/UserHomeHeader";
import Footer from '../UserHomePage/UserFooter';

const PlanManagementPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { packageName, packagePrice } = location.state || {};

  // Card details state and error handling
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    // Card Number validation (16 digits)
    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumberRegex.test(cardNumber)) {
      errors.cardNumber = 'Card number must be 16 digits';
    }

    // Expiry Date validation (MM/YY format and not in the past)
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDateRegex.test(expiryDate)) {
      errors.expiryDate = 'Expiry date must be in MM/YY format';
    } else {
      const [month, year] = expiryDate.split('/');
      const currentYear = new Date().getFullYear() % 100; // Get last two digits of current year
      const currentMonth = new Date().getMonth() + 1; // Months are zero-based

      if (parseInt(year) < currentYear || (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
        errors.expiryDate = 'Expiry date cannot be in the past';
      }
    }

    // CVV validation (3 digits)
    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv)) {
      errors.cvv = 'CVV must be 3 digits';
    }

    // Name validation (non-empty)
    if (name.trim() === '') {
      errors.name = 'Name on card is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      const paymentDetails = {
        packageName,
        packagePrice,
        cardHolderName: name,
      };
  
      try {
        const response = await fetch("http://localhost:5001/paymentplan", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentDetails),
        });
  
        const data = await response.json();
        if (response.ok) {
          // Success handling
          alert("Payment successful!");
          navigate("/userHomePage"); // Make sure this path is correct
        } else {
          console.error("Payment failed:", data.message);
        }
      } catch (error) {
        console.error("Error processing payment:", error);
      }
    }
  };

  return (
    <div>
      <UserHomeHeader />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-100 via-green-200 to-green-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-green-800">Payment Summary</h2>
          {packageName && packagePrice ? (
            <div className="text-center mb-10">
              <p className="text-2xl font-semibold text-gray-700">Selected Package: {packageName}</p>
              <p className="text-xl text-gray-600">Price: ${packagePrice}</p>
            </div>
          ) : (
            <p className="text-center text-red-500 text-xl mb-8">No package selected</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm ${
                  errors.cardNumber ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="1234 5678 9012 3456"
                required
              />
              {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="expiryDate">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm ${
                    errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="MM/YY"
                  required
                />
                {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="cvv">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm ${
                    errors.cvv ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="123"
                  required
                />
                {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                Name on Card
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="John Doe"
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-md shadow-lg hover:bg-green-700 transition-all"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PlanManagementPayment;
