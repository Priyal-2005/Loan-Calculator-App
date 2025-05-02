import React, { useState } from "react";
import "./global.css"
import LoanForm from "./components/LoanForm";
import ResultCard from "./components/ResultCard";
import AmortizationTable from "./components/AmortizationTable";

function App() {
  const [loanDetails, setLoanDetails] = useState({
    emi: 0,
    totalInterest: 0,
    totalAmount: 0,
  });

  const [schedule, setSchedule] = useState([]);

  const handleCalculation = (details, paymentSchedule) => {
    setLoanDetails(details);
    setSchedule(paymentSchedule);
  };

  return (
    <div className="App">
      <h1>Loan Calculator</h1>
      <LoanForm onCalculate={handleCalculation} />
      {loanDetails.emi > 0 && (
        <>
          <ResultCard
            emi={loanDetails.emi}
            totalInterest={loanDetails.totalInterest}
            totalAmount={loanDetails.totalAmount}
          />
          <AmortizationTable schedule={schedule} />
        </>
      )}
    </div>
  );
}

export default App;