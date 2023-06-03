
const initialState={
    isLoading:false,
    isError:false
}

const reducer=(state=initialState,action)=>{
    const {types,payload}=action;

    switch(types){

        default:
            return state;
    }
}

export {reducer}