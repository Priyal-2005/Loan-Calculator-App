import React, { useEffect, useState } from 'react';

const AmortizationTable = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await fetch("https://www.amortization-api.com/api/v1/schedule", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            loan_amount: 100000,
            interest_rate: 10,
            loan_term_months: 12
          })
        });

        const result = await response.json();
        setSchedule(result.schedule || []);
      } catch (error) {
        console.error("Failed to fetch amortization schedule:", error);
      }
    };

    fetchSchedule();
  }, []);

  if (!Array.isArray(schedule) || schedule.length === 0) {
    return <p>No amortization schedule to display.</p>;
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