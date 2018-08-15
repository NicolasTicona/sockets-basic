let socket = io()

// Escuchar

socket.on('connect', function() {
    console.log('Conectado al servidor')
})

socket.on('disconnect', function() {
    console.log('Perdimos conexion al servidor');
})

// Enviar información
socket.emit('enviarMensaje', {
    message: 'Hola Mundo'
}, function(res) {
    console.log(res)
})

// Escuchar información
socket.on('enviarMensaje', function(message){
    console.log('SERVIDOR: ', message)
})
