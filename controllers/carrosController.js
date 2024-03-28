// External Dependancies
const boom = require('boom')

// Get Data Models
const Carros = require('../models/Carros')

// Get all Carros
exports.getCarros = async (req, reply) => {
  try {
    const cars = await Carros.find()
    return cars
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single car by ID
exports.getSingleCarro = async (req, reply) => {
  try {
    const id = req.params.id
    const car = await Carros.findById(id)
    return car
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new car
exports.addCarro = async (req, reply) => {
  try {
    const car = new Carros(req.body)
    return car.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing car
exports.updateCarro = async (req, reply) => {
  try {
    const id = req.params.id
    const car = req.body
    const { ...updateData } = car
    const update = await Carros.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a car
exports.deleteCarro = async (req, reply) => {
  try {
    const id = req.params.id
    const car = await Carros.findByIdAndDelete(id)
    return car
  } catch (err) {
    throw boom.boomify(err)
  }
}