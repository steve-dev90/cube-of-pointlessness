
const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
router.use(bodyParser.json())

const db = require('../db/db')

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

module.exports = router

