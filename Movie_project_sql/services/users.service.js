const { getAll, getByID, insert, update, deleteById, getByUserName } = require("../models/users.model")
var jwt=require("jsonwebtoken")

async function getAllUsers(){
    const data=await getAll()
    if(data){
        return {
            error:false,
            data,
            message:"Users Fetched success"
        }
    }
    else{
        return {
            error:true,
            message:"Some error occured"
        }
    }
}

async function getUserByID(id){
    const data=await getByID(id)
    if(data){
        return {
            error:false,
            data,
            message:"User Fetched success"
        }
    }
    else{
        return {
            error:true,
            message:"Some error occured"
        }
    }
}

async function checkLogin(formdata){
    const data=await getByUserName(formdata.UserName)
    if(data){
        if(data.Password===formdata.Password){
            var token=jwt.sign(data,'shhhhh')
            return {
            error:false,
            data:token,
            
            message:"User Fetched success"
        }
        }
        
    }
    else{
        return {
            error:true,
            message:"Username/password dose not match"
        }
    }
}

async function insertUser(formdata){
    const data=await insert(formdata)
    if(data){
        return {
            error:false,
            data,
            message:"User insert success"
        }
    }
    else{
        return {
            error:true,
            message:"Some error occured"
        }
    }
}

async function updateUser(id,formdata){
    const data=await update(id,formdata)
    if(data){
        return {
            error:false,
            data,
            message:"User update success"
        }
    }
    else{
        return {
            error:true,
            message:"Some error occured"
        }
    }
}

async function deleteUser(id){
    const data=await deleteById(id)
        if(data){
            return {
                error:false,
                data,
                message:"User delete success"
            }
        }
        else{
            return {
                error:true,
                message:"Some error occured"
            }
        }
}

module.exports={getAllUsers,getUserByID,insertUser,updateUser,deleteUser,checkLogin}