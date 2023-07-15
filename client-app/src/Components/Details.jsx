import { InputTag } from "./InputTag";
import Button from "./Button";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
 
const Details = ({
  initialFname,
  initialLname,
  initialRoll,
  initialYear,
  initialStream,
  initialEmail,
  initialPhone,
}) => {
  const default_input_class =
    "bg-black/0 focus:outline-none text-white/70 tracking-widest pointer-events-none w-full pb-1 text-left sm:text-right";
  const final_input_class =
    "bg-black/0 focus:outline-none border-b border-spacing-1 border-white/20 text-white tracking-widest hover:border-white transition duration-300 w-full pb-1 text-left";
  const [inputclass, setInputClass] = useState(default_input_class);
  const [visible, setVisible] = useState(true);

  const [fname, setFname] = useState(undefined);
  const [lname, setLname] = useState("");
  const roll = initialRoll;
  const [year, setYear] = useState("");
  const [stream, setStream] = useState("");
  const email = initialEmail;
  const [phone, setPhone] = useState("");

  const [storeFname, setStoreFname] = useState("");
  const [storeLname, setStoreLname] = useState("");
  const [storeYear, setStoreYear] = useState("");
  const [storeStream, setStoreStream] = useState("");
  const [storePhone, setStorePhone] = useState("");

  const [fnameError, setFnameError] = useState(false);
  const [lnameError, setLnameError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [streamError, setStreamError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  
  const [effectTrigger, setEffectTrigger] = useState(1);
  const [Cookies] = useCookies(["token", "type"]);
  const apiUrl = import.meta.env.VITE_API_URL;

  const checkError = (data) => {
    if ("error" in data) return true;
    return false;
  };

  // update admin data in the database
  const postAdminData = (data) => {
    fetch(`${apiUrl}/update_profile/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": Cookies.token,
      },
      body: JSON.stringify({
        fname: data.fname,
        lname: data.lname,
        mobile: data.phone,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          toast.error("An error occurred!");
        }
      })
      .then((data) => {
        if (checkError(data)) toast.error(data.error);
        else toast.success(data.successful);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  // update user data to the database
  const postUserData = (data) => {
    fetch(`${apiUrl}/update_profile/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": Cookies.token,
      },
      body: JSON.stringify({
        fname: data.fname,
        lname: data.lname,
        year: data.year,
        stream: data.stream,
        mobile: data.phone,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          toast.error("An error occurred!");
        }
      })
      .then((data) => {
        if (checkError(data)) {
          toast.error(data.error);
        } else {
          toast.success(data.successful);
        }
      })
      .catch((error) => {
        toast.error("An error occurred!");
      });
  };

  const formInvalid = (e) => {
    e.preventDefault();
    let tempFname = fname.trim();
    let tempLname = lname.trim();
    let tempYear = "";
    let tempStream = "";
    let tempPhone = parseInt(("" + phone).trim());

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

    if (Cookies.type === "participant") {
      tempYear = parseInt(("" + year).trim());
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
    if (!(("" + tempPhone).length == 10) || /^\d+$A-Za-z/.test(tempPhone))
      setPhoneError(true);
    else setPhoneError(false);

    setFname(tempFname);
    setLname(tempLname);
    if (Cookies.type === "participant") {
      setYear(tempYear);
      setStream(tempStream);
    }
    setPhone(tempPhone);
    if (effectTrigger === 1) setEffectTrigger(true);
    else setEffectTrigger(!effectTrigger);
  };

  const changeInputClass = (val) => {
    if (val === "edit") {
      setStoreFname(fname);
      setStoreLname(lname);
      if (Cookies.type === "participant") {
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
      if (Cookies.type === "participant") {
        setYear(storeYear);
        setStream(storeStream);
        setYearError(false);
        setStreamError(false);
      }

      setInputClass(default_input_class);
      setVisible(true);
    }
  };

  useEffect(() => {
    if (effectTrigger === 1) return;
    const tempVal =
      fnameError || lnameError || yearError || streamError || phoneError;

    if (!tempVal) {
      if (
        storeFname === fname &&
        storeLname === lname &&
        storeYear === year &&
        storeStream === stream &&
        storePhone === phone
      )
        return;
      if (Cookies.type === "admin") postAdminData({ fname, lname, phone });
      else if (Cookies.type === "participant") postUserData({ fname, lname, year, stream, phone });
      setInputClass(default_input_class);
      setVisible(true);
    }
  }, [effectTrigger]);

  useEffect(() => {
    if(fname === undefined){
      setFname(initialFname);
      setLname(initialLname);
      setYear(initialYear);
      setStream(initialStream);
      setPhone(initialPhone);
    }
  });

  return (
    <form
      className="p-6 pt-4 m-6 bg-sky-500/10 backdrop-blur-sm w-3/4 md:w-2/4 max-w-2xl rounded-2xl flex flex-col gap-7 sm:gap-12"
      onSubmit={(e) => formInvalid(e)}
    >
      <h1 className="text-3xl md:text-5xl font-bold tracking-wider text-white font-custom-sans uppercase">
        {Cookies.type === "admin" ? "admin profile" : "profile"}
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
      {Cookies.type === "participant" && (
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
      <InputTag heading="email" data={email} inputclass={default_input_class} />
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
