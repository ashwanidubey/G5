const express=require('express')
const {router}=require('./routes/router')
const app=express();


const mongoose = require("mongoose");
const {connectToMongo}=require('./db')


//connecting to mongodb
connectToMongo();

// Middleware for parsing JSON
app.use(express.json());

app.use(router)

app.listen(3000,()=>{
    console.log("i am running at port 3000")
})

/**
 * install mongodb
 * install mongodb compass
 * create account on mongodb atlas
 */