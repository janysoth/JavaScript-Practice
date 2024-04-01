/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2umtVTeaNDjkx7kFelYDaD6SBIIT9KiQ",
  authDomain: "react-notes-1e6dd.firebaseapp.com",
  projectId: "react-notes-1e6dd",
  storageBucket: "react-notes-1e6dd.appspot.com",
  messagingSenderId: "840146123607",
  appId: "1:840146123607:web:21b35f3fb118bd935e1c12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const notesCollection = collection(db, "notes");