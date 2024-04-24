import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
// import { auth } from './firebase/Firebase';
// import AuthProvider from './components/AuthProvider';
import Nav from './components/Nav';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Router>

    </div>

  );
}

export default App;