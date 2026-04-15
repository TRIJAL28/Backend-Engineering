const mongoose = require("mongoose");
const express=require("express");
const app=express();
const http=require("http")
const server=http.createServer(app);
mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("mongoose")
});
server.listen(3000,()=>{
    console.log("server running")
})

