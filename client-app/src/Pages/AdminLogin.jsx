import { useFormik } from "formik";
import AdminLoginSchema from "../Components/AdminLoginSchema";
import Nav from "../Components/Nav";
import Particle from "../Components/Particle";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import OTPPage from "./Otp";
import ErrorPage from "./ErrorPage";
import { useCookies } from "react-cookie";

const AdminLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [otpToken, setOtpToken] = useState("");
  const [Cookies] = useCookies(["type"]);
  const apiUrl = import.meta.env.VITE_API_URL;

  const initialValues = {
    email: "",
    password: "",
  };

  const checkError = (data) => {
    if ("error" in data) return true;
    return false;
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: AdminLoginSchema,
      onSubmit: (values, action) => {
        fetch(`${apiUrl}/login/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (checkError(data)) {
              toast.error(data.error);
            } else {
              toast.success(data.successful);
              action.resetForm();
              setOtpToken(data.verification);
              setIsLoggedIn(true);
            }
          })
          .catch((error) => {
            toast.error("Unsuccessful");
          });
      },
    });

  return (
    <>
      {Cookies.type === "admin" || Cookies.type === "participant" ? (
        <ErrorPage />
      ) : (
        <>
          {isLoggedIn ? (
            <OTPPage otpToken={otpToken} otpPageType="admin-login" />
          ) : (
            <div className="absolute top-0 left-0 w-full h-fit">
              <Nav />
              <div className="bg-transparent h-full w-full flex justify-center py-10 px-6">
                <div className="w-full sm:w-2/3 md:w-1/2 rounded-lg bg-sky-500/10 p-6 backdrop-blur-sm relative">
                  <h1 className="w-full text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest text-neutral-200 font-custom-sans uppercase mb-5">
                    admin login
                  </h1>

                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center justify-center h-fit gap-3"
                  >
                    {/* email */}
                    <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {errors.email && touched.email ? (
                        <p className="form-error text-red-500 tracking-widest">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                    {/* password */}
                    <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
                      <div className="w-full h-fit flex flex-row rounded-md bg-black/50 pr-3">
                        <input
                          type={passwordVisible ? "" : "password"}
                          name="password"
                          placeholder="Password"
                          className="p-2 rounded-md bg-black/0 text-white focus:outline-none tracking-widest w-full"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {!passwordVisible && (
                          <img
                            src={"/Icons/see.svg"}
                            alt="button"
                            onClick={() => setPasswordVisible(true)}
                          />
                        )}
                        {passwordVisible && (
                          <img
                            className="invert w-4"
                            src={"/Icons/unsee.svg"}
                            alt="button"
                            onClick={() => setPasswordVisible(false)}
                          />
                        )}
                      </div>
                      {errors.password && touched.password ? (
                        <p className="form-error text-red-500 tracking-widest">
                          {errors.password}
                        </p>
                      ) : null}
                      <Link
                        to="/admin/resetpassword"
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
                    <Link to="/signup/admin" className="button">
                      <button className="uppercase tracking-widest">
                        Sign Up
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <Particle />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default AdminLogin;
