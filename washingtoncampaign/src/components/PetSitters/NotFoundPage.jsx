// components/NotFoundPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // Redirect to homepage
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center">
      <h1 className="text-4xl font-bold mb-6">404</h1>
      
      {/* Image */}
      <img
        src="/path-to-your-dog-image.png" // Use the same dog image for branding
        alt="Lost Dog"
        className="mb-6"
        style={{ width: '300px', height: '300px' }}
      />
      
      <h2 className="text-2xl mb-6">Oops! Page not found.</h2>

      {/* Go Home Button */}
      <button
        onClick={handleGoHome}
        className="bg-yellow-500 text-black py-3 px-6 rounded-lg text-lg font-bold"
      >
        GO HOME
      </button>
    </div>
  );
};

export default NotFoundPage;
