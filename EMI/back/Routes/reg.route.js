const express=require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../Models/user.model");
const regRouter=express.Router();


regRouter.post("/",async(req,res)=>{
    console.log(req.body)
    const { email, password, name, age } = req.body;
    const userPresent=await UserModel.findOne({email});
    if(userPresent?.email){
        res.send("Try logging in, already user exist");
    }
    else{
        try {
            bcrypt.hash(password, 5, async function (err, hash) { // async is requied in this call back function because of await used below
                // Store hash in your password DB.
                console.log(hash, "hash generted in singUP");
                const user = new UserModel({ email, password: hash,name}) // in MOdel password is the key name so  u can't directly use hash ; so"password:hash" (is being used)
                await user.save() // make call back function also async
                res.send({"msg":"signup successfull"})
            });
    
        } catch (error) {
            console.log(error);
            res.send({"err":"something went wrong in sign up post request"})
        }
    }
})

module.exports={
    regRouter
}