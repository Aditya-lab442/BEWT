const fs = require('fs')

fs.watch('hello.txt', (eventType, fileName) => {
    console.log(`Event type: ${eventType}`)
    if (fileName) {
        console.log(`File modified: ${fileName}`);
    }
})