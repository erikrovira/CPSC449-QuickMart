// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* This route will load HomePage at http://localhost:3000/ */}
        <Route path="/" element={<HomePage />} />
        
        {/* This route will load LoginPage at http://localhost:3000/login */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
