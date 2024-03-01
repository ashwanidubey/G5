const mongoose = require("mongoose");
const userschema=mongoose.Schema({
    name: String ,
    email:String,
    password:String,
    cpassword:String
   })

const User = mongoose.model('user', userschema );

module.exports={User}