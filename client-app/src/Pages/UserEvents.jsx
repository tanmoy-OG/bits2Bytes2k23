import SubNavButton from "../Components/SubNavButton";
import Nav from "../Components/Nav";
import Particle from "../Components/Particle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";

const UserEvents = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [type, setType] = useState("");
  const [token, setToken] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const fetchData = (token) => {
    // fetch("http://127.0.0.1:5000/view_profile/", {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //     authorization: token,
    //   },
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     } else {
    //       toast.error("Error fetching data", {
    //         position: toast.POSITION.TOP_RIGHT,
    //         autoClose: 3000,
    //         hideProgressBar: true,
    //       });
    //     }
    //   })
    //   .then((data) => {
    //     toast.success("Data fetched successfully", {
    //       position: toast.POSITION.TOP_RIGHT,
    //       autoClose: 3000,
    //       hideProgressBar: true,
    //     });
    //     setData(data);
    //   })
    //   .catch((error) => {
    //     toast.error(error, {
    //       position: toast.POSITION.TOP_RIGHT,
    //       autoClose: 3000,
    //       hideProgressBar: true,
    //     });
    //   });
  };

  const fetchType = (token) => {
    fetch("http://127.0.0.1:5000/user_type/", {
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
          toast.error("Error receiving type", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            hideProgressBar: true,
          });
        }
      })
      .then((data) => {
        toast.success("Data fetched successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: true,
        });
        if ("error" in data) setType("logged-out");
        else setType(data.user);
      })
      .catch((error) => {
        toast.error(error, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: true,
        });
      });
  };

  const logout = () => {
    removeCookie("token", { path: "/" });
    navigate("/");
  };

  useEffect(() => {
    setToken(cookies.token);
  });

  useEffect(() => {
    if (token === "") return;
    fetchType(token);
  }, [token]);

  useEffect(() => {
    if (type === "") return;
    if (type !== "admin") navigate("/404_DATA_NOT_FOUND");
    else fetchData(token);
  }, [type]);

  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav />
      <div className="flex flex-col justify-center items-center w-full h-full gap-4 mt-10 px-6 pb-10">
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
