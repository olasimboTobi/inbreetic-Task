import React, { useState, useEffect } from 'react';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && !hasScrolled) {
          setHasScrolled(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);
  
  useEffect(() => {
    if (!hasScrolled) return;
    
    let start = 0;
    const end = value;
    const increment = end / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.min(Math.floor(start), end));
      
      if (start >= end) {
        clearInterval(timer);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value, duration, hasScrolled]);
  
  return (
    <div className="text-center">
      <div className="text-[#69E6A6] text-5xl md:text-6xl font-bold mb-2">
        {count}{suffix}
      </div>
      <div className="text-white text-sm">{label}</div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <div id="stats-section" className="bg-[#0A2640] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className='text-white'>our numbers</p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Handshake infographic mass market crowdfunding iteration.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatItem value={120} suffix="m" label="Cool feature title" />
          <StatItem value={10000} label="Cool feature title" />
          <StatItem value={240} label="Cool feature title" />
        </div>
      </div>
    </div>
  );
};

export default Stats;