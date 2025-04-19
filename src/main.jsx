import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Note: 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ Use createRoot
root.render(
  <BrowserRouter basename="/portfolio">
    <App />
  </BrowserRouter>
);
