"use client"
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
            <h2 className='text-2xl md:text-3xl xl:text-4xl'>Brine Filtration</h2>
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
                <SwiperSlide className='font-light'>
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
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* Second Scroll Container */}
          <div className="md:col-span-1 overflow-hidden relative">
          <h2 className='text-2xl md:text-3xl xl:text-4xl'>Mud Logging</h2>
            <img
              src="/images/excella-img3.jpg"
              alt="Image 2"
              className="w-full h-48 object-cover mb-4 rounded-t-lg"
              style={{ position: 'sticky', top: 0 }}
            />
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
                <SwiperSlide>
                  <p>
                    Content for the second scroll container. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* Third Scroll Container */}
          <div className="md:col-span-1 overflow-hidden relative">
          <h2 className='text-2xl md:text-2xl xl:text-3xl'>Well Bore Cleaning</h2>
            <img
              src="/images/excella-img3.jpg"
              alt="Image 3"
              className="w-full h-48 object-cover mb-4 rounded-t-lg"
              style={{ position: 'sticky', top: 0 }}
            />
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
                <SwiperSlide>
                  <p>
                    Content for the third scroll container. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
