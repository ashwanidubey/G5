const express=require('express');
const {like,comment,unlike,deletepost,
    createpost,updatepost,searchpost,
    updatecomment,deletecomment,showuserdata,
    modifyuserdata,savedpost}=require('../function/features')
const features=express.Router();

features.get('/like',like)
features.get('/comment',comment)
features.get('/unlike',unlike)
features.get('/deletepost',deletepost)
features.get('/createpost',createpost)
features.get('/updatepost',updatepost)
features.get('/searchpost',searchpost)
features.get('/updatecomment', updatecomment)
features.get('/deletecomment',deletecomment)
features.get('/showuserdata',showuserdata)
features.get('/modifyuserdata',modifyuserdata)
features.get('/savedpost',savedpost)

module.exports={features}