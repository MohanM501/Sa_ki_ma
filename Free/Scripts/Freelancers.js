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
let page=1;
const add=document.getElementById("append");
const page1=document.getElementById("page");


async function getFree(){
    page1.innerHTML=null;
    page1.append(page);
    let res=await fetch(`https://odd-plum-fox-kilt.cyclic.app/freelancers?_limit=4&_page=${page}`);
    let data=await res.json();
    console.log("data",data)
    AppendData(data);
}
getFree();

function AppendData(data){
    console.log("data in apgend")
    add.innerHTML=null;
    data.length>0 && data.forEach((item,ind)=>{
        let div=document.createElement("div");
        let name=document.createElement("h2");
        name.innerText=item.name;
        let profile=document.createElement("img");
        profile.src=item.profile_picture;
        let email=document.createElement("p");
        email.innerText="Email: "+item.email;
        let profession=document.createElement("p");
        profession.innerText="Profession "+item.profession;
        let skills=document.createElement("p");
        let str="Skills: ";
        for(let i=0;i<item.skills.length;i++){
            str=str+item.skills[i]+" ";
        }
        skills.innerText=str;
        let hourlyrate=document.createElement("p");
        hourlyrate.innerText="hourlyRate: "+item.hourly_rate;
        let bookingStatus=document.createElement("p");
        bookingStatus.innerText="Booking Status: "+item.isBooked;
        let edit=document.createElement("button");
        edit.innerText="Edit";
        let delete1=document.createElement("button");
        delete1.innerText="Delete";
        delete1.addEventListener("click",()=>{DeleteApi(item.id)})
        let hireme=document.createElement("button");
        hireme.innerText="HireMe";
        div.append(profile,name,email,profession,skills,hourlyrate,bookingStatus,edit,delete1,hireme);

        add.append(div);
    })
}

const handleMinus=()=>{
    page=page-1;
    getFree();
}

const handlePlus=()=>{
    page=page+1;
    getFree();
}


const DeleteApi=async(id)=>{
    console.log(id,"id in delete");
    let res=await fetch(`https://odd-plum-fox-kilt.cyclic.app/freelancers/${id}`,{
        method:"DELETE"
    })
    let data=await res.json();
    
    
    add.innerHTML=null;
    AppendData(data)
    
}