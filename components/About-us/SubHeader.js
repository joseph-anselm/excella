import React from 'react';

const AboutUsPage = () => {
  return (
    <div>
      {/* Header */}
      <div
        className="relative h-[400px] max-h-[400px] bg-cover bg-center relative"
        style={{ backgroundImage: `url('/images/excella-img3.jpg')` }}
      >
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-extrabold uppercase z-10 text-center">
            <span className="text-[#7FB000]">WHO</span> WE <span className="text-[#7FB000]">ARE</span>
          </h1>
        </div>
      </div>

      {/* Rest of the page content */}
      {/* Add your content here */}
    </div>
  );
};

export default AboutUsPage;

