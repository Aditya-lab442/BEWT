const ex = require('express')

const app = ex();

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(3000,()=>{
    console.log("Server At 3000");
    
})