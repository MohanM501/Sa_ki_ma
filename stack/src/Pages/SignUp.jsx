import { FormControl, Input,Button } from '@chakra-ui/react'
import React,{useState} from 'react';
import {useDispatch} from "react-redux";
import { POST_DATA } from '../Redux/AuthReducer/action';

const SignUp = () => {
  const [formData,setFormData]=useState({});
  const dispatch=useDispatch();

    const handleChange=(e)=>{
      const {name,value}=e.target;
      setFormData({...formData,[name]:value});
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(formData,"formDAta");
      
      dispatch(POST_DATA(formData)).then((r)=>{
        console.log(r,"after signUP");
      }).catch((err)=>{
        console.log(err,"err");
      })
    }

  return (
    <div>
        <FormControl>
            <Input type="string" name="username" onChange={handleChange} placeholder='user name'/>
            <br/>
            <br/>
            <Input type="file" name="avatar" onChange={handleChange} placeholder='dummy Avatar'/>
            <br/>
            <Input type="email" name="email" onChange={handleChange} placeholder='Enter Email'/>
            <br/>
            <Input type="password" name="password" onChange={handleChange} placeholder='Enter Password'/>
            <br/>
            <br/>
            <Button bg={"aqua"} _hover={{"bg":"red"}} onClick={handleSubmit}>Sing UP</Button>
        </FormControl>
    </div>
  )
}

export default SignUp