import { useFormik } from "formik";
import UserLoginSchema from "../Components/UserLoginSchema";
import Nav from "../Components/Nav";
import Particle from "../Components/Particle";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OTPPage from "./Otp";
 
const UserLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [otpToken, setOtpToken] = useState("");

  const initialValues = {
    roll: "",
    password: "",
  };

  const checkError = (data) => {
    if ("error" in data) return true;
    return false;
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: UserLoginSchema,
      onSubmit: (values, action) => {
        fetch(`http://127.0.0.1:5000/login/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ roll: values.roll, password: values.password }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (checkError(data)) {
              // toast.error(data.error, {
              //   position: "top-center",
              //   theme: "colored",
              // });
            } else {
              // toast.success(data.successful, {
              //   position: "top-center",
              //   theme: "colored",
              // });
              action.resetForm();
              setOtpToken(data.verification);
              setIsLoggedIn(true);
            }
          })
          .catch((error) => {
            // console.log(error);
            // toast.error("Unsuccessful", {
            //   position: "top-center",
            //   theme: "colored",
            // });
          });
      },
    });

  return (
    <>
      {isLoggedIn ? (
        <OTPPage otpToken={otpToken} otpPageType="user-login" />
      ) : (
        <div className="absolute top-0 left-0 w-full h-fit">
          <Nav />
          <div className="bg-transparent h-full w-full flex justify-center py-10 px-6">
            <div className="w-full sm:w-2/3 md:w-1/2 rounded-lg bg-sky-500/10 p-6 backdrop-blur-sm relative">
              <h1 className="w-full text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest text-neutral-200 font-custom-sans uppercase mb-5">
                user login
              </h1>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center h-fit gap-3"
              >
                {/* roll number */}
                <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
                  <input
                    type="number"
                    name="roll"
                    placeholder="Roll Number "
                    className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
                    value={values.roll}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  {errors.roll && touched.roll ? (
                    <p className="form-error text-red-500 tracking-widest">
                      {errors.roll}
                    </p>
                  ) : null}
                </div>

                {/* password */}
                <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-fulle"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password ? (
                    <p className="form-error text-red-500 tracking-widest">
                      {errors.password}
                    </p>
                  ) : null}
                  <Link
                    to="/user/resetpassword"
                    className="forgot-pass text-left tracking-widest pt-1 hover:underline w-fit"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* submit */}
                <button type="submit" className="button-green uppercase">
                  Login
                </button>
              </form>

              {/* or */}
              <div className="m-3 grid grid-cols-3 items-center text-white/20 my-10">
                <hr className="border-white/20 border-spacing-1" />
                <p className="text-center">OR</p>
                <hr className="border-white/20 border-spacing-1" />
              </div>

              {/* signup redirect */}
              <div className="flex justify-between items-center flex-col gap-6">
                <p className="text-xs text-white flex justify-between items-center uppercase tracking-widest">
                  If already Registered..
                </p>
                <Link to="/signup/user" className="button">
                  <button className="uppercase tracking-widest">Sign Up</button>
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

export default UserLogin;
