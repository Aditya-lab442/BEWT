const fs = require('fs')

fs.unlink('output.txt',(err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("Deleted")
    }
})