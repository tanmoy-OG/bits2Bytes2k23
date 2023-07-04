const Footer = () => {
  return (
    <div className=" h-fit bg-sky-500/10 backdrop-blur-sm">
      <div className="flex justify-around w-full py-10">
        <div className="basis-1/3">
          <h1
            className="p-4 md:p-10 pb-5 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase"
            data-aos="fade-up "
            data-aos-duration="5000"
          >
            venue
          </h1>
          <iframe
            className=" h-60 w-80 m-auto rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.536417800597!2d88.4583307099992!3d22.52157003475493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0274a1c0115249%3A0x975599390971e184!2sBengal%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1688506260644!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="basis-1/3">
          <h1
            className="p-4 md:p-10 pb-5 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase"
            data-aos="fade-up "
            data-aos-duration="5000"
          >
            follow us
          </h1>
        </div>
        <div className="basis-1/3">
          <h1
            className="p-4 md:p-10 pb-5 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase"
            data-aos="fade-up "
            data-aos-duration="5000"
          >
            contact us
          </h1>
        </div>
      </div>
      <div className="w-full bg-black/30 py-2 text-neutral-400 tracking-wide font-bold">
        <h1>
          &copy; Bits2Bytes2k23
        </h1>
      </div>
    </div>
  );
};

export default Footer;
