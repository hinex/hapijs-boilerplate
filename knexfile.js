const Config = require('config')

module.exports = {
    client: 'postgresql',
    connection: {
        database: Config.get('Database.name'),
        user: Config.get('Database.user'),
        password: Config.get('Database.password'),
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: 'knex_migrations',
    },
}
