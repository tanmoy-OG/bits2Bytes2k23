import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Particle from "../Components/Particle";
import EachLeaderboard from "../Components/EachLeaderboard";
import { useLocation } from "react-router-dom";
const EachEvents = () => {
  const [cookies] = useCookies(["token", "type"]);
  // const [no, setNo] = useState("0");
  const [participated, setParticipated] = useState(false);
  const [type, setType] = useState(2);
  const [teamName, setTeamName] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;

  const state = useLocation().state;
  let list = [
    [1, "Tanmoy"],
    [2, "Priyankar"],
    [3, "Rishav"],
  ];

  const fetchTotalParticipants = () => {
    fetch(`${apiUrl}/no_of_participants/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event_name: state.object.event_name
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
         else toast.error("Error receiving number of participants");
      })
      .then((data) => {
        setNo(data);
      })
      .catch((error) => {
        // toast.error(error);
      });
  };

  const registrationCheck = () => {
    fetch(`${apiUrl}/participated_or_not/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "authorization": cookies.token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        else toast.error("Error receiving participation details");
      })
      .then((data) => {
        console.log(data);
        if(!("error" in data))
        {
          if(data.successful == "1") setParticipated(true);
          else setParticipated(false);
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const registerTeam = () => {
    fetch(`${apiUrl}/participate/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "authorization": cookies.token,
      },
      body: JSON.stringify({
        team_name: teamName,
        event_name: state.object.event_name,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
         else {
          toast.error("Error registering for event");
        }
      })
      .then((data) => {
        if("error" in data) 
        {
          toast.error("Error while registering!");
          return;
        }
        toast.success(data.successful);
        setParticipated(true);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const registerSolo = () => {
    fetch(`${apiUrl}/participate/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "authorization": cookies.token,
      },
      body: JSON.stringify({
        event_name: state.object.event_name,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
         else {
          toast.error("Error registering for event");
        }
      })
      .then((data) => {
        toast.success(data.successful);
        setParticipated(true);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const download = () => {
    fetch(`${apiUrl}/download_by_admin/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "authorization": cookies.token,
      },
      body: JSON.stringify({
        event_name: state.object.event_name,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
         else {
          toast.error("Error downloading event data");
        }
      })
      .then((data) => {
        toast.success(data.successful);
        setParticipated(true);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  useEffect(() => {
    fetchTotalParticipants();
    registrationCheck();
    setType(state.object.type);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav page="events" />
      <div className=" m-10 ml-6 mr-6 p-6 pt-0 lg:px-12 text-white bg-sky-500/10 backdrop-blur-sm rounded-2xl">
        {/* event name */}
        <h1
          className="p-4 md:p-10 pb-2 md:pb-2 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase"
          data-aos="fade-up"
        >
          {state.object.event_name}
        </h1>

        {/* event date */}
        <div
          className="pb-5 md:pb-10 flex justify-center gap-4 text-orange-400 tracking-widest"
          data-aos="fade-up"
        >
          <p>{state.object.event_date}</p>
        </div>

        {/* event data and leaderboard */}
        <div
          className="flex flex-col md:flex-row flex-shrink gap-10"
          data-aos="fade-up"
        >
          <div className="basis-1/2 flex flex-col gap-10">
            {/* event poster */}
            <div className="flex justify-center items-center">
              <img
                className="rounded-lg"
                src={state.object.event_pic}
                alt="not found"
              />
            </div>

            {/* about event */}
            <p className="text-justify tracking-wider">
              {state.object.about_event}
            </p>

            {/* number of participants */}
            {/* <div className="flex flex-row justify-center align-middle flex-wrap">
              <div className="tracking-widest p-1 flex-nowrap">
                Number of Participants:
              </div>
              <div className="text-orange-400 font-bold tracking-widest p-1">
                {no}
              </div>
            </div> */}

            {!participated ? (
              <div className="h-fit w-full flex flex-col gap-6">
                {type === 1 && (
                  <input
                    type="text"
                    name="teamname"
                    placeholder="Enter team name"
                    value={teamName}
                    onChange={(e) => {
                      setTeamName(e.target.value);
                    }}
                    className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
                  />
                )}
                <button
                  type="submit"
                  className="button-green mb-4 md:mb-10 md:w-1/2 sm:w-1/3 lg:w-1/3 mx-auto tracking-widest uppercase"
                  onClick={()=>{
                    if(type === 1) registerTeam();
                    else if(type === 0) registerSolo();
                  }}
                >
                  Register
                </button>
              </div>
            ) : (
              <h1 className=" bg-neutral-600 mb-4 md:mb-10 md:w-1/2 sm:w-1/3 lg:w-1/3 mx-auto p-2 tracking-widest rounded-lg uppercase italic">
                Already Participated
              </h1>
            )}
          </div>

          {/* rank list */}
          <div className="h-fit p-2 relative basis-1/2 flex flex-col">
            <div className="list-nav flex flex-row border-b border-spacing-1 border-white/20 gap-2 p-2 justify-center items-center">
              <div className="p-1 uppercase w-full text-center font-bold tracking-widest border-r border-white/20 border-spacing-1 text-green-400">
                Leaderboard
              </div>
              <div className="hover:bg-white/20 cursor-pointer transition-all duration-300 flex justify-center items-center p-2 rounded-md" onClick={download}>
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
