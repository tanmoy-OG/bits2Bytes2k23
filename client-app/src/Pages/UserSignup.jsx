import { useFormik } from "formik";
import UserSignupSchema from "../Components/UserSignupSchema";
import Nav from "../Components/Nav";
import Particle from "../Components/Particle";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OTPPage from "./Otp";

const UserSignup = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [otpToken, setOtpToken] = useState("");

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

  const checkError = (data) => {
    if ("error" in data) return true;
    return false;
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: UserSignupSchema,
      onSubmit: (values, action) => {
        fetch("http://127.0.0.1:5000/user_signup/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname: values.fname,
            lname: values.lname,
            email: values.email,
            mobile: values.mobile,
            roll: values.roll,
            password: values.password,
            year: values.year,
            stream: values.stream,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (checkError(data)) {
              toast.error(data.error, {
                position: "top-center",
                theme: "colored",
              });
            } else {
              toast.success(data.successful, {
                position: "top-center",
                theme: "colored",
              });
              action.resetForm();
              setOtpToken(data.verification);
              setIsRegistered(true);
            }
          })
          .catch((error) => {
            console.log(error);
            toast.error("Unsuccessful", {
              position: "top-center",
              theme: "colored",
            });
          });
      },
    });

  return (
    <>
      {isRegistered ? (
        // Render the OTP page component
        <OTPPage otpToken={otpToken} otpPageType="user-signup" />
      ) : (
        <div className="absolute top-0 left-0 w-full h-fit">
          <Nav />
          <div className="bg-transparent h-full w-full flex justify-center py-10 px-6">
            <div className="w-full sm:w-2/3 md:w-1/2 rounded-lg bg-sky-500/10 p-6 backdrop-blur-sm relative">
              <h1 className="w-full text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest text-neutral-200 font-custom-sans uppercase mb-5">
                User signup
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

                {/* email */}
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

                {/* phone number */}
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

                {/* roll */}
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
                  {/* year */}
                  <div className="input-block text-left p-3 font-semibold font-custom-sans w-full">
                    <input
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

                  {/* stream  */}
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
                <Link to="/login/user" className="button">
                  <button className="uppercase">Login</button>
                </Link>
              </div>
            </div>
          </div>
          <ToastContainer />
          <Particle />
        </div>
      )}
    </>
  );
};

export default UserSignup;
