import axios from "axios";
import * as Types from "./actionTypes";

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
const POST_DATA=(payload)=>(dispatch)=>{
        dispatch(post_request());
        return axios.post("http://localhost:3001/users",payload).then((r)=>{
            console.log(r.data,"r.data")
            dispatch(post_success())
        }).catch((err)=>{
            console.log(err);
            dispatch(post_failure())
        })
}