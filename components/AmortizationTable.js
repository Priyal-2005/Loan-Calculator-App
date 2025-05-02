import React from 'react';

const AmortizationTable = ({ schedule }) => {
  if (!Array.isArray(schedule) || schedule.length === 0) {
    return <p>No amortization schedule to display.</p>;
  }
  return (
    <div className="amortization-table">
      <h2>Amortization Schedule</h2>
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
              <td>₹{entry.principal}</td>
              <td>₹{entry.interest}</td>
              <td>₹{entry.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AmortizationTable;