import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App';
import './index.scss';

const container = document.getElementById('root');

// This "if" statement acts as a Type Guard. 
// Inside this block, TypeScript knows for a fact that 'container' is NOT null.
if (container) {
  const root = createRoot(container); 
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // This helps you debug if the HTML is actually missing the div!
  console.error("Failed to find the root element with id 'root'");
}
