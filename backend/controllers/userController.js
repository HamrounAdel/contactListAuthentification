const userSchema = require('../model/userModel')
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken')


exports.register=async(req,res)=>{
    try{
     const {name,email,password}= req.body
     const test=await userSchema.findOne({email})
     if(test){return res.json({msg:'cette user est deja inscrit'})}

     const newUser = new userSchema(req.body) 

     const saltRounds = 10;
     const salt = bcrypt.genSaltSync(saltRounds);
     const hash = bcrypt.hashSync(password, salt);
     newUser.password=hash

    await newUser.save()     
    res.status(200).json({msg:'added the user' ,newUser})
    
    } catch(err){
        console.log(err)
      }
}

exports.login=async(req,res)=>{
    try{
        const {email,password}= req.body

        const test=await userSchema.findOne({email})
        if(!test){return res.json({msg:'email introuvable'})}

        const testpass=bcrypt.compare(password,test.password)
        if(!testpass){return res.json({msg:'password est eronée'}) }

        const payload={id:test._id}
        var token=jwt.sign(payload, process.env.privatKey)
        res.json({meg:'welcom ',test,token})

    } catch(err){
        console.log(err)
    }
}