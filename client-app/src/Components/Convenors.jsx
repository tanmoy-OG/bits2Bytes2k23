import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Convenors = () => {
  const convenors = [
    {
      name: "Tripti Majumdar",
      designation: "Lead Convenor",
      position: "Something",
      contactNo: "123",
      profilePic: "Profile/tripti.jpg",
      git: "",
      link: "https://www.linkedin.com/in/tripti-majumdar-084856107",
      face: "",
      insta: "",
    },
    {
      name: "Ajanta Patil",
      designation: "Co-Convenor",
      position: "Something",
      contactNo: "123",
      profilePic: "Profile/ajanta.jpg",
      git: "",
      link: "https://www.linkedin.com/in/ajanta-palit-90229a40",
      face: "",
      insta: "",
    },
    // Add more convenors as needed
  ];

  return (
    <div
      className="h-fit bg-sky-500/10 backdrop-blur-lg ml-6 mr-6 mb-10 rounded-2xl"
      data-aos="fade-up"
      data-aos-duration="5000"
    >
      <h1
        className="p-4 md:p-10 pb-5 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans"
        data-aos="fade-up"
      >
        CONVENORS
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-between xl:px-28 2xl:px-40 pb-10">
        {convenors.map((convenor, index) => (
          <div
            key={index}
            className="aspect-square flex p-6 relative items-center justify-center"
          >
            <div className="group h-56 w-56 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute insert-0">
                  <img
                    src={convenor.profilePic}
                    className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                    alt={`${convenor.name}'s Profile`}
                  />
                </div>

                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 pl-8 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col justify-center items-center ml-4">
                    <h3 className="m-2 text-neutral-500 text-lg md:text-xl font-semibold uppercase">
                      {convenor.name}
                    </h3>
                    <div className="">
                      <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-orange-300"></div>
                    </div>
                    <p className="text-neutral-200 font-custom-cursive text-lg md:text-xl">
                      {convenor.designation}
                    </p>
                    <div className="m-2 w-16 h-1 inline-block"></div>
                    <p className="text-neutral-200 font-bold">
                      {convenor.contactNo}
                    </p>
                    <div className="m-6 flex flex-row">
                      <a
                        href={convenor.git}
                        className="ml-1 mr-1 h-10 w-10 p-2 flex justify-center rounded-full text-2xl bg-slate-800 hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                      <a
                        href={convenor.link}
                        className="ml-1 mr-1 h-10 w-10 p-2 flex justify-center rounded-full text-2xl bg-sky-700 hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500"
                      >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                      <a
                        href={convenor.tweet}
                        className="ml-1 mr-1 h-10 w-10 p-2 flex justify-center rounded-full text-2xl bg-sky-500 hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500"
                      >
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                      <a
                        href={convenor.insta}
                        className="ml-1 mr-1 h-10 w-10 p-2 flex justify-center rounded-full text-2xl bg-rose-600 hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Convenors;
