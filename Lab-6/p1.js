const fs = require('fs')

fs.readFile('hello.txt',(err,data)=>{
    if(err){
        console.log("ERR:"+err);
    }
    else{
        console.log(data.toString())
    }
})