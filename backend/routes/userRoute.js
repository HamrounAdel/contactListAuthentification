const express =require('express')
const userRoutes=express.Router()
const {register,login}=require('../controllers/userController')
const {auth}=require('../midelware/middelAuthen')
const {registerValidation,loginValidation,validation}=require('../midelware/middelValidation')
//http://localhost:5002/auth/register
userRoutes.post('/register',registerValidation,validation,register)

//http://localhost:5002/auth/login
userRoutes.post('/login',loginValidation,validation,login)

//http://localhost:5002/auth/moncompte
userRoutes.get('/moncompte',auth,(req,res)=>{
    res.send(req.user)
})


module.exports=userRoutes