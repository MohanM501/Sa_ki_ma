import React from 'react';
import {Routes,Route} from "react-router-dom";
import JobListing from './JobListing';
import JobPosting from './JobPosting';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<JobPosting/>}></Route>
            <Route path="/listing" element={<JobListing/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes