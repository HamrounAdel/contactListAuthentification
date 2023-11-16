const express =require('express')
const router=express.Router()
const{getContact,addContact,removeContact,updateContact,getUnique }=require('../controllers/contactController')

// get les user
//http://localhost:5002/contact/getAll
router.get('/getAll',getContact)


// post les user
//http://localhost:5002/contact/addContact
  router.post('/addContact',addContact)

// update les user
//http://localhost:5002/contact/updatContact/:id
router.put('/updatContact/:id',updateContact)

// delete les user 
//http://localhost:5002/contact/remove/:id
 router.delete('/remove/:id',removeContact)

 // get unique
//http://localhost:5002/contact/unique/:id
router.get('/unique/:id',getUnique)

module.exports=router