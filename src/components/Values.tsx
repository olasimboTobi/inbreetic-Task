import React from 'react';
import { FileText, BarChart2, Users } from 'lucide-react';
import firstIcon from '../assets/valuesIcons/firstIcon.svg'
import secondIcon from '../assets/valuesIcons/secondIcon.svg'
import thirdIcon from '../assets/valuesIcons/thirdIcon.svg'

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex mb-8">
      <div className='flex item-center justify-start'>
        <div className="self-center h-full w-full md:self-start md:mr-1 md:w-[20%] md:h-[5%]">
          {icon}
        </div>
        <div className='p-6'>
          <h2 className="font-light text-opacity-60 text-white mb-2">{title}</h2>
          <p className="text-white text-sm text-opacity-5  text-[#F1F1F1]">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Values: React.FC = () => {
  return (
    <div className="bg-[#0A2640] py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-white text-opacity-70 text-sm font-light">Our values</span>
          <h2 className="text-3xl md:text-4xl font-light text-white mt-2">
            Things in we believe
          </h2>
          <p className="text-[#F1F1F1] mt-4 max-w-3xl font-light">
            Conversion angel investor entrepreneur first mover advantage. Handshake
            infographic mass market crowdfunding iteration. Traction stock user experience
            deployment beta innovator incubator focus.
          </p>
        </div>
        
        <div className="mt-12">
          <ValueCard
            icon={<img src={firstIcon} alt="First icon" className="w-30 h-30" />}
            title="We are committed."
            description="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration."
          />
          
          <ValueCard
            icon={<img src={secondIcon} alt="Second icon" className="w-30 h-30" />}
            title="We are responsible."
            description="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration."
          />
          
          <ValueCard
            icon={<img src={thirdIcon} alt="Third icon" className="w-30 h-30" />}
            title="We aim for progress."
            description="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration."
          />
        </div>
      </div>
    </div>
  );
};

export default Values;