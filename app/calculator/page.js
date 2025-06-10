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

  const handleClick = () => {
    if (!loanDetails || !schedule.length) {
      alert("No data to export");
      return;
    }

    const csvRows = [];
    csvRows.push("Loan Amount,Interest Rate,Loan Term (months),EMI,Total Interest,Total Payment");
    csvRows.push(`-, -, -, ${loanDetails.emi}, ${loanDetails.totalInterest}, ${loanDetails.totalAmount}`);

    csvRows.push("\nMonth,Principal,Interest,Balance");
    schedule.forEach((entry) => {
      csvRows.push(`${entry.month},${entry.principal_payment},${entry.interest_payment},${entry.remaining_balance}`);
    });

    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "loan_calculator_export.csv";
    a.click();
    URL.revokeObjectURL(url);
  }
  }

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
          <button onClick={handleClick} style={{marginTop: "1rem",padding: "10px 16px", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "5px", cursor: "pointer"}}>📤 Export as CSV</button>
        </>
      )}
    </div>
  );