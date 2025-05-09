'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push('/');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        router.push('/');
      } catch (error) {
        alert('Error creating account. Please try again.');
        console.error("Signup Error:", error);
      }
    } else {
      alert('Please enter a valid email and password.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already registered? <Link href="/login">Login</Link>
      </p>
    </div>
  );
}