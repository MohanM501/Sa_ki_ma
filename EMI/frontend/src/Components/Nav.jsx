import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
        <Link to="/"><button>Register</button></Link>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/profile"><button>Profile</button></Link>
        <Link to="/emi"><button>EMI</button></Link>

    </div>
  )
}

export default Nav