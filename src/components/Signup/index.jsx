import React from "react";
import mobile_3 from "/illustration/mobile_3.svg";
import PhoneInputComponent from "../../utils/PremiumMobileInput";
import OTPVerification from "./Otp";

function Signup() {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-5">
    //   <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
    //     <div className="flex flex-col items-center">
    //       <img
    //         src={mobile_3}
    //         height={150}
    //         width={150}
    //         alt="Mobile Illustration"
    //         className="mb-6"
    //       />
    //       <h2 className="text-xl font-bold mb-2">Enter Your Phone Number</h2>
    //       <p className="text-gray-600 text-center mb-8">
    //         We will send you the 6-digit verificaation code
    //       </p>
    //       {/* Add your phone input field here */}
    //       <PhoneInputComponent></PhoneInputComponent>
    //     </div>
    //   </div>
    // </div>
    <div>
        <OTPVerification></OTPVerification>
    </div>
  );
}

export default Signup;
