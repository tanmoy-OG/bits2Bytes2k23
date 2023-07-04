import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import Particle from "../Components/Particle";

const ChooseForm = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav />
      <div className="bg-gray-600 p-5 mx-10 my-10">
        <Link
          to="/signup/admin"
          className="font-bold p-4 font-custom-sans text-lg hover:text-blue-300"
        >
          Admin Registration Form
        </Link>

        <hr className=" border border-black" />

        {/* <Link 
      to="/coordinator"
      className='font-bold p-4 font-custom-sans text-lg hover:text-blue-300'>
        Coordinators Registration Form
      </Link>
      <hr className=' border border-black'/> */}

        <Link
          to="/signup/participant"
          className="font-bold p-4 font-custom-sans text-lg hover:text-blue-300"
        >
          Participants Registration Form
        </Link>
      </div>
      <Particle />
    </div>
  );
};

export default ChooseForm;
