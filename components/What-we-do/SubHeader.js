// components/AboutUsPage.js

import React from 'react';

const ServicesPage = () => {
  return (
    <div>
      {/* Header */}
      <div
        className="relative h-[400px] max-h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url('/images/excella-img3.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold uppercase z-10 text-center">
            WHAT WE DO
          </h1>
        </div>
      </div>

      
    </div>
  );
};

export default ServicesPage;
