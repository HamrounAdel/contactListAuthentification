const  mongoose  = require("mongoose");

const userSchema =new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  role:{
    type:String,
    default:'user'
  }

})
module.exports= mongoose.model('userList',userSchema)