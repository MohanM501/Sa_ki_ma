const callLogin=()=>{
    window.open("./Login.html","_self")
}
const callFreelancers=()=>{
    let isAuth=localStorage.getItem("tok")||false;
    if(isAuth){
        window.open("./FreeLancers.html","_self")
    }else{
        alert("login first")
    }
}

const callReports=()=>{
    let isAuth=localStorage.getItem("tok")||false;
    if(isAuth){
        window.open("./Reports.html","_self")
    }else{
        alert("login first")
    }
}