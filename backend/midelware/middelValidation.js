const { body, validationResult } = require('express-validator');

exports.registerValidation=[
    body('email','email is not valide').isEmail(),
    body('password','password is not valide').isLength({min:8})
]

exports.loginValidation=[
    body('email','email is not valide').isEmail(),
    
]


exports.validation=(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    next()
}