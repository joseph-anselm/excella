"use client"
import { useState, useEffect } from 'react';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {

    const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 200;
      setShowBackToTop(scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="relative bg-cover bg-center" style={{ backgroundImage: `url('/images/excella-img2.jpg')`, minHeight: '500px' }}>
      <div className="absolute inset-0 bg-black opacity-80"></div>
      {/* <div className="text-center text-white py-16 relative z-10 m-4">
        <h6 className="text-2xl text-left">Get started with us!</h6>
        <h1 className="text-5xl font-bold mb-2 text-[#7FB000]">Excellence<span className='text-white'> @ </span>EESL</h1>
      </div> */}

        <div className="text-center text-white py-16 relative z-10 m-4">
        <h6 className="text-2xl max-sm:text-left md:text-center">Get started with us!</h6>
        <h1 className="text-4xl max-sm:text-left md:text-5xl font-bold mb-2 text-[#7FB000]">Excellence<span className='text-white'> @ </span>EESL</h1>
        </div>

      <div className="flex flex-col md:flex-row items-stretch justify-center container mx-auto relative z-10 h-full">
        
        {/* Column 1 */}
        <div className="flex flex-col mb-8 md:w-full md:max-w-sm md:pr-4 md:pl-8 m-2">
        <h1 className="text-2xl font-bold mb-2 text-[#7FB000]">Excella Energy Services</h1>
          <img className="h-auto w-[200px] mb-4" src="/images/eesl-logo.png" alt="Excella Energy Services" />
          <div className="text-white">
            
            <p className="text-sm">EESL is committed to delivering oilfield filtration solutions for clean wellbores and enhanced productivity. Our advanced equipment minimizes debris, reduces rig time, and customizes filtration packages for efficient workover and completions operations.</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col mb-8 md:w-full md:max-w-sm md:px-4 m-4">
          <div className="text-white">
            <h1 className="text-2xl text-[#7FB000] font-bold mb-2">Contact Us</h1>
            <p className="text-sm mb-2">Plot 302c Port Harcourt/Aba Road, Port Harcourt, Rivers State</p>
            <p className="text-sm mb-2"><b>Phone:</b> +234 805 5556 632</p>
            <p className="text-sm mb-2"><b>Email:</b> info@excellaenergy.com</p>
            <p className="text-sm"><b>Website:</b> www.excellaenergy.com</p>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-7 m-4">
            <a href="#" className="text-white hover:text-[#3b5998]"><FaFacebook size={24} /></a>
            <a href="#" className="text-white hover:text-[#00acee]"><FaTwitter size={24} /></a>
            <a href="#" className="text-white hover:text-[#e4405f]"><FaInstagram size={24} /></a>
            <a href="#" className="text-white hover:text-[#0077b5]"><FaLinkedin size={24} /></a>
            <a href="#" className="text-white hover:text-[#ea4335]"><FaEnvelope size={24} /></a>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col md:w-full md:max-w-sm md:pl-4 md:pr-8 m-4">
          <div className=" text-[#7FB000]">
            <h1 className="text-2xl font-bold mb-2">Submit an Inquiry</h1>
            <form className="w-full">
              {/* Add your form fields here */}
              <div className="mb-2">
                <input type="text" placeholder="Name" className="w-full py-1 px-2 rounded bg-gray-800 text-white" />
              </div>
              <div className="mb-2">
                <input type="email" placeholder="Email" className="w-full py-1 px-2 rounded bg-gray-800 text-white" />
              </div>
              <div className="mb-2">
                <textarea placeholder="Message" className="w-full py-1 px-2 rounded bg-gray-800 text-white"></textarea>
              </div>
              <button type="submit" className="bg-[#7FB000] text-white py-2 px-4 w-full rounded">Submit</button>
            </form>
          </div>
        </div>
      </div>
 {showBackToTop && (
          <div
            className="fixed bottom-8 right-8 bg-[#7FB000] text-white p-3 rounded-full cursor-pointer z-10"
            onClick={handleBackToTop}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </div>
        )}

<div className="bg-gray-800 text-white text-center py-4 relative z-5">
      <p className="mb-2">&copy; 2023 Excella Energy Services</p>

      {/* Quick Links */}
      <div className="flex justify-center space-x-4">
        <a href="/What-we-do" className="text-[#7FB000] hover:text-[#9ebd4f]">Services</a>
        <span className="text-gray-400">|</span>
        <a href="/Who-we-are" className="text-[#7FB000] hover:text-[#9ebd4f]">About Us</a>
        <span className="text-gray-400">|</span>
        <a href="https://webmail-p279.web-hosting.com/" className="text-[#7FB000] hover:text-[#9ebd4f]">Staff Email</a>
      </div>
    </div>
    </footer>
  );
};

export default Footer;

  