const socketIo = require('socket.io');

module.exports = function(server) {
    const io = socketIo(server, {
        cors: {
            origin: 'http://localhost:8080', // Cambia esto a tu dominio correcto
            methods: ['GET', 'POST'],
            credentials: true,
        }
    });
    
    return io
};