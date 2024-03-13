"use client"
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/scrollbar';

// const ScrollSection = () => {
//   return (
//     <section className="px-4 md:px-8 lg:px-16 xl:px-32 bg-gray-100">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* First Scroll Container */}
//           <div className="md:col-span-1 overflow-hidden relative">
            
//             <img
//               src="/images/excella-brine-filtration-machine.jpeg"
//               alt="Image 1"
//               className="w-full h-48 object-cover mb-4 rounded-t-lg"
//               style={{ position: 'sticky', top: 0 }}
//             />
//             <h2 className='text-2xl md:text-2xl xl:text-2xl'>Brine Filtration</h2>
//             <div className="max-h-[300px] overflow-y-auto">
//               <Swiper
//                 direction={'vertical'}
//                 slidesPerView={'auto'}
//                 freeMode={true}
//                 scrollbar={true}
//                 mousewheel={true}
//                 modules={[FreeMode, Scrollbar, Mousewheel]}
//                 className="mySwiper"
//               >
//                 <SwiperSlide className='font-light text-[0.6em]'>
//                   <p>
//                   Excella Energy Services Ltd (EESL), a leading oil and gas servicing company in Nigeria, specializes in providing top-notch oilfield filtration equipment and services. Our goal is to ensure a clean wellbore, minimizing debris, drilling fluid residue, and solids that can hamper well productivity. With our state-of-the-art equipment, we reduce rig circulating time and surface fluid losses, optimizing filtration efficiency and reducing non-productive time for our clients. We offer customizable filtration packages tailored to individual project needs, enhancing overall productivity in completion and workover operations, including perforation, sand control, and mini-frac processes.
//                   </p>
//                   <p>
//                   Our filtration solutions consist of two steps: anthracite filters to eliminate residual suspended solids, followed by precoat candle filters for fine filtration, removing particles larger than 1 micron. We specialize in high-performance anthracite filters with a unique backwash concept, ensuring efficient filtration while minimizing pre-coat media consumption. Additionally, we offer pre-coat filters based on various pre-coatable candles, including sintered carbon or fiberglass core, covered by suitable cloth, providing versatile filtration options for diverse project requirements.
//                   </p>
//                   <p>
//                   Partner with Excella Energy Services Ltd for unparalleled filtration solutions that enhance efficiency and productivity in oil and gas operations.
//                   </p>
//                   <div className='py-2'>
//                     <h2 className="text-md font-bold mb-4">Benefits</h2>
//                     <ul className="list-disc pl-6">
//                       <li>Simple and reliable equipment.</li>
//                       <li>No corrosion issues.</li>
//                       <li>Fits on every location: onshore/offshore.</li>
//                       <li>100% leak-proof and easy sealing with uniform pressure.</li>
//                       <li>Robust.</li>
//                     </ul>
//                   </div>
//                   <div className='py-2'>
//                     <h2 className="text-md font-bold mb-4">Benefits</h2>
//                     <ul className="list-disc pl-6">
//                       <li>Simple and reliable equipment.</li>
//                       <li>No corrosion issues.</li>
//                       <li>Fits on every location: onshore/offshore.</li>
//                       <li>100% leak-proof and easy sealing with uniform pressure.</li>
//                       <li>Robust.</li>
//                     </ul>
//                   </div>
//                   <div className='py-2'>
//                     <h2 className="text-md font-bold mb-4">Applications</h2>
//                     <ul className="list-disc pl-6">
//                       <li>Completion fluids</li>
//                       <li>Produced water</li>
//                       <li>Work over fluids</li>
//                       <li>Gravel pack fluids</li>
//                       <li>Wellbore clean up fluids</li>
//                       <li>(Bio) diesel</li>
//                       <li>Surface water intake</li>
//                       <li>Process water</li>
//                       <li>Pre filtration RO</li>
//                       <li>Frac fluids</li>
//                       <li>Pipeline flushing</li>
//                       <li>Waste water</li>
//                     </ul>
//                   </div>

