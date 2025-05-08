export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }} className="intro">
      <h1>💼 Welcome to LoanMate</h1>
      <h3>A smart loan calculator app</h3>
      <h5>Take control of your finances with our all-in-one loan management tool. Whether you're planning a personal loan, home loan, or car loan — we make it simple and stress-free to understand your repayment journey.</h5>


      <h2>🔍 What You Can Do Here:</h2>
      <ul style={{listStyle: "none"}}>
        <li>✅ <strong>Calculate EMIs Instantly:</strong> Enter your loan amount, interest rate, and duration — get your monthly EMI, total payment, and total interest in one click.</li>
        <li>✅ <strong>Visualize Your Loan:</strong> View easy-to-understand charts that show how your payments are split between principal and interest over time.</li>
        <li>✅ <strong>Explore Amortization Schedule:</strong> Get a month-by-month breakdown of your loan repayment. Know exactly what you're paying for and when.</li>
        <li>✅ <strong>Compare Loan Options:</strong> Enter multiple loan plans and compare them side-by-side. See which one saves you more.</li>
        <li>✅ <strong>No Sign-Up, No Hassle:</strong> Fast, secure, and 100% frontend — no login required. Start planning smart today!</li>
      </ul>
    </main>
  );
}