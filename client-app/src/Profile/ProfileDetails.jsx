import { InputTag } from "./InputTag";
import Button from "./Button";
import { useState, useEffect } from "react";

const ProfileDetails = (props) => {
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

  const [storeFname, setStoreFname] = useState("");
  const [storeLname, setStoreLname] = useState("");
  const [storeRoll, setStoreRoll] = useState("");
  const [storeYear, setStoreYear] = useState("");
  const [storeStream, setStoreStream] = useState("");
  const [storeEmail, setStoreEmail] = useState("");
  const [storePhone, setStorePhone] = useState("");

  const [fnameError, setFnameError] = useState(false);
  const [lnameError, setLnameError] = useState(false);
  const [rollError, setRollError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [streamError, setStreamError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const [effectTrigger, setEffectTrigger] = useState(false);

  useEffect(() => {
    const tempVal =
      fnameError ||
      lnameError ||
      rollError ||
      yearError ||
      streamError ||
      emailError ||
      phoneError;

    if (tempVal) return;
    setInputClass(default_input_class);
    setVisible(true);
  }, [effectTrigger]);

  const formInvalid = () => {
    const tempFname = fname.trim();
    const tempLname = lname.trim();
    let tempRoll = "";
    let tempYear = "";
    let tempStream = "";
    const tempEmail = email.trim();
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
      tempRoll = roll.trim();
      tempYear = year.trim();
      tempStream = stream.trim();

      // roll check
      if (
        tempRoll === "" ||
        tempRoll.length !== 11 ||
        !/^\d+$/.test(tempRoll)
      )
        setRollError(true);
      else setRollError(false);

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

    // email check
    if (tempEmail === "" || !/^[\w\.-]+@[\w\.-]+\.\w+$/.test(tempEmail))
      setEmailError(true);
    else setEmailError(false);

    // phone check
    if (tempPhone.length !== 10 || !/^\d+$/.test(tempPhone))
      setPhoneError(true);
    else setPhoneError(false);

    setFname(tempFname);
    setLname(tempLname);
    if (props.type === "participant") {
      setRoll(tempRoll);
      setYear(tempYear);
      setStream(tempStream);
    }
    setEmail(tempEmail);
    setPhone(tempPhone);
    setEffectTrigger(!effectTrigger);
  };

  const changeInputClass = (val) => {
    if (val === "edit") {
      setStoreFname(fname);
      setStoreLname(lname);
      if (props.type === "participant") {
        setStoreRoll(roll);
        setStoreYear(year);
        setStoreStream(stream);
      }
      setStoreEmail(email);
      setStorePhone(phone);
      setInputClass(final_input_class);
      setVisible(false);
    } else if (val === "cancel") {
      setFname(storeFname);
      setLname(storeLname);
      setEmail(storeEmail);
      setPhone(storePhone);
      setFnameError(false);
      setLnameError(false);
      setEmailError(false);
      setPhoneError(false);
      if (props.type === "participant") {
        setRoll(storeRoll);
        setYear(storeYear);
        setStream(storeStream);
        setRollError(false);
        setYearError(false);
        setStreamError(false);
      }

      setInputClass(default_input_class);
      setVisible(true);
    } else if (val === "save") {
      formInvalid();
    }
  };

  return (
    <div className="p-6 pt-4 bg-sky-500/10 backdrop-blur-sm w-3/4 m-6 md:w-2/4 max-w-2xl rounded-2xl flex flex-col gap-7 sm:gap-12">
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
            inputclass={inputclass}
            changeVal={setRoll}
            errshow={rollError}
            errmsg="Enter a valid university roll number."
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
        inputclass={inputclass}
        changeVal={setEmail}
        errshow={emailError}
        errmsg="Enter a valid email address."
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
            <Button function={changeInputClass} buttonType="save" />
            <Button function={changeInputClass} buttonType="cancel" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;
