import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHippo } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Secretary = () => {
  return (
    <div className=" row h-fit mb-10 bg-blue-500/10">
      <h1
        className="p-4 md:p-10 pb-5 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans"
        data-aos="fade-up "
      >
        Secretary
      </h1>

      <div className="p-4 flex justify-center flex-wrap">
        <Card name={ "Debanjan Chakroborty" } designation={ "Technical Sacretary" }/>
        <Card name={ "Twishanu Aich Roy" } designation={ "Assistant Technical Sacretary" }/>
        <Card name={ "Aditya Roy" } designation={ "Assistant Technical Sacretary" }/>
        <Card name={ "Payel Halder" } designation={ "Assistant Technical Sacretary" }/>
        <Card name={ "Annu Priya" } designation={ "Assistant Technical Sacretary" }/>
      </div>
    </div>
  );
};

const Card = (props) => {
  return (
    <div className="bg-white rounded-xl transition-all w-72 m-4">
      <div className="flex p-10 pb-6 bg-blue-950 rounded-t-xl justify-center border-2">
        <img
          src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg"
          className="p-1 rounded-full border-neutral-400 border-8"
          alt="pic"
        />
      </div>
      <h3 className="m-2 text-neutral-600 text-lg font-semibold uppercase">
        { props.name }
      </h3>
      <div className="m-2 w-16 h-1 inline-block bg-gradient-to-r from-orange-600 to-orange-300"></div>
      <p className=" text-neutral-400 italic">
        { props.designation }
      </p>
      <div className=" m-6 flex justify-center text-white">
        <a
          href="#"
          className=" ml-1 mr-1 h-10 w-10 p-2 flex justify-center rounded-full text-2xl bg-slate-800 hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500"
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
  );
};
