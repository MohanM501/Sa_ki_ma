import React from 'react'
import Home from './Home';
import {Routes,Route} from "react-router-dom";
import SignUp from './SignUp';
import Login from './Login';
import Answer from './Answer';
import Forum from './Forum';
import PrivateRoute from '../Components/PrivateRoute';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/sign-up" element={<SignUp/>}></Route>
            <Route paht="/login" element={<Login/>}></Route>
            <Route path="/forum" element={<PrivateRoute><Forum/></PrivateRoute>}></Route>
            <Route path="/answer" element={<Answer/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes