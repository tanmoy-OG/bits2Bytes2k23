// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";
import { toast } from "react-toastify";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Button from "../Components/Button";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Particle from "../Components/Particle";
const Events = () => {
  // useEffect(()=>{
  //   useNavigate("/404_DATA_NOT_FOUND");
  // })

  const list = [
    {
      event_name: "Envision",
      image: "/RR1.png",
      event_date: "18th July",
      about_event:
        "wasfhaquifhbsaji aw wrwakfcrwa awugfwafwa aowfahia oaw;fhawifaw oawifhwaijwa awifwafiwahj oawifhwaiofh wiafhwaif waipfhwaiof w waifh waiorfwia fawifwyaiof waifwayh fioeafah iwaf iah ahfwafiwa yha owfa fh awfujwa'f awufga",
    },
    {
      event_name: "Electronovation",
      image: "/RR1.png",
      event_date: "17th July",
      about_event:
        "wasfhaquifhbsaji aw wrwakfcrwa awugfwafwa aowfahia oaw;fhawifaw oawifhwaijwa awifwafiwahj oawifhwaiofh wiafhwaif waipfhwaiof w waifh waiorfwia fawifwyaiof waifwayh fioeafah iwaf iah ahfwafiwa yha owfa fh awfujwa'f awufga",
    },
    {
      event_name: "Drone",
      image: "/RR1.png",
      event_date: "17th July",
      about_event:
        "wasfhaquifhbsaji aw wrwakfcrwa awugfwafwa aowfahia oaw;fhawifaw oawifhwaijwa awifwafiwahj oawifhwaiofh wiafhwaif waipfhwaiof w waifh waiorfwia fawifwyaiof waifwayh fioeafah iwaf iah ahfwafiwa yha owfa fh awfujwa'f awufga",
    },
    {
      event_name: "Robo Rally",
      image: "/RR1.png",
      event_date: "17th July",
      about_event:
        "wasfhaquifhbsaji aw wrwakfcrwa awugfwafwa aowfahia oaw;fhawifaw oawifhwaijwa awifwafiwahj oawifhwaiofh wiafhwaif waipfhwaiof w waifh waiorfwia fawifwyaiof waifwayh fioeafah iwaf iah ahfwafiwa yha owfa fh awfujwa'f awufga",
    },
  ];

  const [token, setToken] = useState("");
  const [type, setType] = useState("");
  const [object, setObject] = useState("");
  const [cookies] = useCookies(["token"]);
  const apiUrl = import.meta.env.VITE_API_URL;

  const [addEvent, setAddEvent] = useState(false);

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

    fetch(`${apiUrl}/view_event/`, {
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
        setObject(data);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  // [{name, date, ...}, {name, date, ...}, {name, date, ...}]

  useEffect(() => {
    setToken(cookies.token);
  });

  useEffect(() => {
    if (token === "") return;
    fetchType(token);
  }, [token]);

  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav page="events" />
      {!addEvent && (
        <div className="p-6 pt-0 lg:px-12 bg-sky-500/10 backdrop-blur-sm m-10 ml-6 mr-6 rounded-2xl">
          <h1 className="p-4 md:p-10 md:pb-14 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase">
            EVENTS
          </h1>
          {list.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 lg:gap-16 place-items-center">
              {/* <Event list={object} /> */}
              {list.map((e) => (
                <Event object={e} />
              ))}
            </div>
          ) : (
            <div className="place-items-center mb-10">
              <h1 className="uppercase text-3xl text-orange-400 tracking-widest">
                No Events Available
              </h1>
            </div>
          )}

          {/* <button
            className="mt-10 mb-4 md:mt-14 md:mb-10 h-10 w-1/3 lg:w-1/4 mx-auto rounded-md bg-orange-400 uppercase"
            onClick={() => {
              setAddEvent(true);
            }}
          >
            Add Event
          </button> */}
          {type === "admin" && (
            <button
              type="submit"
              className="button mt-10 mb-4 md:mt-14 md:mb-10 w-3/4 sm:w-1/3 lg:w-1/4 mx-auto tracking-widest uppercase"
              onClick={() => {
                setAddEvent(true);
              }}
            >
              Add Event
            </button>
          )}
        </div>
      )}
      {addEvent && (
        <div className="p-6 pt-0 lg:px-12 lg:w-2/3 bg-sky-500/10 backdrop-blur-sm m-10 ml-6 mr-6 lg:mx-auto rounded-2xl">
          <h1 className="p-4 md:p-10 md:pb-14 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase">
            ADD EVENT
          </h1>
          <AddEvent setAddEvent={setAddEvent} setObject={setObject} />
          {/* <Button function={eventState(false)} buttonType="cancel" /> */}
        </div>
      )}
      <Footer />
      <Particle />
    </div>
  );
};

// const Event = (props) => {
//   console.log(props);
//   let display = [];
//   // const id = 3;
//   const navigate = useNavigate();

//   const eachEvents = (e) => {
//     navigate("/events/details", { state: e });
//   };

