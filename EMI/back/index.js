const express=require("express");

const cors=require("cors")



const { connection } = require("./configue/db");
const { regRouter } = require("./Routes/reg.route");
const { logRouter } = require("./Routes/log.route");
const { getProfile } = require("./Routes/getprofile");
const { emiRouter } = require("./Routes/emi.route");
const { logoutRouter } = require("./Routes/logout.route");


const app=express();
app.use(express.json())
app.use(cors());

app.get("/",(req,res)=>{
    res.send("hi welcome")
})

app.use("/reg",regRouter);
app.use("/log",logRouter);
app.use("/getProfile",getProfile);
app.use("/emi",emiRouter);
app.use("/logout",logoutRouter);


app.listen(8080,async(req,res)=>{
    try {
        await connection;
        console.log("Connected to DB successfuly")
    } catch (error) {
        console.log(error);
        console.log("failed to Connect DB")
    }
    console.log("listening on PORT 8080")
})