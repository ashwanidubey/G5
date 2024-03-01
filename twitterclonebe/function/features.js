const like=(req,res)=>{res.send("like");}
const comment=(req,res)=>{res.send("comment");}
const unlike=(req,res)=>{res.send("unlike");}
const deletepost=(req,res)=>{res.send("deletepost");}
const createpost=(req,res)=>{res.send("createpost");}
const updatepost=(req,res)=>{res.send("updatepost");}
const searchpost=(req,res)=>{res.send("searchpost");}
const updatecomment=(req,res)=>{res.send("updatecomment");}
const deletecomment=(req,res)=>{res.send("deletecomment");}
const showuserdata=(req,res)=>{res.send("showuserdata");}
const modifyuserdata=(req,res)=>{res.send("modifyuserdata");}
const savedpost=(req,res)=>{res.send("savedpost");}

module.exports={like,comment,unlike,deletepost,
                createpost,updatepost,searchpost,
                updatecomment,deletecomment,showuserdata,
                modifyuserdata,savedpost}