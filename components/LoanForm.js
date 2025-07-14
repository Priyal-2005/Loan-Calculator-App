import { useState } from "react";

export default function LoanForm({ onCalculate }) {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [currency, setCurrency] = useState("USD");

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

    let emiConverted = null;
    if (currency !== "INR") {
      try {
        const response = await fetch("https://open.er-api.com/v6/latest/INR");
        const data = await response.json();
        const rate = data.rates[currency];
        emiConverted = (emi * rate).toFixed(2);
      } catch (error) {
        console.error("Currency conversion failed:", error);
      }
    } else {
      emiConverted = emi.toFixed(2);
    }

    onCalculate(
      {
        emi: emi.toFixed(2),
        convertedEMI: emiConverted,
        currency,
        totalAmount: totalAmount.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
      },
      generateAmortizationSchedule(P, monthlyRate, numPayments, emi)
    );
  };

  const generateAmortizationSchedule = (principal, monthlyRate, numPayments, emi) => {
    const schedule = [];
    let balance = principal;

    for (let month = 1; month <= numPayments; month++) {
      const interest = balance * monthlyRate;
      const principalPayment = emi - interest;
      balance -= principalPayment;

      schedule.push({
        month,
        principal_payment: principalPayment.toFixed(2),
        interest_payment: interest.toFixed(2),
        remaining_balance: balance > 0 ? balance.toFixed(2) : "0.00",
      });
    }

    return schedule;
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
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
      </select>
      <button type="submit">Calculate EMI</button>
    </form>
  );
}