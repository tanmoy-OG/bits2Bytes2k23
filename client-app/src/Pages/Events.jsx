// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Particle from "../Components/Particle";
const Events = () => {
  let list = [
    {
      name: "Envision",
      pic: "/RR1.png",
      about:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur suscipit error aliquam fugit dicta nulla, deleniti expedita, iure consequuntur nesciunt, totam saepe sunt beatae commodi quis. Rerum recusandae nemo dolore!",
      date: "17th July",
      time: "2 AM",
      rules: `
        1. lorem1
        2. lorem2
        3. lorem3
      `,
    },
    {
      name: "Electronovation",
      pic: "/RR1.png",
      about:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur suscipit error aliquam fugit dicta nulla, deleniti expedita, iure consequuntur nesciunt, totam saepe sunt beatae commodi quis. Rerum recusandae nemo dolore!",
      date: "17th July",
      time: "2 AM",
      rules: `
        1. lorem1
        2. lorem2
        3. lorem3
      `,
    },
    {
      name: "Quad-X",
      pic: "/RR1.png",
      about:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur suscipit error aliquam fugit dicta nulla, deleniti expedita, iure consequuntur nesciunt, totam saepe sunt beatae commodi quis. Rerum recusandae nemo dolore!",
      date: "17th July",
      time: "2 AM",
      rules: `
        1. lorem1
        2. lorem2
        3. lorem3
      `,
    },
    {
      name: "Code Ardor",
      pic: "/RR1.png",
      about:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur suscipit error aliquam fugit dicta nulla, deleniti expedita, iure consequuntur nesciunt, totam saepe sunt beatae commodi quis. Rerum recusandae nemo dolore!",
      date: "17th July",
      time: "2 AM",
      rules: `
        1. lorem1
        2. lorem2
        3. lorem3
      `,
    },
  ]; //"Electronovation", "Quad-X", "Code Ardor"];

  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav page="events" />
      <div className="p-6 pt-0 bg-sky-500/10 backdrop-blur-sm m-10 ml-6 mr-6 px-16 rounded-2xl">
        <h1 className="p-4 md:p-10 md:pb-14 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase">
          EVENTS
        </h1>
        <div className="grid grid-cols-3 gap-16 place-items-center">
          <Event list={list} />
        </div>
      </div>
      <Footer />
      <Particle />
    </div>
  );
};

const Event = (props) => {
  let display = [];
  // const id = 3;
  const navigate = useNavigate();

  const eachEvents = (e) => {
    navigate("/events/details", { state: e });
  };

  props.list.forEach((e) => {
    display.push(
      <div
        className={`flex flex-col justify-end bg-sky-950 rounded-xl h-fit mb-10 p-0 transition-all duration-500 hover:shadow-lg hover:shadow-blue-900`}
        to="/events/details"
        onClick={() => {
          eachEvents(e);
        }}
      >
        <img className=" rounded-t-xl" src={e.pic} alt="" />
        <div className="bg-black/30 overflow-hidden h-12 group-hover:bg-black/80 transition-all duration-500 rounded-b-xl">
          <h3 className="m-2 text-neutral-200 text-lg font-semibold uppercase">
            {e.name}
          </h3>
        </div>
      </div>
    );
  });

  return display;
};

export default Events;
