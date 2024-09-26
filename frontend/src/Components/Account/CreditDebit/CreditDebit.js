import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AccountNav from '../AccountNav/AccountNav';

const AURL = 'http://localhost:5001/account';

function CreditDebit() {
  const [account, setAccount] = useState();
  const [creditInputs, setCreditInputs] = useState([{ employeeId: '', date: '', description: '', amount: '' }]);
  const [debitInputs, setDebitInputs] = useState([{  employeeId: '',date: '', description: '', amount: '' }]);

  // Fetch account data on mount
  useEffect(() => {
    axios.get(AURL).then((res) => setAccount(res.data.account));
  }, []);

  // Handle credit input changes
  const handleCreditChange = (index, e) => {
    const { name, value } = e.target;
    const newCreditInputs = [...creditInputs];
    newCreditInputs[index][name] = value;
    setCreditInputs(newCreditInputs);
  };

  // Handle debit input changes
  const handleDebitChange = (index, e) => {
    const { name, value } = e.target;
    const newDebitInputs = [...debitInputs];
    newDebitInputs[index][name] = value;
    setDebitInputs(newDebitInputs);
  };

  // Add a new credit input field
  const addCreditInput = () => {
    setCreditInputs([...creditInputs, { employeeId: '', date: '', description: '', amount: '' }]);
  };

  // Add a new debit input field
  const addDebitInput = () => {
    setDebitInputs([...debitInputs, {  employeeId: '',date: '', description: '', amount: '' }]);
  };

  // Submit new credit entries
  const handleCreditSubmit = async (e) => {
    e.preventDefault();
    if (!account) return;

    const newCredits = [...(account.credits || []), ...creditInputs];

    await axios.put(`${AURL}/${account._id}`, { ...account, credits: newCredits })
      .then((res) => setAccount(res.data.account));

    // Clear input fields
    setCreditInputs([{ employeeId: '', date: '', description: '', amount: '' }]);
  };

  // Submit new debit entries
  const handleDebitSubmit = async (e) => {
    e.preventDefault();
    if (!account) return;

    const newDebits = [...(account.debits || []), ...debitInputs];

    await axios.put(`${AURL}/${account._id}`, { ...account, debits: newDebits })
      .then((res) => setAccount(res.data.account));

    // Clear input fields
    setDebitInputs([{  employeeId: '',date: '', description: '', amount: '' }]);
  };

  return (
    <div className="flex flex-col p-6 bg-gray-100 min-h-screen">
      <AccountNav />

      <div className="max-w-4xl mx-auto mt-6 space-y-6">
        {/* Credit Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Credit Details</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Employee ID</th>
                <th className="py-2 px-4 border">Date</th>
                <th className="py-2 px-4 border">Description</th>
                <th className="py-2 px-4 border">Amount</th>
              </tr>
            </thead>
            <tbody>
              {account?.credits?.map((credit, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border">{credit.employeeId}</td> 
                  <td className="py-2 px-4 border">{credit.date}</td>
                  <td className="py-2 px-4 border">{credit.description}</td>
                  <td className="py-2 px-4 border">{credit.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Add Credit Form */}
          <form onSubmit={handleCreditSubmit} className="mt-4">
            {creditInputs.map((input, index) => (
              <div key={index} className="flex items-center mb-4">
                <input
                  type="text"
                  name="employeeId"
                  value={input.employeeId}
                  onChange={(e) => handleCreditChange(index, e)}
                  placeholder="Employee ID"
                  className="border rounded-md p-2 mr-2 flex-1"
                  required
                />
                <input
                  type="date"
                  name="date"
                  value={input.date}
                  onChange={(e) => handleCreditChange(index, e)}
                  placeholder="Date"
                  className="border rounded-md p-2 mr-2 flex-1"
                  required
                />
                <input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={(e) => handleCreditChange(index, e)}
                  placeholder="Description"
                  className="border rounded-md p-2 mr-2 flex-1"
                  required
                />
                <input
                  type="number"
                  name="amount"
                  value={input.amount}
                  onChange={(e) => handleCreditChange(index, e)}
                  placeholder="Amount"
                  className="border rounded-md p-2 mr-2 flex-1"
                  required
                />
              </div>
            ))}
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={addCreditInput}
                className="bg-green-500 text-white py-1 px-4 rounded-md hover:bg-green-600"
              >
                Add Another Credit
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white py-1 px-4 rounded-md hover:bg-green-600"
              >
                Submit Credits
              </button>
            </div>
          </form>
        </div>

        {/* Debit Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Debit Details</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
              <th className="py-2 px-4 border">Employee ID</th>
                <th className="py-2 px-4 border">Date</th>
                <th className="py-2 px-4 border">Description</th>
                <th className="py-2 px-4 border">Amount</th>
              </tr>
            </thead>
            <tbody>
              {account?.debits?.map((debit, index) => (
                <tr key={index} className="hover:bg-gray-100">
                 <td className="py-2 px-4 border">{debit.employeeId}</td> 
                  <td className="py-2 px-4 border">{debit.date}</td>
                  <td className="py-2 px-4 border">{debit.description}</td>
                  <td className="py-2 px-4 border">{debit.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Add Debit Form */}

          <form onSubmit={handleDebitSubmit} className="mt-4">
            {debitInputs.map((input, index) => (
              <div key={index} className="flex items-center mb-4">
                  <input
                  type="text"
                  name="employeeId"
                  value={input.employeeId}
                  onChange={(e) => handleCreditChange(index, e)}
                  placeholder="Employee ID"
                  className="border rounded-md p-2 mr-2 flex-1"
                  required
                />
                <input
                  type="date"
                  name="date"
                  value={input.date}
                  onChange={(e) => handleDebitChange(index, e)}
                  placeholder="Date"
                  className="border rounded-md p-2 mr-2 flex-1"
                  required
                />
                <input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={(e) => handleDebitChange(index, e)}
                  placeholder="Description"
                  className="border rounded-md p-2 mr-2 flex-1"
                  required
                />
                <input
                  type="number"
                  name="amount"
                  value={input.amount}
                  onChange={(e) => handleDebitChange(index, e)}
                  placeholder="Amount"
                  className="border rounded-md p-2 mr-2 flex-1"
                  required
                />
              </div>
            ))}
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={addDebitInput}
                className="bg-green-500 text-white py-1 px-4 rounded-md hover:bg-green-600"
              >
                Add Another Debit
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white py-1 px-4 rounded-md hover:bg-green-600"
              >
                Submit Debits
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreditDebit;
