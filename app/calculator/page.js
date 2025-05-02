import React, { useState } from "react";
import LoanForm from "../components/LoanForm"


export default function CalculatorPage() {
  const [result, setResult] = useState(null);

  return (
    <div style={{ padding: "2rem" }}>
      <LoanForm onResult={setResult} />
      {result && (
        <div style={{ marginTop: "2rem" }}>
          <h3>Loan Summary</h3>
          <p><strong>Monthly Payment:</strong> ₹{result?.monthlyPayment}</p>
          <p><strong>Total Interest:</strong> ₹{result?.totalInterest}</p>
          <p><strong>Total Payment:</strong> ₹{result?.totalPayment}</p>
        </div>
      )}
    </div>
  );
}