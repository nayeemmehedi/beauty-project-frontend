import React, { useState, useEffect, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth, signInWithPhoneNumber } from "./firebaseCode";
import { RecaptchaVerifier } from "./firebaseCode";
import { ToastContainer, toast } from "react-toastify";
import otp_illustration from "/illustration/mobile_3.svg";
import mobile_1 from "/illustration/mobile_1.svg";
import { useLocation, useNavigate } from 'react-router-dom';

const PhoneInputComponent = () => {
  const notify = () => toast("Wow so easy!");
  const notify1 = () => toast("Login SuccessFully!");
  let navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    type: false,
    message:""
  });


  const [verificationCode, setVerificationCode] = useState(false);

  const handleChange = (phone) => {
    setPhoneNumber(phone);
    // Check if the phone number starts with '88' and has a length of 13 (including the country code)
    setIsValid(phone.startsWith("88") && phone.length === 13);
  };

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {
            notify();
          },
        }
      );
    }
  }

  const onSignInSubmit = (e) => {

    e.preventDefault();

    setLoading(!loading);
    onCaptchVerify();

    const formatPh = "+" + phoneNumber;

    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;

        setLoading(!loading);
        toast.success(<div className="my-16">OTP sent successfully!</div>);
        setTimeout(() => {
          setVerificationCode(true);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);

        setLoading(!loading);
        setError({
          type:true,
          message:error.message
        });
      });

  };

  //otp start here

  const [finalSuccess, setFinalSuccess] = useState(false);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const inputRefs = useRef([]);

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    if (e.target.value) {
      if (index === otp.length - 1) {
        // Last input, do something with the completed OTP
        console.log("OTP:", newOtp.join(""));

        window.confirmationResult
          .confirm(newOtp.join(""))
          .then((result) => {
            // User signed in successfully.
            const user = result.user;

            localStorage.setItem("otp",true);
            localStorage.setItem("phone", phoneNumber)


            console.log("user:", user);
            setFinalSuccess(true);
            notify1();

            setTimeout(() => {
              navigate(from)
              window.location.reload();
              
            }, 1000);
            // ...
          })
          .catch((error) => {
            console.log("error otp:", error);
            setSuccess(false);
            // ...
          });
      } else {
        inputRefs.current[index + 1].focus();
      }
    } else if (index !== 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index]) {
      if (index !== 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  useEffect(() => {}, [finalSuccess === true]);

  //firebase start

  return (
    <div >
      {!finalSuccess ? (
        <div>
          <div>
            {!verificationCode ? (
              <div>
                <div className="flex flex-col items-center justify-center min-h-screen  mt-5">
                  <div className="max-w-md w-full bg-red-50 rounded-lg shadow-md p-8">
                    <div className="flex flex-col items-center">
                      <img
                        src={mobile_1}
                        height={150}
                        width={150}
                        alt="Mobile Illustration"
                        className="mb-6"
                      />
                      <h2 className="text-xl font-bold mb-2">
                        Enter Your Phone Number
                      </h2>
                      <p className="text-gray-600 text-center mb-8">
                        We will send you the 6-digit verificaation code
                      </p>
                      <div className="flex flex-col items-center justify-center">
                        <h3>Phone Number Verification</h3>
                        <form
                          onSubmit={onSignInSubmit}
                          className="flex flex-col items-center"
                        >
                          <PhoneInput
                            country={"bd"}
                            value={phoneNumber}
                            onChange={handleChange}
                            containerClass="border border-gray-300 rounded-md"
                            inputClass="outline-none px-3 py-2 rounded-md"
                            buttonClass="bg-gray-100 rounded-r-md px-3 py-2"
                          />
                          <div id="recaptcha-container"></div>
                          <button
                            type="submit"
                            disabled={!isValid}
                            className={`mt-4 px-4 py-2 rounded-md ${
                              isValid
                                ? "bg-red-300 text-white hover:bg-green-700"
                                : "bg-gray-400 text-gray-800 cursor-not-allowed"
                            }`}
                          >
                            Submit
                          </button>
                        </form>
                        <ToastContainer />
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="max-w-md w-full bg-red-50 rounded-lg shadow-lg p-8">
                  <div className="flex flex-col items-center">
                    <img
                      src={otp_illustration}
                      alt="OTP Illustration"
                      className="w-32 h-32 mb-6"
                    />
                    <h2 className="text-xl font-bold mb-4">
                      Verify Your Phone Number
                    </h2>
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
                <div>
                  {error.type && <div className="text-red-600">{error.message ||"Something Went Wrong.."}</div>}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-green-500 text-center my-16">
            SuccessFully Completed..
          </h3>
        </div>
      )}
    </div>
  );
};

export default PhoneInputComponent;
