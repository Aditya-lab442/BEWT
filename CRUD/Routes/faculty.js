const express = require('express')


const facultyRouter = express.Router();

// const dotenv = require('dotenv')

const faculty = require('../Models/facultyModel')

facultyRouter.use(express.json());

facultyRouter.get("/",async(req,res)=>{
    try{
        const fac = await faculty.find();
        res.json({faculties:fac}) 
    }catch(err){
        res.json({err})
    }
})

facultyRouter.get("/:id",async(req,res)=>{
    try{
        const fac = await faculty.findById(req.params.id);
        if(fac){
            res.json({faculty:fac}) 
        } 
        res.json({msg:fac})
    }catch(err){
        res.json({err})
    }
})

facultyRouter.post('/register',async(req,res)=>{
    try{
        const {name,email,pass,phone} = req.body;
        const fac = await faculty.create({name,email,pass,phone})
        res.json({faculty:fac})
    }catch(err){
        res.json(err)
    }
})

facultyRouter.delete('/delete/:id',async(req,res)=>{
    try{
        console.log(req.params.id);
        
        const fac = await faculty.findByIdAndDelete(req.params.id);
        if(!fac){
            res.json({msg:"NOT FOUND"})
        }
        res.json({message:"user deleted "})
    }catch(err){
        res.json(err)
    }
})

facultyRouter.patch('/update/:id',async(req,res)=>{
    try{
        const fac = await faculty.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        if(!fac){
            res.json({msg:"NOT FOUND"})
        }
        res.json({msg:"Faculty Updated", fac})
    }catch(err){
        res.json({err})
    }
})

module.exports = facultyRouter