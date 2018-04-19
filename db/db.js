//const path = require('path')
const config = require('../knexfile').development
const knex = require('knex')(config)


function getCubes() {
    console.log('DB called')
    return knex('cubes').select()
}

function getCubes2 () {
      return knex('cubes')
      .select('cubes.id','cubes.name', 'cubes.image', knex.raw("AVG(cubeRatings.rating) as rating"))
      .leftJoin('cubeRatings', 'cubes.id','cubeRatings.cube_id')
      .groupByRaw('cubes.id')     
  }

module.exports = {
    getCubes : getCubes,
    getCubes2 : getCubes2
}