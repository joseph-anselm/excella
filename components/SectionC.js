import React from 'react';

const SectionC = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 xl:px-32 bg-gray-100">
      <div className="container mx-auto rounded-lg overflow-hidden flex flex-col md:flex-row items-center justify-center">
        {/* Text Column */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#061956]">EESL In Brief</h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-[#7FB000] mb-6">Our Core Expertise</h2>
          <p className="text-gray-700 leading-relaxed">EESL specializes in providing oilfield filtration equipment and services to ensure a clean wellbore, minimizing debris and enhancing well productivity. Our advanced equipment reduces rig circulating time, resulting in efficient operations for workover and completions. We customize filtration packages to meet individual project needs, optimizing overall productivity and well performance.</p>
        </div>

        {/* Image Column */}
        <div className="w-full md:w-1/2 overflow-hidden m-4">
          <div className="h-full relative">
            <img
              src="/images/excella-img3.jpg"  
              alt="Sample Image"
              className="w-full h-full object-cover border-t-4 border-gray-200 rounded-tl-[40px] rounded-br-[40px] md:rounded-bl-lg md:rounded-tr-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionC;



