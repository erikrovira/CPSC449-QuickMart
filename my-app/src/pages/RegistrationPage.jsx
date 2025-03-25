// src/pages/RegistrationPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/RegistrationPage.css'; // Ensure you have this CSS file

function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the user's data in localStorage
    const userData = { username, password, email, phone, firstName, lastName };
    localStorage.setItem('registeredUser', JSON.stringify(userData));

    alert('Registration successful! Please log in.');

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="registration-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Phone Number (Optional)
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>

        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
