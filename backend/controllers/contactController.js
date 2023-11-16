
const contactShema = require('../model/contactShema')


exports.getContact =async(req,res)=>{
    try{
  const getall =await  contactShema.find()
  res.status(200).json({msg:'get the contact' ,getall})
    } catch(err){
      console.log(err)
    }
 }

 exports.addContact=async(req,res)=>{
     try{
  const newContact = new contactShema(req.body) 
    await newContact.save()     
    res.status(200).json({msg:'added the contact' ,newContact})
  } catch(err){
    console.log(err)
        }
    }

  exports.removeContact=async(req,res)=>{
     try{
      const {id} = req.params
     const deletecont=  await contactShema.findByIdAndDelete(id)
      res.status(200).json({mes:'deleted the contact'})
     }catch(err){
      console.log(err)
           }
  
  }

 exports.updateContact=async(req,res)=>{
 try{
    const {id}=req.params
    const editeContact= await contactShema.findByIdAndUpdate(id,{$set:{...req.body}})
    res.status(200).json({mes:'update the contact',editeContact})
 } catch(err){
  console.log(err)
       }
  }


  exports.getUnique =async(req,res)=>{
    try{
      const {id}=req.params
     const getcontact= await contactShema.findById(id)
     res.status(200).json({mes:'get unique  contact',getcontact})
    } catch(err){
      console.log(err)
    }
 }