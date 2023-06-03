import React from 'react'
import {Button} from "@chakra-ui/react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <Link to="/home"><Button>Home</Button></Link>
        <Link to="/sign-up"><Button>Sign UP</Button></Link>
        <Link to="/login"><Button>Login</Button></Link>
        <Link to="/forum"><Button>Forum</Button></Link>
        <br/>
        <br/>
    </div>
  )
}

export default Navbar