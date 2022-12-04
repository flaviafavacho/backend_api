const express = require('express');
const mongoose  = require('mongoose');
const app = express()
  
const DB_CONNECT = require('./db/configDB');
const User = require('./model/User');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/user", async (req, res) =>{
    const { name, email} = req.body
    const user = {
        name,
        email
    }

 try{
    await User.create(user)  
    res.status(201).json({message: "usuario criado com sucessso"})
  }  catch (error){
    res.status(500).json({error: error})
  } 
})



 mongoose.connect("mongodb+srv://flaviaarruda12:Maracaipe36@flaviaarruda12.rcauknb.mongodb.net/?retryWrites=true&w=majority")  
.then( () => {
    app.listen(3001, () => {
        console.log("Conectando com o mongodb...")
    })
})  

.catch( (err) => {
    console.log(err)
})












//flaviaarruda12
//Maracaipe36
//mongodb+srv://flaviaarruda12:<password>@flaviaarruda12.rcauknb.mongodb.net/?retryWrites=true&w=majority