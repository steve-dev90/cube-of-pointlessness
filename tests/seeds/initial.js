
exports.seed = function(knex, Promise) {
 
  return Promise.all([

    knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 991, name: 'Steve', email: 'test@test.com' },
        {id: 992, name: 'Tom', email: 'test@test.com' },
        {id: 993, name: 'Ginny', email: 'test@test.com' }
      ])
    }),

    knex('cubeRatings').del()
    .then(function () {
      // Inserts seed entries
      return knex('cubeRatings').insert([
        {user_id: 991, cube_id: 661, rating: 0 },
        {user_id: 992, cube_id: 661, rating: 0 },
        {user_id: 991, cube_id: 662, rating: 0 },
      ])
    }),

    knex('cubes').del()
    .then(function () {
      // Inserts seed entries
      return knex('cubes').insert([
        {id: 661, name: 'Sine Cube', image: 'test.png' },
        {id: 662, name: 'Random Cube', image: 'test.png' },
        {id: 663, name: 'Wind Cube', image: 'test.png' },
      ])
    })      
  ])

};