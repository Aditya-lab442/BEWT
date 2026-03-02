const fs = require('fs')

if(fs.existsSync('hello.txt')){
    console.log("exist");
}else{
    console.log("NOT");
    
}