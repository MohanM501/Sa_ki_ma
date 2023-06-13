import React,{useEffect,useState} from 'react';
import {get_data} from "../Redux/action";
import {useDispatch,useSelector} from "react-redux";

const JobListing = () => {
    const dispatch=useDispatch();
    const [page,setPage]=useState(1);
   
    const {data,loading}=useSelector((store)=>store);

    useEffect(()=>{
        get_data(dispatch)
    },[])
    console.log(data,"data");
    const handleClick=()=>{
        
    }
  return (
    <div>JobListing
        {data.length>0 && data.map((item)=>{
            return(
                <div style={{border:"2px solid red"}}>
                    <h2>Company: {item.company}</h2>
                    <h2>{item.level}</h2>
                    <h2>{item.position}</h2>
                </div>
            )
        })}
        <div>
            <button onClick={handleClick}>-</button>
            Page:-{page}
            <button onClick={handleClick}>+</button>
        </div>
    </div>
  )
}

export default JobListing