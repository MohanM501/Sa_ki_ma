const express=require("express");
const { authenticate } = require("../middleware/authentication");

const emiRouter=express.Router();

emiRouter.post("/",authenticate,(req,res)=>{
    const {loan,interest,months}=req.body;
    let r=(interest/12)/100;
    console.log(r,"r");
    let x=r+1;
    console.log(x,"x")
    let EMI=(loan*r*(x**months))/((x**months)-1);
    console.log(EMI,"emi");
    res.send({msg:"emi",emi:EMI});
})

module.exports={
    emiRouter
}