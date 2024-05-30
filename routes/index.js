// Import Controllers
const carrosController = require('../controllers/carrosController')

const routes = [
  {
    method: 'GET',
    url: '  ',
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
  {
    method: 'GET',
    url: '/api/healthcheck',
    handler: (req, res) => {
      res.send('OKAY');
    }
  }
]
module.exports = routes