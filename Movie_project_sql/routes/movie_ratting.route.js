const express=require("express")
const { getAllMovieRattings,getMovieRattingByID,insertMovieRatting,updateMovieRatting,deleteMovieRatting } = require("../services/movie_ratting.service")

const routeMovieRatting=express.Router()

routeMovieRatting.get("/",async(req,res)=>{
    const data=await getAllMovieRattings()
    res.send(data)
})

routeMovieRatting.get("/:id",async(req,res)=>{
    const data=await getMovieRattingByID(req.params.id)
    res.send(data)})

routeMovieRatting.post("/",async(req,res)=>{
    const data=await insertMovieRatting(req.body)
    res.send(data)})

routeMovieRatting.patch("/:id",async(req,res)=>{
    const data=await updateMovieRatting(req.params.id,req.body)
    res.send(data)})

routeMovieRatting.delete("/:id",async(req,res)=>{
    const data=await deleteMovieRatting(req.params.id)
    res.send(data)
})

module.exports=routeMovieRatting