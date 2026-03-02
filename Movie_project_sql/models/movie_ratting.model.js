const db = require("../db/mysql")

async function getAll(){
    try{
        const [data] = await db.query("SELECT * FROM movie_rating")
        return data;
    }catch(err){
        return err
    }
}

async function getByID(id){
    try{
        const [data, field] = await db.query("SELECT * FROM movie_rating WHERE RatingID=" + id)
        return data[0];
    }catch(err){
        return err
    }
}

async function insert(formdata){
    try{
        const [data, field] = await db.query(
            `INSERT INTO movie_rating (RatingID, MovieID, UserID, RatingStar, RatingComment) 
             VALUES (NULL, '${formdata.MovieID}', '${formdata.UserID}', '${formdata.RatingStar}', '${formdata.RatingComment}')`
        )
        return data;
    }catch(err){
        return err
    }
}

async function update(id, formdata){
    try{
        const [data, field] = await db.query(
            `UPDATE movie_rating 
             SET MovieID='${formdata.MovieID}', 
                 UserID='${formdata.UserID}', 
                 RatingStar='${formdata.RatingStar}', 
                 RatingComment='${formdata.RatingComment}' 
             WHERE RatingID=${id}`
        )
        return data;
    }catch(err){
        return err
    }
}

async function deleteById(id){
    try{
        const [data, field] = await db.query(`DELETE FROM movie_rating WHERE RatingID=${id}`)
        return data;
    }catch(err){
        return err
    }
}

module.exports = { getAll, getByID, insert, update, deleteById }
