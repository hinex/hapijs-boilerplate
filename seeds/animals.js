const tableName = 'model'

exports.up = (knex, Promise) => {

    return Promise.all([
        knex.schema.createTable(tableName, (table) => {

            table.increments('id').primary()
            table.string('name')
            table.integer('count')
            table.timestamps(true, true)
        }),
    ])
}

exports.down = (knex, Promise) => {

    return Promise.all([
        knex.schema.dropTable(tableName),
    ])
}
