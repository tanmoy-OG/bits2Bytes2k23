import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';

import AdminLogin from './AdminLogin';
// import { Link } from 'react-router-dom';

const initialValues = {
  otp_value: '',
};

const AdminOTPPage = ({ otp }) => {
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [timer, setTimer] = useState(20);
  const [isTimerActive, setIsTimerActive] = useState(false);

//   const auth_check = (data) =>{
//     if("Authorization" in data){
//       <Home/>
//     }
//     return false
//   }
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
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
  });
  
  const Submit = async (values) => {
    console.log(values.otp_value);
    try {
      const response = await fetch('http://127.0.0.1:5000/otp_verify/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'verification': otp,
        },
        body: JSON.stringify({
          otp: values.otp_value,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Successfull");
        toast.success(data.successful);
        // setError('');
        setIsSuccess(true);
      } else {
        toast.error(data.error);
        setError('Invalid OTP');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error verifying OTP');
      setError('Error verifying OTP');
    }
  }
  return (
    <>
      {isSuccess? (
        <AdminLogin />
      ) : (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Enter OTP</h2>

          <form onSubmit={Submit} className="flex flex-col max-w-sm mx-auto">
            <input
              type="text"
              name="otp_value"
              id="otp_value"
              value={values.otp_value}
              placeholder="Enter OTP"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 mb-4"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded pb-3"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={handleResendOTP}
              disabled={isTimerActive}
            >
              {isTimerActive ? `Resend OTP (${timer}s)` : 'Resend OTP'}
            </button>
          </form>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default AdminOTPPage;
