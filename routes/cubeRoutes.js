const express = require('express')

//const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('Selectcube')
     
})

router.get('/new', (req, res) => {
    res.render('Customcube')
     
})

module.exports = router