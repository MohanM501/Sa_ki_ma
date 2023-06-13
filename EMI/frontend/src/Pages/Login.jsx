import React from 'react';
import {useState} from "react";
import axios from "axios";
let url="http://localhost:8080/log";
const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState('');
    const handleClick=()=>{
        axios.post(url,{email,password}).then((r)=>{
            console.log(r.data);
            localStorage.setItem("isAuth",true);
            alert("Login succesfully");
        })
    }
  return (
    <div>Register
        <input type="string" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
        <input type="password"onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/>
        
        <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login