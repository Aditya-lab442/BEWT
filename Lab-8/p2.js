const ex = require('express')

const app = ex();

app.get("/",(req,res)=>{
    res.send("Home Page")
})
app.get("/about",(req,res)=>{
    res.send("About Page")
})
app.get("/contact",(req,res)=>{
    res.send("Contact Page")
})
app.get("/profile",(req,res)=>{
    res.send("Profile Page")
})
app.get("/login",(req,res)=>{
    res.send("Login Page")
})


app.listen(3000,()=>{
    console.log("Server At 3000");
    
})