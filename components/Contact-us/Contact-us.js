"use client"
// import React from 'react';
// import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

// const ContactUs = () => {
//   return (
//     <section className="py-8 px-4 md:px-8 lg:px-16 xl:px-32">
//       <div className="container mx-auto flex flex-col md:flex-row">
//         {/* Form Column */}
//         <div className="md:w-1/2 mb-8 md:mb-0">
//           <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
//           <form className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//               <input type="text" id="name" name="name" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//               <input type="email" id="email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//               <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"></textarea>
//             </div>
//             <button type="submit" className="bg-[#7FB000] text-white px-4 py-2 rounded-md hover:bg-[#b9e251]">Send Message</button>
//           </form>
//         </div>

//         {/* Addresses and Social Media Column */}
//         <div className="md:w-1/2 m-5 flex justify-center items-center">
//           <div className="flex flex-col space-y-4">
//             <div className="flex items-center space-x-2">
//               <FaMapMarkerAlt className="text-gray-600" />
//               <div>
//                 <h2 className="text-gray-800 font-bold">Excella Energy Services Ltd</h2>
//                 <p className="text-gray-600">Head Office</p>
//                 <p className="text-gray-600">Plot 302c Port Harcourt/Aba Road,</p>
//                 <p className="text-gray-600">Port Harcourt, Rivers State,</p>
//                 <p className="text-gray-600">Nigeria</p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-2">
//               <FaPhone className="text-gray-600" />
//               <p className="text-gray-800">+234 123 456 789</p>
//             </div>

//             <div className="flex items-center space-x-2">
//               <FaEnvelope className="text-gray-600" />
//               <p className="text-gray-800">info@excellaenergy.com</p>
//             </div>

//             <div className="flex items-center space-x-4">
//               <a href="#" className="text-[#7FB000] hover:text-[#9ebd4f]"><FaFacebook /></a>
//               <a href="#" className="text-[#7FB000] hover:text-[#9ebd4f]"><FaTwitter /></a>
//               <a href="#" className="text-[#7FB000] hover:text-[#9ebd4f]"><FaInstagram /></a>
//               <a href="#" className="text-[#7FB000] hover:text-[#9ebd4f]"><FaLinkedin /></a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Map */}
//       <div className="w-full h-96 bg-gray-300 mt-8"></div>
//     </section>
//   );
// };

// export default ContactUs;


import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const ContactUs = () => {
  return (
    <section className="py-8 px-4 md:px-8 lg:px-16 xl:px-32">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Form Column */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"></textarea>
            </div>
            <button type="submit" className="bg-[#7FB000] text-white px-4 py-2 rounded-md hover:bg-[#b9e251]">Send Message</button>
          </form>
        </div>

        {/* Addresses and Social Media Column */}
        <div className="md:w-1/2 m-5 flex justify-center items-center">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-600" />
              <div>
                <h2 className="text-gray-800 font-bold">Excella Energy Services Ltd</h2>
                <p className="text-gray-600">Head Office</p>
                <p className="text-gray-600">Plot 302c Port Harcourt/Aba Road,</p>
                <p className="text-gray-600">Port Harcourt, Rivers State,</p>
                <p className="text-gray-600">Nigeria</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <FaPhone className="text-gray-600" />
              <p className="text-gray-800">+234 123 456 789</p>
            </div>

            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-600" />
              <p className="text-gray-800">info@excellaenergy.com</p>
            </div>

            <div className="flex items-center space-x-4">
              <a href="#" className="text-[#7FB000] hover:text-[#9ebd4f]"><FaFacebook /></a>
              <a href="#" className="text-[#7FB000] hover:text-[#9ebd4f]"><FaTwitter /></a>
              <a href="#" className="text-[#7FB000] hover:text-[#9ebd4f]"><FaInstagram /></a>
              <a href="#" className="text-[#7FB000] hover:text-[#9ebd4f]"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-96 mt-8">
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
};

export default ContactUs;

