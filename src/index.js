import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional, for your CSS
import App from './App';
// Render the App component inside the div with id="root"
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
