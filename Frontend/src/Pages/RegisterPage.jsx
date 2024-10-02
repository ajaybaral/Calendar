import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, firestore } from '../../src/firbase/firebase.js';

export default function RegisterPage() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password in Firebase
      const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password);

      // Add user data to Firestore database
      await setDoc(doc(firestore, 'users', user.uid), {
        email: user.email,
      });

      // Redirect to login page after successful registration
      navigate('/login');
    } catch (error) {
      setError(error.message); // Show error message
    }
  };

  return (
    <div>
      <h1 className="items-center flex justify-center font-extrabold text-3xl p-6">Register Page</h1>

      {/* Error message */}
      {error && <p className="text-center text-red-500">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center p-5">
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="border-2 p-4 bg-blue-400 text-white text-center w-96 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className="border-2 p-4 bg-blue-400 text-white mt-4 text-center rounded-lg w-96"
          />

          <button className="p-4 w-48 text-white bg-blue-500 rounded-md hover:bg-blue-600 mt-8">Register</button>
        </div>
      </form>

      <p className="flex justify-center items-center mt-4">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-500 hover:underline ml-2">
          Login
        </Link>
      </p>
    </div>
  );
}
