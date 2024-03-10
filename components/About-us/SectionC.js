// components/ImageOverlap.js
import React from 'react';

const SectionC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      {/* First Column */}
      <div className="relative w-full md:w-1/2 overflow-hidden">
        <img
          src="/images/excella-img2.jpg"  // Replace with your image URL
          alt="First Image"
          className="w-full h-auto rounded-3xl"
        />
      </div>

      {/* Second Column (Overlapping) */}
      <div className="relative w-full md:w-1/2 md:-mt-16 overflow-hidden">
        <img
          src="/images/excella-img1.jpg"  // Replace with your image URL
          alt="Second Image"
          className="w-full h-auto rounded-full mx-auto"
        />
      </div>
    </div>
  );
};

export default SectionC;
