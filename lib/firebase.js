// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSncs2er4lA3zxuKTwLMNsNC5b3woXqtg",
  authDomain: "loan-calculator-app-55155.firebaseapp.com",
  projectId: "loan-calculator-app-55155",
  storageBucket: "loan-calculator-app-55155.firebasestorage.app",
  messagingSenderId: "961326695812",
  appId: "1:961326695812:web:a7b19d5f0e131ed166c9d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };