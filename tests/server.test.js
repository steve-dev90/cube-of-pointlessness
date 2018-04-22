
var server = require('../server')
var request = require('supertest')

// Tests don't work (db not defined) with changes made to db.js for heroku

test('tests working', function(){
    expect(true).toBeTruthy()
})

test('GET /cubes', () => {
  var expected = 661 //First cube id 
  return request(server)
    .get('/api/cubes')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      //console.log(res.body)
      expect(res.body[0].id).toEqual(expected)
    })
    .catch(err => {expect(err).toBeFalsy()})
})

  test('GET /users', function() {
    var expected = 991 //First user id

    request(server)
    .get('/api/users')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
        //console.log(res.body) 
        expect(res.body[0].id).toEqual(expected)
    })
    .catch(err => {expect(err).toBeFalsy()})
})