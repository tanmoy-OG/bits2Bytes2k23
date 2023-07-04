import React from "react";
import Nav from "../Nav";
import Present from "../Homepage/Present";
import Particle from "../Homepage/Particle";
import About from "../Homepage/About";
import { Convenors } from "../Homepage/Convenors";
import { Carousel } from "../Homepage/Carousel";
import { Contact } from "../Homepage/Contact";

function Home() {
  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <div
        className=" absolute top-0 left-0 h-screen w-full -z-20"
        id="vanta"
      ></div>
      <Nav />
      <Present/>
      <About />
      <Carousel />
      <Convenors />
      <Contact />
      <Particle />
    </div>
  );
}

export default Home;
