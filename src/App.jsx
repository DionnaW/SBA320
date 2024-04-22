import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import Login from './pages/Login';
import Profile from './pages/Profile';

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


function App() {
  return (
    <>
    <Login/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        </Routes>
    </>
  );
}

export default App;