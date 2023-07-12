import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import Home from './Home';
import Particle from "../Components/Particle";

const initialValues = {
  otp_value: "",
};

const OTPPage = ({ otp }) => {
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [timer, setTimer] = useState(20);
  const [isTimerActive, setIsTimerActive] = useState(false);

 
  //Resend otp..
  useEffect(() => {
    let countdown;
    if (isTimerActive) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    if (timer === 0) {
      clearInterval(countdown);
      setIsTimerActive(false);
    }

    return () => clearInterval(countdown);
  }, [isTimerActive, timer]);

  const handleResendOTP = async () => {
    if (!isTimerActive) {
      setIsTimerActive(true);
      setTimer(20);

      try {
        const response = await fetch('http://127.0.0.1:5000/resend_otp/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'verification' : otp,
          }
          
        });

        const data = await response.json();

        if (data.success) {
          toast.success(data.successful);
          setError('');
        } else {
          toast.error(data.error);
          setError('Error resending OTP');
        }
      } catch (error) {
        console.log(error);
        toast.error('Error resending OTP');
        setError('Error resending OTP');
      }
    }
  };

  //otp fetch and check...
  const { values, handleChange } = useFormik({
    initialValues: initialValues,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(otp);
    console.log(values.otp_value);

    try {
      const response = await fetch("http://localhost:5000/otp_verify/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "verification": otp,
        },
        body: JSON.stringify({
          otp: values.otp_value,
        }),
      });

      const data = await response.json();

      // if (response.ok) {

      //   if (check(data)) {
      //     // console.log(data);
      //     toast.error(data.error, {
      //       position: "top-center",
      //       theme: "colored",
      //     });
      //   } else {
      //     toast.success(data.successfull, {
      //       position: "top-center",
      //       theme: "colored",
      //     });
      //     // setOtp(data.verification);
      //     setIsSuccess(true);
      //   }
        
      if (response.ok) {
        console.log("OTP is valid");
        toast.success(data.successful);
        setError("");
        setIsSuccess(true);
      } else {
        toast.error(data.error);
        setError("Invalid OTP");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error verifying OTP");
      setError("Error verifying OTP");
    }
  }

  return (
    <>
      {isSuccess ? (
        <Home />
      ) : (
        
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="bg-transparent h-fit w-full flex justify-center py-10 px-6">
        <div className="w-full sm:w-2/3 md:w-1/2 rounded-lg bg-sky-500/10 p-6 backdrop-blur-sm relative">
          <h2 className="w-full text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest text-neutral-200 font-custom-sans uppercase mb-5">
            Enter OTP
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center h-fit gap-3"
          >
            <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
              <input
                type="text"
                name="otp_value"
                id="otp_value"
                value={values.otp_value}
                placeholder="Enter OTP"
                onChange={handleChange}
                className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-fulle"
              />
            </div>
            <button type="submit" className="button-green uppercase mt-5">
              Submit
            </button>
            <div className="flex justify-between items-center flex-col gap-6 pt-10">
            <button
              type="button"
              className="button uppercase tracking-widest"
              onClick={handleResendOTP}
              disabled={isTimerActive}
            >
              {isTimerActive ? `Resend OTP (${timer}s)` : 'Resend OTP'}
            </button>
            </div> 
          </form>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          {/* <div className="flex justify-between items-center flex-col gap-6 pt-10">
            <button className="button uppercase tracking-widest">
              RESEND OTP
            </button>
          </div> */}
        </div>
      </div>
      <ToastContainer />
      <Particle />
    </div>
      )}
      </>
  );
};

export default OTPPage;
