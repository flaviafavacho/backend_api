const mongoose = require("mongoose");

const User = mongoose.model('User', {
  name: String,
  email: String,
})

module.exports = User


//GET
//UPDATE 
//PUT
//PATCH ATUALIZAÇAO PARCIAL
//DELETE DELETAR
