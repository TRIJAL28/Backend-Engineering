const Express =  require("express");
const app = Express();

app.listen(8000);

app.get("/",(req,res)=>{
    res.send("Hello! Welcome to Home Page");
});
app.get("/about",(req,res)=>{
    res.send("Hello! Welcome to About Me Page");
});
app.get("/work",(req,res)=>{
    res.send("Hello! Welcome to My Work Page");
});
app.get("/contact",(req,res)=>{
    res.send("Hello! Welcome to Contact Page");
});
app.get("/search",(req,res)=>{
    res.send("Hello! Welcome to Search Page");
});
app.use((req,res)=>{
    res.status(404).send("404 Not Found");
});