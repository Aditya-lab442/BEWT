import mongoose from 'mongoose'
const connection =async()=>{
    try{
        if(mongoose.connection.readyState>=1){
            return;
        }
        await mongoose.connect('mongodb+srv://adtiya:aditya11@backend.yuh9pdz.mongodb.net/next')
        console.log("connected to db");
    }catch(err){
        console.log(err);
        
    }
}

export default connection