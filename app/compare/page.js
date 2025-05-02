import React from 'react';

const Compare = ({ loan1, loan2 }) => {
  return (
    <div className="compare-section">
      <h2>Loan Comparison</h2>
      <div>
        <h3>Loan 1</h3>
        <p>EMI: ₹{loan1.emi}</p>
        <p>Total Payment: ₹{loan1.total}</p>
      </div>
      <div>
        <h3>Loan 2</h3>
        <p>EMI: ₹{loan2.emi}</p>
        <p>Total Payment: ₹{loan2.total}</p>
      </div>
    </div>
  );
};

export default Compare;