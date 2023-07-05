import { Link } from "react-router-dom";

const UserEvents = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav />
      <div className="flex flex-col justify-center items-center w-full h-full gap-4 mt-10">
        {/* profile navbar */}
        <div className="w-full pl-6 pr-6 flex flex-wrap sm:flex-nowrap justify-evenly items-center gap-4">
          <Link to="/userprofile/details" className="button">
            <SubNavButton buttonType="details" />
          </Link>
          <SubNavButton class="active-button" buttonType="my events" />
        </div>

        {/* my events esction left */}
      </div>
      <Particle />
    </div>
  );
};

export default UserEvents;
