const zerorpc = require('zerorpc')

const client = new zerorpc.Client()
client.connect('tcp://127.0.0.1:4242')

client.on('error', error => {
  console.error('RPC client error:', error)
})

client.invoke('iter', 10, 20, 2, (error, res, more) => {
  if (error) {
    console.error(error)
  } else {
    console.log('UPDATE:', res)
  }

  if (!more) {
    console.log('Done.')
  }
})
