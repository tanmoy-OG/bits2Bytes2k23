import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Particle from "../Components/Particle";
import EachLeaderboard from "../Components/EachLeaderboard";
import { useLocation } from "react-router-dom";
const EachEvents = () => {
  // let name = ["Envision", "Electronovation", "Quad-X", "Code Ardor"];
  const state = useLocation().state;
  // console.log(state.pic);
  let list = [
    [1, "Tanmoy"],
    [2, "Priyankar"],
    [3, "Rishav"],
  ];
  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav page="events" />
      <div className=" m-10 ml-6 mr-6 p-6 pt-0 lg:px-12 text-white bg-sky-500/10 backdrop-blur-sm rounded-2xl">
        <h1
          className="p-4 md:p-10 pb-2 md:pb-2 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase"
          data-aos="fade-up"
        >
          {state.name}
        </h1>
        <div className="pb-5 md:pb-10 flex justify-center gap-4 text-orange-400">
          <p>{state.date}</p>
          <p>{state.time}</p>
        </div>
        <div className="flex flex-col md:flex-row flex-shrink gap-10">
          <div className="basis-1/2 flex flex-col gap-10">
            <div className="">
              <img className="rounded-lg" src={state.pic} alt="not found" />
            </div>
            <p className=" text-justify">{state.about}</p>
            <p className=" text-left">{state.rules}</p>
            {/* <button className=" md:mb-10 h-10 w-1/2 sm:w-1/3 lg:w-1/4 mx-auto rounded-md bg-orange-400 uppercase">
              Register
            </button> */}
            <button
              type="submit"
              className="button-green mb-4 md:mb-10 md:w-1/2 sm:w-1/3 lg:w-1/3 mx-auto tracking-widest uppercase"
            >
              Register
            </button>
          </div>
          <div className="h-fit p-2 relative basis-1/2 flex flex-col">
            <div className="list-nav flex flex-row border-b border-spacing-1 border-white/20 gap-2 p-2 justify-center items-center">
              <div className="p-1 uppercase w-full text-center font-bold tracking-widest border-r border-white/20 border-spacing-1 text-green-400">
                Leaderboard
              </div>
              <div className="hover:bg-white/20 cursor-pointer transition-all duration-300 flex justify-center items-center p-2 rounded-md">
                <img src="/Icons/download.svg" alt="" />
              </div>
            </div>
            <div className="sm:m-2 my-2 sm:p-2 pb-2 border-b border-spacing-1 border-white/20">
              <div className="w-full bg-blue-600/10 p-1 rounded-md">
                <div className="group flex flex-row gap-3">
                  <div className="text-sm w-1/3 text-left tracking-widest p-1 uppercase font-bold whitespace-nowrap">
                    Rank
                  </div>
                  <div className="text-sm w-1/2 text-left tracking-widest p-1 overflow-hidden text-ellipsis uppercase font-bold whitespace-nowrap">
                    Name
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:p-4 pt-2">
              <EachLeaderboard list={list} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Particle />
    </div>
  );
};

export default EachEvents;
