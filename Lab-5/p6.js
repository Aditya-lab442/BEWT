const EventEmitter = require('events')

const emitter = new EventEmitter()

let hh=0
let mm = 0
let ss = 0
emitter.on('greet',(data)=>{
    ss++;
    if(ss>60){
        mm++;
        ss=0;
    }
    if(mm>60){
        hh++;
        mm=0;
    }
    console.log("Hello "+data+" at "+hh+":"+mm+":"+ss)
})

setInterval(()=>{
    emitter.emit('greet',"Aditya")
},100)