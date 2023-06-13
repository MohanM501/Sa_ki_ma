const express=require("express");

const cors=require("cors");
const { connection } = require("./Configue/db");


const app=express();
app.use(express.json())
app.use(cors());

app.get("/",(req,res)=>{
    res.send("hi welcome")
})



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