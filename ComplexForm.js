import {useState} from 'react';

export default function ControlledComponent() {
  const [formData, setFormData] = useState({name:"", email:"", message:""});
  
  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevFormData) => ({...prevFormData, [name]:value}));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name},Email: ${formData.email},Message: ${formData.message}`);
  };
  
  return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}></input>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange}></input>
        <label htmlFor="message">Message:</label>
        <input type="text" name="message" value={formData.message}  onChange={handleChange}></input>
        <button type="submit" value="submit">Submit</button>
    </form>
    )
}
