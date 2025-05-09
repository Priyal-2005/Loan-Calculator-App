"use client"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function HomePage() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    router.push("/login");
  };

  const handleSignUp = () => {
    router.push("/signup");
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      router.push("/");
    } catch (error) {
      console.error("Logout Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: "2rem" }} className="intro">
      <h1>💼 Welcome to LoanMate</h1>
      <h3>A smart loan calculator app</h3>
      <h5>Take control of your finances with our all-in-one loan management tool. Whether you're planning a personal loan, home loan, or car loan — we make it simple and stress-free to understand your repayment journey.</h5>

      <div style={{ marginBottom: "1rem", display: "flex", gap: "0.5rem" }}>
        {!isLoggedIn ? (
          <>
            <button style={{ padding: "0.5rem 1rem", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={handleLogin}>Login</button>
            <button style={{ padding: "0.5rem 1rem", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={handleSignUp}>Sign Up</button>
          </>
        ) : (
          <button 
            style={{ padding: "0.5rem 1rem", backgroundColor: "#dc3545", color: "#fff", border: "none", borderRadius: "5px", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.6 : 1 }} 
            onClick={handleLogout}
            disabled={loading}
          >
            {loading ? "Logging Out..." : "Logout"}
          </button>
        )}
      </div>

      <h2>🔍 What You Can Do Here:</h2>
      <ul style={{ listStyle: "none" }}>
        <li>✅ <strong>Calculate EMIs Instantly:</strong> Enter your loan amount, interest rate, and duration — get your monthly EMI, total payment, and total interest in one click.</li>
        <li>✅ <strong>Visualize Your Loan:</strong> View easy-to-understand charts that show how your payments are split between principal and interest over time.</li>
        <li>✅ <strong>Explore Amortization Schedule:</strong> Get a month-by-month breakdown of your loan repayment. Know exactly what you're paying for and when.</li>
        <li>✅ <strong>Compare Loan Options:</strong> Enter multiple loan plans and compare them side-by-side. See which one saves you more.</li>
        <li>✅ <strong>Secure Your Data with Account Access:</strong> Sign up to save your calculations for future reference.</li>
      </ul>
    </main>
  );
}