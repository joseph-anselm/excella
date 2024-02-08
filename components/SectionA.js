"use client"

import React from 'react';
import { FaEye, FaHeart, FaRocket } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Section = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-32 bg-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center container mx-auto">
        {/* First Part */}
        <div className="w-full md:w-3/4 mb-8 md:mb-0">
          <h5 className="text-3xl md:text-4xl lg:text-3xl text-center md:text-left mb-2 text-[#7FB000]">
            Welcome
          </h5>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center md:text-left mb-4 text-[#061956]">
            Excella Energy Services
          </h1>
          <p className="text-gray-600 text-lg text-center md:text-left mb-8">
            Your introductory paragraph text goes here. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {/* Icon Squares */}
            <Link to="vision" smooth={true} duration={500} className="text-center">
              <div className="flex flex-col items-center">
                <FaEye className="w-12 h-12 text-[#7FB000] hover:text-[#061956] mb-2" />
                <h6 className="text-[#061956] font-bold">Our Vision</h6>
              </div>
            </Link>

            <Link to="values" smooth={true} duration={500} className="text-center">
              <div className="flex flex-col items-center">
                <FaHeart className="w-12 h-12 text-[#7FB000] hover:text-[#061956] mb-2" />
                <h6 className="text-[#061956] font-bold">Core Values</h6>
              </div>
            </Link>

            <Link to="missions" smooth={true} duration={500} className="text-center">
              <div className="flex flex-col items-center">
                <FaRocket className="w-12 h-12 text-[#7FB000] hover:text-[#061956] mb-2" />
                <h6 className="text-[#061956] font-bold">Our Missions</h6>
              </div>
            </Link>
          </div>
        </div>

        {/* Second Part */}
        <div className="w-full md:w-1/2 m-6">
          <img
            src="/images/excella-img1.jpg"
            alt="Your Image"
            className="w-full h-auto rounded-[2em]"
          />
        </div>
      </div>
    </section>
  );
};

export default Section;



