import { useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { toast } from "react-toastify";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Particle from "../Components/Particle";
import EachLeaderboard from "../Components/EachLeaderboard";
import { useLocation } from "react-router-dom";
const EachEvents = () => {
  const [token, setToken] = useState("");
  const [cookies] = useCookies(["token"]);
  const [no, setNo] = useState("0");
  const [participated, setParticipated] = useState("false");
  const apiUrl = import.meta.env.VITE_API_URL;

  // let name = ["Envision", "Electronovation", "Quad-X", "Code Ardor"];
  const state = useLocation().state;
  // console.log(state.pic);
  let list = [
    [1, "Tanmoy"],
    [2, "Priyankar"],
    [3, "Rishav"],
  ];

  const fetchType = (token) => {
    if (token === "" || token === null || token === undefined) {
      setType("logged-out");
      return;
    }
    fetch(`${apiUrl}/user_type/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          toast.error("Error fetching data");
        }
      })
      .then((data) => {
        if ("error" in data) {
          toast.error(data.error);
          setType("logged-out");
        } else {
          toast.success("Data fetched successfully");
          setType(data.user);
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const fetchNo = () => {
    fetch(`${apiUrl}/no_of_participants/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        //  else {
        //   toast.error("Error receiving type");
        // }
      })
      .then((data) => {
        // toast.success("Data fetched successfully");
        setNo(data);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const fetchParti = () => {
    fetch(`${apiUrl}/participated_or_not/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        //  else {
        //   toast.error("Error receiving type");
        // }
      })
      .then((data) => {
        // toast.success("Data fetched successfully");
        setParticipated(data);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const post = () => {
    const myHeaders = new Headers();
    myHeaders.append("authorization", token);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow",
    };
    fetch(`${apiUrl}/participated_or_not/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        //  else {
        //   toast.error("Error receiving type");
        // }
      })
      .then((data) => {
        // toast.success("Data fetched successfully");
        setParticipated(data);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  useEffect(() => {
    setToken(cookies.token);
  });

  useEffect(() => {
    if (token === "") return;
    fetchType(token);
  }, [token]);

  useEffect(() => {
    fetchNo();
    // fetchParti();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav page="events" />
      <div className=" m-10 ml-6 mr-6 p-6 pt-0 lg:px-12 text-white bg-sky-500/10 backdrop-blur-sm rounded-2xl">
        <h1
          className="p-4 md:p-10 pb-2 md:pb-2 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase"
          data-aos="fade-up"
        >
          {state.object.event_name}
        </h1>
        <div className="pb-5 md:pb-10 flex justify-center gap-4 text-orange-400">
          <p>{state.object.event_date}</p>
        </div>
        <div className="flex flex-col md:flex-row flex-shrink gap-10">
          <div className="basis-1/2 flex flex-col gap-10">
            <div className="">
              <img
                className="rounded-lg"
                src={state.object.image}
                alt="not found"
              />
            </div>
            <p className=" text-justify">{state.object.about_event}</p>
            {/* <button className=" md:mb-10 h-10 w-1/2 sm:w-1/3 lg:w-1/4 mx-auto rounded-md bg-orange-400 uppercase">
              Register
            </button> */}
            <h1>
              Number of Participants:{" "}
              <span className="text-orange-400">{no}</span>
            </h1>
            {participated === "false" ? (
              <button
                type="submit"
                className="button-green mb-4 md:mb-10 md:w-1/2 sm:w-1/3 lg:w-1/3 mx-auto tracking-widest uppercase"
              >
                Register
              </button>
            ) : (
              <h1 className=" bg-neutral-600 mb-4 md:mb-10 md:w-1/2 sm:w-1/3 lg:w-1/3 mx-auto p-2 tracking-widest rounded-lg uppercase italic">
                Already Participated
              </h1>
            )}
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
