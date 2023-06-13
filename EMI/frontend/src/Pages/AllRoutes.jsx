import React from 'react';
import {Routes,Route} from "react-router-dom";
import { PrivateRoute } from '../Components/PrivateRoute';
import Emi from './Emi';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';

const AllRoutes = () => {
  return (
    <div>AllRoutes
        <Routes>
            <Route path="/" element={<Register/>}>Register</Route>
            <Route path="/login" element={<Login/>}>Login</Route>
            <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}>Profile</Route>
            <Route path="/emi" element={<PrivateRoute><Emi/></PrivateRoute>}>Register</Route>

        </Routes>
    </div>
  )
}

export default AllRoutes