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
  
    try {
      const response = await fetch("https://www.amortization-api.com/api/v1/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          loan_amount: P,
          interest_rate: r,
          loan_term_months: n * 12
        })
      });
  
      const data = await response.json();
  
      onCalculate(
        {
          emi: data.emi.toFixed(2),
          totalAmount: data.total_payment.toFixed(2),
          totalInterest: data.total_interest.toFixed(2),
        },
        data.schedule
      );
    } catch (error) {
      console.error("API call failed:", error);
    }
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