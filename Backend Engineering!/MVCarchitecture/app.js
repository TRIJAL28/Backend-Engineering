const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get('/',(req,res)=>{
    res.send("default Route!");
    mongoose.connect("mongodb://127.0.0.1:27017/").then(()=>{
        console.log("mongoDB connected");
    }).catch((err)=>{
        console.log("Not Connected");
    })
})
app.listen(4000);