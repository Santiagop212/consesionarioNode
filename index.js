// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

// Require external modules
const mongoose = require('mongoose')
const uri = "mongodb+srv://sposada176:YQgWnrA13sRnsyYT@consesionario.rbwhn1n.mongodb.net/?retryWrites=true&w=majority&appName=consesionario";
const connectToDB = async () => {
  try {
    await mongoose.connect(uri, { autoIndex: true });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error(error);
  }
};
connectToDB()

// Routes declaration
const routes = require('./routes')

routes.forEach((route, index) => {
  fastify.route(route)
})

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
