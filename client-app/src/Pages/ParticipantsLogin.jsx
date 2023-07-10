import { useFormik } from "formik";
import LoginSchema from "./LoginSchema";
import Nav from "../Components/Nav";
import Particle from "../Components/Particle";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ParticipantsLogin = () => {
  const initialValues = {
    roll: "",
    password: "",
  };

  const [loginError, setLoginError] = useState("");

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginSchema,

      onSubmit: async (values) => {
        try {
          const response = await fetch("http://127.0.0.1:4200/login/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
      // onSubmit: async (values) => {
      //   // console.log("hello");
      //   try {
      //     const response = await fetch('http://127.0.0.1:5000/login/', {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //       body: JSON.stringify(values),
      //     });

      //     if (response.ok) {
      //       // Successfull Login
      //       const data = await response.json();
      //       console.log(data);
      //       console.log("Successfull");
      //     } else {
      //       // Login failed.
      //       const errorData = await response.json();
      //       setLoginError(errorData.message);
      //       console.log("failed");
      //     }
      //   } catch (error) {
      //     console.error("Error:", error);
      //     setLoginError("An error occurred during login.");
      //   }
        }catch(error){};
      }
    });

  //to check error in the data.
  const check = async (data) => {
    if ("error" in data) {
      // toast(data.error)
      return true;
    }
    return false;
  };

  //to fetch
  const submit = async (e) => {
    e.preventDefault();
    try {
      // console.log("hello");
      console.log(values);
      const response = await fetch(`http://127.0.0.1:5000/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Successfull Login
        const data = await response.json();
        // console.log(data
        if (check(data)) {
          // console.log(data);
          toast.error(data.error, {
            position: "top-center",
            theme: "colored",
          });
        } else {
          toast.success(data.successfull, {
            position: "top-center",
            theme: "colored",
          });
        }
        // console.log("Successfull");
      } else {
        // Login failed.
        const errorData = await response.json();
        setLoginError(errorData.message);
        console.log("failed");
        toast.error("Unsuccessfull", {
          position: "top-center",
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error("Unsucessfull", {
        position: "top-center",
        theme: "colored",
      });
      setLoginError("An error occurred during login.");
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-fit">
      <Nav page="registration" />
      <div className="bg-transparent h-full w-full flex justify-center py-10 px-6">
        <div className="w-full sm:w-2/3 md:w-1/2 rounded-lg bg-sky-500/10 p-6 backdrop-blur-sm relative">
          <h1 className="w-full text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest text-neutral-200 font-custom-sans uppercase mb-5">
            Login
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center h-fit gap-3"
          >
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
            <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-fulle"
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
            {/* submit */}
            <button type="submit" className="button-green uppercase mt-5">
              Login
            </button>
          </form>

          {loginError && (
            <p className="text-red-500 tracking-widest">{loginError}</p>
          )}

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
            <Link to="/signup/participant" className="button">
              <button className="uppercase tracking-widest">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Particle />
    </div>
  );
};

export default ParticipantsLogin;
