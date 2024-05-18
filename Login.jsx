import React, {useState, useContext} from 'react';
import UserContext from '../context/UserContext';



function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        // prevents the default behaviour
        e.preventDefault();
        setUser({username, password});
    }

    return (
       <div>
        <h1>Login</h1>
      <input 
        type="username"
        onChange={(e) => setUserName(e.target.value)}
        placeholder="username"
      />
        <input 
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
    </div>
  )
}

export default Login
