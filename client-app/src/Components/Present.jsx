const Present = () => {
  return (
    <div className="relative flex flex-col space-y-5 ml-6 mr-6 mt-10 mb-10">
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-wide text-orange-400">
        BENGAL INSTITUTE OF TECHNOLOGY
      </h1>
      <h1 className="text-4xl text-sky-500 font-custom-cursive">Presents</h1>
      <div className="flex justify-center">
        <img
          src="logo.png"
          alt="bits2Bytes2k23 Logo"
          className="w-72 md:w-80 2xl:w-96 logo-img -ml-28 -mr-4 z-10"
        />
        <div className="rounded-full bg-black h-40 w-40 mt-24 -ml-64"></div>
      </div>
    </div>
  );
};

export default Present;
