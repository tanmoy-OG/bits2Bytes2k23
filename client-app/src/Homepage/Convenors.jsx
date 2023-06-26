import React from 'react';
import demo from '../assets/demo_pic.jpg';

export const Convenors = () => {
  const convenors = [
    {
      name: 'Tripti Majumdar',
      designation: 'Lead Convenor',
      position: 'Something',
      contactNo: '123',
      profilePic: demo
    },
    {
      name: 'Ajanta Patil',
      designation: 'Co-Convenor',
      position: 'Something',
      contactNo: '123',
      profilePic: demo
    },
    // Add more convenors as needed
  ];

  return (
    <div className="h-fit mb-10 bg-blue-500/10">
      <h1 className="p-4 md:p-10 pb-5 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans" data-aos="fade-up">
        Convenors
      </h1>
      <div className="flex justify-center">
        {convenors.map((convenor, index) => (
          <div className="flex flex-col items-center mt-10" key={index}>
            <img
              src={convenor.profilePic}
              alt={`${convenor.name}'s Profile`}
              className="w-24 h-24 rounded-full mb-4 hover:scale-110 transition-transform duration-300"
            />
            <h2 className="text-xl font-bold mb-2 font-custom-cursive p-5">{convenor.name}</h2>
            <p className="text-violet-300 mb-1 text-sm">{convenor.designation}</p>
            <p className="text-violet-300 mb-4 text-sm">{convenor.position}</p>
            <p className="text-violet-300 font-bold p-1">{convenor.contactNo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
