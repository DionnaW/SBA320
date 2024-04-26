// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librarie

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWRC0UwQFParV0syCwkJe1d7_P8YqvRrw",
  authDomain: "develop-authorization.firebaseapp.com",
  projectId: "develop-authorization",
  storageBucket: "develop-authorization.appspot.com",
  messagingSenderId: "358832948160",
  appId: "1:358832948160:web:8006e7fdf1215becd0be25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

