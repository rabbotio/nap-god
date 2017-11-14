require('dotenv/config')
process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const config = {
  logger: debug,
  isProd: function get () {
    return process.env.NODE_ENV === 'production'
  },
  secret: process.env.SECRET,
  mongodbURI: process.env.MONGODB_URI || 'mongodb://mongo/graphql',
  baseURL: process.env.BASE_URL || 'http://localhost:3030',
  brokerURI: process.env.BROKER_URI || 'tcp://127.0.0.1:55555'
}

module.exports = config
