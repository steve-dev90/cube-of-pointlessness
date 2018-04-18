
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
        {user_id: 991, cube_id: 661, rating: 5 },
        {user_id: 992, cube_id: 661, rating: 4 },
        {user_id: 991, cube_id: 662, rating: 3 },
      ])
    }),

    knex('Cubes').del()
    .then(function () {
      // Inserts seed entries
      return knex('cubes').insert([
        {id: 661, name: 'Sine Cube', P5_sketch_name: 'test.jpg' },
        {id: 662, name: 'Random Cube', P5_sketch_name: 'test.jpg' },
        {id: 663, name: 'Wind Cube', P5_sketch_name: 'test.jpg' },
      ])
    })      
  ])

};