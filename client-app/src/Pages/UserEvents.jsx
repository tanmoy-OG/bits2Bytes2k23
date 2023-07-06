import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import SubNavButton from "../Components/SubNavButton";
import Particle from "../Components/Particle";

const UserEvents = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav />
      <div className="flex flex-col justify-center items-center w-full h-full gap-4 mt-10">
        {/* profile navbar */}
        <div className="w-full pl-6 pr-6 flex flex-wrap sm:flex-nowrap justify-evenly items-center gap-4">
          <Link to="/userprofile/details" className="button">
            <SubNavButton buttonType="details" />
          </Link>
          <SubNavButton class="active-button" buttonType="my events" />
        </div>

        <div className="p-6 pt-4 bg-sky-500/10 backdrop-blur-sm w-3/4 m-6 md:w-2/4 max-w-2xl rounded-2xl flex flex-col gap-7 sm:gap-12">
          <h1 className="p-4 md:p-10 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase">
            coming soon!
          </h1>
        </div>
      </div>

      <Particle />
    </div>
  );
};

export default UserEvents;
