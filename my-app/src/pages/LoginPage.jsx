// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/LoginPage.css'; // Ensure this CSS file exists

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Retrieve the registered user from localStorage
    const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      alert('Login successful!');
      // Optionally, mark the user as logged in by storing a flag or token
      navigate('/'); // Redirect to the HomePage or another secure page
    } else {
      setError('Invalid credentials. Please try again or register.');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input"
          />
        </div>
        <button type="submit" className="button">Login</button>
        
        <div className="registration-link">
          <p>
            Don’t have an account? <Link to="/register">Create one here</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
