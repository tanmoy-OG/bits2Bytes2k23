import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export const Card = (props) => {
  return (
    <div data-aos="fade-up" data-aos-duration="5000" className="flex">
      <div className="card flex flex-col justify-end bg-sky-950 rounded-xl h-96 w-64 mb-10 p-0 transition-all duration-500 hover:shadow-lg hover:shadow-blue-900 group">
        <div className="bg-black/30 overflow-hidden h-12 group-hover:h-48 group-hover:bg-black/80 transition-all duration-500 rounded-b-xl">
          <h3 className="m-2 text-neutral-200 text-lg font-semibold uppercase">
            {props.name}
          </h3>
          <div className="m-2 w-16 h-1 inline-block bg-gradient-to-r from-orange-600 to-orange-300"></div>
          <p className=" text-neutral-300 italic">{props.designation}</p>
          <div className=" m-6 flex justify-center text-white">
            <a
              href="#"
              className=" ml-1 mr-1 h-10 w-10 p-2 flex justify-center rounded-full text-2xl bg-slate-950 hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="#"
              className=" ml-1 mr-1 h-10 w-10 p-2 flex justify-center rounded-full text-2xl bg-sky-700 hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="#"
              className=" ml-1 mr-1 h-10 w-10 p-2 flex justify-center rounded-full text-2xl bg-sky-500 hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              className=" ml-1 mr-1 h-10 w-10 p-2 flex justify-center rounded-full text-2xl bg-rose-600 hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
