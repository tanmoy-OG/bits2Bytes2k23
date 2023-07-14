import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Particle from "../Components/Particle";
import { useLocation } from "react-router-dom";
const EachEvents = () => {
  // let name = ["Envision", "Electronovation", "Quad-X", "Code Ardor"];
  const state = useLocation().state;
  // console.log(state.pic);
  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav/>
      <div className=" p-6 text-white bg-sky-500/10 backdrop-blur-sm m-10 ml-6 mr-6 px-16 rounded-2xl">
        <h1>{state.name}</h1>
        <div className="flex justify-center">
          <p>{state.date}</p>
          <p>{state.time}</p>
        </div>
        <div className="flex flex-shrink gap-10">
          <div className="basis-1/2">
            <div className="">
              <img className="" src={state.pic} alt="not found" />
            </div>
            <p className="">{state.about}</p>
            <p>{state.rules}</p>
            <button className="bg-orange-500">Register</button>
          </div>
          <div className="basis-1/2 flex flex-col p-2">
            <h1 className="uppercase">Leaderboard</h1>
            <div className="font-bold m-2 p-4 font-custom-sans text-xl tracking-wide bg-blue-600/10 hover:bg-blue-500/20 text-white rounded-md transition-all duration-200">
              No1
            </div>
            <div className="font-bold m-2 p-4 font-custom-sans text-xl tracking-wide bg-blue-600/10 hover:bg-blue-500/20 text-white rounded-md transition-all duration-200">
              No2
            </div>
            <div className="font-bold m-2 p-4 font-custom-sans text-xl tracking-wide bg-blue-600/10 hover:bg-blue-500/20 text-white rounded-md transition-all duration-200">
              No3
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
