'use client';
import React, { useState } from 'react';

export default function ComparePage() {
  const [loan1, setLoan1] = useState({ principal: '', rate: '', years: '', emi: 0, total: 0 });
  const [loan2, setLoan2] = useState({ principal: '', rate: '', years: '', emi: 0, total: 0 });

  const calculateEMI = (P, r, n) => {
    const monthlyRate = r / 12 / 100;
    const numPayments = n * 12;
    if (!P || !r || !n || monthlyRate === 0) return [0, 0];
    const emi = P * monthlyRate * Math.pow(1 + monthlyRate, numPayments) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    const total = emi * numPayments;
    return [emi.toFixed(2), total.toFixed(2)];
  };

  const handleCompare = () => {
    const [emi1, total1] = calculateEMI(Number(loan1.principal), Number(loan1.rate), Number(loan1.years));
    const [emi2, total2] = calculateEMI(Number(loan2.principal), Number(loan2.rate), Number(loan2.years));
    setLoan1(prev => ({ ...prev, emi: emi1, total: total1 }));
    setLoan2(prev => ({ ...prev, emi: emi2, total: total2 }));
  };

  return (
    <div className="compare-section" style={{ padding: '2rem' }}>
      <h2>Loan Comparison</h2>

      <div>
        <h3>Loan 1</h3>
        <input
          type="number"
          placeholder="Principal"
          value={loan1.principal}
          onChange={(e) => setLoan1({ ...loan1, principal: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rate (%)"
          value={loan1.rate}
          onChange={(e) => setLoan1({ ...loan1, rate: e.target.value })}
        />
        <input
          type="number"
          placeholder="Years"
          value={loan1.years}
          onChange={(e) => setLoan1({ ...loan1, years: e.target.value })}
        />
        <p>EMI: ₹{loan1.emi}</p>
        <p>Total Payment: ₹{loan1.total}</p>
      </div>

      <div>
        <h3>Loan 2</h3>
        <input
          type="number"
          placeholder="Principal"
          value={loan2.principal}
          onChange={(e) => setLoan2({ ...loan2, principal: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rate (%)"
          value={loan2.rate}
          onChange={(e) => setLoan2({ ...loan2, rate: e.target.value })}
        />
        <input
          type="number"
          placeholder="Years"
          value={loan2.years}
          onChange={(e) => setLoan2({ ...loan2, years: e.target.value })}
        />
        <p>EMI: ₹{loan2.emi}</p>
        <p>Total Payment: ₹{loan2.total}</p>
      </div>

      <button onClick={handleCompare}>Compare Loans</button>
    </div>
  );
}