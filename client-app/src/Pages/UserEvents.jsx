import SubNavButton from "../Components/SubNavButton";
import Nav from "../Components/Nav";
import Particle from "../Components/Particle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useCookies } from "react-cookie";
import EachUserEvent from "../Components/EachUserEvent";

const UserEvents = () => {
  const navigate = useNavigate();
  // const [data, setData] = useState({});
  // const [type, setType] = useState("");
  // const [token, setToken] = useState("");
  // const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  // const [current, setCurrent] = useState(true);

  // const fetchData = (token) => {
  //   fetch("http://127.0.0.1:5000/view_profile/", {
  //     method: "POST",
  //     mode: "cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: token,
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         toast.error("Error fetching data", {
  //           position: toast.POSITION.TOP_RIGHT,
  //           autoClose: 3000,
  //           hideProgressBar: true,
  //         });
  //       }
  //     })
  //     .then((data) => {
  //       toast.success("Data fetched successfully", {
  //         position: toast.POSITION.TOP_RIGHT,
  //         autoClose: 3000,
  //         hideProgressBar: true,
  //       });
  //       setData(data);
  //     })
  //     .catch((error) => {
  //       toast.error(error, {
  //         position: toast.POSITION.TOP_RIGHT,
  //         autoClose: 3000,
  //         hideProgressBar: true,
  //       });
  //     });
  // };

  // const fetchType = (token) => {
  //   fetch("http://127.0.0.1:5000/user_type/", {
  //     method: "POST",
  //     mode: "cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: token,
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         toast.error("Error receiving type", {
  //           position: toast.POSITION.TOP_RIGHT,
  //           autoClose: 3000,
  //           hideProgressBar: true,
  //         });
  //       }
  //     })
  //     .then((data) => {
  //       toast.success("Data fetched successfully", {
  //         position: toast.POSITION.TOP_RIGHT,
  //         autoClose: 3000,
  //         hideProgressBar: true,
  //       });
  //       if ("error" in data) setType("logged-out");
  //       else setType(data.user);
  //     })
  //     .catch((error) => {
  //       toast.error(error, {
  //         position: toast.POSITION.TOP_RIGHT,
  //         autoClose: 3000,
  //         hideProgressBar: true,
  //       });
  //     });
  // };

  // useEffect(() => {
  //   setToken(cookies.token);
  // });

  // useEffect(() => {
  //   if (token === "") return;
  //   fetchType(token);
  // }, [token]);

  // useEffect(() => {
  //   if (type === "") return;
  //   if (type !== "admin") navigate("/404_DATA_NOT_FOUND");
  //   else fetchData(token);
  // }, [type]);

  useEffect(()=>{
    navigate("/404_DATA_NOT_FOUND");
  });

  return (
    <></>
    // <div className="absolute top-0 left-0 w-full h-fit">
    //   <Nav />
    //   <div className="flex flex-col justify-center items-center w-full h-full gap-4 mt-10 px-6 pb-10">
    //     {/* profile navbar */}
    //     <div className="w-full pl-6 pr-6 flex flex-wrap sm:flex-nowrap justify-evenly items-center gap-4">
    //       <Link to="/userprofile/details" className="button">
    //         <SubNavButton buttonType="details" />
    //       </Link>
    //       <SubNavButton class="active-button" buttonType="my events" />
    //     </div>

    //     {/* details */}
    //     <div className="w-full p-6 bg-transparent">
    //       <div className="bg-sky-500/10 backdrop-blur-sm rounded-md text-white relative w-full h-full flex flex-col">
    //         <div className="list-nav flex flex-row border-b border-spacing-1 border-white/20 gap-2 p-2 justify-center items-center">
    //           <div className="p-1 uppercase w-full text-left font-bold tracking-widest  border-spacing-1 text-green-400">
    //             Event
    //           </div>
    //           <div className="p-1 uppercase w-full text-center font-bold tracking-widest  border-spacing-1 text-green-400">
    //             Team Name
    //           </div>
    //           <div className="p-1 uppercase w-full text-right font-bold tracking-widest border-spacing-1 text-green-400">
    //             Number of Participants
    //           </div>
    //         </div>

    //         {/* <div className="flex flex-col gap-3 m-2 mt-0 p-2 border-b border-spacing-1 border-white/20">
    //           <div className="w-full bg-blue-600/10 p-1 rounded-md">
    //             <div className="group flex flex-row gap-3">
    //               <div className="text-sm w-1/2 sm:w-1/3 text-left tracking-widest p-1 uppercase font-bold whitespace-nowrap">
    //                 Roll Number
    //               </div>
    //               <div className="text-sm w-1/4 sm:w-1/3 text-left tracking-widest p-1 overflow-hidden text-ellipsis uppercase font-bold whitespace-nowrap">
    //                 First Name
    //               </div>
    //               <div className="text-sm w-1/4 sm:w-1/3 text-left tracking-widest p-1 overflow-hidden text-ellipsis uppercase font-bold whitespace-nowrap">
    //                 Last Name
    //               </div>
    //             </div>
    //           </div>
    //         </div> */}

    //         <div className="flex flex-col gap-3 p-4 pt-2">
    //           <EachUserEvent
    //             tname="kjrhguigufiogjgrhtrhtrrthrthtrh"
    //             ename="Envision"
    //             no={2}
    //             list={[12100120038, 12100120024]}
    //           />
    //           <EachUserEvent
    //             tname="kjrhguiguf"
    //             ename="Electronovation"
    //             no={4}
    //             list={[12100120038, 12100120024, 12100120056, 12100120028]}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <Particle />
    // </div>
  );
};

export default UserEvents;
