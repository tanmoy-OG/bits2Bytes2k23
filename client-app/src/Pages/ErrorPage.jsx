import Nav from "../Components/Nav";
import Particle from "../Components/Particle";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const ErrorPage = () => {
  const [Cookies] = useCookies(["token", "type"]);

  useEffect(()=>{
    console.log(Cookies.token);
    console.log(Cookies.type);
  });

  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav/>
      <div className="w-full h-full flex justify-center flex-col items-center p-6 pl-6 pr-6 opacity-70">
        <img src={"/error.webp"} alt="" className="h-64 sm:h-80 md:h-96" />
        <Link
          to="/"
          className="uppercase text-neutral-200 tracking-widest hover-underline p-2 w-fit hover:text-orange-400 hover:transition-all hover:duration-300 font-bold"
        >
          go to home
        </Link>
      </div>
      <Footer />
      <Particle />
    </div>
  );
};

export default ErrorPage;
