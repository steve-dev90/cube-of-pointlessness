
const express = require('express')
//const bodyParser = require('body-parser')
const router = express.Router()
//router.use(bodyParser.json())

const db = require('../db/db')

router.get('/', (req, res) => {
    db.getCubes2()
      .then(cubes => {
        console.log('router',cubes)  
        res.json(cubes)
      })
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
  })

module.exports = router

