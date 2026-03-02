const express = require('express')


const bookRouter = express.Router();

// const bcrypt = require('bcrypt')

// const dotenv = require('dotenv')

const book = require('../Models/bookModel')

bookRouter.use(express.json());

bookRouter.get("/",async(req,res)=>{
    try{
        const b = await book.find();
        res.json({msg:b}) 
    }catch(err){
        res.json({err})
    }
})

bookRouter.get("/:id",async(req,res)=>{
    try{
        const b = await book.findById(req.params.id);
        if(!b){
            res.json({msg:"Not Found"}) 
        } 
        res.json({msg:b})
    }catch(err){
        res.json({err})
    }
})

bookRouter.post('/register',async(req,res)=>{
    try{
        const {name,avlQuantity,authorName} = req.body;
        console.log(req.body);
        
        // const hashpass = await bcrypt.hash(pass,10)
        // console.log(hashpass);
        
        const b = await book.create({name,avlQuantity,authorName})
        res.json({msg:b})
    }catch(err){
        res.json(err)
    }
})

bookRouter.delete('/delete/:id',async(req,res)=>{
    try{
        const b = await book.findByIdAndDelete(req.params.id);
        if(!b){
            res.json({msg:"NOT FOUND"})
        }
        res.json({message:"user deleted "})
    }catch(err){
        res.json(err)
    }
})

bookRouter.patch('/update/:id',async(req,res)=>{
    try{
        const b = await book.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        if(!b){
            res.json({msg:"NOT FOUND"})
        }
        res.json({msg:"Faculty Updated", b})
    }catch(err){
        res.json({err})
    }
})

module.exports = bookRouter