
exports.up = function(knex, Promise) {

    return Promise.all ([
        knex.schema.createTable('users', function (table) {
            table.increments('id').primary()
            table.string('name'),
            table.string('email')
        }),
        
        knex.schema.createTable('customCubes', function (table) {
            table.increments('id').primary()
            table.integer('user_id')
            table.string('name')
            table.string('image')
            table.integer('size')
            table.integer('speed')
            table.string('colour')
        }),

        knex.schema.createTable('predefinedCubes', function (table) {
            table.increments('id').primary()
            table.string('name')
            table.string('image')
        }),

        knex.schema.createTable('cubeRatings', function (table) {
            table.integer('user_id')
            table.integer('cube_id')
            table.boolean('custom_cube')
            table.integer('rating')
        })
        
    ])
}

exports.down = function(knex, Promise) {

    return Promise.all([
        knex.schema.dropTable('users'),
        knex.schema.dropTable('customCubes'),
        knex.schema.dropTable('predefinedCubes'),
        knex.schema.dropTable('cubeRatings')
    ])
    
};
