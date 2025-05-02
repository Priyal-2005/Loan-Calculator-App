'use client';
import React, { useState } from 'react';

export default function ComparePage() {
  const [loan1, setLoan1] = useState({ emi: 0, total: 0 });
  const [loan2, setLoan2] = useState({ emi: 0, total: 0 });

  // Mock or actual data — replace this with user input forms later
  return (
    <div className="compare-section" style={{ padding: '2rem' }}>
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
}