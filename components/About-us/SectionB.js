// // components/SectionB.js

// import React from 'react';
// import { FaEye, FaBullseye, FaBalanceScale } from 'react-icons/fa';

// const SectionB = () => {
//   return (
//     <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-32 bg-gray-100">
//       <div className="container mx-auto flex flex-wrap gap-8">
//         {/* Vision Column */}
//         <div className="flex-1 p-6 md:p-10 rounded-lg border border-gray-300">
//           <div className="flex items-start justify-start mb-4">
//             <FaEye size={64} className="text-[#7FB000] mb-4 mr-4" />
//           </div>
//           <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#061956]">Vision</h2>
//           <p className="text-lg md:text-xl">
//             To be the leading service firm in Africa, delivering superior products and service quality in Energy, Construction, and Procurement, Property and Estate management, and Environment logistics and control, to the ultimate satisfaction of our clients and stakeholders.
//           </p>
//         </div>

//         {/* Mission Column */}
//         <div className="flex-1 p-6 md:p-10 rounded-lg border border-gray-300">
//           <div className="flex items-start justify-start mb-4">
//             <FaBullseye size={64} className="text-[#7FB000] mb-4 mr-4" />
//           </div>
//           <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#061956]">Mission</h2>
//           <p className="text-lg md:text-xl">
//             To deliver sustainable products and services through an efficient and reliable workforce, guided by high ethical standards and values.
//           </p>
//         </div>

//         {/* Core Values Column */}
//         <div className="flex-1 p-6 md:p-10 rounded-lg border border-gray-300">
//           <div className="flex items-start justify-start mb-4">
//             <FaBalanceScale size={64} className="text-[#7FB000] mb-4 mr-4" />
//           </div>
//           <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#061956]">Core Values</h2>
//           <ul className="list-disc pl-4 text-lg md:text-xl">
//             <li>
//               Best Practices Adherence
//             </li>
//             <li>
//               Rapid Response Expertise
//             </li>
//             <li>
//               Building Confidence
//             </li>
//             <li>
//               Client-Centric Approach
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SectionB;


import React from 'react';
import { FaEye, FaBullseye, FaBalanceScale } from 'react-icons/fa';

const SectionB = () => {
  return (
    <section className="py-8 px-4 md:px-8 lg:px-16 xl:px-32 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Vision Column */}
        <div className="flex-1 md:w-1/3 p-6 md:p-10 rounded-lg border border-gray-300 mb-8 md:mb-0">
          <div className="flex items-start justify-start mb-4">
            <FaEye size={64} className="text-[#7FB000] mb-4 mr-4" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#061956]">Vision</h2>
          <p className="text-base md:text-lg">
            To be the leading service firm in Africa, delivering superior products and service quality in Energy, Construction, and Procurement, Property and Estate management, and Environment logistics and control, to the ultimate satisfaction of our clients and stakeholders.
          </p>
        </div>

        {/* Mission Column */}
        <div className="flex-1 md:w-1/3 p-6 md:p-10 rounded-lg border border-gray-300 mb-8 md:mb-0">
          <div className="flex items-start justify-start mb-4">
            <FaBullseye size={64} className="text-[#7FB000] mb-4 mr-4" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#061956]">Mission</h2>
          <p className="text-base md:text-lg">
            To deliver sustainable products and services through an efficient and reliable workforce, guided by high ethical standards and values.
          </p>
        </div>

        {/* Core Values Column */}
        <div className="flex-1 md:w-1/3 p-6 md:p-10 rounded-lg border border-gray-300">
          <div className="flex items-start justify-start mb-4">
            <FaBalanceScale size={64} className="text-[#7FB000] mb-4 mr-4" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#061956]">Core Values</h2>
          <ul className="list-disc pl-4 text-base md:text-lg">
            <li>
              Best Practices Adherence
            </li>
            <li>
              Rapid Response Expertise
            </li>
            <li>
              Building Confidence
            </li>
            <li>
              Client-Centric Approach
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionB;
