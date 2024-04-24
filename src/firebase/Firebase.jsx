// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2G4JdhgQ0mCM67Qvc_zp2X2ddULc48XI",
  authDomain: "deez-cold-ones.firebaseapp.com",
  projectId: "deez-cold-ones",
  storageBucket: "deez-cold-ones.appspot.com",
  messagingSenderId: "181507391042",
  appId: "1:181507391042:web:1eeaa504ca8032f22d37db",
  measurementId: "G-JSW7TKK33X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };