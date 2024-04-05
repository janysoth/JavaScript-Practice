/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyADAHyUOJ3fMFomCgiacD3HAEge7pLnYQ0",
  authDomain: "react-notes-8ffcf.firebaseapp.com",
  projectId: "react-notes-8ffcf",
  storageBucket: "react-notes-8ffcf.appspot.com",
  messagingSenderId: "1030863313425",
  appId: "1:1030863313425:web:cbbc2c0481430feb866fb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")