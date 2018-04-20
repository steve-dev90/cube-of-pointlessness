const express = require('express')

const PORT = process.env.PORT || 3000

const server = express()

const cubedata = require('./routes/cubedata')
const userdata = require('./routes/userdata')

server.use(express.static('public'))

server.use('/api/cubes', cubedata)
server.use('/api/users', userdata)

server.listen(PORT, () => {
  console.log('Listening on port', PORT)
})
