import ReactPlayer from "react-player";
import Nav from "../Components/Nav";
import Contact from "../Components/Contact";
import Particle from "../Components/Particle";
const Principal = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav />
      <div
        className="mt-10 mb-10 ml-6 mr-6 p-10 pt-0 pb-12 flex flex-col items-center bg-sky-500/10 backdrop-blur-sm rounded-2xl"
        data-aos="fade-up"
      >
        <h1
          className="p-4 md:p-10 pb-5 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans"
          data-aos="fade-up"
        >
          PRINCIPAL'S MESSAGE
        </h1>
        <ReactPlayer
          className="react-player fixed-bottom"
          url="Videos/PrincipalSpeech.mp4"
          width="100%"
          height="100%"
          controls={true}
          data-aos="fade-up"
        />
      </div>
      <Contact />
      <Particle />
    </div>
  );
};

export default Principal;