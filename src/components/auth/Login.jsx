import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { doSignInWithEmailAndPassword } from '../../firebase/Auth';
import { useAuth } from '../../context/AuthContext';
import '../styles/Login.css'; 

const Login = () => {
    const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
                
                window.location.href = '/home';
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setIsSigningIn(false);
            }
        }
    };

    return (
        <div className="center">
            {userLoggedIn && <Navigate to="/home" replace />}

            <main className="card">
                <div className="text-center">
                    <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Welcome Back</h3>
                </div>
                {errorMessage && <p className="text-red-600 font-bold">{errorMessage}</p>}
                <form onSubmit={onSubmit} className="space-y-5">
                    <div>
                        <label className="text-sm text-gray-600 font-bold">Email</label>
                        <input
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600 font-bold">Password</label>
                        <input
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isSigningIn}
                        className={`w-full px-4 py-2 text-white font-medium rounded-lg ${
                            isSigningIn ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'
                        }`}
                    >
                        {isSigningIn ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>
                <p className="text-center text-sm">
                    Don't have an account? <Link to="/register" className="hover:underline font-bold">Sign up</Link>
                </p>
            </main>
        </div>
    );
};

export default Login;