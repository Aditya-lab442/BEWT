const db=require("../db/mysql")

async function getAll(){
    try{
        const [data]=await db.query("SELECT * FROM users")
        return data;
    }catch(err){
        return err
    }
}

async function getByID(id){
    try{
        const [data,field]=await db.query("SELECT * FROM users where UserID="+id)
        return data[0];
    }catch(err){
        return err
    }
}

async function getByUserName(un){
    try{
        const [data,field]=await db.query(`SELECT * FROM users where UserName='${un}'`)
        return data[0];
    }catch(err){
        return err
    }
}

async function insert(formdata){
    try{
        const [data,field]=await db.query(`INSERT INTO users (UserID, UserName, Password) VALUES (NULL, '${formdata.UserName}', '${formdata.Password}');`)
        return data;
    }catch(err){
        return err
    }
}

async function update(id,formdata){
    try{
        const [data,field]=await db.query(`UPDATE users SET UserName='${formdata.UserName}', Password=${formdata.Password} WHERE UserID= ${id}; `)
        return data;
    }catch(err){
        return err
    }
}

async function deleteById(id){
    try{
        const [data,field]=await db.query(`DELETE FROM users WHERE UserID= ${id}`)
        return data;
    }catch(err){
        return err
    }
}

module.exports={getAll,getByID,insert,update,deleteById,getByUserName}