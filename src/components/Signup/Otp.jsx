import React, { useState, useRef } from 'react';
import otp_illustration from "/illustration/mobile_3.svg";


const OTPVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    if (e.target.value) {
      if (index === otp.length - 1) {
        // Last input, do something with the completed OTP
        console.log('OTP:', newOtp.join(''));
      } else {
        inputRefs.current[index + 1].focus();
      }
    } else if (index !== 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index]) {
      if (index !== 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center">
          <img
            src={otp_illustration}
            alt="OTP Illustration"
            className="w-32 h-32 mb-6"
          />
          <h2 className="text-xl font-bold mb-4">Verify Your Phone Number</h2>
          <p className="text-gray-600 text-center mb-8 font-extralight text-sm">
            Please enter the 6-digit code sent to your phone number
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-12 h-12 text-xl text-center border-2 border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
              />
            ))}
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;