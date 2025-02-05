// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter from react-router-dom
// import App from './App.jsx';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider for SEO
// import ReactGA from 'react-ga4'; // Import Google Analytics
// import App from './App.jsx';
// import './index.css';

// // Initialize Google Analytics with your Measurement ID
// // ReactGA.initialize('G-XXXXXXXXXX'); // Replace with your GA4 Measurement ID
// // ReactGA.send('pageview'); // Track initial page view

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <HelmetProvider> {/* Wrap the application with HelmetProvider */}
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </HelmetProvider>
//   </React.StrictMode>
// );





import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './index.css';
import { initGA } from '../utils/analytics.js';

// Initialize Google Analytics
initGA('G-VBQBZ0ZDWQ'); // Replace with your GA4 tracking ID

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
