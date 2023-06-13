import axios from "axios";
import * as Types from "./actionTypes";
let url=`http://localhost:3001/users`
const post_request=()=>{
    return{
        type:Types.POST_AUTH_REQUEST
    }
}

const post_failure=()=>{
    return{
        type:Types.POST_AUTH_FAILURE
    }
}

const post_success=()=>{
    return{
        type:Types.POST_AUTH_SUCCESS,
    }
}
const Signup_success=()=>{
    return{
        type:Types.POST_SIGNUP_SUCCESS
    }
}
const POST_DATA=(payload)=>(dispatch)=>{
        const {email,username}=payload;
        let lat=new Promise(function(resolve,reject){
            resolve("already existed");
        })
        console.log(lat,"lat promise");
        return lat;
        dispatch(post_request());
        axios.get(`${url}?email=${email}&username=${username}`).then((r)=>{
            console.log(r.data,"r data in checking")
            if(r.data.length>0){
                console.log("r.data.length2")
                
                
            }
        })
        return axios.post(`${url}`,payload).then((r)=>{
            console.log(r.data,"r.data");
            return dispatch(Signup_success());
        }).catch((err)=>{
            console.log(err);
            dispatch(post_failure());
            return "failure";
        })
        
}

const LOGIN=(payload)=>(dispatch)=>{
    
}

export {POST_DATA};