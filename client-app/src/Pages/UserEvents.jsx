import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import SubNavButton from "../Components/SubNavButton";
import Particle from "../Components/Particle";
import EachUserEvent from "../Components/EachUserEvent";

const UserEvents = (props) => {
  const [current, setCurrent] = useState(true);

  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav page="profile" />
      <div className="flex flex-col justify-center items-center w-full h-full gap-4 mt-10 px-6 pb-10">
        {/* profile navbar */}
        <div className="w-full pl-6 pr-6 flex flex-wrap sm:flex-nowrap justify-evenly items-center gap-4">
          <Link to="/userprofile/details" className="button">
            <SubNavButton buttonType="details" />
          </Link>
          <SubNavButton class="active-button" buttonType="my events" />
        </div>

        {/* details */}
        <div className="w-full p-6 bg-transparent">
          <div className="bg-sky-500/10 backdrop-blur-sm rounded-md text-white relative w-full h-full flex flex-col">
            <div className="list-nav flex flex-row border-b border-spacing-1 border-white/20 gap-2 p-2 justify-center items-center">
              <div className="p-1 uppercase w-full text-left font-bold tracking-widest  border-spacing-1 text-green-400">
                Event
              </div>
              <div className="p-1 uppercase w-full text-center font-bold tracking-widest  border-spacing-1 text-green-400">
                Team Name
              </div>
              <div className="p-1 uppercase w-full text-right font-bold tracking-widest border-spacing-1 text-green-400">
                Number of Participants
              </div>
            </div>

            {/* <div className="flex flex-col gap-3 m-2 mt-0 p-2 border-b border-spacing-1 border-white/20">
              <div className="w-full bg-blue-600/10 p-1 rounded-md">
                <div className="group flex flex-row gap-3">
                  <div className="text-sm w-1/2 sm:w-1/3 text-left tracking-widest p-1 uppercase font-bold whitespace-nowrap">
                    Roll Number
                  </div>
                  <div className="text-sm w-1/4 sm:w-1/3 text-left tracking-widest p-1 overflow-hidden text-ellipsis uppercase font-bold whitespace-nowrap">
                    First Name
                  </div>
                  <div className="text-sm w-1/4 sm:w-1/3 text-left tracking-widest p-1 overflow-hidden text-ellipsis uppercase font-bold whitespace-nowrap">
                    Last Name
                  </div>
                </div>
              </div>
            </div> */}

            <div className="flex flex-col gap-3 p-4 pt-2">
              <EachUserEvent
                tname="kjrhguigufiogjgrhtrhtrrthrthtrh"
                ename="Envision"
                no={2}
                list={[12100120038, 12100120024]}
              />
              <EachUserEvent
                tname="kjrhguiguf"
                ename="Electronovation"
                no={4}
                list={[12100120038, 12100120024, 12100120056, 12100120028]}
              />
            </div>
          </div>
        </div>
      </div>
      <Particle />
    </div>
  );
};

export default UserEvents;
