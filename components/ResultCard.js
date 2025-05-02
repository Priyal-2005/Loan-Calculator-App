import React from 'react';

const ResultCard = ({ emi, totalInterest, totalAmount }) => {
  return (
    <div className="result-card">
      <h2>Loan Summary</h2>
      <p><strong>Monthly EMI:</strong> ₹{emi}</p>
      <p><strong>Total Interest:</strong> ₹{totalInterest}</p>
      <p><strong>Total Payment:</strong> ₹{totalAmount}</p>
    </div>
  );
};

export default ResultCard;