import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Note: 'react-dom/client'
import { HashRouter } from 'react-router-dom'; // ✅ Switched from BrowserRouter to HashRouter
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ Use createRoot
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
