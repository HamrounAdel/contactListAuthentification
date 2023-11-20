const express = require('express')
const app =express()
const port = process.env.PORT || 5002
const cors = require('cors')
const connectdb =require('./config/db')
const contactRoute=require('./routes/contactRoute')
const userRoute=require('./routes/userRoute')
require('dotenv').config()


app.use(cors())
app.use(express.json())
//connection de base
connectdb()
//les path principale
app.use('/contact',contactRoute)
app.use('/auth',userRoute)





app.listen(port,err=>{(err)?
console.log(err):console.log(`this port :${port}`)})