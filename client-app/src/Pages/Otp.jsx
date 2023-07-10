import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from "formik";
import Home from './Home';
// import Home from "./Pages/Home.jsx";




const initialValues ={
  otp_value: "",
}


const OTPPage = ({ otp }) => {
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const { values, handleChange } = useFormik({
    initialValues: initialValues,
  });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(otp);
    console.log(values.otp_value);
    // Validate OTP
    if (otp === values.otp_value) { 
      console.log('OTP is valid'); 
      toast.success("Otp is valid")
      setError('');
      setIsSuccess(true);      
    } else {
      toast.error("Otp is invalid")
      setError('Invalid OTP');
    }
  };

  return (
    <>
    {isSuccess ? (
         <Home/> // Render the OTP page component
       ) : (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-500">Enter OTP</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col max-w-sm mx-auto">
        <input
          type="text"
          name='otp_value'
          id='otp_value'
          value={values.otp_value}
          placeholder="Enter OTP"
          onChange={handleChange }
          className="border border-gray-300 rounded px-4 py-2 mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <ToastContainer />
    </div>
       )}
    </>
  );
};

export default OTPPage;
