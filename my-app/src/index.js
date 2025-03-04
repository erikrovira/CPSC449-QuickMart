import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/index.css'; // Ensure this file exists if you're importing it

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