//                   <div className='py-2'>
//                     <h2 className="text-md font-bold mb-4">Our Proficiency</h2>
//                     <ul className="list-disc pl-6">
//                       <li>Hydraulic Filtration</li>
//                       <li>Process Filtration</li>
//                       <li>Air/Gas Filtration</li>
//                       <li>Engine Management</li>
//                     </ul>
//                   </div>
//                 </SwiperSlide>
//               </Swiper>
//             </div>
//           </div>

//           {/* Second Scroll Container */}
//           <div className="md:col-span-1 overflow-hidden relative">
//             <img
//               src="/images/excella-mud-loggin-machine.jpeg"
//               alt="Image 2"
//               className="w-full h-48 object-cover mb-4 rounded-t-lg"
//               style={{ position: 'sticky', top: 0 }}
//             />
//             <h2 className='text-2xl md:text-2xl xl:text-2xl'>Mud Logging</h2>
//             <div className="max-h-[300px] overflow-y-auto">
//               <Swiper
//                 direction={'vertical'}
//                 slidesPerView={'auto'}
//                 freeMode={true}
//                 scrollbar={true}
//                 mousewheel={true}
//                 modules={[FreeMode, Scrollbar, Mousewheel]}
//                 className="mySwiper"
//               >
//                 <SwiperSlide className='font-light text-[0.8em]'>
//                   <p>
//                   Excella Energy Services specializes in mud logging services for the Nigerian oil and gas sector. Our expertise lies in creating detailed borehole records by analyzing rock and sediment bits brought to the surface during drilling. Our services include determining hydrocarbon positions, identifying downhole lithology, monitoring natural gas in drilling mud, and producing well logs for comprehensive analysis. Trust Excella Energy Services for precise mud logging solutions tailored to your oil and gas exploration needs.
//                   </p>
//                   <div className='py-2'>
//                     <h2 className="text-md font-bold mb-4">Specifications</h2>
//                     <ul className="list-disc pl-6">
//                       <li>Determine Positions of Hydrocarbons.</li>
//                       <li>Identification Downhole Lithology.</li>
//                       <li>Monitoring of Natural Gas Entering the Drilling Mud Stream.</li>
//                       <li>Sampling and analysis of rock cuttings circulated to the surface in drilling mud.</li>
//                       <li>Observation and interpretation of indicators in the mud returns during the drilling process.</li>
//                       <li>Monitor gas levels and types.</li>
//                     </ul>
//                   </div>
//                 </SwiperSlide>
//               </Swiper>
//             </div>
//           </div>

//           {/* Third Scroll Container */}
//           <div className="md:col-span-1 overflow-hidden relative">
          
//             <img
//               src="/images/excella-wellbore-drilling.jpeg"
//               alt="Image 3"
//               className="w-full h-48 object-cover mb-4 rounded-t-lg"
//               style={{ position: 'sticky', top: 0 }}
//             />
//             <h2 className='text-2xl md:text-2xl xl:text-2xl'>Well Bore Cleaning</h2>
//             <div className="max-h-[300px] overflow-y-auto">
//               <Swiper
//                 direction={'vertical'}
//                 slidesPerView={'auto'}
//                 freeMode={true}
//                 scrollbar={true}
//                 mousewheel={true}
//                 modules={[FreeMode, Scrollbar, Mousewheel]}
//                 className="mySwiper"
//               >
//                 <SwiperSlide className='font-light text-[0.8em]'>
//                   <p>
//                   Excella Energy Services (EESL), a leading oil and gas servicing company in Nigeria, specializes in providing comprehensive wellbore cleaning services to address recurring debris issues. From drilling fluid residue to milling waste to perforation fragments, EESL ensures seamless operations and prevents equipment damage and production losses..
//                   </p>
//                   <p>
//                   During the drilling process, debris such as sand, scale, and mud can obstruct the wellbore, leading to operational challenges. Maintaining a clean wellbore is crucial for the success of completion operations. However, improper cleaning methods can inadvertently damage the wellbore, particularly in mature basins where upper zones are vulnerable to mishaps.
//                   </p>
//                   <p>
//                   EESL boasts the expertise and cutting-edge equipment necessary to deliver seamless wellbore cleaning services, ensuring optimal well performance and longevity. Trust EESL for reliable solutions tailored to your wellbore cleaning needs in the Nigerian oil and gas industry.
//                   </p>
//                 </SwiperSlide>
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ScrollSection;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

