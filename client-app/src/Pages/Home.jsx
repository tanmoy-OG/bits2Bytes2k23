import Nav from "../Components/Nav";
import About from "../Components/About";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import Convenors from "../Components/Convenors";
import Secretary from "../Components/Secretary";
import Present from "../Components/Present";
import Particle from "../Components/Particle";
import Vanta from "../Components/Vanta";
import NET from "vanta/src/vanta.net";
import { useEffect, useState } from "react";

const Home = () => {
  useEffect(() => {
    NET({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xe708e,
      backgroundColor: 0x0,
      maxDistance: 1.0,
      spacing: 12.0,
    });
  }, []);

  return (
    <div className=" absolute top-0 left-0 w-full h-fit overflow-clip">
      <Vanta />
      <Nav />
      <Present />
      <About />
      <Carousel />
      <Convenors />
      <Secretary />
      <Footer />
      <Particle />
    </div>
  );
};

export default Home;
