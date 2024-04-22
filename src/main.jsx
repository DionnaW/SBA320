import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyD2G4JdhgQ0mCM67Qvc_zp2X2ddULc48XI",
    authDomain: "deez-cold-ones.firebaseapp.com",
    projectId: "deez-cold-ones",
    storageBucket: "deez-cold-ones.appspot.com",
    messagingSenderId: "181507391042",
    appId: "1:181507391042:web:1eeaa504ca8032f22d37db",
    measurementId: "G-JSW7TKK33X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
