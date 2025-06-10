import React from 'react';

const AmortizationTable = () => {
  const loanAmount = 100000;
  const annualRate = 10;
  const loanTermMonths = 12;

  const monthlyRate = annualRate / 12 / 100;
  const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths) / (Math.pow(1 + monthlyRate, loanTermMonths) - 1);

  const schedule = [];
  let balance = loanAmount;

  for (let month = 1; month <= loanTermMonths; month++) {
    const interest = balance * monthlyRate;
    const principal = emi - interest;
    balance -= principal;

    schedule.push({
      month,
      principal_payment: principal.toFixed(2),
      interest_payment: interest.toFixed(2),
      remaining_balance: balance > 0 ? balance.toFixed(2) : "0.00",
    });
  }

  return (
    <div className="amortization-table">
      <h2>Loan Repayment Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Principal</th>
            <th>Interest</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((entry, index) => (
            <tr key={index}>
              <td>{entry.month}</td>
              <td>₹{entry.principal_payment}</td>
              <td>₹{entry.interest_payment}</td>
              <td>₹{entry.remaining_balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AmortizationTable;