const C = require("crypto")
const E = require("events")
const BeforeExe = Date.now()
let hashCode = C.pbkdf2("qwerty","salt",100000, 512, "sha512",(err)=>{
    if(err){
        console.log(err)
    }
})
const AfterExe = Date.now()
console.log(AfterExe - BeforeExe)
console.log(hashCode)

const EventEmitter = new E.EventEmitter;
const eventHandler = ()=>{
    console.log("Start Preparing Pizza!")
}
eventHandler();
EventEmitter.on("Order Pizza!",()=>{
    console.log("Order Recieved!")
})
EventEmitter.emit("Order Pizza!")