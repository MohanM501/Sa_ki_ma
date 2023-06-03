import * as Types from "./actionTypes"

let initialState={
    isAuth:false,
    isLoading:false,
    isError:false
}

const reducer=(state=initialState,action)=>{
    const {type}=action;
    switch(type){

        case Types.POST_AUTH_REQUEST:
            return {...state,isLoading:true}
        
        case Types.POST_AUTH_FAILURE:
            return {...state,isLoading:false,isError:true}

        case Types.POST_AUTH_SUCCESS:
            return {...state,isLoading:false,isAuth:true}
        
        default:
            return state;
    }
}

export {reducer}