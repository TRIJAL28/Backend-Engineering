const express  =  require("express");
const app = express();
const requestAge = require("./middlewares/middleware");
const router = express.Router();
router.use(requestAge);

app.get('',(req,res)=>{
    res.send("Welcome to Home Page!")
})

app.get('/about',requestAge,(req,res)=>{
    res.send("Welcome to About Page!")
})

router.get('/contact',(req,res)=>{
    res.send("Welcome to Contact Page!")
})
app.use(router)
app.listen(3000);