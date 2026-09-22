import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
    getAuth,
    setPersistence,
    browserLocalPersistence,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC3bQuCVkhpaL1qXp6MxEfsLTGJOosAWgQ",
    authDomain: "amaaros-114a8.firebaseapp.com",
    projectId: "amaaros-114a8",
    storageBucket: "amaaros-114a8.appspot.com",
    messagingSenderId: "988886953876",
    appId: "1:988886953876:web:4d33951596402c2f83a981",
    measurementId: "G-H99Z2B0L74"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ⭐ FORCE Firebase to save login session
setPersistence(auth, browserLocalPersistence);

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
};