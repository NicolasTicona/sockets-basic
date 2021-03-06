const { io } = require('../server')

io.on('connection', (client) => {

    console.log('Usuario conectado')

    client.emit('enviarMensaje', {
        message: 'Bienvido al mundo de Socket.io'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    })

    // Escuchar cliente

    client.on('enviarMensaje', (data, callback) => {
        console.log(data)

        client.broadcast.emit('enviarMensaje', data)
    })
})