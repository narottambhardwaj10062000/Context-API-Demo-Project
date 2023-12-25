import React, { useState, useContext }from 'react';
import { UserContext } from '../contexts/UserContext';


const Login = () => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    var { setUser } = useContext(UserContext);

    const handleSubmit = () => {
        setUser(userName);
    }

  return (
    <>
      <h1>This Is A Demo Project To Explain React Context API</h1>
        <input 
            type="text"
            placeholder="UserName"
            value = {userName}
            onChange = {(e) => setUserName(e.target.value)}
        /> 
        <input 
            type="text"
            placeholder="Email"
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}

        />
        <button onClick = {handleSubmit}>Submit</button>
    </>
      
  )
}

export default Login