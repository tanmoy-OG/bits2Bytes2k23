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
    <div className="row h-fit mb-10 bg-blue-500/10">
      <h1 className="p-4 md:p-10 pb-5 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans" data-aos="fade-up">
        Convenors
      </h1>
      <div className="flex justify-center">
        {convenors.map((convenor, index) => (
          <Card key={index} name={convenor.name} designation={convenor.designation} contactNo={convenor.contactNo} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ name, designation, contactNo }) => {
  return (
    <div className="bg-black rounded-xl transition-all w-72 m-4">
      <div className="flex p-1 bg-black rounded-t-xl justify-center ">
        <img
          src={demo}
          className="p-1"
          alt={`${name}'s Profile`}
        />
      </div>
      <h3 className="m-2 text-neutral-500 text-lg font-semibold uppercase">
        {name}
      </h3>
      <div className="m-2 w-16 h-1 inline-block bg-gradient-to-r from-orange-600 to-orange-300 "></div>
      <p className="text-neutral-200 font-custom-cursive text-lg">
        {designation}
      </p>
      <div className="m-2 w-16 h-1 inline-block "></div>
      <p className="text-neutral-200 font-bold ">
        {contactNo}
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
  );
};

export default Card;