// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANwQVEwaZznz_Nm5wtuLucZtZd5Gi9yJg",
  authDomain: "hotflix-gpt.firebaseapp.com",
  projectId: "hotflix-gpt",
  storageBucket: "hotflix-gpt.appspot.com",
  messagingSenderId: "57513113292",
  appId: "1:57513113292:web:4b367df2bf4af384c2f469",
  measurementId: "G-23XWKEEFKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()