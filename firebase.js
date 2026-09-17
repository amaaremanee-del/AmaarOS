// firebase.js (v9 modular)

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3bQuCVkhpaL1qXp6MxEfsLTGJOosAWgQ",
  authDomain: "amaaros-114a8.firebaseapp.com",
  projectId: "amaaros-114a8",
  storageBucket: "amaaros-114a8.firebasestorage.app",
  messagingSenderId: "988886953876",
  appId: "1:988886953876:web:4d33951596402c2f83a981",
  measurementId: "G-H99Z2B0L74"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);