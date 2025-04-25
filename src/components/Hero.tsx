import React from 'react';
import manCall from '../assets/heroImages/manCall.svg'
import mantrash from '../assets/heroImages/mantrash.svg'
import manWalk from '../assets/heroImages/manWalk.svg'
import student from '../assets/heroImages/student.svg'
import womanCall from '../assets/heroImages/womanCall.svg'

const Hero: React.FC = () => {
  return (
    <div className="pt-17 pb-16 text-white">
      <div className="bg-[#0A2640] text-center pb-40 relative z-10">
        <p className='text-center'>About</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 max-w-4xl mx-auto leading-tight">
          We love to make great things, things that matter.
        </h1>
        <p className="text-xs max-w-2xl mx-auto opacity-60">
          Funding handshake buyer business-to-business metrics first mover advantage innovative success deployment non-disclosure.
        </p>
      </div>

      <div className="relative z-30 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="flex flex-col justify-between gap-4 items-center">
              <div className="overflow-hidden rounded-xl">
                <img 
                  src={manCall} 
                  alt="Business person on laptop"
                  className="w-full h-64 object-contain rounded-xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img 
                  src={mantrash}
                  alt="Business illustration"
                  className="w-full h-64 object-contain transform hover:scale-105 transition-transform duration-500 bg-[#69E6A6]"
                />
              </div>
            </div>

            
            <div className="overflow-hidden rounded-xl">
              <img 
                src={womanCall}
                alt="Woman on phone"
                className="w-full h-full object-contain rounded-xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            
            <div className="flex flex-col justify-between gap-4 items-center">
              <div className="overflow-hidden rounded-xl">
                <img 
                  src={manWalk}
                  alt="Illustration of businessman" 
                  className="w-full h-64 object-contain transform rounded-xl hover:scale-105 transition-transform duration-500 bg-[#69E6A6]"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img 
                  src={student} 
                  alt="Team meeting"
                  className="w-full h-64 object-contain transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="mb-8">
          <span className="text-gray-500 text-sm font-medium">Our story</span>
          <h2 className="text-3xl md:text-4xl font-light text-[#000000] mt-2">
            Handshake infographic mass market crowdfunding iteration.
          </h2>
        </div>

        <div className="mt-6">
          <p className="text-lg text-[#777777] max-w-3xl">
            Conversion angel investor entrepreneur first mover advantage. 
            Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. 
            Learning curve network effects return on investment bootstrapping business-to-consumer. 
          </p>
        </div>
      </div>
    </div>

  );
};

export default Hero;