// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3bQuCVkhpaL1qXp6MxEfsLTGJOosAWgQ",
  authDomain: "amaaros-114a8.firebaseapp.com",
  projectId: "amaaros-114a8",
  storageBucket: "amaaros-114a8.appspot.com", // FIXED
  messagingSenderId: "988886953876",
  appId: "1:988886953876:web:4d33951596402c2f83a981",
  measurementId: "G-H99Z2B0L74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);