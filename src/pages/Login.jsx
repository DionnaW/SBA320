import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const auth = getAuth(); // this is for the initialize of Firebase auth

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      // this is for the sign using firebase
      await signInWithEmailAndPassword(auth, email, password);
      // this will redirect to the profile page upon a successful login
      window.location.href = '/profile';
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />

        <input type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default Login;