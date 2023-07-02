import { Timer } from "../Timer";

const Present = ({ duration }) => {
  return (
    <div className="relative flex flex-col space-y-5 ml-6 mr-6 mb-4">
      <h1 className="text-5xl font-semibold tracking-wide text-yellow-600">
        BENGAL INSTITUTE OF TECHNOLOGY
      </h1>
      <h1 className="text-4xl text-sky-500 font-custom-cursive">Presents</h1>
      <div className="flex justify-center">
        <img src="logo.png" alt="bits2Bytes2k23 Logo" className="w-1/4 logo-img hover-rotate hover:scale-100" />
      </div>
      <Timer duration={duration} />
    </div>
  );
};

export default Present;
