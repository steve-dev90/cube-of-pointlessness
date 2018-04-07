var express = require('express')

var server = express()

server.use(express.static('./'))

server.get('/', (req, res) => {
    res.send('<h1><em>Hello world</em></h1>')
})

module.exports = server