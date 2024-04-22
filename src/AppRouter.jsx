import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';


function AppRouter() {
  return (
    <Router>
      <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Router>
  );
}

export default AppRouter;