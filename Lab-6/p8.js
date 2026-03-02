const fs = require('fs')

fs.copyFile('hello.txt','source.txt',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("DONE.")
    }
})