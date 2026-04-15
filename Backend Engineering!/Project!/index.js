const url =  require("url")
const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res)=>{
    switch(req.url){
        case '/':
            fs.readFile('./Component!/H.html',(err,page)=>{
                if(err){
                    res.end();
                }else{
                    res.write(page);
                    res.end();
                }
            })
            break;
    }
    console.log(req.url);
}).listen(8000, (err,)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Server running at http://localhost:8000");
    }
})