//   props.list.forEach((e) => {
//     display.push(
//       <div
//         className={`flex flex-col justify-end bg-sky-950 rounded-xl h-fit p-0 transition-all duration-500 hover:shadow-lg hover:shadow-blue-900`}
//         to="/events/details"
//         onClick={() => {
//           eachEvents(e);
//         }}
//       >
//         <img className=" rounded-t-xl" src={e.image} alt="eventPic" />
//         <div className="bg-black/30 overflow-hidden h-12 group-hover:bg-black/80 transition-all duration-500 rounded-b-xl">
//           <h3 className="m-2 text-neutral-200 text-lg font-semibold uppercase">
//             {e.name}
//           </h3>
//         </div>
//       </div>
//     );
//   });

//   return display;
//   // return <></>;
// };

const Event = (props) => {
  console.log(props);
  const navigate = useNavigate();

  const eachEvents = (e) => {
    navigate("/events/details", { state: e });
  };

  return (
    <div
      className={`flex flex-col justify-end bg-sky-950 rounded-xl h-fit p-0 transition-all duration-500 hover:shadow-lg hover:shadow-blue-900`}
      to="/events/details"
      onClick={() => {
        eachEvents(props);
      }}
    >
      <img className=" rounded-t-xl" src={props.object.image} alt="eventPic" />
      <div className="bg-black/30 overflow-hidden h-12 group-hover:bg-black/80 transition-all duration-500 rounded-b-xl">
        <h3 className="m-2 text-neutral-200 text-lg font-semibold uppercase">
          {props.object.event_name}
        </h3>
      </div>
    </div>
  );
};

const AddEvent = (props) => {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const [coordinator, setCoordinator] = useState("");
  const [phone, setPhone] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState(new FormData());

  const options = [
    { value: "0", label: "Solo" },
    { value: "1", label: "Team" },
  ];
  const [option, setOption] = useState({});

  useEffect(() => {
    setToken(cookies.token);
  }, []);

  const addEvent = async () => {
    fetch(`${apiUrl}/post_event/`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          toast.error("An error occurred!");
        }
      })
      .then((data) => {
        if (checkError(data)) toast.error(data.error);
        else toast.success(data.successful);
      })
      .then(() => {
        fetch(`${apiUrl}/view_event/`, {
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
            setObject(data);
          })
          .catch((error) => {
            toast.error(error);
          });
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const push = (newEventData) => {
    const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    myHeaders.append("authorization", token);

    const formData = new FormData();
    formData.append("event_name", name);
    formData.append("about_event", about);
    formData.append("event_date", date);
    formData.append("team", option);
    formData.append("coordinator", coordinator);
    formData.append("mobile", phone);
    formData.append("image", image);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow",
    };

    // for (const [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    // .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));

    // fetch(`${apiUrl}/post_event/`, requestOptions)
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     } else {
    //       toast.error("An error occurred!");
    //     }
    //   })
    //   .then((data) => {
    //     if (checkError(data)) toast.error(data.error);
    //     else toast.success(data.successful);
    //   })
    //   .catch((error) => {
    //     toast.error(error);
    //   });

    addEvent(requestOptions);

    props.setAddEvent(false);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        push();
      }}
      className="flex flex-col items-center justify-center h-fit gap-3 pb-10"
    >
      <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
        />
      </div>
      <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
        <textarea
          name="about"
          placeholder="About Event"
          cols="10"
          rows="10"
          value={about}
          onChange={(e) => {
            setAbout(e.target.value);
          }}
          className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
        ></textarea>
      </div>
      <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
        <input
          type="text"
          name="coordinator"
          placeholder="Coordinator Name"
          value={coordinator}
          onChange={(e) => {
            setCoordinator(e.target.value);
          }}
          className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
        />
      </div>
      <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
        <input
          type="tel"
          name="phone"
          placeholder="Coordinator Phone No."
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
        />
      </div>
      <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          className="mb-8 p-3 rounded-md bg-black/50 text-white focus:outline-none self-center w-full sm:w-fit tracking-widest"
        />
        <input
          type="file"
          name="image"
          placeholder="Upload Poster"
          // value={image}
          onChange={(e) => {
            // console.log(e);
            if (e.target.files && e.target.files[0])
              setImage(URL.createObjectURL(e.target.files[0]));
          }}
          className="mb-8 p-2 rounded-md bg-black/50 text-white focus:outline-none self-center w-full sm:w-fit tracking-widest"
          // value={values.roll}
          // onChange={handleChange}
          // onBlur={handleBlur}
        />
        {/* <img src={image} alt="" /> */}
        {/* <img src={image} alt="random" /> */}
        <Dropdown
          defaultValue={option}
          onChange={setOption}
          options={options}
          className="mb-2 p-2 rounded-md bg-black/50 text-white focus:outline-none self-center w-full sm:w-1/2 tracking-widest"
        />
      </div>

      {/* submit */}
      <button type="submit" className="mb-2 button-green uppercase">
        Submit
      </button>
      <button
        onClick={() => {
          props.setAddEvent(false);
        }}
        type="button"
        className="button-red uppercase"
      >
        Cancel
      </button>
    </form>
  );
};

export default Events;
