import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-brand">LoanCalc</div>
        <div className="navbar-links">
          <Link href="/calculator">Calculator</Link>
          <Link href="/compare">Compare</Link>
          <Link href="/export">Export</Link>
          <Link href="/visualize">Visualize</Link>
        </div>
      </div>
    </nav>
  );
}