const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({
    stuId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"student",
        required:true
    },
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book",
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        min:1
    },
    issueDate:{
        type:Date,
        default:Date.now,
    },
    returnDate:{
        type:Date,
        default:null,
    },
    status:{
        type:String,
        enum:["ISSUED","RETURNED"],
        default:"ISSUED"
    }
})

module.exports = mongoose.model("transaction",transactionSchema)