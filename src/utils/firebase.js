// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEIGeexKHwuS5tHGtlS7TeU2J_tVv8c-I",
  authDomain: "netflixgpt-e344f.firebaseapp.com",
  projectId: "netflixgpt-e344f",
  storageBucket: "netflixgpt-e344f.firebasestorage.app",
  messagingSenderId: "459660726396",
  appId: "1:459660726396:web:786d1d4a8cef165523f9f9",
  measurementId: "G-K7MNHWMFS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();