import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword } from '../firebase/Auth';
import { useAuth } from '../components/AuthProvider';

const Main = () => {
  const navigate = useNavigate();
  const auth = useAuth(); // Assuming useAuth is a custom hook to get the auth object

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // here will create user account in Firebase
      await doCreateUserWithEmailAndPassword(auth, email, password);
      
      // this is the redirection to login page
      navigate('/login');
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  };

  return (
    <div className='container'>
      <h1>Please Create an Account</h1>
      <div className="form-container">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          /><br />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          /><br />
          <label htmlFor="birthday">Birthday:</label>
          <input
            type="date"
            id="birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          /><br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br />
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Main;