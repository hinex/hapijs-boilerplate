const Config = require('config')
const Hapi = require('hapi')

const SwaggerService = require('./services/swagger')
const Api = require('./api')

const server = Hapi.server({
    port: Config.get('General.port'),
    host: '0.0.0.0',
    routes: Config.get('General.cors') ? {
        cors: {
            origin: ['*'],
        },
    } : {},
})

const init = async () => {
    if (Config.get('General.swagger').includes(process.env.NODE_ENV)) {
        await SwaggerService(server)
    }

    server.route(Api())
    await server.start()

    console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {

    console.error('unhandledRejection', err)
    process.exit(1)
})

init()
