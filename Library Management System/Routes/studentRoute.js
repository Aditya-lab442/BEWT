const express = require('express')


const studentRouter = express.Router();

const bcrypt = require('bcrypt')

// const dotenv = require('dotenv')

const student = require('../Models/studentModel')

studentRouter.use(express.json());

studentRouter.get("/",async(req,res)=>{
    try{
        const stu = await student.find();
        res.json({msg:stu}) 
    }catch(err){
        res.json({err})
    }
})

studentRouter.get("/:id",async(req,res)=>{
    try{
        const stu = await student.findById(req.params.id);
        if(!stu){
            res.json({msg:"Not Found"}) 
        } 
        res.json({msg:stu})
    }catch(err){
        res.json({err})
    }
})

studentRouter.post('/register',async(req,res)=>{
    try{
        const {name,stuId,email,pass,phone} = req.body;
        // console.log(req.body);
        
        const hashpass = await bcrypt.hash(pass,10)
        // console.log(hashpass);
        
        const stu = await student.create({name,stuId,email,pass:hashpass,phone})
        res.json({msg:stu})
    }catch(err){
        res.json(err)
    }
})

studentRouter.delete('/delete/:id',async(req,res)=>{
    try{
        const stu = await student.findByIdAndDelete(req.params.id);
        if(!stu){
            res.json({msg:"NOT FOUND"})
        }
        res.json({message:"user deleted "})
    }catch(err){
        res.json(err)
    }
})

studentRouter.patch('/update/:id',async(req,res)=>{
    try{
        const stu = await student.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        if(!stu){
            res.json({msg:"NOT FOUND"})
        }
        res.json({msg:"Faculty Updated", stu})
    }catch(err){
        res.json({err})
    }
})

module.exports = studentRouter