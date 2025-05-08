'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email, password }));
      alert('Signup successful! You can now login.');
      router.push('/login');
    } else {
      alert('Please enter a valid email and password.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
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
    </div>
  );
}