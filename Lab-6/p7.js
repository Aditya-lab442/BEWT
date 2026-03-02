const fs = require('fs')

fs.readdir('../Lab-6',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        for(i=0;i<data.length;i++){
            console.log(data[i])
        }
    }
})