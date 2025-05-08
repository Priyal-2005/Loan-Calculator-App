"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    setLoggedIn(isLoggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setLoggedIn(false);
    router.push('/');
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link href="/">LoanMate</Link>
        </div>
        <div className="navbar-links">
          <Link href="/calculator">Calculator</Link>
          <Link href="/compare">Compare</Link>
          <Link href="/export">Export</Link>
          <Link href="/visualize">Visualize</Link>
          {loggedIn ? (
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/signup">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}