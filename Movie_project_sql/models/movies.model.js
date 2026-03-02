const db=require("../db/mysql")

async function getAll(){
    try{
        const [data]=await db.query("SELECT * FROM movies")
        return data;
    }catch(err){
        return err
    }
}

async function getByID(id){
    try{
        const [data,field]=await db.query("SELECT * FROM movies where MovieID="+id)
        return data[0];
    }catch(err){
        return err
    }
}

async function insert(formdata){
    try{
        const [data,field]=await db.query(`INSERT INTO movies (MovieID, MovieName, Movieimage) VALUES (NULL, '${formdata.MovieName}', '${formdata.Movieimage}');`)
        return data;
    }catch(err){
        return err
    }
}

async function update(id,formdata){
    try{
        const [data,field]=await db.query(`UPDATE movies SET MovieName='${formdata.MovieName}', Movieimage=${formdata.Movieimage} WHERE MovieID= ${id}; `)
        return data;
    }catch(err){
        return err
    }
}

async function deleteById(id){
    try{
        const [data,field]=await db.query(`DELETE FROM movies WHERE MovieID= ${id}`)
        return data;
    }catch(err){
        return err
    }
}

module.exports={getAll,getByID,insert,update,deleteById}