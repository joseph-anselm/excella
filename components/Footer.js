const Footer = () => {
    return (
      <footer className="relative bg-cover bg-center" style={{ backgroundImage: `url('/images/excella-img2.jpg')`, minHeight: '500px' }}>
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="text-center text-white py-16 relative z-10">
        <h6 className="text-2xl">Get started with us!</h6>
          <h1 className="text-5xl font-bold mb-2 text-[#7FB000]">Excellence @ Excella Energy Services</h1>          
        </div>
        <div className="flex flex-col md:flex-row items-stretch justify-center container mx-auto relative z-10 h-full">
          {/* Column 1 */}
          <div className="flex flex-col items-center mb-8 md:w-full md:max-w-sm md:pr-4 md:pl-8">
            <img className="h-12 w-auto mb-4" src="/images/eesl-logo.png" alt="Excella Energy Services" />
            <div className=" text-white">
              <h1 className="text-2xl font-bold mb-2 text-[#7FB000]">Excella Energy Services</h1>
              <p className="text-sm">Your introductory paragraph text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
  
          {/* Column 2 */}
          <div className="flex flex-col items-center mb-8 md:w-full md:max-w-sm md:px-4">
            <div className=" text-white">
              <h1 className="text-2xl text-[#7FB000] font-bold mb-2">Contact Us</h1>
              <p className="text-sm mb-2">Plot 302c Port Harcourt/Aba Road, Port Harcourt, Rivers State</p>
              <p className="text-sm mb-2">Phone: +234 805 5556 632</p>
              <p className="text-sm mb-2">Email: info@excellaenergy.com</p>
              <p className="text-sm">Website: www.excellaenergy.com</p>
            </div>
          </div>
  
          {/* Column 3 */}
          <div className="flex flex-col items-center md:w-full md:max-w-sm md:pl-4 md:pr-8">
            <div className="text-center text-[#7FB000]">
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
      </footer>
    );
  };
  
  export default Footer;
  