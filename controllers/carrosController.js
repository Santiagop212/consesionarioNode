// External Dependancies
const boom = require('boom')

// Get Data Models
const Carros = require('../models/Carros')

// Get all Carros
exports.getCarros = async (req, reply) => {
  try {
    const carros = await Carros.find()
    return carros
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single carro by ID
exports.getSingleCarro = async (req, reply) => {
  try {
    const id = req.params.id
    const carro = await Carros.findById(id)
    return carro
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new carro
exports.addCarro = async (req, reply) => {
  try {
    const carro = new Carros(req.body)
    return carro.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing carro
exports.updateCarro = async (req, reply) => {
  try {
    const id = req.params.id
    const carro = req.body
    const { ...updateData } = carro
    const update = await Carros.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a carro
exports.deleteCarro = async (req, reply) => {
  try {
    const id = req.params.id
    const carro = await Carros.findByIdAndDelete(id)
    return carro
  } catch (err) {
    throw boom.boomify(err)
  }
}