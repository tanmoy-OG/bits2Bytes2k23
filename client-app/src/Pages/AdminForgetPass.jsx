import { useState } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import Otp from "./Otp";
import Particle from "../Components/Particle";
import Nav from "../Components/Nav";
import ErrorPage from "./ErrorPage";
import AdminForgetSchema from "../Components/AdminForgetSchema";
import { useCookies } from "react-cookie";

const AdminForgetPass = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [otpToken, setOtpToken] = useState("");
  const [Cookies] = useCookies(["type"]);
  const apiUrl = import.meta.env.VITE_API_URL;

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const checkError = (data) => {
    if ("error" in data) return true;
    return false;
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: AdminForgetSchema,
      onSubmit: (values, action) => {
        fetch(`${apiUrl}/forget_password/`, {
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
              setIsSuccess(true);
            }
          })
          .catch((error) => {
            console.log(error);
            toast.error("Error resetting password");
          });
      },
    });

  return (
    <>
      {Cookies.type === "admin" || Cookies.type === "participant" ? (
        <ErrorPage />
      ) : (
        <>
          {isSuccess ? (
            <Otp otpToken={otpToken} otpPageType="admin-forget-pass" />
          ) : (
            <div className="absolute top-0 left-0 w-full h-full">
              <Nav />
              <div className="bg-transparent h-fit w-full flex justify-center py-10 px-6">
                <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 rounded-lg bg-sky-500/10 p-6 backdrop-blur-sm relative">
                  <h2 className="w-full text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest text-neutral-200 font-custom-sans uppercase mb-5">
                    Reset Password
                  </h2>

                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center justify-center h-fit gap-3"
                  >
                    <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        value={values.email}
                        placeholder="Enter your email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
                      />
                      {errors.email && touched.email ? (
                        <p className="form-error text-red-500 tracking-widest">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                    <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
                      <div className="w-full h-fit flex flex-row rounded-md bg-black/50 pr-3">
                        <input
                          type={passwordVisible ? "" : "password"}
                          name="password"
                          id="password"
                          value={values.password}
                          placeholder="Enter new password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="p-2 rounded-md bg-black/0 text-white focus:outline-none tracking-widest w-full"
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
                    </div>
                    <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
                      <div className="w-full h-fit flex flex-row rounded-md bg-black/50 pr-3">
                        <input
                          type={confirmPasswordVisible ? "" : "password"}
                          autoComplete="off"
                          name="confirmPassword"
                          id="confirmPassword"
                          value={values.confirmPassword}
                          placeholder="Confirm new password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="p-2 rounded-md bg-black/0 text-white focus:outline-none tracking-widest w-full"
                        />
                        {!confirmPasswordVisible && (
                          <img
                            src={"/Icons/see.svg"}
                            alt="button"
                            onClick={() => setConfirmPasswordVisible(true)}
                          />
                        )}
                        {confirmPasswordVisible && (
                          <img
                            className="invert w-4"
                            src={"/Icons/unsee.svg"}
                            alt="button"
                            onClick={() => setConfirmPasswordVisible(false)}
                          />
                        )}
                      </div>
                      {errors.confirmPassword && touched.confirmPassword ? (
                        <p className="form-error text-red-500 tracking-widest">
                          {errors.confirmPassword}
                        </p>
                      ) : null}
                    </div>

                    <button type="submit" className="button-green uppercase">
                      Submit
                    </button>
                  </form>
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

export default AdminForgetPass;
