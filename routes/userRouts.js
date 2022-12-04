const express = requiere("express")
const userRoutes = express. Router()

const User = require("../model/User")

user.Routes.post("/user", async (req, res) =>{
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

