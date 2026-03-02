const express = require('express')
const transactionRoute = express.Router();
// const bookRoute = express.Router();

const transaction = require('../Models/transactionModel')
const book = require('../Models/bookModel')

transactionRoute.use(express.json());
// bookRoute.use(express.json());

transactionRoute.post('/issue', async (req, res) => {
    try {
        const { stuId, bookId, quantity } = req.body
        
        if (quantity <= 0) {
            return res.json({ message: "Quantity must be greater than 0" });
        }

        const b = await book.findById(bookId)
        // console.log(b)
        if(!b){
            return res.json({msg:"Not Found"})
        }

        if(b.avlQuantity<quantity){
            return res.json({msg:"NOT ENOUGH BOOKS"})
        }
        console.log(stuId)
        const t = await transaction.create({ stuId, bookId, quantity })

        console.log(t);
        

        b.avlQuantity-=quantity

        await b.save()

        res.json({msg:"ISSUED"})


    } catch (error) {
        res.json({e:error})
    }
})

transactionRoute.post('/return',async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})

module.exports = transactionRoute