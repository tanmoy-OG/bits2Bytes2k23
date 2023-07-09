import React, { useState } from 'react';

const OTPPage = () => {
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');

  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //validate
    if (otp === '123456') {

        console.log('OTP is valid');
      // Reset the OTP input field
      setOTP('');
      setError('');
    } else {
      // OTP is invalid, show error message
      setError('Invalid OTP');
    }
  };

  return (
    <div >
      <h2>Enter OTP</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={otp}
          onChange={handleOTPChange}
          placeholder="Enter OTP"
        />
        <br /><br />
        <button type="submit" className='py-2 px-5 border border-blue-500 rounded-xl hover:bg-blue-950 text-white'>Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default OTPPage;
