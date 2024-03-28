// Import Controllers
const carrosController = require('../controllers/carrosController')

const routes = [
  {
    method: 'GET',
    url: '/api/carros',
    handler: carrosController.getCarros
  },
  {
    method: 'GET',
    url: '/api/carros/:id',
    handler: carrosController.getSingleCarro
  },
  {
    method: 'POST',
    url: '/api/carros',
    handler: carrosController.addCarro,
    schema: carrosController.addcarrosSchema
  },
  {
    method: 'PUT',
    url: '/api/carros/:id',
    handler: carrosController.updateCarro
  },
  {
    method: 'DELETE',
    url: '/api/carros/:id',
    handler: carrosController.deleteCarro
  },
 
]
module.exports = routes