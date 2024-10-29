// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBDnQBNsqGQ-QaNuSWZiVRhnSwGGx4aXs",
  authDomain: "pooja-firebase-project.firebaseapp.com",
  projectId: "pooja-firebase-project",
  storageBucket: "pooja-firebase-project.appspot.com",
  messagingSenderId: "664144531340",
  appId: "1:664144531340:web:46acced22adf7f218310a9",
  measurementId: "G-R1H5BEJGW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);