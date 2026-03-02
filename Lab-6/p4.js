const fs = require('fs')

fs.appendFile('output.txt',"Appended Data",(err)=>{
    if(err){
        console.log(err)
    }
})