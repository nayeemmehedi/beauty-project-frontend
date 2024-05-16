import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneInputComponent = () => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (phone) => {
    setValue(phone);
    // Check if the phone number starts with '88' and has a length of 13 (including the country code)
    setIsValid(phone.startsWith('88') && phone.length === 13);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      // Perform your desired action with the validated phone number
      console.log('Validated phone number:', value);
    } else {
      console.log('Invalid phone number');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <PhoneInput
          country={'bd'}
          value={value}
          onChange={handleChange}
          containerClass="border border-gray-300 rounded-md"
          inputClass="outline-none px-3 py-2 rounded-md"
          buttonClass="bg-gray-100 rounded-r-md px-3 py-2"
        />
        <button
          type="submit"
          disabled={!isValid}
          className={`mt-4 px-4 py-2 rounded-md ${
            isValid
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-400 text-gray-800 cursor-not-allowed'
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PhoneInputComponent;