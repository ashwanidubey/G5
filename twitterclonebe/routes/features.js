const express=require('express');
const {like,comment,unlike,deletepost,
    createpost,updatepost,searchpost,
    updatecomment,deletecomment,showuserdata,
    modifyuserdata,savedpost}=require('../function/features')
const features=express.Router();
const {checkToken}=require("../middleware/checkToken")

features.post('/like',checkToken,like)
features.get('/comment',checkToken,comment)
features.get('/unlike',checkToken,unlike)
features.get('/deletepost',checkToken,deletepost)
features.get('/createpost',checkToken,createpost)
features.get('/updatepost',checkToken,updatepost)
features.get('/searchpost',checkToken,searchpost)
features.get('/updatecomment',checkToken, updatecomment)
features.get('/deletecomment',checkToken,deletecomment)
features.get('/showuserdata',checkToken,showuserdata)
features.get('/modifyuserdata',checkToken,modifyuserdata)
features.get('/savedpost',checkToken,savedpost)

module.exports={features}