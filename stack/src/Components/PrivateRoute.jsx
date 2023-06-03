import React from 'react';
import {useSelector} from "react-redux"

const PrivateRoute = ({children}) => {
    const {isAuth}=useSelector(store=>store.AuthReducer)
    
  return (
    children
  )
}

export default PrivateRoute