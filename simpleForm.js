import {useState} from 'react';

export default function ControlledComp(){
  const [InputValue, setInputValue] = useState('');
  
  const handleChange = (event) => {
    setIpuntValue(event.target.value);
  }

  return(
    <form>
    <label>Name: <input type="text" value={InputValue} onChange={handleChange}></input></label>
    <p>Name: {InputValue}</p>
    </form>
  )
}
