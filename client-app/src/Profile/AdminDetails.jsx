import { InputTag } from "./InputTag";
import Button from "./Button";
import { useState, useEffect } from "react";

const AdminDetails = (props) => {

  const default_input_class =
    "bg-black/0 focus:outline-none text-white/70 tracking-widest pointer-events-none w-full pb-1 text-right";
  const final_input_class =
    "bg-black/0 focus:outline-none border-b border-spacing-1 border-white/20 text-white tracking-widest hover:border-white transition duration-300 w-full pb-1 text-left";
  const [inputclass, setInputClass] = useState(default_input_class);
  const [visible, setVisible] = useState(true);

  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState(props.password);

  const [storeName, setStoreName] = useState("");
  const [storeEmail, setStoreEmail] = useState("");
  const [storePassword, setStorePassword] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [effectTrigger, setEffectTrigger] = useState(false);

  useEffect(() => {
    const tempVal = nameError || emailError || passwordError;
    if (tempVal) return;
    setInputClass(default_input_class);
    setVisible(true);
  }, [nameError, emailError, passwordError, effectTrigger]);

  const formInvalid = () => {
    const tempName = name.trim();
    const tempEmail = email.trim();
    const tempPassword = password.trim();
    const nameFormat = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const mailFormat = /[ `!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;

    if (tempName === "" || /\d/.test(tempName) || nameFormat.test(tempName))
      setNameError(true);
    else setNameError(false);

    if (
      tempEmail === "" ||
      !tempEmail.includes("@") ||
      !tempEmail.includes(".") ||
      mailFormat.test(tempEmail)
    )
      setEmailError(true);
    else setEmailError(false);

    if (tempPassword.length < 8 || tempPassword.includes(" "))
      setPasswordError(true);
    else setPasswordError(false);

    setName(tempName);
    setEmail(tempEmail);
    setPassword(tempPassword);
    setEffectTrigger(!effectTrigger);
  };

  const changeInputClass = (val) => {
    if (val === "edit") {
      setStoreName(name);
      setStoreEmail(email);
      setStorePassword(password);
      setInputClass(final_input_class);
      setVisible(false);
    } else if (val === "cancel") {
      setName(storeName);
      setEmail(storeEmail);
      setPassword(storePassword);
      setInputClass(default_input_class);
      setVisible(true);
      setNameError(false);
      setEmailError(false);
      setPasswordError(false);
    } else if (val === "save") {
      formInvalid();
    }
  };

  return (
    <div className="p-6 pt-4 bg-white/10 bg-blur-lg w-3/4 m-6 md:w-2/4 max-w-2xl rounded-2xl flex flex-col gap-12">
      <h1 className="text-3xl md:text-5xl font-bold tracking-wider text-white font-custom-sans uppercase">
        ADMIN PROFILE
      </h1>

      <InputTag
        heading="name"
        data={name}
        inputclass={inputclass}
        changeVal={setName}
        errshow={nameError}
        errmsg="Enter a valid name."
      />
      <InputTag
        heading="email"
        data={email}
        inputclass={inputclass}
        changeVal={setEmail}
        errshow={emailError}
        errmsg="Enter a valid email address."
      />
      <InputTag
        heading="password"
        data={password}
        inputclass={inputclass}
        changeVal={setPassword}
        errshow={passwordError}
        errmsg="Password should have minimum of 8 characters."
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

export default AdminDetails;
