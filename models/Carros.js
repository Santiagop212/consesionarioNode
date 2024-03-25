const mongoose = require('mongoose')

const carrosSchema = new mongoose.Schema({
    Id_carro: String,
    String : Marca,
    String : Modelo,
    String : Serie,
    String : Ano_Fabricacion,
    String : Cilindraje,
    String : Tipo_Carroceria,
  services: {
    type: Map,
    of: String
  }
})

module.exports = mongoose.model('Carros', carrosSchema)