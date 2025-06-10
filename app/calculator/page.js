'use client';
import React, { useState } from "react";
import LoanForm from "@/components/LoanForm";
import ResultCard from "@/components/ResultCard";
import AmortizationTable from "@/components/AmortizationTable";

export default function CalculatorPage() {
  const [loanDetails, setLoanDetails] = useState({
    emi: 0,
    convertedEMI: null,
    currency: "INR",
    totalInterest: 0,
    totalAmount: 0,
  });

  const [schedule, setSchedule] = useState([]);

  const handleCalculation = (details, paymentSchedule) => {
    setLoanDetails(details);
    setSchedule(paymentSchedule);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <LoanForm onCalculate={handleCalculation} />
      {loanDetails.emi > 0 && (
        <>
          <ResultCard
            emi={loanDetails.emi}
            convertedEMI={loanDetails.convertedEMI}
            currency={loanDetails.currency}
            totalInterest={loanDetails.totalInterest}
            totalAmount={loanDetails.totalAmount}
          />
          <AmortizationTable schedule={schedule} />
        </>
      )}
    </div>
  );
}