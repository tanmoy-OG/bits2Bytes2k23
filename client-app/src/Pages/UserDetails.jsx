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
      <div className="flex flex-col justify-center items-center w-full h-full gap-4 mt-10">
        {/* profile navbar */}
        <div className="w-full pl-6 pr-6 flex flex-wrap sm:flex-nowrap justify-evenly items-center gap-4">
          <SubNavButton class="active-button" buttonType="details" />
          <Link to="/userprofile/myevents" className="button">
            <SubNavButton buttonType="my events" />
          </Link>
        </div>

        {/* details */}
        <Details
          type={props.type}
          fname={props.fname}
          lname={props.lname}
          roll={props.roll}
          year={props.year}
          stream={props.stream}
          email={props.email}
          phone={props.phone}
        />
      </div>
      <Particle />
    </div>
  );
};

export default UserDetails;
