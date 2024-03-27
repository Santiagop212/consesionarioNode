// Import Controllers
const carrosController = require('./controllers/carrosController')

const routes = [
  {
    method: 'GET',
    url: '/api/estudiantes',
    handler: carrosController.getCarros
  },
  {
    method: 'GET',
    url: '/api/estudiantes/:id',
    handler: carrosController.getSingleCarro
  },
  {
    method: 'POST',
    url: '/api/estudiantes',
    handler: carrosController.addCarro,
    schema: carrosController.addcarrosSchema
  },
  {
    method: 'PUT',
    url: '/api/estudiantes/:id',
    handler: carrosController.updateCarro
  },
  {
    method: 'DELETE',
    url: '/api/estudiantes/:id',
    handler: carrosController.deleteCarro
  },
 
]
module.exports = routes