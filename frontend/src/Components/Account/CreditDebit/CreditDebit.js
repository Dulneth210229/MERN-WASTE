import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import AccountNav from '../AccountNav/AccountNav';

const AURL = 'http://localhost:5001/account';

function CreditDebit() {
  const [account, setAccount] = useState();
  const [creditInputs, setCreditInputs] = useState([{ employeeId: '', description: '', credit: '' }]);
  const [debitInputs, setDebitInputs] = useState([{ employeeId: '', description: '', debit: '' }]);

  // Fetch account data on mount
  useEffect(() => {
    axios.get(AURL).then((res) => {
      const accountData = res.data.account;
      accountData.entries = accountData.entries || [];
      setAccount(accountData);
    });
  }, []);

  // Handle input changes for credit
  const handleCreditChange = (index, e) => {
    const { name, value } = e.target;
    const newInputs = [...creditInputs];
    newInputs[index][name] = value;
    setCreditInputs(newInputs);
  };

  // Handle input changes for debit
  const handleDebitChange = (index, e) => {
    const { name, value } = e.target;
    const newInputs = [...debitInputs];
    newInputs[index][name] = value;
    setDebitInputs(newInputs);
  };

  // Add new credit input row
  const addCreditInput = () => {
    setCreditInputs([...creditInputs, { employeeId: '', description: '', credit: '' }]);
  };

  // Add new debit input row
  const addDebitInput = () => {
    setDebitInputs([...debitInputs, { employeeId: '', description: '', debit: '' }]);
  };

  // Submit new credit and debit entries
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!account) return;

    // Prepare credit and debit entries separately
    const creditEntries = creditInputs.map((input) => ({
      employeeId: input.employeeId,
      description: input.description,
      credit: input.credit,
      debit: null, // Indicating this entry is for credit
    }));

    const debitEntries = debitInputs.map((input) => ({
      employeeId: input.employeeId,
      description: input.description,
      credit: null, // Indicating this entry is for debit
      debit: input.debit,
    }));

    // Combine credit and debit entries
    const newEntries = [
      ...(account.entries || []),
      ...creditEntries,
      ...debitEntries,
    ];

    // Save to the backend (assumed to use PUT request)
    await axios.put(`${AURL}/${account._id}`, { ...account, entries: newEntries })
      .then((res) => setAccount(res.data.account));

    // Clear input fields after submission
    setCreditInputs([{ employeeId: '', description: '', credit: '' }]);
    setDebitInputs([{ employeeId: '', description: '', debit: '' }]);
  };

  return (
    <div className="flex flex-col p-6 bg-gray-100 min-h-screen">
      <AccountNav />

      <div className="max-w-4xl mx-auto mt-6 space-y-6">
        {/* Credit Section */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">Credit Details</h2>

          {/* Table for Credit Entries */}
          <table className="min-w-full bg-gray-50 border border-gray-200 rounded-lg mb-6">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-6 text-left text-gray-700 font-semibold">Employee ID</th>
                <th className="py-3 px-6 text-left text-gray-700 font-semibold">Description</th>
                <th className="py-3 px-6 text-left text-gray-700 font-semibold">Credit</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {creditInputs.map((input, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-3 px-6">
                    <input
                      type="text"
                      name="employeeId"
                      value={input.employeeId}
                      onChange={(e) => handleCreditChange(index, e)}
                      placeholder="Employee ID"
                      className="border rounded-lg p-2"
                      required
                    />
                  </td>
                  <td className="py-3 px-6">
                    <input
                      type="text"
                      name="description"
                      value={input.description}
                      onChange={(e) => handleCreditChange(index, e)}
                      placeholder="Description"
                      className="border rounded-lg p-2"
                      required
                    />
                  </td>
                  <td className="py-3 px-6">
                    <input
                      type="text"
                      name="credit"
                      value={input.credit}
                      onChange={(e) => handleCreditChange(index, e)}
                      placeholder="Credit"
                      className="border rounded-lg p-2"
                      required
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            type="button"
            onClick={addCreditInput}
            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-all"
          >
            Add Another Credit Entry
          </button>
        </div>

        {/* Debit Section */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">Debit Details</h2>

          {/* Table for Debit Entries */}
          <table className="min-w-full bg-gray-50 border border-gray-200 rounded-lg mb-6">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-6 text-left text-gray-700 font-semibold">Employee ID</th>
                <th className="py-3 px-6 text-left text-gray-700 font-semibold">Description</th>
                <th className="py-3 px-6 text-left text-gray-700 font-semibold">Debit</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {debitInputs.map((input, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-3 px-6">
                    <input
                      type="text"
                      name="employeeId"
                      value={input.employeeId}
                      onChange={(e) => handleDebitChange(index, e)}
                      placeholder="Employee ID"
                      className="border rounded-lg p-2"
                      required
                    />
                  </td>
                  <td className="py-3 px-6">
                    <input
                      type="text"
                      name="description"
                      value={input.description}
                      onChange={(e) => handleDebitChange(index, e)}
                      placeholder="Description"
                      className="border rounded-lg p-2"
                      required
                    />
                  </td>
                  <td className="py-3 px-6">
                    <input
                      type="text"
                      name="debit"
                      value={input.debit}
                      onChange={(e) => handleDebitChange(index, e)}
                      placeholder="Debit"
                      className="border rounded-lg p-2"
                      required
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            type="button"
            onClick={addDebitInput}
            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-all"
          >
            Add Another Debit Entry
          </button>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-all"
          >
            Submit Entries
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreditDebit;
