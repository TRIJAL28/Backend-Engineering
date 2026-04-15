const express = require("express");
const app = express();
const URL = require("url");
const file = require("./sample_data.json");
const { log } = require("console");

app.get('/',(req,res)=>{
    res.send("Welcome to Home Page!");
})
app.get('/users',(req,res)=>{
    res.json(file);
})

app.get('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    const user = file.find((u)=> u.id===id);    
    res.json(user);
})

app.get('/data',(req,res)=>{
    const html =
    `<ul>
        ${file.map((user)=>`<li>${user.name}</li>`).join(" ")};
    </ul>`
    res.send(html);
});
app.use(express.urlencoded({extended:true}));
app.post('/access',(req,res)=>{
    console.log(req.body);
})

app.listen(4000,()=>{
    console.log("http://localhost:4000/");
});