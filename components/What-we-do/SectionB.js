import React from 'react';

const SectionB = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-32">
      <div className="container mx-auto">
        {/* Title and Paragraph Text */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#061956] mb-4">OUR EQUIPMENT</h2>
          <p className="text-lg text-gray-600">
          EESL houses cutting-edge equipment that exceeds client expectations, readily available for your needs.
          </p>
        </div>

        {/* Grid of Four Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Column */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <img src="/images/Dual-Vessel-Filter.jpg" alt="Image 1" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-[#061956] mb-2">Dual Vessel Filter Unit</h3>
            <p className="text-gray-600 text-justify">Parker’s dual vessel cartridge / bag filter unit (TDW) is the most commonly used cartridge filter unit in the oil field sector. It offers a cost-effective way to clean common oilfield fluids</p>
          </div>

          {/* Second Column */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <img src="/images/Dust-Free-DE-Dosing-System- (1).png" alt="Image 2" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-[#061956] mb-2">Dust Free DE Dosing System</h3>
            <p className="text-gray-600 text-justify">Dutch Filtration has developed the DFDU (Dust free dosing unit) , for safety of personnel and working environment, in line with HSE requirements. The Diatomaceous Earth DFDU System is designed to feed.</p>
          </div>

          {/* Third Column */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <img src="/images/Pleated-absolute-filter-cartridge-thermally-bonded (1).png" alt="Image 3" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-[#061956] mb-2">Absolute Pleated Filter Cartridge</h3>
            <p className="text-gray-600 text-justify">Features Absolute Pleated Filter Cartridge Absolute rating of Beta 5000 (99.98% efficiency )for reliable results in any critical application. Provides significantly greater dirt holding than string wound and spun bonded elements. Improved</p>
          </div>

          {/* Fourth Column */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <img src="/images/high-flow-pleated-filter-element-500x500 (1).jpg" alt="Image 4" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-[#061956] mb-2">High Flow Pleated Filter Cartridge</h3>
            <p className="text-gray-600 text-justify">High Flow Pleated Filter Cartridge made of superior materials, have both the advantages of cartridges efficiency and compact and bags convenience. They are the most cost-effective for the wide range of prefiltration especially.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionB;
