import React from 'react';
import logo from '../assets/footerLogo/footerLogo.svg'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-[#0A2640] mr-1">
                <img src={logo} alt="Logo" className="w-6 h-6" />
              </span>
              <span className="text-[#0A2640] text-2xl font-bold">Boldo</span>
            </div>
            <p className="text-[#777777] mb-6 text-sm">
              Social media validation business model canvas graphical user interface launch 
              party creative facebook iPad twitter.
            </p>
            <p className="text-xs text-[#777777]">
              All rights reserved.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-bold text-gray-900 mb-4">Landings</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#777777] hover:text-[#0A2640]">Home</a></li>
              <li><a href="#" className="text-[#777777] hover:text-[#0A2640]">Products</a></li>
              <li><a href="#" className="text-[#777777] hover:text-[#0A2640]">Services</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-bold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#777777] hover:text-[#0A2640]">Home</a></li>
              <li>
                <a href="#" className="text-[#777777] hover:text-[#0A2640] relative">
                  Careers
                  <span className="absolute -right-14 top-0  bg-[#69E6A6] text-[#0A2640] text-xs font-bold py-0.5 px-2 rounded-full">
                    Hiring
                  </span>
                </a>
              </li>
              <li><a href="#" className="text-[#777777] hover:text-[#0A2640]">Services</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#777777] hover:text-[#0A2640]">Blog</a></li>
              <li><a href="#" className="text-[#777777] hover:text-[#0A2640]">Products</a></li>
              <li><a href="#" className="text-[#777777] hover:text-[#0A2640]">Services</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;