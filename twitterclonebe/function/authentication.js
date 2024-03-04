const { User } = require("../models/User");
const mongoose = require("mongoose");
const bcrypt=require("bcryptjs");

//jwt use to validate user
var jwt = require('jsonwebtoken');

const login=async (req,res)=>{
    const {email,password}=req.body;
    const users=await User.find({email});
    if(users.length==0)
    {
        return res.status(504).send("user not found")
    }
    let hashpwd=users[0].password;
    let response=await bcrypt.compare(password,hashpwd)
    if(response==true){
        let data={id:users[0].id}
        let signature="xyz"
        let token=jwt.sign(data,signature)
        return res.status(200).send({status:true,token});
        //return res.status(200).send({...req.body,status:"login sucess"});
    }
    return res.status(504).send({status:false,message:"login failed"})
    }
    
    
const logout=async (req,res)=>{
    res.status(200).send("logout");
}
const signup=async (req,res)=>{
    const {name,email,password,cpassword}=req.body

    //generate bcrypt default salt
    let salt=await bcrypt.genSalt()
    //generating hashpassword
    let hashPassword=await bcrypt.hash(password,salt);

    const user = new User({name,email,password: hashPassword});
    user.save();
    
    let data={id:user.id}
    let signature="xyz"
    let token=jwt.sign(data,signature)
    res.status(200).send({status:true,token});
}
const forgatepwd=(req,res)=>{
    res.status(200).send("forgatepwd");
}
module.exports={login,logout,signup,forgatepwd}