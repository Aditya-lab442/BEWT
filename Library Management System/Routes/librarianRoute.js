const express = require('express')


const librarianRouter = express.Router();

// const bcrypt = require('bcrypt')

// const dotenv = require('dotenv')

const librarian = require('../Models/librarianModel')

librarianRouter.use(express.json());

librarianRouter.get("/",async(req,res)=>{
    try{
        const lib = await librarian.find();
        res.json({msg:lib}) 
    }catch(err){
        res.json({err})
    }
})

librarianRouter.get("/:id",async(req,res)=>{
    try{
        const lib = await librarian.findById(req.params.id);
        if(!lib){
            res.json({msg:"Not Found"}) 
        } 
        res.json({msg:lib})
    }catch(err){
        res.json({err})
    }
})

librarianRouter.post('/register',async(req,res)=>{
    try{
        const {name,email,pass,phone} = req.body;
        console.log(req.body);
        
        const hashpass = await bcrypt.hash(pass,10)
        // console.log(hashpass);
        
        const lib = await librarian.create({name,email,pass,phone})
        res.json({msg:lib})
    }catch(err){
        res.json(err)
    }
})

librarianRouter.delete('/delete/:id',async(req,res)=>{
    try{
        const lib = await librarian.findByIdAndDelete(req.params.id);
        if(!lib){
            res.json({msg:"NOT FOUND"})
        }
        res.json({message:"user deleted "})
    }catch(err){
        res.json(err)
    }
})

librarianRouter.patch('/update/:id',async(req,res)=>{
    try{
        const lib = await librarian.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        if(!lib){
            res.json({msg:"NOT FOUND"})
        }
        res.json({msg:"Faculty Updated", lib})
    }catch(err){
        res.json({err})
    }
})

module.exports = librarianRouter