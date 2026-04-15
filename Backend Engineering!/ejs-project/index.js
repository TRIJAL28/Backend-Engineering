const { name } = require("ejs");
const express = require("express");
const app = express();

app.set('view engine','ejs');



app.get('',(req, res)=>{
    let student = {
        name : "lucky",
        age : 128392,
        email : "lucky@vidhi.com",
        hobbies : ["star gazing", "astronomy"]
    }
    res.render('home')
})

app.listen(8080);