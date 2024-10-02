import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firbase/firebase'; // Ensure correct path

export default function LoginPage() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state before attempting login
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate('/calendar'); // Redirecting to Calendar page after successful login
    } catch (error) {
      setError(error.message); // Set the error state to display the error
    }
  };

  const handleSignInWithGoogle = async () => {
    setError(''); // Reset error state before attempting login
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/calendar'); // Redirecting to Calendar page after successful Google sign-in
    } catch (error) {
      setError(error.message); // Set the error state to display the error
    }
  };

  return (
    <div>
      <h1 className="items-center flex justify-center font-extrabold text-3xl p-6">Login Page</h1>

      {/* Error Message */}
      {error && <p className="text-center text-red-500">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center p-5">
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="border-2 p-4 bg-blue-400 text-white text-center w-96 rounded-lg"
            required // Ensure the email field is required
          />
          <input
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className="border-2 p-4 bg-blue-400 text-white mt-4 text-center rounded-lg w-96"
            required // Ensure the password field is required
          />

          <button type="submit" className="p-4 w-48 text-white bg-blue-500 rounded-md hover:bg-blue-600 mt-8">
            Login
          </button>

          <p className="text-center text-black mt-4 rounded-lg">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500">
              Sign Up
            </Link>
          </p>

          <h3 className="mt-5 font-bold text-xl">Or login with:</h3>

          <button 
            onClick={handleSignInWithGoogle}
            type="button" // Prevent form submission on Google sign-in
            className="bg-white w-60 flex items-center justify-center p-3 m-6 border-2 rounded-2xl"
          >
            <img src="/src/assets/download.png" alt="Google" className="h-10 w-10" />
            <p>Login With Google</p>
          </button>
        </div>
      </form>
    </div>
  );
}
