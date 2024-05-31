import React from "react";
import mobile_3 from "/illustration/mobile_3.svg";
import PhoneInputComponent from "../../utils/PremiumMobileInput";
import OTPVerification from "./Otp";
import PhoneNumberVerify from "./PhoneNumberVerify";
import { useState } from "react";
import {
  auth,
  firebaseConfig,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "../../utils/firebaseCode";
// import { auth, RecaptchaVerifier, signInWithPhoneNumber } from './firebase';

function Signup() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState(false);
  const [verificationId, setVerificationId] = useState("");
  const [message, setMessage] = useState("");

  console.log("firebase ",firebaseConfig)

  return (
    <div class="blur-container">
      <div class="content-container">
        <div className="signup">
          <PhoneNumberVerify></PhoneNumberVerify>
        </div>
      </div>
    </div>
  );
}

export default Signup;
