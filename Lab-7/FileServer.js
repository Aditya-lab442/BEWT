const http = require('http')

const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end("Home Page")
    }else if(req.url ==='/about'){
        fs.readFile('about.txt',(err,data)=>{
            if(err){
                res.end(err)
            }
            res.end(data)
        })
    }else if(req.url ==='/contact'){
        fs.readFile('contact.txt',(err,data)=>{
            if(err){
                res.end(err)
            }
            res.end(data)
        })
    }
    else{
        res.end("Page Not Found")
    }
})

server.listen(3000,()=>{
    console.log("Server AT 3000")
})