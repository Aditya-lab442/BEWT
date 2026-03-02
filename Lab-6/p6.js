const fs = require('fs')

fs.mkdir('my-data',(err)=>{
    if(err){
        if(err.code === 'EEXIST'){
            console.log("File Already Exist:"+err);
            
        }else{
            console.log("ERROR:"+err)
        }
    }
    else{
        console.log("SUCCESSFUL")
    }
})