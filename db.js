const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getPredefinedCubes (testConn) {
  const conn = testConn || connection
  // return conn('cubeRatings')
  //   .select('cube_id',conn.raw("AVG(rating)"))
  //   .groupByRaw('cube_id')
    return conn('predefinedCubes')
    .select('predefinedCubes.name', 'predefinedCubes.image', conn.raw("AVG(cubeRatings.rating) as average"))
    .join('cubeRatings', 'predefinedCubes.id','cubeRatings.cube_id')
    .groupByRaw('cubeRatings.cube_id')

      
}



module.exports = {
  getPredefinedCubes

}