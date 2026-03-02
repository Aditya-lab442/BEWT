const fs = require('fs')

console.log("Start");
try {
    data=fs.readFileSync('hello.txt','utf-8')

        console.log(data.toString())


} catch (err) {
    
        console.log("ERR:" + err);
    
}

console.log("end");
