import Nav from "../Components/Nav";
import About from "../Components/About";
import Carousel from "../Components/Carousel";
import Contact from "../Components/Contact";
import Convenors from "../Components/Convenors";
import Secretary from "../Components/Secretary";
import Present from "../Components/Present";
import Particle from "../Components/Particle";
import Vanta from "../Components/Vanta";

const Home = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Vanta />
      <Nav />
      <Present />
      <About />
      <Carousel />
      <Convenors />
      <Secretary />
      <Contact />
      <Particle />
    </div>
  );
};

export default Home;
