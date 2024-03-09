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
            and we don't stop at adding values
          </h2>
        </div>

        {/* Column 2 */}
        <div className="md:w-1/3 p-6">
          <p className="text-lg md:text-xl">
            This is a responsive paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Column 3 */}
        <div className="md:w-1/3 p-6">
          <p className="text-lg md:text-xl">
            Another responsive paragraph. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionA;
