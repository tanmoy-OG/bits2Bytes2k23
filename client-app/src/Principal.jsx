import ReactPlayer from "react-player";
export const Principal = () => {
  return (
    <div className="mt-10 mb-10 ml-6 mr-6 p-10 pt-0 pb-12 bg-teal-500/10 backdrop-blur-lg rounded-2xl">
      <h1
        className="p-4 md:p-10 pb-5 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans"
        data-aos="fade-up"
      >
        PRINCIPAL'S MESSAGE
      </h1>
      <ReactPlayer
        className="react-player fixed-bottom rounded-lg"
        url="Videos/PrincipalSpeech.mp4"
        width="100%"
        height="100%"
        controls={true}
        data-aos="fade-up"
        data-aos-delay="200"
      />
    </div>
  );
};
