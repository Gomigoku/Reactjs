import React, {useRef, useState, useEffect} from 'react'

const OtpIput = ({length = 4, onOtpSubmit = () => {}}) => {
    
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);

    //to focus on the first input field

    useEffect(() => {
        if(inputRefs.current[0]){
            inputRefs.current[0].focus()
        }
    }, []);

    const handleChange = (index,e) => {
          const value = e.target.value;
          if(isNaN(value)) return;

          const newOtp = [...otp];

          //allow only one number
          newOtp[index] = value.substring(value.length - 1);
          setOtp(newOtp);

          //submit otp
          const combinedOtp = newOtp.join("");
          if(combinedOtp.length === length) onOtpSubmit(combinedOtp);
          console.log(combinedOtp);
          console.log(newOtp);

        // Move to next input if current filed is filled
        if(value && index<length-1 && inputRefs.current[index + 1]){
          inputRefs.current[index+1].focus();
        }

    }
    console.log(inputRefs);
    const handleClick = () => {

    }
    const handleKeyDown = (index, e) => {
         if(e.key === "Backspace" && !otp[index] && index>0 && inputRefs.current[index-1]){
          inputRefs.current[index-1].focus();
         }
    }
  return (
    <div>
      {otp.map((value,index) => {
        return (<input key ={index}
                      type="text"
                      value={value}
                      ref={(input) => inputRefs.current[index] = input}
                      onChange={(e) => {handleChange(index, e)}}
                      onClick={(e) => {handleClick(index) }}
                      onKeyDown={(e) => {handleKeyDown(index,e)}}
                      className = "otpInput" />)
      
      })}
    </div>
  )
}

export default OtpIput
