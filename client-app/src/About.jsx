export const About = () => {
  return (
    <div className="flex flex-col pl-20 pr-20" id="about">
      <div className="bg-neutral-800 h-80 w-full left-0 absolute mix-blend-overlay"></div>
      <h1
        className="p-10 pb-5 text-5xl font-bold tracking-wider text-neutral-200"
        data-aos="fade-up"
      >
        ABOUT BITS2BYTES
      </h1>
      <p
        className="pb-10 pl-20 pr-20 text-2xl leading-10 text-left text-neutral-300"
        data-aos="fade-right"
        data-aos-delay="1000"
      >
        The 16th annual "Bits2Bytes 2023" technical festival will take place at Bengal Institute of Technology in West Bengal on July 17-18, 2023. This self-financing event aims to develop psycho-motor skills, technological innovation, and creativity in young talent. Successful graduates will showcase drone creation, autonomous robotics projects, and Android-based projects. Research-based activities, such as term papers and poster presentations, will motivate students. Over 50 cutting-edge technical projects from various fields, including computer science, biotechnology, and electronics, will be showcased. The event will also include a National Symposium on Computer Science, Electronics, and Biotechnology, a Short Film Making Competition, and an Exhibition on the Use of Autonomous Robotics in Saving the Earth and Nature.
      </p>
    </div>
  );
};
