const userSchema = require('../model/userModel')
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken')


exports.register=async(req,res)=>{
    try{
     const {name,lastName,email,password}= req.body
     const testuser = await userSchema.findOne({email})
     if(testuser){return res.status(404).json({msg:'cette user est deja inscrit'})}


     const newUser = await new userSchema(req.body) 
     const saltRounds = 10;
     const salt = bcrypt.genSaltSync(saltRounds);
     const hash = bcrypt.hashSync(password, salt);
 
     newUser.password = hash
     newUser.save()    
    res.status(200).json({msg:'added the user' ,newUser})
    
    } catch(err){
        console.log(err)
        res.status(400).jsonc({msg:'there is something wrong'})
      }
}

exports.login=async(req,res)=>{
    try{
        const {email,password}= req.body

        const testuser = await userSchema.findOne({email})
        if(!testuser){return res.status(404).json({msg:'email introuvable'})}

        const testpass = await bcrypt.compare(password,testuser.password)
        if(!testpass){return res.status(404).json({msg:'password est eronée'}) }

        const payload={ id: testuser._id}
        var token = jwt.sign(payload, process.env.privatKey)
        res.status(200).send({msg:'welcom ',token,testuser})

    } catch(err){
        console.log(err)
    }
}


exports.updateuser=exports.updateUser = async (req, res) => {
    const { id } = req.params;
    try {
      if (req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
      }
      const updatedUser = await UserSchema.findByIdAndUpdate(id, {
        $set: { ...req.body },
      });
      if (!updatedUser) {
        return res.status(400).json({ msg: "User not exist" });
      }
      return res.status(200).send({ msg: "User updated" });
    } catch (error) {
      console.log(err)
      return res.status(500).send({ err: error });
    }
  };