import React,{useState} from 'react';
import axios from "axios";
let url=`http://localhost:8080/reg`
const Register = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState('');
    const [name,setName]=useState("");
    const handleClick=()=>{
        axios.post(url,{email,password,name}).then((r)=>{
            console.log(r.data);
            alert("Register succesfully");
        })
    }
  return (
    <div>Register
        <input type="string" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
        <input type="password"onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/>
        <input type="string" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
        <button onClick={handleClick}>Register</button>
    </div>
  )
}

export default Register