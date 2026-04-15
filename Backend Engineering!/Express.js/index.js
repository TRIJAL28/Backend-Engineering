const express = require("express");
const path = require("path");
const app =  express();
app.listen(5500,(err)=>{
    if(err){
        console.log(err);
    }
});

const filePath = path.join(__dirname, 'Pages!');
app.get('/home',(req, res)=>{
    res.sendFile(path.join(filePath, 'Intro.html'),(err)=>{
        if(err){
            console.log(err);
        }
    });
})
app.get('/work',(req, res)=>{
    res.sendFile(path.join(filePath, 'Work.html'),(err)=>{
        if(err){
            console.log(err);
        }
    });
});
app.get('/contact',(req, res)=>{
    res.sendFile(path.join(filePath, 'Contact.html'),(err)=>{
        if(err){
            console.log(err);
        }
    });
});