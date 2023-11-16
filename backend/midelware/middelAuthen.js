var jwt =require('jsonwebtoken')
const userSchema =require('../model/userModel')

exports.auth =async(req,res,next)=>{
    try{
       const token =req.header('Authorisation')
       var  test = jwt.verify(token,process.env.privatKey)
       if(!test){return res.json({errors})}
       const user =  await userSchema.findById(test.id)
       res.user =user
       next()
    }catch(err){
        console.log(err)
    }
}