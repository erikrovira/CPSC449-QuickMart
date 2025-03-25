// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/common/Header/NavBar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        {/* This route will load HomePage at http://localhost:3000/ */}
        <Route path="/" element={<HomePage />} />
        {/* This route will load ProductPage at http://localhost:3000/products */}
        <Route path="/products" element={<ProductPage />} />
        {/* This route will load LoginPage at http://localhost:3000/login */}
        <Route path="/login" element={<LoginPage />} />
        {/* This route will load RegestrationPage at http://localhost:3000/register */}
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
