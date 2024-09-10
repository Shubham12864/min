// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeSINlbCy-Vhj1k0LRuHTKOb_-KkQhJHU",
  authDomain: "min-a8f6e.firebaseapp.com",
  projectId: "min-a8f6e",
  storageBucket: "min-a8f6e.appspot.com",
  messagingSenderId: "974565932980",
  appId: "1:974565932980:web:6852e3ae7c01e97559bce1",
  measurementId: "G-6HMZ7BWTMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);