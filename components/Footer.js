import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-cover bg-center" style={{ backgroundImage: `url('/images/excella-img2.jpg')`, minHeight: '500px' }}>
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="text-center text-white py-8 md:py-16 relative z-10 mx-4">
        <h6 className="text-xl md:text-2xl">Get started with us!</h6>
        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-[#7FB000]">
          Excellence<span className="hidden md:inline"> </span>
          <span className="md:inline text-white">@</span>
          EESL
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-stretch justify-center container mx-auto relative z-10">
        {/* Column 1 */}
        <div className="flex flex-col mb-8 md:w-full md:max-w-sm md:pr-4 md:pl-8 mx-2 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#7FB000]">Excella Energy Services</h1>
          <img className="h-auto w-[200px] mb-4 mx-auto" src="/images/eesl-logo.png" alt="Excella Energy Services" />
          <div className="text-white">
            <p className="text-sm">
              EESL is committed to delivering oilfield filtration solutions for clean wellbores and enhanced productivity. Our advanced equipment minimizes debris, reduces rig time, and customizes filtration packages for efficient workover and completions operations.
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col mb-8 md:w-full md:max-w-sm md:px-4 mx-4 text-center">
          <div className="text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#7FB000]">Contact Us</h1>
            <p className="text-sm mb-2">Plot 302c Port Harcourt/Aba Road, Port Harcourt, Rivers State</p>
            <p className="text-sm mb-2"><b>Phone:</b> +234 805 5556 632</p>
            <p className="text-sm mb-2"><b>Email:</b> info@excellaenergy.com</p>
            <p className="text-sm"><b>Website:</b> www.excellaenergy.com</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-7 mx-4">
            <a href="#" className="text-white hover:text-[#3b5998]"><FaFacebook size={24} /></a>
            <a href="#" className="text-white hover:text-[#00acee]"><FaTwitter size={24} /></a>
            <a href="#" className="text-white hover:text-[#e4405f]"><FaInstagram size={24} /></a>
            <a href="#" className="text-white hover:text-[#0077b5]"><FaLinkedin size={24} /></a>
            <a href="#" className="text-white hover:text-[#ea4335]"><FaEnvelope size={24} /></a>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col md:w-full md:max-w-sm md:pl-4 md:pr-8 mx-4 text-center">
          <div className=" text-[#7FB000]">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Submit an Inquiry</h1>
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
    </footer>
  );
};

export default Footer;
