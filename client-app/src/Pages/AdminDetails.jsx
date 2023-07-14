import Details from "../Components/Details";
import Nav from "../Components/Nav";
import Particle from "../Components/Particle";
import SubNavButton from "../Components/SubNavButton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";

const AdminDetails = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [type, setType] = useState("");
  const [token, setToken] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchData = (token) => {
    fetch(`${apiUrl}/view_profile/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "authorization": token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // toast.error("Error fetching data", {
          //   position: toast.POSITION.TOP_RIGHT,
          //   autoClose: 3000,
          //   hideProgressBar: true,
          // });
        }
      })
      .then((data) => {
        toast.success("Data fetched successfully");
        setData(data);
      })
      .catch((error) => {
        // toast.error(error, {
        //   position: toast.POSITION.TOP_RIGHT,
        //   autoClose: 3000,
        //   hideProgressBar: true,
        // });
      });
  };

  const fetchType = (token) => {
    fetch(`${apiUrl}/user_type/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "authorization": token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // toast.error("Error receiving type", {
          //   position: toast.POSITION.TOP_RIGHT,
          //   autoClose: 3000,
          //   hideProgressBar: true,
          // });
        }
      })
      .then((data) => {
        // toast.success("Data fetched successfully", {
        //   position: toast.POSITION.TOP_RIGHT,
        //   autoClose: 3000,
        //   hideProgressBar: true,
        // });
        if ("error" in data) setType("logged-out");
        else setType(data.user);
      })
      .catch((error) => {
        // toast.error(error, {
        //   position: toast.POSITION.TOP_RIGHT,
        //   autoClose: 3000,
        //   hideProgressBar: true,
        // });
      });
  };

  const logout = () => {
    removeCookie("token", { path: "/" });
    // setType("");
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
      <Nav page="profile"/>
      <div className="flex flex-col justify-center items-center w-full h-full gap-4 mt-10 px-6 pb-10">
        {/* profile navbar */}
        <div className="w-full pl-6 pr-6 flex flex-wrap sm:flex-nowrap justify-evenly items-center gap-4">
          <SubNavButton class="active-button" buttonType="details" />
          <Link to="/adminprofile/userlist" className="button">
            <SubNavButton buttonType="participants" />
          </Link>
        </div>

        {/* details */}
        <Details
          type={type}
          token={token}
          initialFname={data.fname}
          initialLname={data.lname}
          initialRoll=""
          initialYear=""
          initialStream=""
          initialEmail={data.email}
          initialPhone={data.mobile}
        />

        <div onClick={logout} className="button-red">
          logout
        </div>
      </div>
      <Particle />
      <ToastContainer />
    </div>
  );
};

export default AdminDetails;
