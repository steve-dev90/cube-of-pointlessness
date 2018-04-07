const express = require('express')
const server = express()
const userRoutes = require('./routes/userRoutes')
const cubeRoutes = require('./routes/cubeRoutes')
const hbs = require('express-handlebars')

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))

// Routes
server.use('/users', userRoutes)
server.use('/cubes', cubeRoutes)

server.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/welcome.html') 
})

module.exports = server