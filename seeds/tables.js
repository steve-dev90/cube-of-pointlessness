
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
        {user_id: 991, cube_id: 661, custom_cube: false, rating: 5 },
        {user_id: 992, cube_id: 661, custom_cube: false, rating: 4 },
        {user_id: 991, cube_id: 662, custom_cube: false, rating: 3 }
      ])
    }),

    knex('customCubes').del()
    .then(function () {
      // Inserts seed entries
      return knex('customCubes').insert([
        {id: 551, user_id: 991, name: "Steve's cube", image: 'test.jpg', size: 2, speed: 2, colour: 'white' },
        {id: 552, user_id: 992, name: "Tom's cube", image: 'test.jpg', size: 3, speed: 5, colour: 'blue' },
        {id: 553, user_id: 993, name: "Ginny's cube", image: 'test.jpg', size: 5, speed: 3, colour: 'red' },
      ])
    }),

    knex('predefinedCubes').del()
    .then(function () {
      // Inserts seed entries
      return knex('predefinedCubes').insert([
        {id: 661, name: 'Cube of Sorrows', image: 'test.jpg' },
        {id: 662, name: 'Cube of Relaxation', image: 'test.jpg' },
        {id: 663, name: 'Cube of Excitement', image: 'test.jpg' },
      ])
    })      
  ])

};
