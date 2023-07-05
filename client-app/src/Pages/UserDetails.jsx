import Details from "../Components/Details";
import Nav from "../Components/Nav";
import Particle from "../Components/Particle";
import SubNavButton from "../Components/SubNavButton";
import Vanta from "../Components/Vanta";
import { Link } from "react-router-dom";

const UserDetails = (props) => {
  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav />
      <div className="flex flex-col justify-center items-center w-full h-full gap-4">
        {/* profile navbar */}
        <div className="w-full pl-6 pr-6 flex flex-wrap sm:flex-nowrap justify-evenly items-center gap-4">
          <SubNavButton class="active-button" buttonType="details" />
          <Link to="/userprofile/myevents" className="button">
            <SubNavButton buttonType="my events" />
          </Link>
        </div>

        {/* details */}
        <Details
          type="participant"
          fname="Priyankar"
          lname="Sarkar"
          roll="12100120011"
          year="3rd"
          stream="CSE"
          email="abc@gmail.com"
          phone="9999999999"
        />
      </div>
      <Particle />
    </div>
  );
};

export default UserDetails;
