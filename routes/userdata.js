
const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
router.use(bodyParser.json())

const db = require('../db/db')

//Server side GET for a new user
router.get('/', (req, res) => {
    db.getUsers()
      .then(users => {
        console.log('router',users)  
        res.json(users)
      })
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
}) 

//Server side POST for a new user
router.post('/', (req, res) => {
  console.log('POST',req.body)

  var newUser = {
      'name': req.body.name,
      'email': req.body.email,
  }

  db.addNewUser(newUser)   
      .then(id => {
          console.log({id})
      })
      .catch(err => {
          console.log({err})
      })
})

module.exports = router

