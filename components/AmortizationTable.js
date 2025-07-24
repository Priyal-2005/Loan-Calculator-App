import React from 'react';

const AmortizationTable = ({ schedule }) => {
  if (!schedule || schedule.length === 0) {
    return null;
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