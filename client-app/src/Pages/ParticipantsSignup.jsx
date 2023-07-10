import { useFormik } from "formik";
import logo from "../assets/logo.png";
import formSchema from "./FormSchema";
import Nav from "../Components/Nav";
import Particle from "../Components/Particle";
import { Link } from "react-router-dom";
import React , { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OTPPage from "./Otp";


const initialValues = {
  fname: "",
  lname: "",
  email: "",
  mobile: "",
  roll: "",
  password: "",
  confirm_password: "",
  year: "",
  stream: "",
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
                // "Content-Type": "application/json",
              },
              body: JSON.stringify(data_values),
            })
            if (response.ok) {
              // Registration successful, handle the response here

              const data = await response.json();
              const headers = response.headers;
              console.log(headers)
              const contentType = headers.get("Content-Type");
              console.log(contentType);

              if (check(data)) {
                setSignupError("");
              } else {
                toast.success(data.successful, {
                  position: "top-center",
                  theme: "colored",
                });
                setOtp(data.otp);
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
         <OTPPage otp={otp}/> // Render the OTP page component
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

            <div className="m-2 w-36 h-1 inline-block bg-gradient-to-r from-orange-600 to-orange-300"></div>

            <form onSubmit={Submit}>
              <div className="flex">
                <div className="input-block text-left p-3 font-semibold font-custom-sans">
                  <input
                    type="text"
                    autoComplete="off"
                    name="fname"
                    id="fname"
                    placeholder="First Name"
                    className="p-2 rounded-md border border-neutral-500 w-full bg-black text-white"
                    values={values.fname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.fname && touched.fname ? (
                    <p className="form-error text-red-500">{errors.fname}</p>
                  ) : null}
                </div>

                <div className="input-block text-left p-3 font-semibold font-custom-sans">
                  <input
                    type="text"
                    autoComplete="off"
                    name="lname"
                    id="lname"
                    placeholder="Last Name"
                    className="p-2 rounded-md border border-neutral-500 w-full bg-black text-white"
                    values={values.lname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lname && touched.lname ? (
                    <p className="form-error text-red-500">{errors.lname}</p>
                  ) : null}
                </div>
              </div>

              <div className="input-block text-left p-3 font-semibold font-custom-sans">
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="p-2 rounded-md border border-neutral-500 bg-black text-white"
                  values={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="form-error text-red-500">{errors.email}</p>
                ) : null}
              </div>

              <div className="input-block text-left p-3 font-semibold font-custom-sans">
                <input
                  type="tel"
                  autoComplete="off"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile"
                  className="p-2 rounded-md border border-neutral-500 bg-black text-white"
                  values={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.mobile && touched.mobile ? (
                  <p className="form-error text-red-500">{errors.mobile}</p>
                ) : null}
              </div>

              <div className="input-block text-left p-3 font-semibold font-custom-sans">
                <input
                  type="text"
                  autoComplete="off"
                  name="roll"
                  id="roll"
                  placeholder="Roll Number"
                  className="p-2 rounded-md border border-neutral-500 bg-black text-white"
                  values={values.roll}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.roll && touched.roll ? (
                  <p className="form-error text-red-500">{errors.roll}</p>
                ) : null}
              </div>

              <div className="flex">
                <div className="input-block text-left p-3 font-semibold font-custom-sans">
                  <input
                    type="password"
                    autoComplete="off"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="p-2 rounded-md border border-neutral-500 w-full bg-black text-white"
                    values={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password ? (
                    <p className="form-error text-red-500">{errors.password}</p>
                  ) : null}
                </div>

                <div className="input-block text-left p-3 font-semibold font-custom-sans">
                  <input
                    type="password"
                    autoComplete="off"
                    name="confirm_password"
                    id="confirm password"
                    placeholder="Confirm Password"
                    className="p-2 rounded-md border border-neutral-500 w-full bg-black text-white"
                    values={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.confirm_password && touched.confirm_password ? (
                    <p className="form-error text-red-500">
                      {errors.confirm_password}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="flex">
                <div className="input-block text-left p-3 font-semibold font-custom-sans">
                  <input
                    type="text"
                    autoComplete="off"
                    name="year"
                    id="year"
                    placeholder="Year"
                    className="p-2 rounded-md border border-neutral-500 w-full bg-black text-white"
                    values={values.year}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.year && touched.year ? (
                    <p className="form-error text-red-500">{errors.year}</p>
                  ) : null}
                </div>

                <div className="input-block text-left p-3 font-semibold font-custom-sans">
                  <input
                    type="text"
                    autoComplete="off"
                    name="stream"
                    id="stream"
                    placeholder="Stream"
                    className="p-2 rounded-md border border-neutral-500 w-full bg-black text-white"
                    values={values.stream}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.stream && touched.stream ? (
                    <p className="form-error text-red-500">{errors.stream}</p>
                  ) : null}
                </div>
              </div>

              <button
               
                type="submit"
                className="hover:bg-orange-600 border border-orange-400 text-orange-400 hover:text-white font-bold py-2 px-4 rounded-lg mt-4"
              >
                Register
              </button>
            </form>

            {signupError && <p className="text-red-500">{signupError}</p>}

            <div className="m-3 grid grid-cols-3 items-center text-blue-500">
              <hr className="border-blue-500" />
              <p className="text-center">OR</p>
              <hr className="border-blue-500" />
            </div>

            <div className="flex justify-between items-center mt-3">
              <p className="mt-3 text-xs text-white flex justify-between items-center">
                If already Registered..
              </p>
              <Link
                to="/login/participant"
                className="py-2 px-5 border border-blue-500 rounded-xl hover:bg-blue-950 text-white"
              >
                <button>Login</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
          <img
            src={logo}
            alt="Registration Image"
            className="rounded-2xl h-fit"
          />
        </div>
      </div>
      <ToastContainer/>
      <Particle />
    </div>
        )} 
    </>

  );
};

export default ParticipantsSignup;
