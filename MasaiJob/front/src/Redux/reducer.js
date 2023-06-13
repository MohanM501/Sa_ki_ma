import * as Types from "./actionTypes";

const initialState={
    isLoading:false,
    isError:false,
    data:[]
}

const reducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case Types.GET_REQUEST:
            return{
                ...state,
                isLoading:true
            }
        case Types.GET_SUCCESS:
            return{
                ...state,
                isLoading:false,
                data:payload
            }
        case Types.GET_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        default :
         return state
    }
}

export {reducer}