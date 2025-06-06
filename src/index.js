import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // Global styles
import { ThemeProvider } from './theme/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
