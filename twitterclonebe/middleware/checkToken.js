//jwt use to validate user
var jwt = require('jsonwebtoken');

const checkToken=async (req,res,next)=>{
    console.log("hello i am checkToken")
      let signature="xyz"
      let data=jwt.verify(req.body.token,signature)
      console.log(data)
      next()
}

module.exports={checkToken}