import { Card } from "../CardHome";

export const Secretary = () => {
  return (
    <div className="p-3 pt-0 pb-6 row h-fit bg-teal-500/10 backdrop-blur-lg ml-6 mr-6 mb-10 rounded-2xl">
      <h1
        className="p-4 md:p-10 pb-5 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans"
        data-aos="fade-up"
      >
        SECRETARY
      </h1>

      <div className="flex justify-evenly flex-wrap pl-10 pr-10">
        <Card
          pic={"Profile/debanjan.jpg"}
          name={"Debanjan Chakroborty"}
          designation={"Technical Sacretary"}
        />
        <Card
          name={"Twishanu Aich Roy"}
          designation={"Assistant Technical Sacretary"}
        />
        <Card
          name={"Aditya Roy"}
          designation={"Assistant Technical Sacretary"}
        />
        <Card
          name={"Payel Halder"}
          designation={"Assistant Technical Sacretary"}
          link={"https://www.linkedin.com/in/payel-halder"}
          face={"https://www.facebook.com/payel.halder.5397"}
          insta={"https://www.instagram.com/payel_halder7"}
        />
        <Card
          name={"Annu Priya"}
          designation={"Assistant Technical Sacretary"}
        />
      </div>
    </div>
  );
};

// const Card = (props) => {
//   return (
//     <div  data-aos="fade-up" data-aos-duration="5000" className="">
//       <div className="bg-teal-950 rounded-xl w-72 m-4 pb-4 transition-all duration-500 hover:transition-all hover:duration-300 hover:bg-teal-800 hover:shadow-[inset_0_0px_10px_rgba(0,0,0,0.5)] border-2 border-white/20">
//       <div className="flex p-10 pb-6 rounded-t-xl justify-center">
//         <img
//           src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg"
//           className="p-1 rounded-full border-neutral-400 border-8"
//           alt="pic"
//         />
//       </div>
//       <h3 className="m-2 text-neutral-200 text-lg font-semibold uppercase">
//         { props.name }
//       </h3>
//       <div className="m-2 w-16 h-1 inline-block bg-gradient-to-r from-orange-600 to-orange-300"></div>
//       <p className=" text-neutral-300 italic">
//         { props.designation }
//       </p>
//       <div className=" m-6 flex justify-center text-white">
//         <a
//           href="#"
//           className=" ml-1 mr-1 h-10 w-10 p-2 flex justify-center rounded-full text-2xl bg-slate-950 hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500"
//         >
//           <FontAwesomeIcon icon={faGithub} />
//         </a>
//         <a
//           href="#"
//           className=" ml-1 mr-1 h-10 w-10 p-2 flex justify-center rounded-full text-2xl bg-sky-700 hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500"
//         >
//           <FontAwesomeIcon icon={faLinkedinIn} />
//         </a>
//         <a
//           href="#"
//           className=" ml-1 mr-1 h-10 w-10 p-2 flex justify-center rounded-full text-2xl bg-sky-500 hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500"
//         >
//           <FontAwesomeIcon icon={faTwitter} />
//         </a>
//         <a
//           href="#"
//           className=" ml-1 mr-1 h-10 w-10 p-2 flex justify-center rounded-full text-2xl bg-rose-600 hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500"
//         >
//           <FontAwesomeIcon icon={faInstagram} />
//         </a>
//       </div>
//       </div>
//     </div>
//   );
// };
