import Nav from "../Nav";
import Particle from "../Homepage/Particle";
import { Contact } from "../Homepage/Contact";
export const Events = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav />
      
      <Contact />
      <Particle />
    </div>
  );
};
