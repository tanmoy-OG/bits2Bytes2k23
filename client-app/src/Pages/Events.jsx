import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Particle from "../Components/Particle";
const Events = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav page="events" />
      <div className="p-6 bg-sky-500/10 backdrop-blur-sm m-10 ml-6 mr-6 rounded-2xl">
        <h1 className="p-4 md:p-10 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase">
          coming soon!
        </h1>
      </div>
      <Footer />
      <Particle />
    </div>
  );
};

export default Events;
