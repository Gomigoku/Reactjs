import React, { useState } from 'react'

const PhoneOtpLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [showOtpInput, setShowOtpInput] = useState(false);
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
     console.log(event);

  }
  const handlePhoneSubmit = (event) => {
     event.preventDefault();

     //phone number validations
     const regex = /[^0-9]/g;
     if(phoneNumber.length < 10 && regex.test(phoneNumber)){
      Alert("Invalid Phone Number!");
     }

     //call BE  API

     //show OTP FEED
     setShowOtpInput(true);
  }
  return (
    <div>
      <form onSubmit={handlePhoneSubmit}>
        <input type="text" value={phoneNumber} onChange={handlePhoneNumber} placeholder='Enter Phone Number'></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default PhoneOtpLogin
