const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getPredefinedCubes (testConn) {
  //doesn't retun all rows with null rating
  const conn = testConn || connection
    return conn('predefinedCubes')
    .select('predefinedCubes.name', 'predefinedCubes.image', conn.raw("AVG(cubeRatings.rating) as rating"))
    .leftJoin('cubeRatings', 'predefinedCubes.id','cubeRatings.cube_id')
    .groupByRaw('cubeRatings.cube_id')     
}

function getCustomCubes (testConn) {
  const conn = testConn || connection
    return conn('customCubes')
    .select('customCubes.name', 'customCubes.image', conn.raw("AVG(cubeRatings.rating) as rating"))
    .leftJoin('cubeRatings', 'customCubes.id','cubeRatings.cube_id')
    .groupByRaw('cubeRatings.cube_id')     
}

module.exports = {
  getPredefinedCubes,
  getCustomCubes

}