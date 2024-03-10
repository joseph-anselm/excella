// components/Section.js

import React from 'react';

const SectionA = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-32 bg-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center container mx-auto">
        {/* Column 1 */}
        <div className="md:w-1/3 p-6">
          <ul className="list-none mb-4">
            <li>
              <button className="bg-[#061956] text-[#7FB000] py-2 px-4 rounded-md hover:bg-[#7FB000] hover:text-[#061956]">
                Click Me
              </button>
            </li>
          </ul>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#061956]">
            Our story makes our experience
            <br />
            and we don&apos;t stop at adding values
          </h2>
        </div>

        {/* Column 2 */}
        <div className="md:w-1/3 p-6">
          <p className="text-sm md:text-lg">
          Excella Energy Services Ltd is a leading indigenous oil servicing company based in Port Harcourt, Nigeria. Our operational expertise is strategically designed to provide premier services to the dynamic oil and gas sector. Specializing in a diverse range of services such as brine filtration, wellbore cleaning, and the supply of cutting-edge tools and equipment, we are committed to delivering superior results.
          </p>
        </div>

        {/* Column 3 */}
        <div className="md:w-1/3 p-6">
          <p className="text-sm md:text-lg">
          As a dedicated partner in the Oil & Gas industry, Excella Energy Services Ltd prioritizes excellence, reliability, and innovation. Our unwavering commitment to providing top-tier solutions distinguishes us as a trusted service provider in the Nigerian energy landscape. For unparalleled oil and gas field services, choose Excella Energy Services Ltd - your trusted partner for excellence in the industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionA;
