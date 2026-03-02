const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    pass:String,
    phone:Number
},{timestamps:true})

module.exports = mongoose.model("student",studentSchema)