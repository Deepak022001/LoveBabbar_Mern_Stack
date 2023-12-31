const express=require('express');
const app=express();

// app.listen(3000,()=>{
//     console.log("App is running successfully");
// })

require("dotenv").config();
const PORT=process.env.PORT||4000;

app.use(express.json());


// import routes for todo apis

const todoRoutes=require('./routes/todos')

app.use("/api/v1",todoRoutes);


app.listen(PORT,()=>{
    console.log(`Server started succuseffully at ${PORT}`)
})

const dbConnect=require("./config/database");

app.get("/",(req,res)=>{
    res.send(`<h1>This is a HOMEPAGE baby </h1>`);
})