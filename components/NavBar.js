"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/signup');
      setLoggedIn(false);
    } catch (error) {
      console.error('Error logging out: ', error);
    }
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
          <Link href="/visualize">Visualize</Link>
          {loggedIn ? (
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link href="/signup">Sign Up</Link>
              <Link href="/login">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}