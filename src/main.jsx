import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import './index.css';  // Import your CSS
import App from './App';  // Import your main App component

// Render the application, wrapped inside BrowserRouter
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* Add BrowserRouter here to enable routing */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
