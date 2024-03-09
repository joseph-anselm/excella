// components/SectionB.js

import React from 'react';
import { FaEye, FaBullseye, FaBalanceScale } from 'react-icons/fa';

const SectionB = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-32 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-start space-y-8 md:space-y-0">
        {/* Vision Column */}
        <div className="md:w-1/3 p-6 md:p-10 rounded-lg border border-gray-300 flex flex-col items-start">
          <div className="flex items-start justify-start mb-4">
            <FaEye size={64} className="text-[#7FB000] mb-4 mr-4" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#061956]">Vision</h2>
          <p className="text-lg md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>

        {/* Mission Column */}
        <div className="md:w-1/3 p-6 md:p-10 mt-4 md:mt-0 md:ml-4 rounded-lg border border-gray-300 flex flex-col items-start">
          <div className="flex items-start justify-start mb-4">
            <FaBullseye size={64} className="text-[#7FB000] mb-4 mr-4" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#061956]">Mission</h2>
          <p className="text-lg md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>

        {/* Core Values Column */}
        <div className="md:w-1/3 p-6 md:p-10 mt-4 md:mt-0 md:ml-4 rounded-lg border border-gray-300 flex flex-col items-start">
          <div className="flex items-start justify-start mb-4">
            <FaBalanceScale size={64} className="text-[#7FB000] mb-4 mr-4" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#061956]">Core Values</h2>
          <p className="text-lg md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionB;
