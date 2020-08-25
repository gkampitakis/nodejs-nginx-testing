const fastify = require('fastify')({
  logger: true
});
const MongoClient = require('mongodb').MongoClient;
const customHealthCheck = require('fastify-custom-healthcheck');
const _package = require('./package.json');
const dotenv = require('dotenv');

dotenv.config({
  path: `./.env.${process.env.NODE_ENV}`
});

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT;


fastify.register(customHealthCheck, {
  path: '/api/health',
  info: {
    example: 'Custom Info',
    env: process.env.NODE_ENV,
    name: _package.name,
    version: _package.version
  },
  exposeFailure: true
})
  .then(() => {
    fastify.addHealthCheck('mongo', async () => {
      const client = await MongoClient.connect(MONGODB_URL);
      client.db('example');

      client.close();
    });
  });

fastify.get('/', (req, res) => {
  res.status(200).send({
    message: 'Change Server Name'
  });
});

fastify.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Example Server listening on port ${PORT}`);
});