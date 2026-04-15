const express =  require("express");
const app = express();
const bcrypt = require("bcrypt");
const path = require("path");

app.set('view engine','ejs');
app.set('views', path.join(__dirname,"views"));

app.use(express.urlencoded({extended:true}));


app.get('/register',(req, res)=>{
    res.render('register');
})

app.post('/register',(req, res)=>{
    let {Uname,Upass} = req.body;
    console.log(req.body);
})

app.listen(4000,()=>{
    console.log("app is running at port 4000!");
});