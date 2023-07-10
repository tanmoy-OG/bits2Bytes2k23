import { useFormik } from "formik";
import formSchema from "./FormSchema";
import Nav from "../Components/Nav";
import Particle from "../Components/Particle";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OTPPage from "./Otp";

const initialValues = {
  fname: "Tanmoy",
  lname: "Choudhury",
  email: "arthurfleck1620@gmail.com",
  mobile: "8240106882",
  roll: "12100120038",
  password: "12191219",
  confirm_password: "12191219",
  year: "4",
  stream: "CSE",
};

const ParticipantsSignup = () => {
  const [signupError, setSignupError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [otp, setOtp] = useState("");

  const { values, errors, touched, handleBlur, handleChange } = 
    useFormik({
      initialValues: initialValues,
      validationSchema: formSchema,
    });

  const check = (data) => {
    if ("error" in data) {
      toast.error(data.error, {
        position: "top-center",
        theme: "colored",
      });
      return true;
    }
    return false;
  };

    const Submit = async(e)=>{
      e.preventDefault();
      const { fname, lname, email,mobile,roll, password, year, stream } = values; 
      const data_values = {fname,lname,email,mobile, roll,password,year,stream}
      console.log(data_values);
          try {
            const response = await fetch("http://127.0.0.1:5000/user_signup/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data_values),
            });

            if (response.ok) {
              // Registration successful, handle the response here
              const data = await response.json();
              if (check(data)) {
                setSignupError("");
              } else {
                toast.success(data.successfull, {
                  position: "top-center",
                  theme: "colored",
                });
                
                setIsRegistered(true);
              }
            
            }
             else {
              // Registration failed, handle the error
              const errorData = await response.json();
              setSignupError(errorData.message);
              toast.error("Unsuccessfull",{
                position:"top-center",
                theme:"colored",
              });
            }
          } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong",{
              position:"top-center",
              theme:"colored",
            });
            setSignupError("An error occurred during registration.");
          }
  
    }
  
  return (
    <>

       {isRegistered ? (
         <OTPPage /> // Render the OTP page component
       ) : (
         
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav page="" />
      <div className="bg-transparent backdrop-blur-sm rounded-lg h-full m-0 p-10 flex flex-col md:flex-row">
        <div className="md:w-1/2 flex-1">
          <div className="bg-gradient-to-t from-transparent via-blue-950/60 to-transparent shadow-lg p-7">
            <h1
              className="text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase"
            >
              Registration
            </h1>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center h-fit gap-3"
              >
                <div className="flex justify-between w-full">
                  <div className="input-block text-left p-3 font-semibold font-custom-sans w-full">
                    <input
                      type="text"
                      autoComplete="off"
                      name="fname"
                      id="fname"
                      placeholder="First Name"
                      className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
                      values={values.fname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.fname && touched.fname ? (
                      <p className="form-error text-red-500 tracking-widest">
                        {errors.fname}
                      </p>
                    ) : null}
                  </div>

                  <div className="input-block text-left p-3 font-semibold font-custom-sans w-full">
                    <input
                      type="text"
                      autoComplete="off"
                      name="lname"
                      id="lname"
                      placeholder="Last Name"
                      className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
                      values={values.lname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.lname && touched.lname ? (
                      <p className="form-error text-red-500 tracking-widest">
                        {errors.lname}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
                  <input
                    type="email"
                    autoComplete="off"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
                    values={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p className="form-error text-red-500 tracking-widest">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
                  <input
                    type="tel"
                    autoComplete="off"
                    name="mobile"
                    id="mobile"
                    placeholder="Mobile"
                    className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
                    values={values.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.mobile && touched.mobile ? (
                    <p className="form-error text-red-500 tracking-widest">
                      {errors.mobile}
                    </p>
                  ) : null}
                </div>

                <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
                  <input
                    type="text"
                    autoComplete="off"
                    name="roll"
                    id="roll"
                    placeholder="Roll Number"
                    className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
                    values={values.roll}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.roll && touched.roll ? (
                    <p className="form-error text-red-500 tracking-widest">
                      {errors.roll}
                    </p>
                  ) : null}
                </div>

                <div className="flex justify-between w-full">
                  <div className="input-block text-left p-3 font-semibold font-custom-sans w-full">
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
                      values={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error text-red-500 tracking-widest">
                        {errors.password}
                      </p>
                    ) : null}
                  </div>

                  <div className="input-block text-left p-3 font-semibold font-custom-sans w-full">
                    <input
                      type="password"
                      autoComplete="off"
                      name="confirm_password"
                      id="confirm password"
                      placeholder="Confirm Password"
                      className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
                      values={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error text-red-500 tracking-widest">
                        {errors.confirm_password}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="flex justify-between w-full">
                  <div className="input-block text-left p-3 font-semibold font-custom-sans w-full">
                    <input
                      type="text"
                      autoComplete="off"
                      name="year"
                      id="year"
                      placeholder="Year"
                      className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
                      values={values.year}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.year && touched.year ? (
                      <p className="form-error text-red-500 tracking-widest">
                        {errors.year}
                      </p>
                    ) : null}
                  </div>

                  <div className="input-block text-left p-3 font-semibold font-custom-sans w-full">
                    <input
                      type="text"
                      autoComplete="off"
                      name="stream"
                      id="stream"
                      placeholder="Stream"
                      className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
                      values={values.stream}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.stream && touched.stream ? (
                      <p className="form-error text-red-500 tracking-widest">
                        {errors.stream}
                      </p>
                    ) : null}
                  </div>
                </div>

                <button type="submit" className="button-green uppercase mt-5">
                  Submit
                </button>
              </form>

              {signupError && (
                <p className="text-red-500 tracking-widest">{signupError}</p>
              )}

              {/* or */}
              <div className="m-3 grid grid-cols-3 items-center text-white/20 my-10">
                <hr className="border-white/20 border-spacing-1" />
                <p className="text-center">OR</p>
                <hr className="border-white/20 border-spacing-1" />
              </div>

              <div className="flex justify-between items-center flex-col gap-6">
                <p className="text-xs text-white flex justify-between items-center uppercase tracking-widest">
                  If already Registered..
                </p>
                <Link to="/login/participant" className="button">
                  <button className="uppercase">Login</button>
                </Link>
              </div>
            </div>
          </div>
          <ToastContainer />
          <Particle />
        </div>
      </div>
       )}
    </>
  );
};

export default ParticipantsSignup;
