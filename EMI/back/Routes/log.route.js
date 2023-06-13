const express=require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../Models/user.model");
const logRouter=express.Router();

logRouter.post("/",async(req,res)=>{
    const { email, password } = req.body;
    console.log(req.body,"req body")
    try {
        // const user = await UserModel.find({ email, password });  // password from user will be in plain text and in db in hashed form; so just use email to find user
        const user = await UserModel.find({ email })
        console.log(user)


        if (user.length > 0) {
            const hashed_password = user[0].password;
            bcrypt.compare(password, hashed_password, function (err, result) {
                if (result) {
                    // const token = jwt.sign({ "course": 'nxm' }, 'hush'); will add user_id into token
                    const token=jwt.sign({"userID":user[0]._id},'hush');
                    return res.send({ "msg": "Login successfull", "token": token })
                }else{
                    return res.send({"err":"login failed"});
                }
            });
            
        } else {
            return res.send({"err":"login failed"});
        }
    } catch (error) {
        res.send("error")
    }
})

module.exports={
    logRouter
}