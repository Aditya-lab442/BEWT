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


const studentRouter = require('./Routes/studentRoute')
const librarianRouter = require('./Routes/librarianRoute')
const transactionRoute = require('./Routes/transactionRoute')
const bookRouter = require('./Routes/bookRoute')

app.use('/transaction',transactionRoute);

app.use('/book',bookRouter);

app.use('/student',studentRouter);
app.use('/librarian',librarianRouter)



app.listen(3000)
