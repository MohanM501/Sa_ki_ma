import { FormControl, Input,Button } from '@chakra-ui/react'
import React from 'react'

const SignUp = () => {

    const handleChange=(e)=>{

    }

  return (
    <div>
        <FormControl>
            <Input type="string" onChange={handleChange} placeholder='user name'/>
            <br/>
            <br/>
            <Input type="file" onChange={handleChange} placeholder='dummy Avatar'/>
            <br/>
            <Input type="email" onChange={handleChange} placeholder='Enter Email'/>
            <br/>
            <Input type="password" onChange={handleChange} placeholder='Enter Password'/>
            <br/>
            <br/>
            <Button>Sing UP</Button>
        </FormControl>
    </div>
  )
}

export default SignUp