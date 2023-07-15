// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Particle from "../Components/Particle";
const Events = () => {

  useEffect(()=>{
    useNavigate("/404_DATA_NOT_FOUND");
  })

  // const [addEvent, setAddEvent] = useState(false);
  // let list = [
  //   {
  //     name: "Envision",
  //     pic: "/RR1.png",
  //     about:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur suscipit error aliquam fugit dicta nulla, deleniti expedita, iure consequuntur nesciunt, totam saepe sunt beatae commodi quis. Rerum recusandae nemo dolore!",
  //     date: "17th July",
  //     time: "2 AM",
  //     rules: `
  //       1. lorem1
  //       2. lorem2
  //       3. lorem3
  //     `,
  //   },
  //   {
  //     name: "Electronovation",
  //     pic: "/RR1.png",
  //     about:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur suscipit error aliquam fugit dicta nulla, deleniti expedita, iure consequuntur nesciunt, totam saepe sunt beatae commodi quis. Rerum recusandae nemo dolore!",
  //     date: "17th July",
  //     time: "2 AM",
  //     rules: `
  //       1. lorem1
  //       2. lorem2
  //       3. lorem3
  //     `,
  //   },
  //   {
  //     name: "Quad-X",
  //     pic: "/RR1.png",
  //     about:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur suscipit error aliquam fugit dicta nulla, deleniti expedita, iure consequuntur nesciunt, totam saepe sunt beatae commodi quis. Rerum recusandae nemo dolore!",
  //     date: "17th July",
  //     time: "2 AM",
  //     rules: `
  //       1. lorem1
  //       2. lorem2
  //       3. lorem3
  //     `,
  //   },
  //   {
  //     name: "Code Ardor",
  //     pic: "/RR1.png",
  //     about:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur suscipit error aliquam fugit dicta nulla, deleniti expedita, iure consequuntur nesciunt, totam saepe sunt beatae commodi quis. Rerum recusandae nemo dolore!",
  //     date: "17th July",
  //     time: "2 AM",
  //     rules: `
  //       1. lorem1
  //       2. lorem2
  //       3. lorem3
  //     `,
  //   },
  // ]; //"Electronovation", "Quad-X", "Code Ardor"];

  // return (
  //   <div className="absolute top-0 left-0 w-full h-fit">
  //     <Nav page="events" />
  //     {!addEvent && (
  //       <div className="p-6 pt-0 lg:px-12 bg-sky-500/10 backdrop-blur-sm m-10 ml-6 mr-6 rounded-2xl">
  //         <h1 className="p-4 md:p-10 md:pb-14 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase">
  //           EVENTS
  //         </h1>
  //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 lg:gap-16 place-items-center">
  //           <Event list={list} />
  //         </div>
  //         {/* <button
  //           className="mt-10 mb-4 md:mt-14 md:mb-10 h-10 w-1/3 lg:w-1/4 mx-auto rounded-md bg-orange-400 uppercase"
  //           onClick={() => {
  //             setAddEvent(true);
  //           }}
  //         >
  //           Add Event
  //         </button> */}
  //         <button
  //           type="submit"
  //           className="button mt-10 mb-4 md:mt-14 md:mb-10 w-3/4 sm:w-1/3 lg:w-1/4 mx-auto tracking-widest uppercase"
  //           onClick={() => {
  //             setAddEvent(true);
  //           }}
  //         >
  //           Add Event
  //         </button>
  //       </div>
  //     )}
  //     {addEvent && (
  //       <div className="p-6 pt-0 lg:px-12 lg:w-2/3 bg-sky-500/10 backdrop-blur-sm m-10 ml-6 mr-6 lg:mx-auto rounded-2xl">
  //         <h1 className="p-4 md:p-10 md:pb-14 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase">
  //           ADD EVENT
  //         </h1>
  //         <AddEvent setAddEvent={setAddEvent} />
  //         {/* <Button function={eventState(false)} buttonType="cancel" /> */}
  //       </div>
  //     )}
  //     <Footer />
  //     <Particle />
  //   </div>
  // );
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
        className={`flex flex-col justify-end bg-sky-950 rounded-xl h-fit p-0 transition-all duration-500 hover:shadow-lg hover:shadow-blue-900`}
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

const AddEvent = (props) => {
  return (
    <form
      // onSubmit={submit}
      className="flex flex-col items-center justify-center h-fit gap-3 pb-10"
    >
      <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
          // value={values.roll}
          // onChange={handleChange}
          // onBlur={handleBlur}
        />
      </div>
      <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
        <textarea
          name="about"
          placeholder="About Event"
          cols="10"
          rows="10"
          className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
        ></textarea>
      </div>
      <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
        <textarea
          name="rules"
          placeholder={`Enter Rules in this format:
1. Rule 1
2. Rule 2
3. Rule 3
4. Rule 4
etc.`}
          cols="30"
          rows="10"
          className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
        ></textarea>
      </div>
      <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
        <input
          type="file"
          name="image"
          placeholder="Upload Poster"
          className="mb-2 p-2 rounded-md bg-black/50 text-white focus:outline-none self-center w-full sm:w-fit tracking-widest"
          // value={values.roll}
          // onChange={handleChange}
          // onBlur={handleBlur}
        />
      </div>

      {/* submit */}
      <button type="submit" className="mb-2 button-green uppercase">
        Submit
      </button>
      <button onClick={()=>{props.setAddEvent(false)}} type="submit" className="button-red uppercase">
        Cancel
      </button>
    </form>
  );
};

export default Events;
