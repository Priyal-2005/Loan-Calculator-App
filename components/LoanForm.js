import { useState } from "react";

export default function LoanForm({ onCalculate }) {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const P = parseFloat(principal);
    const r = parseFloat(rate);
    const n = parseFloat(years);

    if (!P || !r || !n) return;

    const monthlyRate = r / 12 / 100;
    const totalMonths = n * 12;

    const emi = (P * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    const totalPayment = emi * totalMonths;
    const totalInterest = totalPayment - P;

    // Create amortization schedule
    let balance = P;
    const amortizationSchedule = [];

    for (let i = 1; i <= totalMonths; i++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = emi - interestPayment;
      balance -= principalPayment;

      amortizationSchedule.push({
        month: i,
        principal: principalPayment.toFixed(2),
        interest: interestPayment.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : "0.00"
      });
    }

    onCalculate(
      {
        emi: emi.toFixed(2),
        totalAmount: totalPayment.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
      },
      amortizationSchedule
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