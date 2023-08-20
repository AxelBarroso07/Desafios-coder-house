const express = require('express')
const http = require('http');
const app = express()
const path = require('path')
const server = http.createServer(app);
const socketConfig = require('./socket');
// Configuración de Socket.IO
const io = socketConfig(server);
const filePath= './products.json'

const {engine} = require('express-handlebars')
const productRouter = require('./routes/productRouter')
const cartRoutes = require('./routes/cartRouter')
const viewRoutes = require('./routes/viewRoutes')

const ProductManager = require('./application/productManagerSingleton')
const productManager = ProductManager({streaming : io, filePath});


/**
 * Middlewares
 */
app.use(express.json())
app.use(productRouter(productManager))
app.use(cartRoutes())
app.use(viewRoutes())



app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'));


// Iniciar el servidor en puertos separados
const apiPort = 8080;
const socketPort = 4000;

app.listen(apiPort, () => {
    console.log(`API de productos en http://localhost:${apiPort}`);
});

server.listen(socketPort, () => {
    console.log(`Servidor de sockets en http://localhost:${socketPort}`);
});




