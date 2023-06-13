const express=require("express");

const logoutRouter=express.Router();

logoutRouter.post("/",(req,res)=>{
    res.send({msg:"Logout successfull",token:""})
})

module.exports={
    logoutRouter
}