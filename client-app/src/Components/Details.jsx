import { InputTag } from "./InputTag";
import Button from "./Button";
import { useState, useEffect } from "react";

const Details = (props) => {
  const default_input_class =
    "bg-black/0 focus:outline-none text-white/70 tracking-widest pointer-events-none w-full pb-1 text-left sm:text-right";
  const final_input_class =
    "bg-black/0 focus:outline-none border-b border-spacing-1 border-white/20 text-white tracking-widest hover:border-white transition duration-300 w-full pb-1 text-left";
  const [inputclass, setInputClass] = useState(default_input_class);
  const [visible, setVisible] = useState(true);

  const [fname, setFname] = useState(props.fname);
  const [lname, setLname] = useState(props.lname);
  const [roll, setRoll] = useState(props.roll);
  const [year, setYear] = useState(props.year);
  const [stream, setStream] = useState(props.stream);
  const [email, setEmail] = useState(props.email);
  const [phone, setPhone] = useState(props.phone);

  const [storeFname, setStoreFname] = useState(props.fname);
  const [storeLname, setStoreLname] = useState(props.lname);
  const [storeYear, setStoreYear] = useState(props.year);
  const [storeStream, setStoreStream] = useState(props.stream);
  const [storePhone, setStorePhone] = useState(props.phone);

  const [fnameError, setFnameError] = useState(false);
  const [lnameError, setLnameError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [streamError, setStreamError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const [effectTrigger, setEffectTrigger] = useState(false);
  // const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const tempVal =
      fnameError ||
      lnameError ||
      yearError ||
      streamError ||
      phoneError;

    if (!tempVal) {
      if (
        storeFname === fname &&
        storeLname === lname &&
        storeYear === year &&
        storeStream === stream &&
        storePhone === phone
      )
        return;
      else updateProfile({ fname, lname, roll, year, stream, phone });
      setInputClass(default_input_class);
      setVisible(true);
    }
  }, [effectTrigger]);

  const updateProfile = (obj) => {
    console.log(obj);
    
  };

  const formInvalid = () => {
    const tempFname = fname.trim();
    const tempLname = lname.trim();
    let tempYear = "";
    let tempStream = "";
    const tempPhone = phone.trim();

    // fname check
    if (
      tempFname === "" ||
      /\d/.test(tempFname) ||
      /[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(tempFname)
    )
      setFnameError(true);
    else setFnameError(false);

    // lname check
    if (
      tempLname === "" ||
      /\d/.test(tempLname) ||
      /[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(tempLname)
    )
      setLnameError(true);
    else setLnameError(false);

    if (props.type === "participant") {
      tempYear = year.trim();
      tempStream = stream.trim();

      // year check
      if (
        tempYear === "" ||
        /[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(tempYear)
      )
        setYearError(true);
      else setYearError(false);

      // stream check
      if (
        tempStream === "" ||
        /\d/.test(tempStream) ||
        /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(tempStream)
      )
        setStreamError(true);
      else setStreamError(false);
    }

    // phone check
    if (tempPhone.length !== 10 || !/^\d+$/.test(tempPhone))
      setPhoneError(true);
    else setPhoneError(false);

    setFname(tempFname);
    setLname(tempLname);
    if (props.type === "participant") {
      setYear(tempYear);
      setStream(tempStream);
    }
    setPhone(tempPhone);
    setEffectTrigger(!effectTrigger);
  };

  const changeInputClass = (val) => {
    if (val === "edit") {
      setStoreFname(fname);
      setStoreLname(lname);
      if (props.type === "participant") {
        setStoreYear(year);
        setStoreStream(stream);
      }
      setStorePhone(phone);
      setInputClass(final_input_class);
      setVisible(false);
    } else if (val === "cancel") {
      setFname(storeFname);
      setLname(storeLname);
      setPhone(storePhone);
      setFnameError(false);
      setLnameError(false);
      setPhoneError(false);
      if (props.type === "participant") {
        setYear(storeYear);
        setStream(storeStream);
        setYearError(false);
        setStreamError(false);
      }

      setInputClass(default_input_class);
      setVisible(true);
    }
  };

  return (
    <form
      className="p-6 pt-4 m-6 bg-sky-500/10 backdrop-blur-sm w-3/4 md:w-2/4 max-w-2xl rounded-2xl flex flex-col gap-7 sm:gap-12"
      onSubmit={(e) => {
        e.preventDefault();
        formInvalid();
      }}
    >
      <h1 className="text-3xl md:text-5xl font-bold tracking-wider text-white font-custom-sans uppercase">
        {props.type === "admin" ? "admin profile" : "profile"}
      </h1>

      <InputTag
        heading="first name"
        data={fname}
        inputclass={inputclass}
        changeVal={setFname}
        errshow={fnameError}
        errmsg="Enter a valid first name."
      />
      <InputTag
        heading="last name"
        data={lname}
        inputclass={inputclass}
        changeVal={setLname}
        errshow={lnameError}
        errmsg="Enter a valid last name."
      />
      {props.type === "participant" && (
        <>
          <InputTag
            heading="roll number"
            data={roll}
            inputclass={default_input_class}
          />
          <InputTag
            heading="year"
            data={year}
            inputclass={inputclass}
            changeVal={setYear}
            errshow={yearError}
            errmsg="Enter a valid year."
          />
          <InputTag
            heading="stream"
            data={stream}
            inputclass={inputclass}
            changeVal={setStream}
            errshow={streamError}
            errmsg="Enter a valid stream."
          />
        </>
      )}
      <InputTag
        heading="email"
        data={email}
        inputclass={default_input_class}
      />
      <InputTag
        heading="phone number"
        data={phone}
        inputclass={inputclass}
        changeVal={setPhone}
        errshow={phoneError}
        errmsg="Enter a valid 10 digit phone number."
      />

      <div className="flex justify-center">
        {visible && <Button function={changeInputClass} buttonType="edit" />}
        {!visible && (
          <div className="w-full flex flex-wrap justify-center gap-x-20 gap-y-5">
            <Button buttonType="save" />
            <Button function={changeInputClass} buttonType="cancel" />
          </div>
        )}
      </div>
    </form>
  );
};

export default Details;
