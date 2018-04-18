
const express = require('express')
//const bodyParser = require('body-parser')
const router = express.Router()
//router.use(bodyParser.json())

const db = require('../db/db')

router.get('/', (req, res) => {
    db.getCubes()
      .then(cubes => {
        console.log('router',res.body)  
        res.json(cubes)
      })
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
  })

module.exports = router

