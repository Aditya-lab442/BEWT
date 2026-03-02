const { getAll, getByID, insert, update, deleteById } = require("../models/movies.model")

async function getAllMovies(){
    const data=await getAll()
    if(data){
        return {
            error:false,
            data,
            message:"Movies Fetched success"
        }
    }
    else{
        return {
            error:true,
            message:"Some error occured"
        }
    }
}

async function getMovieByID(id){
    const data=await getByID(id)
    if(data){
        return {
            error:false,
            data,
            message:"Movie Fetched success"
        }
    }
    else{
        return {
            error:true,
            message:"Some error occured"
        }
    }
}

async function insertMovie(formdata){
    const data=await insert(formdata)
    if(data){
        return {
            error:false,
            data,
            message:"Movie insert success"
        }
    }
    else{
        return {
            error:true,
            message:"Some error occured"
        }
    }
}

async function updateMovie(id,formdata){
    const data=await update(id,formdata)
    if(data){
        return {
            error:false,
            data,
            message:"Movie update success"
        }
    }
    else{
        return {
            error:true,
            message:"Some error occured"
        }
    }
}

async function deleteMovie(id){
    const data=await deleteById(id)
        if(data){
            return {
                error:false,
                data,
                message:"Movie delete success"
            }
        }
        else{
            return {
                error:true,
                message:"Some error occured"
            }
        }
}

module.exports={getAllMovies,getMovieByID,insertMovie,updateMovie,deleteMovie}