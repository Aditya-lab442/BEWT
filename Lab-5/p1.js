const cp = require('child_process');

cp.exec("node --version", (err, stdout, stderr) => {
    if (err) {
        console.log("ERR:" + err)
    }
    console.log("OUT:" + stdout);


})

cp.exec("python p.py", (err, stdout, stderr) => {
    if (err) {
        console.log("ERR:" + err)
    }
    console.log("OUT:" + stdout);


})