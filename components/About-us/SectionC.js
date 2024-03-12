// components/ImageOverlap.js
import React from 'react';

const SectionC = () => {
  return (

    <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 bg-gray-100">
    <div className="container mx-auto flex items-center overflow-hidden">
      {/* First Column (2/3 Width) */}
      <div className="relative w-2/3 overflow-hidden">
        <img
          src="/images/excella-img1.jpg"  // Replace with your image URL
          alt="First Image"
          className="w-full h-[90%] rounded-[20px]"
        />
      </div>

      {/* Second Column (1/3 Width - Overlapping) */}
      <div className="relative w-1/3 -ml-8 overflow-hidden">
        <img
          src="/images/excella-img2.jpg"  // Replace with your image URL
          alt="Second Image"
          className="w-full h-[90%] rounded-[20px] border-4 border-white"
        />
      </div>
    </div>
    </section>
  );
};

export default SectionC;



