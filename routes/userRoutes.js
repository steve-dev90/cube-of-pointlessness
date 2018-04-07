const express = require('express')

//const db = require('../db')

const router = express.Router()

router.get('/new', (req, res) => {
    res.render('Newuser')
     
})

module.exports = router