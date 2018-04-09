const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
    db.getPredefinedCubes()
      .then(predefinedCubes => {
        console.log(predefinedCubes)
        db.getCustomCubes()
          .then(customCubes => {
            console.log(customCubes) 
            res.render('Selectcube', {predefinedCubes: predefinedCubes,
              customCubes: customCubes})
        })
        
      })
        
})

router.get('/new', (req, res) => {
    res.render('Customcube')
     
})

// router.get('/1', function (req, res) {
//     res.sendFile('/Users/stevetorrens/workspace/cube-of-pointlessness/cube.html') 
//   })

module.exports = router