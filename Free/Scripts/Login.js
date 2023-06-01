let obj={};
let url="https://reqres.in/api/login";

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

const handleChange=()=>{
    const name=event.target.name;
    const value=event.target.value;
    obj[name]=value;
    
}

const handleClick=async()=>{
    console.log(obj,"ob");
   
    let x=await fetch(url,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj),
    })
    const data=await x.json();
    if(data.token){
        alert("Logged IN succesfully");
        localStorage.setItem("tok",true);
        window.open("./Freelancers.html","_self")
    }else{
        alert("Some Error")
    }
}


