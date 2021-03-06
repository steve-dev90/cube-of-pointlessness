
const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
router.use(bodyParser.json())

const db = require('../db/db')

//Server side GET for cube data with ratings
router.get('/', (req, res) => {
    db.getCubes2()
      .then(cubes => { 
        res.json(cubes)
      })
      .catch(err => {
        console.log({err})
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
})

//Server side GET for cube data with ratings for a specified user ID
router.get('/:id', (req, res) => {
    console.log('router',req.params.id)
    db.getCubesByUserId(Number(req.params.id))
      .then(cubes => {  
        res.json(cubes)
      })
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
})

//Server side POST for a new cube rating
router.post('/:id', (req, res) => {

    var cubeRating = {
        'user_id': req.body.user_id,
        'cube_id': req.body.cube_id,
        'rating': req.body.rating
    }

    db.newRating(cubeRating)   
        .then(id => {
            console.log({id})
        })
        .catch(err => {
            console.log({err})
        })
}) 

module.exports = router

