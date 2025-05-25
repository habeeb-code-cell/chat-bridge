import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';   // You can create this file or remove this import if you don’t have it
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
