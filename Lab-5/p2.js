const cp = require('child_process');

const file = cp.spawn("cmd.exe",["/c","dir","/s","c:\\"])

file.stderr.on('data',(data)=>{
    console.log("STDERR:",data)
})

file.stdout.on('data',(data)=>{
    console.log("STDOUT:",data.toString());
    
})

file.on('close',(data)=>{
    console.log("CLOSE:",data);
    
})