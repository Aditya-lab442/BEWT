const ex = require('express')

const app = ex();

const fs = require('fs')

app.get("/",(req,res)=>{
    res.send("Home Page")
})
app.get("/about",(req,res)=>{
    fs.readFile('about.txt',(err,data)=>{
        res.send(data)
    })
})
app.get("/contact",(req,res)=>{
    fs.readFile('contact.txt',(err,data)=>{
        res.end("<h1>"+data+"</h1>")
    })
})

app.listen(3000,()=>{
    console.log("Server At 3000");
    
})