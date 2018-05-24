//const path = require('path')
const config = require('../knexfile').development
const knex = require('knex')(config)


//USE NEXT THREE LINES FOR HEROKU
// const environment = process.env.NODE_ENV || 'development'
// const config = require('../knexfile')[environment]
// const knex = require('knex')(config)

function getCubes() {
  return knex('cubes').select()
}

function getUsers(testConn) {
  const conn = testConn || knex
  return conn('users').select()
}

function addNewUser (newUser, testConn) {
  const conn = testConn || knex
  return conn('users')
    .insert({'name': newUser.name, 'email': newUser.email })     
}

function getCubes2 (testConn) {
  const conn = testConn || knex
  return conn('*')
    .select('cubes.id','cubes.name', 'cubes.image', conn.raw("AVG(cuberatings.rating) as rating"))
    .from('cubes', 'cuberatings')
    .leftJoin('cuberatings', 'cubes.id','cuberatings.cube_id')
    .groupByRaw('cubes.id')     
}

function getCubesByUserId (user_id) {
  //const conn = testConn || knex
  return knex('cubes')
    .select('cubes.id','cubes.name', 'cubes.image', knex.raw("AVG(cuberatings.rating) as rating"))
    .leftJoin('cuberatings', 'cubes.id','cuberatings.cube_id')
    .where('cuberatings.user_id', user_id)
    .groupByRaw('cubes.id')     
}

function newRating (cube_rating) {
  return knex('cuberatings')
    .insert({'user_id': cube_rating.user_id, 'cube_id': cube_rating.cube_id, 
      'rating': cube_rating.rating })
      
}

module.exports = {
    getCubes : getCubes,
    getCubes2 : getCubes2,
    newRating: newRating,
    getUsers: getUsers,
    getCubesByUserId: getCubesByUserId,
    addNewUser: addNewUser
}