import Details from "../Components/Details";
import Nav from "../Components/Nav";
import Particle from "../Components/Particle";
import SubNavButton from "../Components/SubNavButton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import ErrorPage from "./ErrorPage";

const UserDetails = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [Cookies, setCookie, removeCookie] = useCookies(["token", "type"]);
  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchData = () => {
    fetch(`${apiUrl}/view_profile/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        authorization: Cookies.token,
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
        setData(data);
      })
      .catch((error) => {
        toast.error(error);
      });
  };
 
  const logout = () => {
    removeCookie("token", { path: "/" });
    removeCookie("type", { path: "/" });
    navigate("/");
  };

  useEffect(() => {
    if (Cookies.type !== "participant") return;
    fetchData();
  }, []);

  return (
    <>
      {Cookies.type !== "participant" ? (
        <ErrorPage />
      ) : (
        <div className="absolute top-0 left-0 w-full h-fit">
          <Nav page="profile" />
          <div className="flex flex-col justify-center items-center w-full h-full gap-4 mt-10 px-6 pb-10">
            {/* profile navbar */}
            <div className="w-full pl-6 pr-6 flex flex-wrap sm:flex-nowrap justify-evenly items-center gap-4">
              <SubNavButton class="active-button" buttonType="details" />
              <Link to="/userprofile/myevents" className="button">
                <SubNavButton buttonType="my events" />
              </Link>
            </div>

            {/* details */}
            <Details
              initialFname={data.fname}
              initialLname={data.lname}
              initialRoll={data.roll}
              initialYear={data.year}
              initialStream={data.stream}
              initialEmail={data.email}
              initialPhone={data.mobile}
            />

            <div onClick={logout} className="button-red">
              logout
            </div>
          </div>
          <Particle />
        </div>
      )}
    </>
  );
};

export default UserDetails;
