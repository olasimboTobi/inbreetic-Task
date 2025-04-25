import React from 'react';
import leaderOne from '../assets/leaderImages/leader1.svg'
import leaderTwo from '../assets/leaderImages/leader2.svg'
import leaderThree from '../assets/leaderImages/leader3.svg'


interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  return (
    <div className="">
      <div className="rounded-2xl overflow-hidden mb-4 bg-gray-100 shadow-md transform transition duration-300 hover:scale-105">
        <img src={image} alt={name} className="w-full h-72 object-contain w-full h-full" />
      </div>
      <div className='flex flex-col justify-start'>
        <h3 className="text-xl font-light text-[#000000]">{name}</h3>
        <p className="text-[#777777]">{role}</p>
      </div>
      
    </div>
  );
};

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Michael Scott',
      role: 'General Manager',
      image: leaderOne
    },
    {
      name: 'Dwight Schrute',
      role: 'General Manager',
      image: leaderTwo
    },
    {
      name: 'Pam Beesly',
      role: 'General Manager',
      image: leaderThree
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#777777] text-sm font-medium">Our team</span>
          <h2 className="text-3xl md:text-4xl font-light text-[#777777] mt-2">
            The leadership team
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl">
            Conversion angel investor entrepreneur first mover advantage. Handshake
            infographic mass market crowdfunding iteration. Traction stock user experience
            deployment beta innovator incubator focus.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;