import React from 'react';

const ContactSection = () => {
  return (
    <section
      className="relative container mx-auto flex bg-center py-16 px-4 md:px-8 lg:px-16 xl:px-32"
      style={{ backgroundImage: `url('/images/excella-img5.jpg')` }}
    >
      {/* Image Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center text-white relative z-10">
        {/* Left Column (2/3 width) */}
        <div className="md:w-2/3 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#7FB000] mb-4">
            LET&apos;S GET YOUR PROJECT STARTED
          </h1>
          {/* Add more content if needed */}
        </div>

        {/* Right Column (1/3 width) */}
        <div className="md:w-1/3 text-center md:text-left">
          {/* Add your button with "Reach to Us" */}
          <button className="bg-[#7FB000] text-white py-4 px-10 rounded-[10px] text-xl md:text-2xl ">
            Reach out to us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
