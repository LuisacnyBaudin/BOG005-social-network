
// Import the functions you need from the SDKs you need
import { initializeApp } from "./firebase-funtion.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAYNkAwri8wxkV4a6833ctR1Sf2KblaBoI",
  authDomain: "ninth-glider-353503.firebaseapp.com",
  projectId: "ninth-glider-353503",
  storageBucket: "ninth-glider-353503.appspot.com",
  messagingSenderId: "776333357796",
  appId: "1:776333357796:web:75109bb844fb91f305b2f1",
  measurementId: "G-SQ6ZR33MLR"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);


