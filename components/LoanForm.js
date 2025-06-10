import { useState } from "react";

export default function LoanForm({ onCalculate }) {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const P = parseFloat(principal);
    const r = parseFloat(rate);
    const n = parseFloat(years);
  
    if (!P || !r || !n) return;
  
    const monthlyRate = r / 12 / 100;
    const numPayments = n * 12;
    const emi = P * monthlyRate * Math.pow(1 + monthlyRate, numPayments) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    const totalAmount = emi * numPayments;
    const totalInterest = totalAmount - P;

    onCalculate(
      {
        emi: emi.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
      },
      [] // no schedule since we're not using an API
    );
  };

  return (
    <form onSubmit={handleSubmit} className="loan-form">
      <h2>Loan Calculator</h2>
      <input
        type="number"
        placeholder="Loan Amount (₹)"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Interest Rate (%)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Loan Term (years)"
        value={years}
        onChange={(e) => setYears(e.target.value)}
        required
      />
      <button type="submit">Calculate EMI</button>
    </form>
  );
}