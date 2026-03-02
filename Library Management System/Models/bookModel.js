const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    name:String,
    avlQuantity:Number,
    // bookId:Number,
    authorName:String
},{timestamps:true})

module.exports = mongoose.model("book",bookSchema)