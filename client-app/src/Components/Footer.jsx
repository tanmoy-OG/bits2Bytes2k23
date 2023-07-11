import MailTo from "./MailTo";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

const Footer = () => {
  return (
    <div className=" h-fit bg-sky-500/10 backdrop-blur-sm">
      <div className="flex justify-around w-full flex-col sm:flex-row gap-4 pl-5 pr-5 lg:pl-10 lg:pr-10 xl:pl-28 xl:pr-28">
        <div className="basis-1/3 text-neutral-200">
          <h1 className="pt-10 pb-10 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase flex  justify-center sm:justify-start">
            venue
          </h1>
          <div className="flex flex-col gap-8 pt-3 items-center sm:items-start sm:text-left">
            <iframe
              className="h-36 w-56 md:h-60 md:w-80 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.536417800597!2d88.4583307099992!3d22.52157003475493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0274a1c0115249%3A0x975599390971e184!2sBengal%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1688506260644!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-2">
                <GrLocation className="text-2xl invert" />
                <div className="flex flex-col text-left">
                  <p className="flex flex-wrap">
                    Seminar Hall, 1no. govt colony
                  </p>
                  <p className="flex flex-wrap">
                    (on Basanti Highway), Kolkata, 700150
                  </p>
                  <p className="flex flex-wrap">West Bengal, India</p>
                </div>
              </div>
              <MailTo
                label="bits2bytes.bittechno@gmail.com"
                mailto="mailto:bits2bytes.bittechno@gmail.com"
              />
            </div>
          </div>
        </div>
        <div className="border-b border-spacing-1 border-white/20 mt-4 mb-4 sm:border-none sm:m-0"></div>
        <div className="basis-1/3 text-neutral-200">
          <h1 className="sm:pt-10 pb-10 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase flex justify-center sm:justify-end sm:text-right">
            contact us
          </h1>
          <div className="flex flex-col gap-3 sm:items-end sm:text-right">
            <p>
              Mrs. Tripti Majumdar (Convenor)
              <MailTo
                label="tripti.majumdar@bitcollege.in"
                mailto="mailto:tripti.majumdar@bitcollege.in"
              />
            </p>
            <p>
              Mrs. Ajanta Palit (Convenor)
              <MailTo
                label="palit.ajanta@gmail.com"
                mailto="mailto:palit.ajanta@gmail.com"
              />
            </p>
            <p>
              Debanjan Chakraborty (TS) :{" "}
              <a className="text-orange-400 whitespace-nowrap" href="tel:7603047115">
                76030 47115
              </a>
            </p>
            <p>
              Twishanu Aich Roy (ATS) :{" "}
              <a className="text-orange-400 whitespace-nowrap" href="tel:9330023390">
                93300 23390
              </a>
            </p>
            <p>
              Aditya Kr. Roy (ATS) :{" "}
              <a className="text-orange-400 whitespace-nowrap" href="tel:9123868196">
                91238 68196
              </a>
            </p>
            <p>
              Payel Halder (ATS) :{" "}
              <a className="text-orange-400 whitespace-nowrap" href="tel:8617440953">
                86174 40953
              </a>
            </p>
            <p>
              Annu Priya (ATS) :{" "}
              <a className="text-orange-400 whitespace-nowrap" href="tel:7258050204">
                72580 50204
              </a>
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <a
                href="https://www.facebook.com/bits2bytes.bit?mibextid=ZbWKwL"
                target="_blank"
              >
                <FiFacebook className="text-3xl" />
              </a>
              <a
                href="https://instagram.com/bits2bytes_2k23?igshid=MzNlNGNkZWQ4Mg=="
                target="_blank"
              >
                <FiInstagram className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black/30 py-2 text-neutral-400 tracking-wide mt-6">
        <h1 className="text-sm p-1">
          {" "}
          Made with &#10084; by{" "}
          <a
            href="https://www.linkedin.com/in/tanmoy-choudhury/"
            target="_blank"
            className="hover:text-orange-400 transition-all duration-300"
          >
            Tanmoy Choudhury
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/sruti-das-b4898926a/"
            target="_blank"
            className="hover:text-orange-400 transition-all duration-300"
          >
            Sruti Das
          </a>
          ,{" "}
          <a
            href=""
            target="_blank"
            className="hover:text-orange-400 transition-all duration-300"
          >
            Rishav Ghosh
          </a>{" "}
          &{" "}
          <a
            href="https://www.linkedin.com/in/priyankar-sarkar/"
            target="_blank"
            className="hover:text-orange-400 transition-all duration-300"
          >
            Priyankar Sarkar
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
