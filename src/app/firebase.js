// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCaC4GuOT3AwsSUzlRwk2ES0cUKtv5DaY",
    authDomain: "microproyecto2-4d864.firebaseapp.com",
    projectId: "microproyecto2-4d864",
    storageBucket: "microproyecto2-4d864.appspot.com",
    messagingSenderId: "354685661002",
    appId: "1:354685661002:web:643b02d2376f8079ba1bb3",
    measurementId: "G-T0HGMBJVBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
