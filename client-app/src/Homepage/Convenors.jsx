import React from 'react';
import demo from '../assets/demo_pic.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedinIn, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

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
    <div className="h-fit bg-teal-500/10 backdrop-blur-lg ml-6 mr-6 mb-10 rounded-2xl" data-aos='fade-up'data-aos-duration="5000">
      <h1 className="p-4 md:p-10 pb-5 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans" data-aos="fade-up">
        CONVENORS
      </h1>
      <div className="flex justify-between">
        {convenors.map((convenor, index) => (
          <div key={index} className="flex rounded-xl transition-all w-100 m-4   hover:bg-teal-800 hover:shadow-[inset_0_0px_10px_rgba(0,0,0,0.5)]">
            <div className="flex p-2">
              <img src={convenor.profilePic} className="p-1 w-50 h-50" alt={`${convenor.name}'s Profile`} />
            </div>
            <div className="flex flex-col justify-center ml-4">
              <h3 className="m-2 text-neutral-500 text-lg font-semibold uppercase">
                {convenor.name}
              </h3>
              <div className="flex items-center justify-center">
                <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-orange-300"></div>
              </div>
              <p className="text-neutral-200 font-custom-cursive text-lg">
                {convenor.designation}
              </p>
              <div className="m-2 w-16 h-1 inline-block "></div>
              <p className="text-neutral-200 font-bold ">
                {convenor.contactNo}
              </p>
              <div className="m-6 flex justify-center text-white">
                <a
                  href="#"
                  className="ml-1 mr-1 h-10 w-10 p-2 flex justify-center rounded-full text-2xl bg-slate-800 hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="#"
                  className="ml-1 mr-1 h-10 w-10 p-2 flex justify-center rounded-full text-2xl bg-sky-700 hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  href="#"
                  className="ml-1 mr-1 h-10 w-10 p-2 flex justify-center rounded-full text-2xl bg-sky-500 hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="#"
                  className="ml-1 mr-1 h-10 w-10 p-2 flex justify-center rounded-full text-2xl bg-rose-600 hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

