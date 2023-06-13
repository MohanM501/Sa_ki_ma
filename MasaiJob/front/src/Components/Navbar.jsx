import React from "react";
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Navbar=()=>{
    return(
        <div>
            <Link to="/"><Button>Job Posting</Button></Link>
            <Link to="/listing"><Button>Job Listing</Button></Link>
        </div>
    )
}

export default Navbar;