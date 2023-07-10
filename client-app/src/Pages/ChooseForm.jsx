import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import Particle from "../Components/Particle";

const ChooseForm = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Nav page="registration" />
      <div className="flex flex-col bg-sky-500/10 backdrop-blur-sm m-10 p-2 rounded-xl">
        <Link
          to="/signup/admin"
          className="font-bold m-2 p-4 font-custom-sans text-xl tracking-wide bg-blue-600/10 hover:bg-blue-500/20 text-white rounded-md transition-all duration-200"
        >
          Admin Registration Form
        </Link>

        {/* <Link 
      to="/coordinator"
      className='font-bold p-4 font-custom-sans text-lg hover:text-blue-300'>
        Coordinators Registration Form
      </Link>
      <hr className=' border border-black'/> */}

        <Link
          to="/signup/participant"
          className="font-bold m-2 p-4 font-custom-sans text-xl tracking-wide bg-blue-600/10 hover:bg-blue-500/20 text-white rounded-md transition-all duration-200"
        >
          Participants Registration Form
        </Link>
      </div>
      <Particle />
    </div>
  );
};

export default ChooseForm;
