
exports.up = function(knex, Promise) {

    return Promise.all ([
        knex.schema.createTable('users', function (table) {
            table.increments('id').primary()
            table.string('name'),
            table.string('email')
        }),

        knex.schema.createTable('cubes', function (table) {
            table.increments('id').primary()
            table.string('name')
            table.string('P5_sketch_name')
        }),

        knex.schema.createTable('cubeRatings', function (table) {
            table.integer('user_id')
            table.integer('cube_id')
            table.integer('rating')
        })
        
    ])
}

exports.down = function(knex, Promise) {

    return Promise.all([
        knex.schema.dropTable('users'),
        knex.schema.dropTable('cubes'),
        knex.schema.dropTable('cubeRatings')
    ])
    
};
