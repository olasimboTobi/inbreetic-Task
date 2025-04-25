import React, { useState } from 'react';

const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };
  
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A2640] rounded-xl p-8 md:p-12 shadow-lg ">
          <div className='max-w-[58%] mx-auto'>
            <div className="text-center mb-8 ">
              <h2 className="text-2xl  md:text-3xl font-light text-white mb-4">
                An enterprise template to ramp up your company website
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="px-6 py-1  rounded-full text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#69E6A6]"
            />
            <button
              type="submit"
              className="bg-[#69E6A6] text-[#0A2640] font-medium px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 whitespace-nowrap"
            >
              Start now
            </button>
            </form>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default CTA;