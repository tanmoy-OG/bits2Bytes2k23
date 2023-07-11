import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import Otp from "../Pages/Otp";
import Particle from "../Components/Particle";
import Nav from "../Components/Nav";

const initialValues = {
  roll: "",
  password: "",
  confirmPassword: "",
};

const UserForgetPass = () => {
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const { values, handleChange } = useFormik({
    initialValues: initialValues,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (values.password !== values.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      const response = await fetch("http://localhost:5000/forget_password/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          roll: values.roll,
          password: values.password,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        toast.success(data.successful);
        setError("");
        setIsSuccess(true);
      } else {
        toast.error(data.error);
        setError("Error resetting password");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error resetting password");
      setError("Error resetting password");
    }
  };

  return (
    <>
      {isSuccess ? (
        <Otp />
      ) : (
        <div className="absolute top-0 left-0 w-full h-full">
          <Nav />
          <div className="bg-transparent h-fit w-full flex justify-center py-10 px-6">
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 rounded-lg bg-sky-500/10 p-6 backdrop-blur-sm relative">
              <h2 className="w-full text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest text-neutral-200 font-custom-sans uppercase mb-5">
                Reset password
              </h2>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center h-fit gap-3"
              >
                <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
                  <input
                    type="number"
                    name="roll"
                    id="roll"
                    value={values.roll}
                    placeholder="Enter your roll number"
                    onChange={handleChange}
                    className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
                  />
                </div>

                <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={values.password}
                    placeholder="Enter new password"
                    onChange={handleChange}
                    className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
                  />
                </div>

                <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={values.confirmPassword}
                    placeholder="Confirm new password"
                    onChange={handleChange}
                    className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-full"
                  />
                </div>

                <button type="submit" className="button-green uppercase">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <ToastContainer />
          <Particle />
        </div>
      )}
    </>
  );
};

export default UserForgetPass;
