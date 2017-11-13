const start = async () => {
  // Config
  const config = {
    service: 'notifications',
    graphqlURI: 'http://localhost:4004/graphql',
    brokerURI: 'tcp://127.0.0.1:55555'
  }

  // GraphQL server
  const { Server } = require('@rabbotio/rainbow')
  const schema = require('./schemas')
  const server = new Server({ schema, port: 4004 })
  await server.start()

  // Worker
  const { Worker } = require('@rabbotio/rainbow')
  const worker = new Worker(config)
  worker.start()
}

start()
