import request from 'supertest'

import server from '../server'

// the server keeps the widgets in memory so no knex setup needed

test('tests working', function(){
    expect(true).toBeTruthy()
})

// test('GET /cubes', () => {
//   console.log(res.body)  
//   return request(app)
//     .get('/api/cubes')
//     .expect(200)
//     .then(res => {
//       expect(res.body.length).toBe(3)
//     })
// })

// test('GET /cubes', () => {
//     console.log(res.body)  
//     return request(app)
//       .get('/api/users')
//       .expect(200)
//       .then(res => {
//         expect(res.body.length).toBe(3)
//       })
//   })

  test('GET /users', function() {
    var expected = 5

    request(server)
    .get('/api/users')
    //.expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
        console.log(res) 
        expect(res.body.length).toEqual(expected)
    })
    .catch(err => {expect(err).toBeFalsy()})
})