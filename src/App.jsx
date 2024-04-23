import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Nav from './components/Nav';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Welcome from './pages/Welcome';


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
const auth = getAuth(app);

function App() {
  return (
    <div>

      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='profile' element={<Profile/>}/>
        </Routes>
      </Router>

    </div>


// function App() {
  // return (
/*  */
    /* <Router> */
      /* <Routes> */
        /* <Route path="/" element={<Welcome />} /> */
        /* <Route path="/login" element={<Login />} /> */
        /* <Route path="/profile" element={<Profile />} /> */
      /* </Routes> */
    /* </Router> */
  );
}

export default App;