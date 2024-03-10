// components/ImageOverlap.js
import React from 'react';

const SectionC = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center relative">
      {/* First Column */}
      <div className="relative w-full md:w-1/2 overflow-hidden">
        <img
          src="/images/excella-img1.jpg"  // Replace with your image URL
          alt="First Image"
          className="w-full h-auto rounded-3xl"
        />
      </div>

      {/* Second Column (Overlapping) */}
      <div className="absolute top-1/2 md:-mt-1/2 md:left-full md:transform md:-translate-x-1/2 md:w-1/2 overflow-hidden">
        <img
          src="/images/excella-img2.jpg"  // Replace with your image URL
          alt="Second Image"
          className="w-full h-auto rounded-full mx-auto"
        />
      </div>
    </div>
  );
};

export default SectionC;

