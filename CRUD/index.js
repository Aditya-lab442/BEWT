const express = require('express')

// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();
const app = express()
app.use(express.json())
const mongoose = require('mongoose')

mongoose.connect(process.env.mongoUrl).then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log(err)
})


const facultyRouter = require('./Routes/faculty')

app.use('/faculty',facultyRouter);

app.listen(3000)
