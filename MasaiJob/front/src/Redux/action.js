import * as Types from "./actionTypes";
import axios from "axios";

const get_request=()=>{
    return({type:Types.GET_REQUEST})
}
const get_success=(payload)=>{
    return({type:Types.GET_SUCCESS,payload})
}
const get_failure=()=>{
    return({type:Types.GET_FAILURE})
}

const get_data=(dispatch)=>{
    dispatch(get_request());
    return axios.get("http://localhost:8080/listing").then((r)=>{
        dispatch(get_success(r.data.items))
    })
    .catch((e)=>{
        dispatch(get_failure())
    })
}

export {get_data}




