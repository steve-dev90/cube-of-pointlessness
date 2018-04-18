//const path = require('path')
const config = require('../knexfile').development
const knex = require('knex')(config)


function getCubes() {
    console.log('DB called')
    return knex('cubes').select()
}

module.exports = {
    getCubes : getCubes
}