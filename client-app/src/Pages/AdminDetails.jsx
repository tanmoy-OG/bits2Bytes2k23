import Details from "../Components/Details";
import Nav from "../Components/Nav";
import Particle from "../Components/Particle";
import SubNavButton from "../Components/SubNavButton";
import { Link } from "react-router-dom";
 
const AdminDetails = (props) => {
  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav page="profile" />
      <div className="flex flex-col justify-center items-center w-full h-full gap-4 mt-10">
        {/* profile navbar */}
        <div className="w-full pl-6 pr-6 flex flex-wrap sm:flex-nowrap justify-evenly items-center gap-4">
          <SubNavButton class="active-button" buttonType="details" />
          <Link to="/adminprofile/userlist" className="button">
            <SubNavButton buttonType="participants" />
          </Link>
        </div>

        {/* details */}
        <Details
          fname="Priyankar"
          lname="Sarkar"
          email="abc@gmail.com"
          phone="9999999999"
        />
      </div>
      <Particle />
    </div>
  );
};

export default AdminDetails;
