// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASxrMUFbROfU8wCH3HMRMkG8zsJb1w_-0",
  authDomain: "quickcart-3bd91.firebaseapp.com",
  projectId: "quickcart-3bd91",
  storageBucket: "quickcart-3bd91.appspot.com",
  messagingSenderId: "130962411517",
  appId: "1:130962411517:web:34d7f95bbeaeb2bae05394",
  measurementId: "G-CKFDY1GYJQ"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig); 

export default firebase; 