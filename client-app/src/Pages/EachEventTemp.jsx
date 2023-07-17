import { useState } from "react";

const EachEventTemp = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="w-full bg-blue-600/10 flex flex-col hover:bg-blue-500/20 hover:outline hover:outline-1 hover:outline-white rounded-lg">
      <div
        onClick={() => {
          setShowDetails(!showDetails);
        }}
        className="text-xs sm:text-sm w-full text-center font-bold tracking-widest text-neutral-200 uppercase py-3"
      >
        {data.name}
      </div>

      {showDetails && (
        <div className="flex flex-col 950px:flex-row h-fit justify-around md:flex-row p-5 gap-3 items-center border-t border-spacing-1 border-white/30 950px:mx-5">
          <div className="p-2 w-full sm:w-80 950px:w-96 h-auto sm:h-72 950px:h-full flex justify-center items-center bg-white/10">
            <img src={data.img} alt="" className="w-full h-full" />
          </div>

          <div className="flex flex-col w-full 950px:w-1/2 h-full text-left gap-5">
            <div className="flex flex-col w-full h-fit">
              <div className="uppercase font-bold tracking-wider text-orange-400">
                ABOUT EVENT :
              </div>
              <div className="text-white text-sm">{data.about}</div>
            </div>

            <div className="flex flex-col uppercase text-sm">
              {(data.hc[0].length > 0) && <div className="uppercase font-bold tracking-wider text-orange-400">
                HEAD COORDINATOR :
              </div>}
              <div className="flex flex-col w-full h-fit">
                <div className="text-white text-sm">{data.hc[0]}</div>
                <div className="text-orange-400 text-sm">{data.hc[1]}</div>
              </div>
            </div>

            {(data.date.length > 0) && <div className="text-white">DATE : {data.date}</div>}
            {(data.time.length > 0) && <div className="text-white">TIME : {data.time}</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default EachEventTemp;
