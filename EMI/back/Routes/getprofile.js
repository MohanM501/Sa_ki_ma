const express=require("express");
const { authenticate } = require("../middleware/authentication");
const { UserModel } = require("../Models/user.model");

const getProfile=express.Router();

getProfile.get("/",authenticate,async(req,res)=>{
    const {userID}=req.body;
    const getUser=await UserModel.find({"_id":userID});
    
    console.log(getUser,"getData");
    res.send(getUser[0]);
})

module.exports={
    getProfile
}