const ScrollSection = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 xl:px-32 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* First Scroll Container */}
          <div className="md:col-span-1 overflow-hidden relative">
            
            <img
              src="/images/excella-brine-filtration-machine.jpeg"
              alt="Image 1"
              className="w-full h-48 object-cover mb-4 rounded-t-lg"
              style={{ position: 'sticky', top: 0 }}
            />
            <h2 className='text-2xl md:text-2xl xl:text-2xl'>Brine Filtration</h2>
            <div className="max-h-[300px] overflow-y-auto">
              <Swiper
                direction={'vertical'}
                slidesPerView={'auto'}
                freeMode={true}
                scrollbar={true}
                mousewheel={true}
                modules={[FreeMode, Scrollbar, Mousewheel]}
                className="mySwiper"
              >
                <SwiperSlide className='font-light text-base md:text-base xl:text-base'>
                  <p>
                  Excella Energy Services Ltd (EESL), a leading oil and gas servicing company in Nigeria, specializes in providing top-notch oilfield filtration equipment and services. Our goal is to ensure a clean wellbore, minimizing debris, drilling fluid residue, and solids that can hamper well productivity. With our state-of-the-art equipment, we reduce rig circulating time and surface fluid losses, optimizing filtration efficiency and reducing non-productive time for our clients. We offer customizable filtration packages tailored to individual project needs, enhancing overall productivity in completion and workover operations, including perforation, sand control, and mini-frac processes.
                  </p>
                  <p>
                  Our filtration solutions consist of two steps: anthracite filters to eliminate residual suspended solids, followed by precoat candle filters for fine filtration, removing particles larger than 1 micron. We specialize in high-performance anthracite filters with a unique backwash concept, ensuring efficient filtration while minimizing pre-coat media consumption. Additionally, we offer pre-coat filters based on various pre-coatable candles, including sintered carbon or fiberglass core, covered by suitable cloth, providing versatile filtration options for diverse project requirements.
                  </p>
                  <p>
                  Partner with Excella Energy Services Ltd for unparalleled filtration solutions that enhance efficiency and productivity in oil and gas operations.
                  </p>
                  <div className='py-2'>
                    <h2 className="text-md font-bold mb-4">Benefits</h2>
                    <ul className="list-disc pl-6">
                      <li>Simple and reliable equipment.</li>
                      <li>No corrosion issues.</li>
                      <li>Fits on every location: onshore/offshore.</li>
                      <li>100% leak-proof and easy sealing with uniform pressure.</li>
                      <li>Robust.</li>
                    </ul>
                  </div>
                  <div className='py-2'>
                    <h2 className="text-md font-bold mb-4">Applications</h2>
                    <ul className="list-disc pl-6">
                      <li>Completion fluids</li>
                      <li>Produced water</li>
                      <li>Work over fluids</li>
                      <li>Gravel pack fluids</li>
                      <li>Wellbore clean up fluids</li>
                      <li>(Bio) diesel</li>
                      <li>Surface water intake</li>
                      <li>Process water</li>
                      <li>Pre filtration RO</li>
                      <li>Frac fluids</li>
                      <li>Pipeline flushing</li>
                      <li>Waste water</li>
                    </ul>
                  </div>
                  <div className='py-2'>
                    <h2 className="text-md font-bold mb-4">Our Proficiency</h2>
                    <ul className="list-disc pl-6">
                      <li>Hydraulic Filtration</li>
                      <li>Process Filtration</li>
                      <li>Air/Gas Filtration</li>
                      <li>Engine Management</li>
                    </ul>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* Second Scroll Container */}
          <div className="md:col-span-1 overflow-hidden relative">
            <img
              src="/images/excella-mud-loggin-machine.jpeg"
              alt="Image 2"
              className="w-full h-48 object-cover mb-4 rounded-t-lg"
              style={{ position: 'sticky', top: 0 }}
            />
            <h2 className='text-2xl md:text-2xl xl:text-2xl'>Mud Logging</h2>
            <div className="max-h-[300px] overflow-y-auto">
              <Swiper
                direction={'vertical'}
                slidesPerView={'auto'}
                freeMode={true}
                scrollbar={true}
                mousewheel={true}
                modules={[FreeMode, Scrollbar, Mousewheel]}
                className="mySwiper"
              >
                <SwiperSlide className='font-light text-base md:text-base xl:text-base'>
                  <p>
                  Excella Energy Services specializes in mud logging services for the Nigerian oil and gas sector. Our expertise lies in creating detailed borehole records by analyzing rock and sediment bits brought to the surface during drilling. Our services include determining hydrocarbon positions, identifying downhole lithology, monitoring natural gas in drilling mud, and producing well logs for comprehensive analysis. Trust Excella Energy Services for precise mud logging solutions tailored to your oil and gas exploration needs.
                  </p>
                  <div className='py-2'>
                    <h2 className="text-md font-bold mb-4">Specifications</h2>
                    <ul className="list-disc pl-6">
                      <li>Determine Positions of Hydrocarbons.</li>
                      <li>Identification Downhole Lithology.</li>
                      <li>Monitoring of Natural Gas Entering the Drilling Mud Stream.</li>
                      <li>Sampling and analysis of rock cuttings circulated to the surface in drilling mud.</li>
                      <li>Observation and interpretation of indicators in the mud returns during the drilling process.</li>
                      <li>Monitor gas levels and types.</li>
                    </ul>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* Third Scroll Container */}
          <div className="md:col-span-1 overflow-hidden relative">
            <img
              src="/images/excella-wellbore-drilling.jpeg"
              alt="Image 3"
              className="w-full h-48 object-cover mb-4 rounded-t-lg"
              style={{ position: 'sticky', top: 0 }}
            />
            <h2 className='text-2xl md:text-2xl xl:text-2xl'>Well Bore Cleaning</h2>
            <div className="max-h-[300px] overflow-y-auto">
              <Swiper
                direction={'vertical'}
                slidesPerView={'auto'}
                freeMode={true}
                scrollbar={true}
                mousewheel={true}
                modules={[FreeMode, Scrollbar, Mousewheel]}
                className="mySwiper"
              >
                <SwiperSlide className='font-light text-base md:text-base xl:text-base'>
                  <p>
                  Excella Energy Services (EESL), a leading oil and gas servicing company in Nigeria, specializes in providing comprehensive wellbore cleaning services to address recurring debris issues. From drilling fluid residue to milling waste to perforation fragments, EESL ensures seamless operations and prevents equipment damage and production losses..
                  </p>
                  <p>
                  During the drilling process, debris such as sand, scale, and mud can obstruct the wellbore, leading to operational challenges. Maintaining a clean wellbore is crucial for the success of completion operations. However, improper cleaning methods can inadvertently damage the wellbore, particularly in mature basins where upper zones are vulnerable to mishaps.
                  </p>
                  <p>
                  EESL boasts the expertise and cutting-edge equipment necessary to deliver seamless wellbore cleaning services, ensuring optimal well performance and longevity. Trust EESL for reliable solutions tailored to your wellbore cleaning needs in the Nigerian oil and gas industry.
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;

