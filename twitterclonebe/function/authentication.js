const { User } = require("../models/User");
const mongoose = require("mongoose");

const login=(req,res)=>{
    console.log(req.body)
    res.send(req.body);
}
const logout=(req,res)=>{
    res.send("logout");
}
const signup=(req,res)=>{
    const {name,email,password,cpassword}=req.body

    const user = new User({name,email,password,cpassword});
    user.save();

    console.log(name,email,password,cpassword)
    res.send("signup");
}
const forgatepwd=(req,res)=>{
    res.send("forgatepwd");
}
module.exports={login,logout,signup,forgatepwd}