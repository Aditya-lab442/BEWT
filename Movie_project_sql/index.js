const express=require("express")
const routeUser = require("./routes/users.route")
const routeMovie=require("./routes/movies.route")
const routeMovieRatting=require("./routes/movie_ratting.route")

const app=express()

app.use(express.json())


app.use("/users",routeUser)
app.use("/movies",routeMovie)
app.use("/movie_ratting",routeMovieRatting)


app.listen(3001,()=>{
    console.log("server started at 3001")
})